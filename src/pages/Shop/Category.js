import classNames from "classnames/bind";

import styles from './Shop.module.scss'
import { useState } from "react";

const cx = classNames.bind(styles)
const category = [
    {
        display:'Áo phông',
        categorySlug:'ao-phong'
    },
    {
        display:'Quần Jeans',
        categorySlug:'quan-jeans'
    },
    {
        display:'Váy',
        categorySlug:'vay'
    },
    {
        display:'Áo khoác',
        categorySlug:'ao-khoac'
    },
    {
        display:'Giày',
        categorySlug:'giay'
    }
]


function Category({selectFilter}) {

    const [dataSlug,setDataSlug] = useState([])
    
    const handlChange = (categorySlug) => {
        setDataSlug(prev => {
            const isChecked = dataSlug.includes(categorySlug)

            if(isChecked){
                selectFilter('CATEGORY','')
                return []
            }
            else{
                selectFilter('CATEGORY',categorySlug)
                return [categorySlug]
            }
        })
    }

    return ( 
        <div className={cx('filter')}>
            <div className={cx('widget')}>
                <h3 className={cx('widget__title')}>DANH MỤC SẢN PHẨM</h3>
                    <div className={cx('widget__content')}>
                        <div className={cx('widget__list')}>
                            {
                                category.map((item,index) => {
                                    return (
                                        <div className={cx('widget__item')} key={index}>
                                            <input 
                                                type='checkbox'
                                                onChange={() => handlChange(item.categorySlug)}
                                                checked={dataSlug.includes(item.categorySlug)}
                                            />
                                            <label>{item.display}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default Category;