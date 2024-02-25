import React from 'react'
import { AiOutlineGift} from "react-icons/ai";
import mobileIcon from '../../imgs/page1/mobile.svg'
import walletIcon from '../../imgs/page1/wallet _remove.svg'
import carIcon from '../../imgs/page1/Group 8955.png'

const Service = () => {
    return (
        <section className='services'>
            <div className='gift'>
                    <div>
                    <p className='para1'>عروض حصرية</p>
                    <p className='para2'>خصومات كبيرة علي منتجاتنا</p>
                </div>
                <div className='icon'> <AiOutlineGift/> </div>
                
            </div>

            <div className='wallet'>
                <div>
                    <p className='para1'>استرجاع الاموال</p>
                    <p  className='para2'>استرداد امن لاموالك او الاستبدال</p>
                </div>
                <div className='icon'> <img src={walletIcon} alt='wallet'/></div>
                
            </div>
            <div className='mobile'>
            <div>
                    <p className='para1'>دعم فني</p>
                    <p  className='para2'>دعم علي مدار الساعة</p>
                </div>
                <div className='icon'> <img src={mobileIcon} alt='mobile'/> </div>

            </div>
            <div className='car'>
            <div>
                    <p className='para1'>توصيل مجاني</p>
                    <p  className='para2'>للطلبات الاعلي من 200 جنيه</p>
                </div>
                <div className='icon'> <img src={carIcon} alt='car'/> </div>
                
            </div>
        </section>
    )
}

export default Service;
