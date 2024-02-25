import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className='header'>
            <div className='text4'>
            <h1> تسوق أحدث المنتجات العصرية </h1>
            <div className='t4'>
            <Link to='/TrendyProducts' className='t1'> المنتجات </Link>
            <p> / </p>
            <Link to='/' className='t1'> الرئيسية </Link>
            </div>
            </div>
        </section>
    )
}

export default Header