import React from 'react';
import img4 from '../../imgs/page1/2-removebg-preview (1) 1.png';
import img5 from '../../imgs/page1/1-removebg-preview (1) 1.png';
//import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <section className='offers'>
        <section className='girl'>
            <div className='text'>
                <p className='para3'>خصم كبير</p>
                <p className='para4'>فساتين بناتي</p>
                <a className='btn1'>تسوق الان</a>
            </div>
            <div className='lady'>
                <img src={img4} alt='lady' />
            </div>
        </section>


        <section className='boy'>
            <div className='text'>
                <p className='para5'>ملابس الاطفال</p>
                <p className='para3'>%50 خصم</p>
                <a className='btn2'>تسوق الان</a>
            </div>
            <div>
                <img src={img5} alt='boy'/>
            </div>
        </section>
    </section>

    )
}

export default Offers;