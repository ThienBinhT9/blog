import classNames from "classnames/bind";

import styles from './ItemPost.module.scss'
import CategoryType from "../CategoryType";
import Button from "../Button";

const cx = classNames.bind(styles)

function ItemPost({item}) {
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{backgroundImage:`url(${item.img})`}}></div>
            <div className={cx('body')}>
                <CategoryType type={item.pertain}/>
                <h3 className={cx('title')}>{item.title}</h3>
                <div className={cx('date')}>
                    <span>{item.date} - </span>
                    <span>3 COMMENTS</span>
                </div>
                <div className={cx('desc')}>
                    <p>{item.intro}</p>
                </div>
                <Button to={item.path} className={cx('btn')}>CONTINUE READING</Button>
            </div>
        </div>
     );
}

export default ItemPost;