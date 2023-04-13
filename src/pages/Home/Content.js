import classNames from 'classnames/bind'

import ListPost from './ListPost'
import Row from '../../components/Row'
import Col from '../../components/Col'
import styles from './Home.module.scss'
import Grid from '../../components/Grid'
import TrendingPost from '../../components/TrendingPost'
import Contact from '../../components/Contact'

const cx = classNames.bind(styles)

function Content() {
    return ( 
        <div className={cx('body')}>
            <Grid>
                <Row>
                    <Col l={8}>
                        <div className={cx('content')}>
                            <TrendingPost showMore showAction/>
                            <ListPost />
                        </div>
                    </Col>
                    <Col l={4}>
                        <Contact />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Content;