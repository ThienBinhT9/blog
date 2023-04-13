import classNames from "classnames/bind";

import styles from './About.module.scss'
import Grid from "../../components/Grid";
import anthour from '../../assets/images/anthour.jpg'
import sign from '../../assets/images/sign.png'

const cx = classNames.bind(styles)

function About() {
    return ( 
        <div className={cx('wrapper')}>
            <Grid>
                <div className={cx('content')}>
                    <div className={cx('img')} style={{backgroundImage:`url(${anthour})`}}></div>
                    <div className={cx('intro')}>
                        <h2>About DoHoaiPhong</h2>
                        <p>
                           'Hề lấu :v. Mình tên là Phong, Đỗ Hoài Phong. Cũng không biết bắt đầu từ đâu nữa thôi thì mình giới thiệu một chút về bản thân mình nha. Mình sinh ra ở Bắc Ninh, từ nhỏ mình là người rất hoạt bát gặp ai cũng chào, nhưng đến hồi lớp 7 đợt đi ăn cỗ họ hàng thì vô tình bị đổ nồi canh nóng lên người rồi chả biết sao từ lúc đó mình ít nói đi hẳn, ít giao tiếp và không đi trốn đi chơi như hồi trước vẫn hay làm. Rồi từ lúc đó chỉ cắm mặt ở trong phòng chơi game, rồi cứ thế cứ thế.... Bây giờ mình đã là anh chàng sinh viên năm 2 chả mấy chốc đâu rồi ra trường rồi đi làm rồi cưới vợ và có gia đình nhỏ của riêng mình hihi à mình học tại Đại học Công Nghiệp Hà Nội nhé. Mình thấy từ hồi mình bắt đầu cuộc sống đại học đến nay thì tính cách lẫn suy nghĩ của mình đã thay đổi rất nhiều, tự đi xét nghiệm, bệnh viện một mình, đi đến những nơi mình chưa bao giờ đến một mình ... và mình nghĩ những điều đấy là theo hướng tích cực cho bản thân, trải nghiệm được nhiều thứ mới mẻ có vui, có buồn, có những kỉ niệm mà không lưu giữ bằng những tấm ảnh hay video mà chỉ trong suy nghĩ. '
                        </p>
                        <div className={cx('sign')}>
                            <img src={sign} alt=""/>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default About;