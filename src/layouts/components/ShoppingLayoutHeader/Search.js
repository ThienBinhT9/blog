import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './ShoppingLayoutHeader.module.scss'
import Button from "../../../components/Button";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles)


function Search() {

    const quantityProduct = useSelector(state => state.product.cart)

    return ( 
        <div className={cx('search')}>
            <div className={cx('box-search')}>
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder='SEARCH'/>
            </div>
            <div className={cx('box-cart')}>
                <Button to='/cart' className={cx('icon-cart')}>
                    <FontAwesomeIcon icon={faShoppingCart} />  
                    <div className={cx('quantity')}>{quantityProduct.length}</div>
                </Button>  
            </div>
        </div>
     );
}

export default Search;