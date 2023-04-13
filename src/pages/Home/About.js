import classNames from "classnames/bind";

import styles from './Home.module.scss'
import Grid from "../../components/Grid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
const abouts = [
    {
        title:'Lifestyle',
        path:'/category/lifestyle',
        urlImage:'https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/05/photo-1455225761879-2ed774963809-2048x1365.jpg'
    },
    {
        title:'About me',
        path:'/aboutme',
        urlImage:'https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/05/photo-1470376619031-a6791e534bf0-scaled-1536x1024.jpg'
    },
    {
        title:'Instagram',
        path:'https://www.instagram.com/pongcoat_3/',
        urlImage:'https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/05/photo-1469503938793-ef4b8efdd244.jpg'
    }
]

function About() {
    return ( 
        <div className={cx('box-about')}>
            <Grid>
                <Row>
                    {abouts.map((item,index) => {
                        return (
                            <Col l={4} m={4} s={12} key={index} mb={20}>
                                <Link className={cx('about')} to={item.path}>
                                    <img src={item.urlImage} alt=""/>
                                    <div className={cx('about__title')}>
                                        {item.title}
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Grid>
        </div>
     );
}

export default About;