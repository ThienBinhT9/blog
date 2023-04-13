import product_01_image_01 from '../images/products/product-01-img-01.jpg'
import product_01_image_02 from '../images/products/product-01-img-02.jpg'
import product_01_image_03 from '../images/products/product-01-img-03.jpg'
import product_01_image_04 from '../images/products/product-01-img-04.jpg'
import product_02_image_01 from '../images/products/product-02-img-01.jpg'
import product_02_image_02 from '../images/products/product-02-img-02.jpg'
import product_02_image_03 from '../images/products/product-02-img-03.jpg'
import product_03_image_01 from '../images/products/product-03-img-01.jpg'
import product_03_image_02 from '../images/products/product-03-img-02.jpg'
import product_03_image_03 from '../images/products/product-03-img-03.jpg'
import product_04_image_01 from '../images/products/product-04-img-01.jpg'
import product_04_image_02 from '../images/products/product-04-img-02.jpg'
import product_04_image_03 from '../images/products/product-04-img-03.jpg'
import product_05_image_01 from '../images/products/product-05-img-01.jpg'
import product_05_image_02 from '../images/products/product-05-img-02.jpg'
import product_05_image_03 from '../images/products/product-05-img-03.jpg'
import product_06_image_01 from '../images/products/product-06-img-01.jpg'
import product_06_image_02 from '../images/products/product-06-img-02.jpg'
import product_06_image_03 from '../images/products/product-06-img-03.jpg'
import product_06_image_04 from '../images/products/product-06-img-04.jpg'
import product_07_image_01 from '../images/products/product-07-img-01.jpg'
import product_07_image_02 from '../images/products/product-07-img-02.jpg'
import product_07_image_03 from '../images/products/product-07-img-03.jpg'
import product_08_image_01 from '../images/products/product-08-img-01.jpg'
import product_08_image_02 from '../images/products/product-08-img-02.jpg'
import product_09_image_01 from '../images/products/product-09-img-01.jpg'
import product_09_image_02 from '../images/products/product-09-img-02.jpg'
import product_09_image_03 from '../images/products/product-09-img-03.jpg'
import product_09_image_04 from '../images/products/product-09-img-04.jpg'
import product_09_image_05 from '../images/products/product-09-img-05.jpg'
import product_09_image_06 from '../images/products/product-09-img-06.jpg'
import product_10_image_01 from '../images/products/product-10-img-01.jpg'
import product_10_image_02 from '../images/products/product-10-img-02.jpg'
import product_10_image_03 from '../images/products/product-10-img-03.jpg'
import product_10_image_04 from '../images/products/product-10-img-04.jpg'
import product_10_image_05 from '../images/products/product-10-img-05.jpg'
import product_10_image_06 from '../images/products/product-10-img-06.jpg'
import product_11_image_01 from '../images/products/product-11-img-01.jpg'
import product_11_image_02 from '../images/products/product-11-img-02.jpg'
import product_11_image_03 from '../images/products/product-11-img-03.jpg'
import product_11_image_04 from '../images/products/product-11-img-04.jpg'



const products = [
    {
        title:"Áo Phông Basic",
        price:'79000',
        categorySlug:'ao-phong',
        images:[product_01_image_01,product_01_image_02,product_01_image_03,product_01_image_04],
        colors:['white','black','pink','blue'],
        slug:'ao-phong-01',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Quần Jean ống đứng Nữ',
        price:'290000',
        categorySlug:'quan-jeans',
        images:[product_02_image_01,product_02_image_02,product_02_image_03],
        colors:['blue','grey','white'],
        slug:'quan-jean-01',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Quần Jean ống đứng Nam',
        price:'490000',
        categorySlug:'quan-jeans',
        images:[product_03_image_01,product_03_image_02,product_03_image_03],
        colors:['blue','gray','black'],
        slug:'quan-jean-02',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Váy Vai Phồng',
        price:'300000',
        categorySlug:'vay',
        images:[product_04_image_01,product_04_image_02,product_04_image_03],
        colors:['brown','red','black'],
        slug:'vay-vai-phong',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Sweater Kẻ Xọc',
        price:'200000',
        categorySlug:'sweater-ke-soc',
        images:[product_05_image_01,product_05_image_02,product_05_image_03],
        colors:['black','grey','red'],
        slug:'sweater-ke-soc',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Áo Cardigan dài tay',
        price:'150000',
        categorySlug:'ao-cardigan',
        images:[product_06_image_01,product_06_image_02,product_06_image_03,product_06_image_04],
        colors:['white','yellow','blue','brown'],
        slug:'cardigan-dai-tay',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Váy Công chúa cổ yếm',
        price:'1700000',
        categorySlug:'vay',
        images:[product_07_image_01,product_07_image_02,product_07_image_03],
        colors:['green','pink','white'],
        slug:'vay-cong-chua-co-yem',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Áo khoác jean nam',
        price:'1700000',
        categorySlug:'ao-khoac',
        images:[product_08_image_01,product_08_image_02],
        colors:['blue','black'],
        slug:'ao-khoac-jean-nam',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:"Vans Men's Sk8-Low",
        price:'220000',
        categorySlug:'giay',
        images:[product_09_image_01,product_09_image_02,product_09_image_03,product_09_image_04,product_09_image_05,product_09_image_06],
        colors:['black','blue','white','green','pink','grey'],
        slug:'vans-men',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Converse 1970s',
        price:'220000',
        categorySlug:'giay',
        images:[product_10_image_01,product_10_image_02,product_10_image_03,product_10_image_04,product_10_image_05,product_10_image_06],
        colors:['white','black','green','blue','yellow','brown'],
        slug:'converse-1970s',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
    {
        title:'Áo Polo oversize Hàn Quốc',
        price:'100000',
        categorySlug:'ao-phong',
        images:[product_11_image_01,product_11_image_02,product_11_image_03,product_11_image_04],
        colors:['blue','green','black','white'],
        slug:'ao-polo-oversize-han-quoc',
        size:['s','m','l','xl','xxl'],
        descriptions:''
    },
]

const getAllProduct = () => {
    return products
}

const getProducts = (n) => {
    const listProduct = [...products]
    const max = listProduct.length - n
    const start = Math.floor(Math.random() * max)
    return listProduct.slice(start,start + n)
}

const getProductBySlug = (slug) => {
    return products.find(e => e.slug === slug)
}

const productData = {
    getAllProduct,
    getProducts,
    getProductBySlug
}

export default productData

