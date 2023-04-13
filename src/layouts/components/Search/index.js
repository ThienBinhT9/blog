import { memo, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Search.module.scss'
import Modal from '../../../components/Modal'
import ModalContent from '../../../components/ModalContent'

const cx = classNames.bind(styles)

function Search() {
    const [showModal,setShowModal] = useState(false)
    const [query,setQuery] = useState('')

    const handlShowModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        const handlkeydown = (e) => {
            if(e.keyCode === 27){
                setShowModal(false)
            }else if(e.keyCode === 13){
                //call API khi ấn Enter
            }
        }
        window.addEventListener('keydown',handlkeydown)

        return () => window.removeEventListener('keydown',handlkeydown)
    },[query])

    return (
        <div className={cx('search')}>
            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} onClick={handlShowModal} />
            {showModal &&
            (<Modal>
                <ModalContent type='center' onClose={closeModal} className={cx('modalContent')}>
                    <div className={cx('content')}>
                        <input value={query} className={cx('input')} placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
                        <span className={cx('desc')}>Type above and press Enter to search. Press Esc to cancel.</span>
                    </div>
                </ModalContent>
            </Modal>
            )}
        </div>
    );
}

export default memo(Search);