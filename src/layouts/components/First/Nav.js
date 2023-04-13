import { useState } from "react";
import classNames from "classnames/bind";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './First.module.scss'
import Button from "../../../components/Button";
import logo from '../../../assets/images/main-logo.png'
import navHeader from "../../../assets/fakeData/navHeader";

const cx = classNames.bind(styles)

function Nav() {
    
    const [data,setData] = useState([{data:navHeader}])
    const currentNav = data[data.length - 1]

    const handlClick = (e,isParrent,children) => {
        if(e.target.querySelector('svg')){

        }
        else{
            e.preventDefault()
            if(isParrent){
                const newList = [...data]
                newList.push(children)
                setData(newList)
            }
        }
    }

    const handlBackNav = () => {
        const newList = [...data]
        newList.pop()
        setData(newList)
    }

    const renderItemNav = () => {
        return currentNav.data.map((item,index) => {
            const isParrent = !!item.children
            return (
                <Button  
                    key={index}
                    to={item.path} 
                    iconRight={item.icon} 
                    className={cx('navItem')}
                    onClick={(e) => handlClick(e,isParrent,item.children)}
                >
                    {item.display}
                </Button>
            )
        })
    }

    

    return ( 
        <div className={cx('NavBars')}>
            <div className={cx('logo')}>
                <img src={logo} alt=""/>
            </div>
            {data.length > 1 &&
                <div className={cx('headerNav')}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlBackNav} />
                    <span onClick={handlBackNav}>BACK</span>
                    <p>{currentNav.display || null}</p>
                </div>
            }
            <div className={cx('NavBars__content')}>
                {renderItemNav()}
            </div>
        </div>
     );
}

export default Nav;