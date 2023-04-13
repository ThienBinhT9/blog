import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { useState,useEffect } from "react";

import styles from './Slide.module.scss'
import slides from '../../assets/fakeData/slides'
import Button from '../Button'
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

function Slides() {

    const [maxscroll,setMaxscroll] = useState(false)

    useEffect(() => {
        const handlScroll = () => {
            if(document.body.scrollTop > 282 || document.documentElement.scrollTop > 282){
                setMaxscroll(true)
            }
            else{
                setMaxscroll(false)
            }
        }
        window.addEventListener('scroll',handlScroll)

        return () => window.removeEventListener('scroll',handlScroll)
    },[])

    return ( 
        <div className={cx('slides',{maxscroll:maxscroll})}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay:5000}}
            >
                {
                    slides.map((item,index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                {({isActive}) => (
                                    <SlideItem item={item} className={cx({active:isActive})}/>
                                )}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

const SlideItem = ({item,className}) => {
    return(
        <div className={cx('item',{[className]:className})}>
            <div className={cx('background')} style={{backgroundImage:`url(${item.urlImage})`}}>
            </div>
            <div className={cx('info')}>
                <Link to={`/category/${item.pertain}`} className={cx('pertain')}>{item.pertain}</Link>
                <h3 className={cx('title')}>{item.title}</h3>
                <Button to={`/blog/${item.query}`} className={cx('btn')}>CONTINUE READING</Button>
            </div>
        </div>
    )
}

export default Slides;