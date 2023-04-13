import {useEffect, useState, memo} from 'react'
import classNames from 'classnames/bind'

import styles from './First.module.scss'

const texts = [
    {
        display:'MINIMALIST INTERIOR MAKEOVER'
    },
    {
        display:'VINTAGE BEAUTY IN DECORATIONS'
    },
    {
        display:'PROS & CONS OF BEING A MODEL'
    },
    {
        display:'MORNING COFFEE SMELLS SWEET'
    }
]
const cx = classNames.bind(styles)


function LatePost() {
    const [active,setActive] = useState(0)
    useEffect(() => {
        const timerId = setInterval(() => {
            setActive(prev => prev >= texts.length - 1 ? 0 : prev + 1)
        },9000)

        return () => clearInterval(timerId)
    },[])
    
    return ( 
        <div className={cx('latestPost')}>
            <span>LATEST POSTS :</span>
            <div className={cx('box-textLastPost')}>
                {
                    texts.map((item,index) => {
                        return (
                            <span 
                                className={cx('textLastPost',{active:active === index})} 
                                key={index}
                            >
                                {item.display}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default memo(LatePost);