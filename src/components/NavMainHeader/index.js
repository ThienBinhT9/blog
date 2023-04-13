import { memo,useState,useEffect } from "react";
import classNames from "classnames/bind";

import styles from './NavMainHeader.module.scss'

const cx = classNames.bind(styles)

function NavMainHeader({children}) {


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
        <div className={cx('wrapper',{maxscroll:maxscroll})}>
            {children}
        </div>
     );
}

export default memo(NavMainHeader);