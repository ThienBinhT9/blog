import classNames from "classnames/bind";

import styles from './ShoppingLayout.module.scss'
import ShoppingHeader from "../components/ShoppingLayoutHeader";


const cx = classNames.bind(styles)

function ShoppingLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <ShoppingHeader />
            <div className={cx('container')}>
                {children}
            </div>
        </div>
     );
}

export default ShoppingLayout;