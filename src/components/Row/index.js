import classNames from "classnames/bind";

import styles from './Row.module.scss'

const cx = classNames.bind(styles)

function Row({children,className}) {
    return ( 
        <div className={cx('row',{[className]:className})}>
            {children}
        </div>
    );
}

export default Row;