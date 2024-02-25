import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
//icons 
import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";

//imgs
import ico from '../../imgs/page2/iconCmd.jpg'
import slideImg1 from '../../imgs/page2/Rectangle 3677(2).png'
import slideImg2 from '../../imgs/page2/Rectangle 3677(4).png';
import slideImg3 from '../../imgs/page2/Rectangle 3677(2).png'
import slideImg4 from '../../imgs/page2/Rectangle 3677(2).png'
import slideImg5 from '../../imgs/page2/Rectangle 3677(4).png';
import slideImg6 from '../../imgs/page2/Rectangle 3677(2).png'
import slideImg7 from '../../imgs/page2/Rectangle 3677(2).png'
import slideImg8 from '../../imgs/page2/Rectangle 3677(4).png';
import slideImg9 from '../../imgs/page2/Rectangle 3677(2).png'
import vectoria from '../../imgs/page2/Vector.svg' 
import color1 from "../../imgs/page2/Ellipse 195.svg"
import color2 from "../../imgs/page2/Ellipse 197.svg"
import color3 from "../../imgs/page2/Ellipse 198.svg"
import color4 from "../../imgs/page2/Ellipse 199.svg"
import color5 from "../../imgs/page2/Ellipse 200.svg"
import rectangle1 from "../../imgs/page2/Rectangle 3708.png"
import rectangle2 from "../../imgs/page2/Rectangle 3708(1).png"
import rectangle3 from "../../imgs/page2/Rectangle 3708(2).png"

