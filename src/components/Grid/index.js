import classNames from "classnames/bind";

import styles from './Grid.module.scss'

const cx = classNames.bind(styles)

function Grid({children,className}) {
    return ( 
        <div className={cx('grid','wide',{[className]:className})}>
            {children}
        </div>
     );
}

export default Grid;