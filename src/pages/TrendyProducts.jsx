import React from 'react'
import Navbar from '../components/shared/Navbar';
import Header from '../components/TrendyComponents/Header';
// import FilterProducts from '../components/TrendyComponents/FilterProducts';
import FilterProduct from '../components/TrendyComponents/FilterProduct';
import SimilarProducts from '../components/TrendyComponents/SimilarProducts';
import Footer from '../components/shared/Footer';

//scss
import "../components/shared/Navbar.scss";
import "../components/TrendyComScss/Header.scss";
import "../components/TrendyComScss/FilterProduct.scss";
import "../components/TrendyComScss/SimilarProducts.scss";


const TrendyProducts = () => {
    return (
    <>
        <Navbar/>
        <Header/>
        <FilterProduct/>
        <SimilarProducts/>
        <Footer/>
    </>
    )
}

export default TrendyProducts