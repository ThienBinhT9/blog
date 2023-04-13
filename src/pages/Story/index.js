import {useState} from 'react'
import {useSelector} from 'react-redux'
import classNames from 'classnames/bind'

import styles from './Story.module.scss'
import Grid from '../../components/Grid'
import Row from '../../components/Row'
import Col from '../../components/Col'
import ItemStory from './itemStory'
import CreativeStory from './creativeStory'

const cx = classNames.bind(styles)

function Story() {
    const stories = useSelector(state => state.story.storys)

    const [showCreate,setShowCreate] = useState(false)

    return ( 
        <div className={cx('wrapper')} style={{
            backgroundColor:`#ccc`,
            backgroundImage:
            `linear-gradient(180deg, #ccc 2%, #ccc, 65%, #000 100%)`

        }}>
            <Grid>
                {
                    stories.length === 0 ?  <div className={cx('no-story')}>Không có bài viết nào ấn '+ Tạo câu chuyện' để tạo</div> : (
                        <Row>
                            {
                                stories.map((item,index) => {
                                    return (
                                        <Col l={3} m={4} s={12} key={index} mb={20}>
                                            <ItemStory item={item}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                }
            </Grid>
            <div 
                className={cx('btn-creative')}
                onClick={() => setShowCreate(true)}
            >
                + Tạo câu chuyện
            </div>
            <CreativeStory setShowCreate={setShowCreate} showCreate={showCreate}/>
        </div>
     );
}

export default Story;