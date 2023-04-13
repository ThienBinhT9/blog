import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import styles from './Product.module.scss'
import productData from "../../assets/fakeData/products";
import Grid from "../../components/Grid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ProductCard from "../../components/ProductCard";
import ProductView from "../../components/ProductView";
import { useEffect } from "react";

const cx = classNames.bind(styles)

function Product() {
    const { slug } = useParams()
    const product = productData.getProductBySlug(slug)
    const products = productData.getProducts(4)

    useEffect(() => {
        window.scrollTo(0,0)
    },[product])
    
    return ( 
        <div className={cx('wrapper')}>
            <Grid>
                <div className={cx('overviewProduct')}>
                    <ProductView item={product}/>
                </div>
                <div className={cx('relatedProduct')}>
                    <div className={cx('text-related')}>
                        <span>RELATED PRODUCTS</span>
                    </div>
                    <Row>
                        {
                            products.map((item,index) => {
                                return (
                                    <Col key={index} l={3} m={4} s={6} mb={20}>
                                        <ProductCard item={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Grid>
        </div>
     );
}

export default Product;