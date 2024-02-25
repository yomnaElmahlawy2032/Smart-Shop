import React from 'react'
import "./Footer.scss"
import imgFooter1 from "../../imgs/page1/Component.png"
import imgFooter2 from "../../imgs/page1/Youtube.png"
import imgFooter3 from "../../imgs/page1/Facebook - Original.png"
import imgFooter4 from "../../imgs/page1/Twitter.png"



const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Link'>
      <button className='btnFooter'>اتصل بنا</button>
    
    <button className='btnFooter'>المدونه</button>
    
    <button className='btnFooter'>الشروط و الاحكام </button>
    
    <button className='btnFooter'>نبذة عن</button>
    
    <button className='btnFooter'>الخدمات</button>
    
    <button className='btnFooter'>المنتجات</button>
    
    <button className='btnFooter'>الرئيسيه</button>

      </div>

      <div className='imgFooter'>
        <img src={imgFooter1} alt="" />

        <img src={imgFooter2} alt="" />

        <img src={imgFooter3} alt="" />

        <img src={imgFooter4} alt="" />
      </div>

      <div className='h6'>
        <h6>ابق علي تواصل</h6>
      </div>

      <div className='p'>
        <p>جميع حقوق النشر محفوظه لشركه سمارت كود</p>
      </div>
    </div>
  )
}

export default Footer