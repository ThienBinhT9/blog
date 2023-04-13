import classNames from "classnames/bind";

import styles from './NavMain.module.scss'
import Button from "../Button";

const cx = classNames.bind(styles)

function SubNav({item}) {
    const items = item.data
    return ( 
        <div className={cx('subnav')}>
            {items &&
                items.map((i,index) => {
                    return (
                        <Button
                            key={index}
                            to={i.path}
                            iconRight={i.icon}
                            className={cx('subnavItem')}
                        >
                            {i.display}
                        </Button>
                    )
                })
            }
        </div>
    );
}



export default SubNav;