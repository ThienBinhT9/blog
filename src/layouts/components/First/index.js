import classNames from "classnames/bind";

import styles from './First.module.scss'
import Grid from '../../../components/Grid'
import LatePost from "./textLatestPost";
import Social from "../Social";
import MenuBars from "./MenuBars";

const cx = classNames.bind(styles)

function First() {

    return ( 
        <div className={cx('wrapper')}>
            <Grid>
                <div className={cx('container')}>
                    <MenuBars />
                    <LatePost />
                    <Social className={cx('socials')}/>
                </div>
            </Grid>
        </div>
     );
}

export default First;