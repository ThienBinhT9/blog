import { useState } from "react";
import classNames from "classnames/bind";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import styles from './NavMain.module.scss'
import navHeader from "../../assets/fakeData/navHeader";

const cx = classNames.bind(styles)


function NavMain({className}) {
    const [active,setActive] = useState(0)

    const handlClick = (index) => {
        setActive(index)
    }

    return ( 
        <div className={cx('container',{[className]:className})}>
            {
                navHeader.map((item,index) => {
                    return (
                        <Button
                            key={index}
                            to={item.path}
                            iconRight={item.icon ? faChevronDown : null}
                            className={cx('navItem',{active:active === index})}
                            onClick={() => {handlClick(index)}}
                        >
                            {item.display}
                        </Button>
                    )
                })
            }
        </div>
    );
}

export default NavMain;