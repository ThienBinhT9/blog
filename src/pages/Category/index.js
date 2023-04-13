import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from './Category.module.scss'
import TrendingPost from '../../components/TrendingPost'
import Grid from "../../components/Grid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Contact from '../../components/Contact'
import { getAllPost } from "../../assets/fakeData/listPost";

const cx = classNames.bind(styles)

function Category() {
    const keys = useParams()
    const [listPost,setListPost] = useState(() => {
        const listPostValid = getAllPost().filter((item) => {
            return item.pertain === keys.query
        })

        return listPostValid
    })

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('archive-head')}>
                <h4 className={cx('sub-title')}>CATEGORY</h4>
                <h3 className={cx('title')}>{keys.query}</h3>
            </div>
            <div className={cx('content')}>
                <Grid>
                    <Row>
                        <Col l={8}>
                            {
                                listPost.map((item,index) => {
                                    return (
                                        <TrendingPost 
                                            key={index}
                                            item={item}
                                            className={cx('content__postItem')}
                                            showAction
                                            showMore
                                        />
                                    )
                                })
                            }
                        </Col>
                        <Col l={4}><Contact /></Col>
                    </Row>
                </Grid>
            </div>
        </div>
     );
}

export default Category;