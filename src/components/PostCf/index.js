import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './PostCf.module.scss'

const cx = classNames.bind(styles)

function PostCf({item}) {
    return ( 
        <Link to={item.path} className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={item.img} alt=""/>
            </div>
            <div className={cx('info')}>
                <h3>{item.title}</h3>
                <div className={cx('typeAndDate')}>
                    <Link to={`/category/${item.pertain}`}>{item.pertain}</Link>
                    <span>{item.date}</span>
                </div>
            </div>
        </Link>
     );
}

export default PostCf;