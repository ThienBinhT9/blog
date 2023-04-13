import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Col from "../../components/Col";
import Row from "../../components/Row";
import styles from './Home.module.scss'
import ItemPost from "../../components/ItemPost";
import { getAllPost, getFourElement, getNextFoureElement } from "../../assets/fakeData/listPost";
import { useRef, useState } from "react";


const cx = classNames.bind(styles)

function ListPost() {
    let index = useRef(0)
    let currentpage = useRef(1)


    const [posts,setPost] = useState(getFourElement(getAllPost(),0))

    const handlPrevPage = () => {
        if(index.current === 0) return 
        currentpage.current--
        index.current -= 4
        const prevListPost = getNextFoureElement(getAllPost(),index.current)
        const arrfake = [...prevListPost]
        setPost(arrfake.splice(0,4))
    }

    const handlNextPage = () => {
        if( index.current + 4 > getAllPost().length) return
        currentpage.current++
        index.current += 4
        const nextListPosts = getNextFoureElement(getAllPost(),index.current)
        const arrfake = [...nextListPosts]
        setPost(arrfake.splice(0,4))
    }

    return ( 
        <div className={cx('listPost')} id="listPost">
            <Row>
                {
                    posts.map((item,index) => {
                        return (
                            <Col l={6} m={6} s={12} key={index} mb={70}>
                                <ItemPost item={item}/>
                            </Col>
                        )
                    })
                }
                <div className={cx('navigation')}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlPrevPage} href="#listPost"/>
                    <span>{currentpage.current}</span>
                    <FontAwesomeIcon icon={faChevronRight} onClick={handlNextPage} href="#listPost"/>
                </div>
            </Row>
        </div>
     );
}

export default ListPost;