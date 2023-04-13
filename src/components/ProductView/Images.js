import { memo } from "react";
import classNames from "classnames/bind";

import Row from "../Row";
import Col from "../Col";
import styles from './ProductView.module.scss'

const cx = classNames.bind(styles)

function Images({setActiveColor,activeColor,item}) {
    return ( 
        <>
        <Col l={2} m={'none'} s={'none'}>
            <div className={cx('imgs')}>
                <Row>
                    {
                        item.images.map((img,index) => {
                            return (
                                <Col l={12} key={index}>
                                    <div className={cx('img',{activeImg:activeColor === index})} style={{backgroundImage:`url(${img})`}} key={index} onClick={() => setActiveColor(index)}></div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </Col>
        <Col l={6} m={6} s={12}>
            <div className={cx('img-main')} style={{backgroundImage:`url(${item.images[activeColor]})`}}>
                <div className={cx('countImg')}>{activeColor + 1}/{item.images.length}</div>
            </div>
        </Col>
        </>
     );
}

export default memo(Images);