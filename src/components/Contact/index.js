import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './Contact.module.scss'
import Row from "../Row";
import PostCf from "../PostCf";
import Col from "../Col";
import ItemContact from "../ItemContact";
import hana from '../../assets/images/hana.jpg'
import Social from "../../layouts/components/Social";
import Button from "../Button";
import {getAllPost,getFourElement} from '../../assets/fakeData/listPost'
import anthour from '../../assets/images/anthour.jpg'

const cx = classNames.bind(styles)
const fourElement = getFourElement(getAllPost(),0)


function Contact() {
    return ( 
        <div className={cx('contact')}>
        <Row>
            <Col l={12} m={12} s={12} mb={50}>
                <ItemContact title='about'>
                    <div className={cx('avatar')} style={{backgroundImage:`url(${anthour})`}}></div>
                    <div className={cx('desc')}>I'm Phong, i'm a goodboy . I love sea, flower and you.</div>
                    <Button to="/aboutme" className={cx('btn')}>READ MORE</Button>
                </ItemContact>
            </Col>
            <Col l={12} m={12} s={12} mb={50}>
                <ItemContact title='CONNECT & FOLLOW'>
                    <Social className={cx('aboutme__social')}/>
                </ItemContact>
            </Col>
            <Col l={12} m={12} s={12} mb={50}>
                <div className={cx('creative-post')}>
                    <img src={hana} alt=""/>
                    <div className={cx('btn-ceative')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <h3>Post</h3>
                    </div>
                </div>
            </Col>
            <Col l={12} m={12} s={12} mb={50}>
                <ItemContact title='LATEST POSTS'>
                    {
                        fourElement.map((item,index) => {
                            return (
                                <PostCf key={index} item={item}/>
                            )
                        })
                    }
                </ItemContact>
            </Col>
        </Row>
    </div>
     );
}

export default Contact;