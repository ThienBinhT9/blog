import { memo, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSeedling } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faPinterest,} from '@fortawesome/free-brands-svg-icons'

import Button from "../Button";
import styles from './TrendingPost.module.scss'

const cx = classNames.bind(styles)

function Actions() {

    const [quantityHeart,setQuantityHeart] = useState(false)

    return ( 
        <div className={cx('actions')}>
            <div className={cx('anthor')}>
                <span>by</span>
                <span>DoHoaiPhong</span>
            </div>
            <Contacts setQuantityHeart={setQuantityHeart} quantityHeart={quantityHeart}/>
        </div>
     );
}

export const Contacts = ({setQuantityHeart,quantityHeart,className}) => {
    return (
        <div className={cx('contacts',{[className]:className})}>
            <div className={cx('like')}>
                <FontAwesomeIcon icon={faHeart} className={cx({active:quantityHeart})} onClick={() => setQuantityHeart(!quantityHeart)}/>
            </div>
            <div className={cx('contact')}>
                <Button className={cx('icon')} href='https://www.facebook.com/profile.php?id=100070801670866' iconLeft={faFacebookF}/>
                <Button className={cx('icon')} to='/' iconLeft={faTwitter}/>
                <Button className={cx('icon')} href='https://www.pinterest.com/' iconLeft={faPinterest}/>
                <Button className={cx('icon')} to='/' iconLeft={faSeedling}/>
            </div>
        </div>
    )
}

export default memo(Actions);