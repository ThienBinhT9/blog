import { memo } from "react";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import styles from './Story.module.scss'
import { add } from "../../redux/storySlice";

const cx = classNames.bind(styles)

function CreativeStory({setShowCreate,showCreate}) {
    
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            date:'',
            title:'',
            desc:''
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Bạn phải nhập ngày chứ').matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,"Ngày viết không hợp lệ"),
            title: Yup.string().required('Bạn phải viết Tiêu đề chứ'),
            desc: Yup.string().required('Bạn phải viết nội dung chứ')
        }),
        onSubmit:(values) => {
            dispatch(add(values))
            setShowCreate(false)
            
        }, 
    })

    return ( 
        <div className={cx('form-creative-story',{showCreate:showCreate})}>
            <div className={cx('header')}>
                <p className={cx('btn-close')} onClick={() => setShowCreate(false)}>TRỞ LẠI</p>
                <p className={cx('btn-create')} onClick={formik.handleSubmit}>TẠO</p>
            </div>
            <div className={cx('body')}>
                <p>Ngày viết</p>
                <input placeholder="vd: 27/09/2003" id="date" onChange={formik.handleChange} value={formik.values.date}/>
                {formik.errors.date && <p className={cx('message-error')}>{formik.errors.date}</p>}
                <p>Tiêu đề</p>
                <textarea onChange={formik.handleChange} id="title" value={formik.values.title}></textarea>
                {formik.errors.title && <p className={cx('message-error')}>{formik.errors.title}</p>}
                <p>Nội dung câu chuyện</p>
                <textarea className={cx('text-content')} id="desc" onChange={formik.handleChange} value={formik.values.desc}></textarea>
                {formik.errors.desc && <p className={cx('message-error')}>{formik.errors.desc}</p>}
            </div>
        </div>
     );
}

export default memo(CreativeStory);