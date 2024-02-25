import React from 'react'
import { Link } from 'react-router-dom'
const Head = () => {
    return (
        <section className='head'>
            <div className='text5'>
            <h1> تسوق أحدث المنتجات العصرية </h1>
            <div className='t8'>
            <Link to='/TrendyProducts' className='t9'> فستان ازرق عصري </Link>
            <p> / </p>
            <Link to='/TrendyProducts' className='t9'> المنتجات </Link>
            <p> / </p>
            <Link to='/' className='t9'> الرئيسية </Link>
            
            </div>
            </div>
        </section>
    )
}

export default Head
