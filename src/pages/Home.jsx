import React from 'react';
import Navbar from '../components/shared/Navbar';
import Slider from '../components/Homecomponents/Slider';
import Service from '../components/Homecomponents/Service';
import Offers from '../components/Homecomponents/Offers';
import Products from '../components/Homecomponents/Products';
import TimerOffer from '../components/Homecomponents/TimerOffer';
import SliderBrand from '../components/Homecomponents/SliderBrand';
import Brands from "../components/Homecomponents/Brands"
import Aside from "../components/Homecomponents/Aside"
import Footer from '../components/shared/Footer';
//scss
import "../components/HomeComScss/Service.scss"
import "../components/HomeComScss/Slider.scss"
import "../components/HomeComScss/Offers.scss"
import "../components/HomeComScss/Products.scss"
import "../components/HomeComScss/TimerOffer.scss"
import "../components/HomeComScss/SliderBrand.scss"
import "../components/HomeComScss/Brands.scss"
import "../components/HomeComScss/Aside.scss"
import "../components/shared/Footer.scss"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Service/>
      <Offers/>
      <Products/>
      <TimerOffer/>
      <SliderBrand/>
      <Brands />
      <Aside />
      <Footer/>
    </div>
  )
}

export default Home;
