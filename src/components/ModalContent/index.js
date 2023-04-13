import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons'

import styles from '../Modal/Modal.module.scss'

const cx = classNames.bind(styles)

function ModalContent(props) {

    const closeModal = () => {
        props.onClose()
    }

    return ( 
        <div className={cx('modal__container',{modal__center:props.type === 'center'},{modal__left:props.type === 'left'},{[props.className]:props.className})}>
            <div className={cx('close')} onClick={closeModal}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className={cx('modal__content')}>
                {props.children}
            </div>
        </div>
     );
}

export default ModalContent;