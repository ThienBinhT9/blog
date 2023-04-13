import classNames from "classnames/bind";

import styles from './Col.module.scss'

const cx = classNames.bind(styles)

function Col({children,l,m,s,mb}) {
    return ( 
        <div className={cx('col',`l-${l}`,`m-${m}`,`s-${s}`)} style={{marginBottom:`${mb}px`}}>
            {children}
        </div>
    );
}

export default Col;