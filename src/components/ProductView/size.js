import { memo } from "react";
import classNames from "classnames/bind";

import styles from './ProductView.module.scss'

const cx = classNames.bind(styles)


function Size({item,activeSize,setActiveSize}) {
    return ( 
        <>
            <h3 className={cx('title-size')}>Kích cỡ</h3>
            <div className={cx('sizes')}>
                {
                    item.size.map((size,index) => {
                        return <div className={cx('size',{activeSize:activeSize === index})} key={index} onClick={() => setActiveSize(index)}>{size}</div>
                    })
                }
            </div>
        </>
     );
}

export default memo(Size);