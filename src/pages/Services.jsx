import React from 'react'
//jsx
import Navbar from '../components/shared/Navbar';
import Head from '../components/servicesComponents/Head';
import ProductDetails from '../components/servicesComponents/ProductDetails';
import Comments from '../components/servicesComponents/Comments';
//scss
import "../components/shared/Navbar.scss";
import "../components/servicesComScss/Head.scss";
import "../components/servicesComScss/ProductDetails.scss";
import "../components/servicesComScss/Comments.scss";
const Services = () => {
  return (
    <>
        <Navbar/>
        <Head/>
        <ProductDetails/>
        <Comments/>
    </>
  )
}

export default Services
