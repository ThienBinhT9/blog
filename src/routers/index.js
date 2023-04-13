import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Travel from '../pages/Travel'
import Blog from '../pages/Blog'
import Category from '../pages/Category'
import About from '../pages/About'
import ShoppingLayout from '../layouts/ShoppingLayout'
import Product from '../pages/Product'
import Story from '../pages/Story'


const publicRouter = [
    {path:'/', element:Home,},
    {path:'/cart', element:Cart, layout:ShoppingLayout},
    {path:'/shop', element:Shop, layout:ShoppingLayout},
    {path:'/travel', element:Travel},
    {path:'blog/:query', element:Blog},
    {path:'/category/:query', element:Category},
    {path:'/aboutme', element:About},
    {path:'/shop/:slug', element:Product, layout:null},
    {path:'/story', element:Story}
]

export { publicRouter }