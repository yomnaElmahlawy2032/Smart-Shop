import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic11 from '../../imgs/page1/Rectangle 3677 (5).png'
import pic12 from '../../imgs/page1/Rectangle 3677 (4).png'
import pic13 from '../../imgs/page1/Rectangle 3677 (2).png'


// Import Swiper styles

import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  Navigation } from 'swiper/modules';

export default function App() {
    const [showLink1 , setShowLink1] = useState(false);
    const [showLink2 , setShowLink2] = useState(false);
    const [showLink3 , setShowLink3] = useState(false);
    const [showLink4 , setShowLink4] = useState(false);
    const [showLink5 , setShowLink5] = useState(false);
    const [showLink6 , setShowLink6] = useState(false);
    const [showLink7 , setShowLink7] = useState(false);
    const [showLink8 , setShowLink8] = useState(false);
    const [showLink9 , setShowLink9] = useState(false);
    const [showLink10 , setShowLink10] = useState(false);
    const [showLink11 , setShowLink11] = useState(false);
    const [showLink12 , setShowLink12] = useState(false);
    return (
        <>
        <section className='sliderBrands'>
        <section className='slide'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[ Navigation ]}
        className="mySwiper"
        >

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                    <img src={pic11} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink1 && (<button>أضف للعربة</button>)}                    
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                    <img src={pic12} alt='pic2' className='img2' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                         {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                    <img src={pic13} alt='pic2' className='img2' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                         {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                </section>

    </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                    <img src={pic11} alt='pic11' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                    <img src={pic12} alt='pic12' className='img2' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                    <img src={pic13} alt='pic2' className='img2' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
        </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                    <img src={pic11} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                    <img src={pic12} alt='pic2' className='img2' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                    <img src={pic13} alt='pic2' className='img2' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
                    
        </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                    <img src={pic11} alt='pic2' className='img2' onMouseOver={()=>{setShowLink10(true)}} onMouseLeave={()=>setShowLink10(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink10 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                    <img src={pic12} alt='pic2' className='img2' onMouseOver={()=>{setShowLink11(true)}} onMouseLeave={()=>setShowLink11(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink11 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                    <img src={pic13} alt='pic2' className='img2' onMouseOver={()=>{setShowLink12(true)}} onMouseLeave={()=>setShowLink12(false)}/>
                    </div>
                {/*link*/}
                    <div className='linkk'>
                    {showLink12 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
        </SwiperSlide>
        
    </Swiper>
    </section>
    {/*menu*/}
    <section className='menu'>
        <div className='h1'>
            <p>تسوق عبر الفئات</p>
        </div>
        <div className='menuLink'>
        <div className='inLink'><a href='#'>رجالي</a></div>
    <div className='inLink'><a href='#'>حريمي </a> </div>
    <div className='inLink'><a href='#'>اطفال</a></div>
    <div className='inLink'><a href='#'>اكسسوارات</a></div>
    <div className='inLinkBorder'><a href='#'>العاب</a></div>
    </div>
        
    </section>
    </section>
    </>
  );
}