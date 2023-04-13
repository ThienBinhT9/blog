import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import styles from './Cart.module.scss'
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles)

function Cart() {

    const quantityProduct = useSelector(state => state.product.cart)

    return ( 
        <Link to='/cart' className={cx('cart')}>
            <FontAwesomeIcon className={cx('icon-cart')} icon={faBagShopping} />
            <div className={cx('quantity')}>{quantityProduct.length}</div>
        </Link>
    );
}

export default Cart;