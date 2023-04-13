import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {Link} from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(props) {
    const {to,href,children,iconLeft,iconRight,className,onClick,...passProps} = props

    const _props = {
        onClick,
        ...passProps
    }
    
    let Comp = 'button'
    if(to){
        Comp = Link
        _props.to = to
    }
    else if(href){
        Comp = 'a'
        _props.href = href
    }

    const classes = cx('wrapper',{
        [className]:className
    })

    return ( 
        <Comp className={classes} {..._props}>
            {iconLeft && <FontAwesomeIcon icon={iconLeft} className={cx('icon')}/>}
            <span>{children}</span>
            {iconRight && <FontAwesomeIcon icon={iconRight} className={cx('icon')}/>}
        </Comp>
    );
}

export default Button;