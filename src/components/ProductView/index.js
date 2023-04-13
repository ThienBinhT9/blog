import { useState } from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import Col from "../Col";
import Row from "../Row";
import Size from "./size";
import Images from "./Images";
import Button from '../Button'
import Quantity from "./Quantity";
import styles from './ProductView.module.scss'
import numberWithCommans from "../../utils/numberWithCommans";
import { add, updateProduct } from "../../redux/productSlice";


const cx = classNames.bind(styles)

function ProductView({item}) {
    
    const [activeColor,setActiveColor] = useState(0)
    const [activeSize,setActiveSize] = useState(false)
    const [quantity,setQuantity] = useState(1)

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.cart)

    const handlSubmit = () => {
        let data = {}
        if(activeSize === false){
            alert('Bạn chưa chọn size')
        }
        else{
            const product = {...item}
            data = {
                title:product.title,
                color:product.colors[activeColor],
                size:product.size[activeSize],
                img:product.images[activeColor],
                price:product.price,
                quantity:quantity,
                slug:product.slug
            }
            const productIntoRedux = products.find(e => e.slug === data.slug)
            if(!!productIntoRedux){
                if(data.color === productIntoRedux.color && data.size === productIntoRedux.size){
                    data.quantity += productIntoRedux.quantity
                    dispatch(updateProduct(data))
                }
                else{
                    dispatch(add(data))
                }
            }
            else{
                dispatch(add(data))
                setActiveSize(false)
            }
            alert('Thêm vào giỏ hàng thành công')
        }
            
    }
    

    return ( 
        <div className={cx('wrapper')}>
            <Row>
                <Images item={item} activeColor={activeColor} setActiveColor={setActiveColor}/>
                <Col l={4} m={12} s={12}>
                    <div className={cx('info')}>
                        <h2 className={cx('title')}>{item.title}</h2>
                        <h3 className={cx('title-price')}>Giá</h3>
                        <p className={cx('price')}>{numberWithCommans(item.price)} VNĐ</p>
                        <h3 className={cx('title-color')}>Màu sắc</h3>
                        <div className={cx('colors')}>
                            {
                                item.colors.map((color,index) => {
                                    return <div key={index} className={cx('color',`color-${color}`,{activeColor:activeColor === index})} onClick={() => setActiveColor(index)}></div>
                                })
                            }
                        </div>
                        <Size item={item} activeSize={activeSize} setActiveSize={setActiveSize}/>
                        <Quantity quantity={quantity} setQuantity={setQuantity}/>
                        <div className={cx('box-btn')}>
                            <Button iconLeft={faCartPlus} className={cx('submit')} onClick={handlSubmit}>Thêm vào giỏ</Button>
                            <Button iconLeft={faCartArrowDown} className={cx('submit')} to='/cart'>Tới giỏ hàng</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
     );
}

export default ProductView;