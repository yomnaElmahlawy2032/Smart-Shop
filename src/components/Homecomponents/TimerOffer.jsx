import React from 'react'
//import { useTimer } from 'react-timer-hook';
import pic9 from '../../imgs/page1/c1 1.png'
import pic10 from '../../imgs/page1/c3.png'
import Countdown from 'react-countdown';
const TimerOffer = () => {
    return (
        <section className='timer'>
        {/*text*/}
        <div className='text2'>
            {/*photos*/}
            <div className='photos'>
                    <div className='boys'> <img src={pic9} alt='boy'/> </div>
                    <div className='girls'> <img src={pic10} alt='girl'/> </div>
                </div>
                <div className='text3'>
                <h3>اكبر خصم علي الاطلاق</h3>
                <p className='p2'>احدث ملابس الاطفال</p>
                <div className='time1'>
                <Countdown date={Date.now() + 60000} /> {/* 60 seconds countdown */}
                </div>
                
                {/* <div className='time1'>
                    <p className='num2'>00</p>
                    <p className='num1'>00</p>
                    <p className='num1'>00</p>
                    <p className='num1'>00</p>
                </div> */}
                <div className='time2'>
                    <p className='num2'>ثانية</p> 
                    <p className='num1'>دقيقة</p>
                    <p className='num1'>ساعة</p>
                    <p className='num1'>يوم</p>
                </div>
                <div className='link1'>
                    <button>تسوق الان</button>
                </div>
                </div>
            </div>
        
        </section>
    )
}

export default TimerOffer;