const FilterProduct = () =>{
  const [showLink1 , setShowLink1] = useState(false);
  const [showLink2 , setShowLink2] = useState(false);
  const [showLink3 , setShowLink3] = useState(false);
  const [showLink4 , setShowLink4] = useState(false);
  const [showLink5 , setShowLink5] = useState(false);
  const [showLink6 , setShowLink6] = useState(false);
  const [showLink7 , setShowLink7] = useState(false);
  const [showLink8 , setShowLink8] = useState(false);
  const [showLink9 , setShowLink9] = useState(false);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <>

        <section className='filterProducts'> {/*main section*/}
            <section className='filterPro'>{/*filter and products*/}
            <section className='filter'> {/*filter*/}
            {/*filter*/}
                <div className='select'>
                <select>
                    <option value='الاقل سعرا'>الاقل سعرا</option>
                    <option value='البرندات'>البرندات</option>
                    <option value='المنتجات'>المنتجات</option>
                    <option value='الاكثر شهرة'>الاكثر شهرة</option>
                </select>
                <p className='t5'> ترتيب حسب </p>
                </div>
            {/*view*/}
            <div className='view'>
            <p>30</p>
            <p>24</p>
            <p>18</p>
            <p>12</p>
            <p>6</p>
            <p className='t6 '> مشاهدة </p>
            </div>
            {/*icon*/}
            <div className='ico'>
            {/*lines*/}
              <div className='line'>
                <p className='line1'></p>
                <p className='line2'></p>
              </div>
            {/*img*/}
              <img src={ico} alt='icon'/>
              <p className='t7'> عرض </p>
            </div>
            </section> 
            {/*end of section(filter)*/}

            {/*swiper*/}
            <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        >
        
        <SwiperSlide>
          {/*section (products)*/}
          <section className='productss'>
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink1 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}

            </SwiperSlide> 

        <SwiperSlide>
            {/*section (products)*/}
          <section className='productss'>
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink1 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}
        </SwiperSlide>
        <SwiperSlide>{/*section (products)*/}
          <section className='productss'>
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink1 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}</SwiperSlide>
        <SwiperSlide>{/*section (products)*/}
          <section className='productss'>
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink1 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
            <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
            </div>
            {/*link*/}
            <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
            {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
            {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

            </section>{/*end of product*/}
            </section> {/*end of productss*/}</SwiperSlide>
        </Swiper>

            </section>{/*end of flterPro*/}

            <section className='side'> {/* Contianeer Section */}
    <div className='categories'>

    <div className='D1'>
        <h1>الفئات</h1>
        <img src={vectoria} alt='icon' />
    </div>

    <div className='D2'>
        <p className='plus'>+</p>
        <p>الاكسسوارات</p>
    </div>

    <div className='D3'>
        <p className='plus'>+</p>
        <p>ملابس</p>
    </div>

    <div className='D4'>
        <p>الالكترونيات</p>
    </div>


       <div className='D5'>
       <p className='plus'>+</p>
       <p>الاثاث</p>
       
       </div>


       <div className='D6'>
       <p>الاحذية</p>
       
       </div>


       <div className='D7'>
       <p className='plus'>+</p>
       <p>المجوهرات</p>
     
       </div>



       <div className='D8'>
       <p className='plus'>+</p>
       <p>اخري</p>
     
       </div>
       
       
       </div>


 

       <div className='priceSelector'>
       <div className='priceD1'>
       <h1>السعر </h1>
       <img src={vectoria} alt='icon' />
       </div>

       <div className='handleInput'>

     <div className='RC'>
     <p >500 رس</p>
     <p >70 رس</p>
    
    </div>
    
      <div className='input'>
      <input id="fromSlider" type="range" value="10" min="0" max="100"/>
      <input id="toSlider" type="range" value="40" min="0" max="100"/>
      </div>
   

   <div className='Egprices'>
   <p className='EgPrice2'>1000 ج.م </p>
   <p className='EgPrice1'>10 ج.م</p>
  
   </div>
       </div>


       </div>


       <div className='HandleSize'>
       
       <div className='sizeDiv'>
       <h1>المقاس</h1>
       <img src={vectoria} alt='icon' />
       </div>
       

       <div className='sizeSide'>
              <p>XL</p>
              <p>L</p>
              <p>M</p>
              <p>S</p>
           
          </div>
          
       </div>
       <div className='color'>
      <div className='TextColor'>
      <h1>اللون</h1>
      <img src={vectoria} alt='icon' />
      </div>
      <div className='imgs'>
      <img src={color5} alt=''/>
      <img src={color4} alt=''/>
      <img src={color3} alt=''/>
      <img src={color2} alt=''/>
      <img src={color1} alt=''/>

      </div>
       </div>

       <div className='LogoFProd'>
       <div className='textLogo'>
       <h1>العلامه التجاريه</h1>
       <img src={vectoria} alt='icon' />
       </div>
       <div className='textLogo2'>
       <p>سوني</p>
       <p>لينوفو</p>
       <p>جونسون&هاندسون</p>
       <p>ابل</p>
       <p>جوجل</p>
       <p>سامسونج</p>
       </div>
       </div>



       <div className='special'>
       <div className='koko'>
       <h1>عناصر مميزة</h1>
       <img src={vectoria} alt='icon' />
       </div>


       <div className='productI'>
      
       <div className='hintAside'>
       <p>فستان ازرق عصري
       للسيدات</p>
       <h3>800 ج.م</h3>
       </div>

       <div className='camera'>
       <img src={rectangle1} alt='product'/>
       </div>

       </div>

       <div className='productI'>
      
       <div className='hintAside'>
       <p>فستان ازرق عصري
       للسيدات</p>
       <h3>800 ج.م</h3>
       </div>

       <div className='camera'>
       <img src={rectangle2} alt='product'/>
       </div>

       </div>

       <div className='productI'>
      
       <div className='hintAside'>
       <p>فستان ازرق عصري
       للسيدات</p>
       <h3>800 ج.م</h3>
       </div>

       <div className='camera'>
       <img src={rectangle3} alt='product'/>
       </div>

       </div>


       </div>
      </section> {/* Contianeer Section */}
      </section>{/*lists*/}
        
    </>
  )
}

export default FilterProduct