import classNames from "classnames/bind";

import Actions from "./Actions";
import Button from "../../components/Button";
import styles from './TrendingPost.module.scss'
import CategoryType from '../../components/CategoryType'
import { getPost } from "../../assets/fakeData/listPost";

const cx = classNames.bind(styles)

function TrendingPost({item,className,showMore,showAction}) {
    const trendingPost = item || getPost()
    return ( 
        <div className={cx('wrapper',{[className]:className})}>
            <div className={cx('header')}>
                <CategoryType type={trendingPost.pertain}/>
                <h3 className={cx('title')}>{trendingPost.title}</h3>
                <div className={cx('date')}>
                    <span>{trendingPost.date} - </span>
                    <span>3 COMMENTS</span>
                </div>
            </div>
            <div className={cx('imagePost')} style={{backgroundImage:`url(${trendingPost.img})`}}></div>
            <div className={cx('desc')}>
                <p>{trendingPost.intro}</p>
            </div>
            {showMore && <Button to={trendingPost.path} className={cx('btn')}>CONTINUE READING...</Button>}
            {showAction && <Actions />}
        </div>
     );
}

export default TrendingPost;