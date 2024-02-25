import React, {useState} from 'react';
import {BsCart2} from 'react-icons/bs' ;
import {AiOutlineHeart} from 'react-icons/ai' ;
import {BsPerson} from 'react-icons/bs' ;
import {AiOutlineSearch} from 'react-icons/ai'
import './Navbar.scss'
import logo from '../../imgs/page1/Vector (1).png'
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import Search from '../../pages/Search/Search';
const Navbar = () => {
  const [showCard , setShowCard] = useState(false)
  const [search , setsearch ] = useState(false)
  return (
    <div className='Navbar'>
    { search ||
        <div className='icons'>
            <div onClick={() =>setShowCard(true)}  ><BsCart2/></div>
            <div><AiOutlineHeart/></div>
            <div><BsPerson/></div>
            <div onClick={() =>setsearch(true)}>   <AiOutlineSearch/></div>
        </div>
    }
        { search ||
        <div className='text1'>
            <button className='btNav'>اتصل بنا</button>
            <button className='btNav'>المدونة</button>
            <button className='btNav'>الشروط والاحكام</button>
            <Link to='/' className='Nav'>الرئيسية</Link>
            <Link to='/TrendyProducts' className='btNav'> المنتجات </Link>
            <Link to='/Services' className='btNav'> الخدمات </Link>
            <Link to='/ShopCar'  className='btNav'> نبذة عنا </Link>
            
            
            <img src={logo} alt='logo'/>
        </div>
        }
        
    {
   
      search &&   <Search search={search} setSearch={setsearch}/>
    }
        {
      showCard && <Card showCard = {showCard} setShowCard = {setShowCard}/>
    }
    </div>
  )
}

export default Navbar
