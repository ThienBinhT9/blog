import classNames from "classnames/bind";
import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Social.module.scss'
import socials from '../../../assets/fakeData/social'

const cx = classNames.bind(styles)

function Social({className}) {
    return ( 
        <div className={cx('wrapper',{[className]:className})}>
            {
                socials.map((item,index) => {
                    return (
                        <a key={index} target="_blank" href={item.path} rel="noreferrer">
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    )
                })
            }
        </div>
    );
}

export default memo(Social);