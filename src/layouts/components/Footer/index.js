import classNames from 'classnames/bind'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss'
import Grid from '../../../components/Grid'
import Row from '../../../components/Row'
import Col from '../../../components/Col'
import hodongdo from '../../../assets/images/hodongdo.jpg'
import { getFourElement,getAllPost } from '../../../assets/fakeData/listPost'
import PostCf from '../../../components/PostCf'
import footer01 from '../../../assets/images/footer01.jpg'
import footer02 from '../../../assets/images/footer02.jpg'
import footer03 from '../../../assets/images/footer03.jpg'
import footer04 from '../../../assets/images/footer04.jpg'
import footer05 from '../../../assets/images/footer05.jpg'
import footer06 from '../../../assets/images/footer06.jpg'
import Button from '../../../components/Button'

const listImg = [
    {img:footer01},
    {img:footer02},
    {img:footer03},
    {img:footer04},
    {img:footer05},
    {img:footer06},
]

const fourPosts = getFourElement(getAllPost(),0)
const fourPostPopular = getFourElement(getAllPost(),4)

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('imgInstar')}>
                {
                    listImg.map((item,index) => {
                        return (
                            <div className={cx('img')} key={index}>
                                <img src={item.img} alt=""/>
                            </div>
                        )
                    })
                }
                <Button href="https://www.instagram.com/pongcoat_3/" target="_blank" className={cx('followme')}>
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>Follow Me!</span>
                </Button>
            </div>
            <div className={cx('boxs')}>
                <Grid>
                    <Row>
                        <Col l={4} m={12} s={12} mb={48}>
                            <div className={cx('box')}>
                                <h3 className={cx('title')}>About me</h3>
                                <div className={cx('box__content')}>
                                    <div className={cx('img')} style={{backgroundImage:`url(${hodongdo})`}}></div>
                                    <div className={cx('desc')}>Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</div>
                                </div>
                            </div>
                        </Col>
                        <Col l={4} m={12} s={12} mb={48}>
                            <div className={cx('box')}>
                                <h3 className={cx('title')}>latest posts</h3>
                                <div className={cx('box__content')}>
                                    {
                                        fourPosts.map((item,index) => {
                                            return (
                                                <PostCf key={index} item={item}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col l={4} m={12} s={12} mb={48}>
                            <div className={cx('box')}>
                                <h3 className={cx('title')}>Popular posts</h3>
                                <div className={cx('box__content')}>
                                    {
                                        fourPostPopular.map((item,index) => {
                                            return (
                                                <PostCf key={index} item={item}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className={cx('footer__contacts')}>
                <Grid>
                    <div className={cx('footer__contact')}>
                        <div className={cx('srcDesign')}>
                            2023 ThemeSpeare. Designed by <Button className={cx('srcDesign__btn')} href="https://www.facebook.com/profile.php?id=100070801670866" target="_blank">Do Hoai Phong</Button>
                        </div>
                        <div className={cx('footer__contact_icon')}>
                            <Button href="https://www.facebook.com/profile.php?id=100070801670866" target="_blank" className={cx('footer__contact_btn')} iconLeft={faFacebookF}>Facebook</Button>
                            <Button className={cx('footer__contact_btn')} iconLeft={faTwitter}>Twitter</Button>
                            <Button href="https://www.instagram.com/pongcoat_3/" target="_blank" className={cx('footer__contact_btn')} iconLeft={faInstagram}>instagram</Button>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
