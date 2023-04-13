import classNames from "classnames/bind";
import { memo } from "react";

import styles from './Story.module.scss'

const cx = classNames.bind(styles)

function ItemStory({item}) {
    return ( 
        <div className={cx('story')}>
            <span className={cx('date')}>ngày: {item.date}</span>
            <h4 className={cx('title')}>Tiêu đề: <span>{item.title}</span></h4>
            <p className={cx('content')}>{item.desc}</p>
        </div>
     );
}

export default memo(ItemStory);