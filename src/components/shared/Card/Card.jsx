import React from 'react'
import Counters from "../Count/Counters"
import "./Card.scss"
import img from '../../../imgs/page3/Rectangle 3675.png'
const Card = ({ showCard, setShowCard }) => {
    return (
        <div>
            <div className='card'>
            <div className='button'>


                    <button
                    className='btnCard'
                        onClick={() =>
                            showCard && setShowCard(false)}
                    >X</button>
                </div>
                <div className='salles'>
                    <div className='delete'><p>X</p></div>
                <div className='conntaineeeer'>
                <div>   <p>جاكت جلد اسود </p></div>
                <div className='xxxx'>
                <div>    <h4>500</h4> </div>
                <div> <h5>xl</h5> </div>
                </div>
                <div className='Counters'>
                <Counters />
                </div>
                </div>
                    <div> <img src={img} alt='ee' /></div>
                </div>
                
                <div className='salles'>
                    <div className='delete'><p>X</p></div>
                <div className='conntaineeeer'>
                <div>   <p>جاكت جلد اسود </p></div>
                <div className='xxxx'>
                <div>    <h4>500</h4> </div>
                <div> <h5>xl</h5> </div>
                </div>
                <div className='Counters'>
                <Counters />
                </div>
                </div>
                    <div> <img src={img} alt='ee' /></div>
                </div>


                <div className='salles'>
                <div className='delete'><p>X</p></div>
            <div className='conntaineeeer'>
            <div>   <p>جاكت جلد اسود </p></div>
            <div className='xxxx'>
            <div>    <h4>500</h4> </div>
            <div> <h5>xl</h5> </div>
            </div>
            <div className='Counters'>
            <Counters />
            </div>
            </div>
                <div> <img src={img} alt='ee' /></div>
            </div>



            <div className='salles'>
            <div className='delete'><p>X</p></div>
        <div className='conntaineeeer'>
        <div>   <p>جاكت جلد اسود </p></div>
        <div className='xxxx'>
        <div>    <h4>500</h4> </div>
        <div> <h5>xl</h5> </div>
        </div>
        <div className='Counters'>
        <Counters />
        </div>
        </div>
            <div> <img src={img} alt='ee' /></div>
        </div>



        <div className='salles'>
        <div className='delete'><p>X</p></div>
    <div className='conntaineeeer'>
    <div>   <p>جاكت جلد اسود </p></div>
    <div className='xxxx'>
    <div>    <h4>500</h4> </div>
    <div> <h5>xl</h5> </div>
    </div>
    <div className='Counters'>
    <Counters />
    </div>
    </div>
        <div> <img src={img} alt='ee' /></div>
    </div>


    <div className='salles'>
    <div className='delete'><p>X</p></div>
<div className='conntaineeeer'>
<div>   <p>جاكت جلد اسود </p></div>
<div className='xxxx'>
<div>    <h4>500</h4> </div>
<div> <h5>xl</h5> </div>
</div>
<div className='Counters'>
<Counters />
</div>
</div>
    <div> <img src={img} alt='ee' /></div>
</div>


<div className='salles'>
<div className='delete'><p>X</p></div>
<div className='conntaineeeer'>
<div>   <p>جاكت جلد اسود </p></div>
<div className='xxxx'>
<div>    <h4>500</h4> </div>
<div> <h5>xl</h5> </div>
</div>
<div className='Counters'>
<Counters />
</div>
</div>
<div> <img src={img} alt='ee' /></div>
</div>


                
                
            </div>
        </div>
    )
}

export default Card
