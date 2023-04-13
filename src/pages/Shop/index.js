import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Shop.module.scss'
import Grid from '../../components/Grid'
import Row from '../../components/Row'
import Col from '../../components/Col'
import productData from '../../assets/fakeData/products'
import ProductCard from '../../components/ProductCard'
import Category from './Category'

const cx = classNames.bind(styles)

function Shop() {

    const dataRender = productData.getAllProduct(11)
    const initFilter = {
        _category: '',
    }

    const [filter,setFilter] = useState(initFilter)
    const [productRender,setProductRender] = useState(dataRender)

    const selectFilter = (type,item) => {
        switch(type){
            case 'CATEGORY':
                return setFilter({...filter,_category:item})
            default:
                return 
        }
    }

    const updatesProduct = useCallback(() => {
        let temp = dataRender
        
        if(filter._category !== ''){
            temp = temp.filter(e => filter._category === e.categorySlug)   
        }

        setProductRender(temp)

    },[filter,dataRender])

    useEffect(() => {
       updatesProduct()
    },[updatesProduct])

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('title')}>THE SHOP</div>
            <Grid>
                <Row>
                    <Col l={3} m={12} s={12} mb={30}>
                        <Category selectFilter={selectFilter}/>
                    </Col>
                    <Col l={9} m={12} s={12}>
                        <div className={cx('listProduct')}>
                            <Row>
                                {
                                    productRender.map((item,index) => {
                                        return (
                                            <Col l={3} m={4} s={6} key={index} mb={20}>
                                               <ProductCard 
                                                    item={item}
                                               />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
     );
}

export default Shop;