import { memo } from "react";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './Cart.module.scss'
import { deleteProduct } from "../../redux/productSlice";
import numberWithCommans from "../../utils/numberWithCommans";
import { updateProduct } from "../../redux/productSlice";

const cx = classNames.bind(styles)

function ItemProduct({item,index}) {
    const dispacth = useDispatch()

    const handleMinusProduct = (item) => {
        let product = {...item}
        if(product.quantity <= 1)
            return
        else{
            product.quantity -= 1
            dispacth(updateProduct(product))
        }
    }

    const handlePlusProduct = (item) => {
        let product = {...item}
        product.quantity += 1
        dispacth(updateProduct(product))
    }

    const handleDeleteProduct = (index) => {
        dispacth(deleteProduct(index))
    }

    return ( 
        <div className={cx('item-product')}>
            <div className={cx('item-left')}>
                <div className={cx('img')}>
                    <img src={item.img} alt=''/>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>{item.title}</h4>
                    <p>Kích cỡ:<span>{item.size}</span></p>
                    <p>Màu sắc:<span>{item.color}</span></p>
                </div>
            </div>
            <div className={cx('actions')}>
                <div className={cx('actions__price')}>{numberWithCommans(item.price)} VNĐ</div>
                <div className={cx('actions__quantity')}>
                    <FontAwesomeIcon icon={faMinus} onClick={() => handleMinusProduct(item)}/>
                    <span>{item.quantity}</span>
                    <FontAwesomeIcon icon={faPlus} onClick={() => handlePlusProduct(item)}/>
                </div>
                <div className={cx('delete-product')}>
                    <FontAwesomeIcon icon={faDeleteLeft} onClick={() => {handleDeleteProduct(index)}}/>
                </div>
            </div>
        </div>
     );
}

export default memo(ItemProduct);