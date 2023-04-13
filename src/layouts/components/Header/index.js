import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import First from "../First";
import Search from "../Search";
import styles from './Header.module.scss'
import Grid from "../../../components/Grid";
import NavMain from "../../../components/NavMain";
import NavMainHeader from "../../../components/NavMainHeader";
import sign from '../../../assets/images/sign.png'
import Cart from "../Cart";
const cx = classNames.bind(styles)

function Header() {
    
    return ( 
        <div className={cx('wrapper')}>
            <First />
            <Link to='/' className={cx('logo')}>
                <img src={sign} alt=""/>
            </Link>
            <NavMainHeader>
                <Grid className={cx('grid')}>
                    <NavMain />
                    <Search />
                    <Cart />
                </Grid>
            </NavMainHeader>
        </div>
    );
}

export default Header;