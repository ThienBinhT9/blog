import classNames from "classnames/bind";

import styles from './ShoppingLayoutHeader.module.scss'
import Grid from "../../../components/Grid";
import NavMain from "../../../components/NavMain";
import MenuBars from "../First/MenuBars";
import Search from "./Search";
import logoshopping from '../../../assets/images/logoshopping.png'

const cx = classNames.bind(styles)

function ShoppingHeader() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Grid className={cx('grid','wide')}>
                    <MenuBars className={cx('customs__menuBars')}/>
                    <NavMain className={cx('customs__navMain')}/>
                    <Search />
                </Grid>
            </div>
            <div className={cx('logo')}>
                <img src={logoshopping} alt=""/>
            </div>
        </div>
     );
}

export default ShoppingHeader;