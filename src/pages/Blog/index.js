import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import styles from './Blog.module.scss'
import Contact from '../../components/Contact'
import Grid from '../../components/Grid'
import Row from '../../components/Row'
import Col from '../../components/Col'
import { getAllPost, getPost } from "../../assets/fakeData/listPost";
import TrendingPost from "../../components/TrendingPost";
import imgContent01 from '../../assets/images/blog-content-01.jpg'
import imgContent02 from '../../assets/images/blog-content-02.jpg'
import imgContent03 from '../../assets/images/blog-content-03.jpg'
import imgContent04 from '../../assets/images/blog-content-04.jpg'
import Button from "../../components/Button";
import { Contacts } from "../../components/TrendingPost/Actions";
import About from "../Home/About";

const cx = classNames.bind(styles)

function Blog() {

    const location = useLocation()
    const [post,setPost] = useState(getPost())
    
    useEffect(() => {
        window.scrollTo(0,0)
        const _post = getAllPost().find((item) => {
            return item.path === location.pathname
        })
        setPost(_post)
    },[location.pathname])

    return ( 
        <div className={cx('wrapper')}>
            <Grid>
                <Row>
                    <Col l={8} m={12} s={12}>
                        <TrendingPost showAction={false} showMore={false} item={post}/>
                        <p className={cx('desc-02')}>Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due antagonistically alongside so then more and about turgid wrote so stunningly this that much slew.</p>
                        <div className={cx('blockquote')}>
                            <p>Chúng ta chỉ đến đây thôi sao!</p>
                        </div>
                        <div className={cx('content')}>
                            <h2 className={cx('content__title')}>
                                Paris Fashion week
                            </h2>
                            <p className={cx('content__txt','txt01')}>Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went the tamarin some during obsessively into far notwithstanding aristocratic a ouch jeez goodness chameleon because piranha. More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously.</p>
                            <div className={cx('content__img','img01')} style={{backgroundImage:`url(${imgContent01})`}}></div>
                            <div className={cx('content__img','img02')} style={{backgroundImage:`url(${imgContent02})`}}></div>
                            <div className={cx('content__img','img03')} style={{backgroundImage:`url(${imgContent03})`}}></div>
                            <div className={cx('content__img','img04')} style={{backgroundImage:`url(${imgContent04})`}}></div>
                            <p className={cx('content__txt','txt02')}>Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due antagonistically alongside so then more and about turgid wrote so stunningly this that much slew.</p>
                        </div>
                        <div className={cx('footer-nav')}>
                            <div className={cx('footer-btns')}>
                                <Button className={cx('btn-nav')} to='/category/fashion'>FASHION</Button>
                                <Button className={cx('btn-nav')} to='/category/lifestyle'>LIFESTYLE</Button>
                                <Button className={cx('btn-nav')} to='/travel'>TRAVEL</Button>
                            </div>
                            <Contacts  className={cx('footer-nav__social')}/>
                        </div>
                        <div className={cx('footer-posts')}>
                            <h4 className={cx('footer-posts__title')}>
                                <span>Other</span>
                            </h4>
                            <div className={cx('footer-posts__boxs')}>
                                <About />
                            </div>
                        </div>
                    </Col>
                    <Col l={4} m={12} s={12}><Contact /></Col>
                </Row>
            </Grid>
        </div>
     );
}

export default Blog;