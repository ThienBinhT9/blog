import classNames from 'classnames/bind'

import About from './About';
import Content from './Content';
import styles from './Home.module.scss'
import Slides from '../../components/Slides';

const cx = classNames.bind(styles)


function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <Slides/>
            <About/>
            <Content />
        </div>
     );
}

export default Home;