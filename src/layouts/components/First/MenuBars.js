import { memo, useState } from "react";
import classNames from "classnames/bind";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './First.module.scss'
import Modal from "../../../components/Modal";
import ModalContent from "../../../components/ModalContent";
import NavFirstHeader from '../../components/First/Nav'

const cx = classNames.bind(styles)

function MenuBars({className}) {
    const [showNav,setShowNav] = useState(false)

    const closeModal = () => {
        setShowNav(false)
    }
    
    return ( 
        <div className={cx('menu-bars',{[className]:className})}>
            <FontAwesomeIcon className={cx('menu-bars__icon')} icon={faBars} onClick={() => {setShowNav(true)}}/>
            {showNav &&
            (<Modal>
                <ModalContent type='left' onClose={closeModal} className={cx('showModal')}>
                    <NavFirstHeader />
                </ModalContent>
            </Modal>)}
        </div>
    );
}

export default memo(MenuBars);