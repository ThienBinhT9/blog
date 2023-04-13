import classNames from "classnames/bind";

import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

function Modal(props) {
    return ( 
        <div className={cx('modal')}>
            {props.children}
        </div>
    );
}


export default Modal;