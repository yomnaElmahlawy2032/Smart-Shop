import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import pic1 from '../../imgs/page1/Rectangle 3677.png'
import pic2 from '../../imgs/page1/Rectangle 3677 (1).png'
import pic3 from '../../imgs/page1/Rectangle 3677 (2).png'
import pic4 from '../../imgs/page1/Rectangle 3677 (3).png'
import pic5 from '../../imgs/page1/Rectangle 3677 (4).png'
import pic6 from '../../imgs/page1/Rectangle 3677 (5).png'
import pic7 from '../../imgs/page1/Rectangle 3677 (6).png'
import pic8 from '../../imgs/page1/Rectangle 3677 (7).png'

import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
const Products = () =>{
    const [showLink1 , setShowLink1] = useState(false);
    const [showLink2 , setShowLink2] = useState(false);
    const [showLink3 , setShowLink3] = useState(false);
    const [showLink4 , setShowLink4] = useState(false);
    const [showLink5 , setShowLink5] = useState(false);
    const [showLink6 , setShowLink6] = useState(false);
    const [showLink7 , setShowLink7] = useState(false);
    const [showLink8 , setShowLink8] = useState(false);
    
    return (
        <section className='prod'>
            <section className='new'>
                <Link to='/TrendyProducts'>أحدث المنتجات</Link>
            </section>
            <section className='products'>
            {/*product1*/}
            <section className='pro'>
                {/*pic1*/}
                    <div>
                        <img src={pic1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                        {showLink1 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon' > <MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product2*/}
            <section className='pro'>
                {/*pic2*/}
                    <div>
                    <img src={pic2} alt='pic2' className='img2' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                <div className='heartIcon' > <MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product3*/}
            <section className='pro'>
                {/*pic3*/}
                    <div>
                    <img src={pic3} alt='pic3' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product4*/}
            <section className='pro'>
                {/*pic4*/}
                    <div>
                    <img src={pic4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

            </section>

            {/*products2*/}
            <section className='products'>
            {/*product5*/}
            <section className='pro'>
                {/*pic5*/}
                    <div>
                        <img src={pic5} alt='pic5' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product6*/}
            <section className='pro'>
                {/*pic6*/}
                    <div>
                    <img src={pic6} alt='pic6' className='img2' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product7*/}
            <section className='pro'>
                {/*pic7*/}
                    <div>
                    <img src={pic7} alt='pic7' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

                {/*product8*/}
            <section className='pro'>
                {/*pic8*/}
                    <div>
                    <img src={pic8} alt='pic8' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                    {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
                {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                {/*div1*/}
                    <div className='div1'>
                        {/*price*/}
                        <div className='price'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='stars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='div2'>
                        {/*price*/}
                        <div className='price'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='size'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aqua'>XS</p>
                    </div>
                </section>

            </section>
        </section>
    )
}

export default Products;
