import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './CategoryType.module.scss'

const cx = classNames.bind(styles)

function CategoryType({type}) {
    return ( 
        <div className={cx('wrapper')}>
            <span>In</span>
            <Link to={`category/${type.toLowerCase()}`} className={cx('type')}>{type}</Link>
        </div>
    );
}

export default CategoryType;