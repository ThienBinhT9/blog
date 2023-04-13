import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './ProductCard.module.scss'
import numberWithCommans from "../../utils/numberWithCommans";
import Button from "../Button";

const cx = classNames.bind(styles)


function ProductCard({item}) {
    

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{backgroundImage:`url(${item.images[0]})`}}>
                <Button className={cx('btn-add-product')} to={`/shop/${item.slug}`}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>ADD TO CART</span>
                </Button>
            </div>
            <div className={cx('info')}>
                <h3 className={cx('product__title')}>{item.title}</h3>
                <p className={cx('product__price')}>{numberWithCommans(item.price)} VNĐ</p>
                <Button 
                    className={cx('btn-buynow')}
                    to={`/shop/${item.slug}`}
                >
                    Xem chi tiết
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;