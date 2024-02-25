import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import TrendyProducts from './pages/TrendyProducts'
import Services from './pages/Services';
import ShopCar from './pages/ShopCar';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/TrendyProducts" element={ <TrendyProducts/> }/>
                <Route path="/Services" element={ <Services/> }/>
                <Route path="/ShopCar" element={ <ShopCar/> }/>
                <Route path="/SignUp" element={ <SignUp/> }/>
                <Route path="/Login" element={ <Login/> }/>

            </Routes>
        </Router>
    )
}

export default App