import React from 'react'
import { Link } from 'react-router-dom'
const Head2 = () => {
    return (
        <section className='head2'>
            <div className='text4'>
            <h1> تسوق أحدث المنتجات العصرية </h1>
            <div className='t4'>
            <Link to='/TrendyProducts' className='t1'> السلة </Link>
            <p> / </p>
            <Link to='/' className='t1'> الرئيسية </Link>
            </div>
            </div>
        </section>
    )
}

export default Head2
