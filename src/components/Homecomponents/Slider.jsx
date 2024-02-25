import { Swiper, SwiperSlide } from 'swiper/react';
import Elipse1 from '../../imgs/page1/Ellipse 1.png'
import Elipse2 from '../../imgs/page1/Ellipse 2.png'
import Elipse3 from '../../imgs/page1/Ellipse 3.png'
import img1 from '../../imgs/page1/Rectangle 3677 (4).png'
import img2 from '../../imgs/page1/Rectangle 3677 (5).png'
import img3 from '../../imgs/page1/1-removebg-preview (1) 1.png'
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
        <section className='sliders'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >

        <SwiperSlide>
        <section className='slider'>
    <div className='pic'>
    <img src={Elipse3} alt="Logo" className='Elipse3'/>
    
    <div className='imgs'>
    <img src={Elipse2} alt="Logo" className='Elipse2'/>
    <img src={Elipse1} alt="Logo" className='Elipse1'/>
    </div>
    
    </div>
    <div className='textslider'>
    <p className='pargraph1'>براندات نسائي عالمية</p>
    <p className='pargraph2'>احدث ادوات الجمال</p>
    <p className='pargraph1'>براندات نسائي عالمية</p>
    <button className='btnnum1'>اكتشف الان </button>
    </div>
    </section>
    </SwiperSlide>

        <SwiperSlide>
        <section className='slider'>
    <div className='pic'>
    <img src={img1} alt="Logo" className='img1'/>
    </div>
    <div className='textslider'>
    <p className='pargraph1'>براندات رجالي عالمية</p>
    <p className='pargraph2'>احدث الموديلات</p>
    <p className='pargraph1'>براندات رجالي عالمية</p>
    <button className='btnnum1'>اكتشف الان </button>
    </div>
    </section>
    </SwiperSlide>

    <SwiperSlide>
    <section className='slider'>
    <div className='pic'>
    <img src={img2} alt="Logo" className='img1'/>
    </div>
    <div className='textslider'>
    <p className='pargraph1'>براندات اطفال عالمية</p>
    <p className='pargraph2'>احدث الموديلات</p>
    <p className='pargraph1'>براندات اطفال عالمية</p>
    <button className='btnnum1'>اكتشف الان </button>
    </div>
    </section>
    </SwiperSlide>

    <SwiperSlide>
    <section className='slider'>
        <div className='pic'>
        <img src={img3} alt="Logo" className='img1'/>
        </div>
        <div className='textslider'>
        <p className='pargraph1'>براندات اطفال عالمية</p>
        <p className='pargraph2'>احدث الموديلات</p>
        <p className='pargraph1'>براندات اطفال عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
    </section>
    </SwiperSlide>
        
    </Swiper>
    </section>
    </>
  );
}