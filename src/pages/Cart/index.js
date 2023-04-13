import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import Row from '../../components/Row'
import Col from '../../components/Col'
import styles from './Cart.module.scss'
import ItemProduct from './ItemProduct'
import Grid from '../../components/Grid'
import Button from '../../components/Button'
import numberWithCommans from '../../utils/numberWithCommans'

const cx = classNames.bind(styles)

function Cart() {

    const products = useSelector(state => state.product.cart)
    
    const totlePrice = useMemo(() => {
        return products.reduce((totle,current) => {return totle + parseInt(current.price * current.quantity)},0)
    },[products])
    
    

    return ( 
        <div className={cx('wrapper')}>
            <Grid>
                <Row>
                    <Col l={4} m={12} s={12}>
                        <div className={cx('control')}>
                            <div className={cx('totle-product')}>
                                <p>bạn đang có<span>{products.length}</span>sản phẩm trong giỏ hàng</p>
                            </div>
                            <div className={cx('totle-monney')}>
                                <span>Thành tiền:</span>
                                <p>{numberWithCommans(totlePrice)} VNĐ</p>
                            </div>
                            <Button className={cx('btn')} to='/'>ĐẶT HÀNG</Button>
                            <Button className={cx('btn')} to='/shop'>TIẾP TỤC MUA HÀNG</Button>
                        </div>
                    </Col>
                    <Col l={8} m={12} s={12}>
                        {
                            products.length === 0 ? <div>Không có sản phẩm nào</div> :
                            (<div className={cx('list-product')}>
                                {
                                    products.map((item,index) => {
                                        return (
                                            <ItemProduct key={index} index={index} item={item}/>
                                        )
                                    })
                                }
                        
                            </div>)
                        }
                    </Col>
                </Row>
            </Grid>
        </div>
     );
}

export default Cart;