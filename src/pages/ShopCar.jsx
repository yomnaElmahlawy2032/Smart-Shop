import React from 'react';
//import jsx
import Navbar from "../components/shared/Navbar";
import Head2 from '../components/ShopCarComponents/Head2' ;
import ShoppingBasket from '../components/ShopCarComponents/ShoppingBasket';


//import scss
import "../components/shared/Navbar.scss";
import "../components/ShopCarComScss/Head2.scss";
import "../components/ShopCarComScss/ShoppingBasket.scss";
const ShopCar = () => {
    return (
        <>
            <Navbar/>
            <Head2/>
            <ShoppingBasket/>
        </>
    )
}

export default ShopCar
