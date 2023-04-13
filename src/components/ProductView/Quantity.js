import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import styles from './ProductView.module.scss'
import { memo } from "react";

const cx = classNames.bind(styles)

function Quantity({quantity, setQuantity}) {

    return ( 
        <>
            <h3 className={cx('title-quantity')}>Số lượng</h3>
            <div className={cx('quantity')}>
                <FontAwesomeIcon icon={faMinus} onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}/>
                <span>{quantity}</span>
                <FontAwesomeIcon icon={faPlus} onClick={() => setQuantity(prev => prev + 1)} />
            </div>
        </>
     );
}

export default memo(Quantity);