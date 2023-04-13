import classNames from "classnames/bind";

import styles from './ItemContact.module.scss'

const cx = classNames.bind(styles)


function ItemContact({children,title}) {
    return ( 
        <div className={cx('aboutme')}>
            <h3 className={cx('aboutme__title')}>{title}</h3>
            <div className={cx('aboutme__content')}>
                {children}
            </div>
        </div>
     );
}

export default ItemContact;