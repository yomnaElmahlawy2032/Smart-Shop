import React , {useState} from 'react'
//images
import simiImg1 from '../../imgs/page1/Rectangle 3677 (4).png';
import simiImg2 from '../../imgs/page1/Rectangle 3677 (6).png';
import simiImg3 from '../../imgs/page1/Rectangle 3677 (11).png';
import simiImg4 from '../../imgs/page1/Rectangle 3677 (12).png';
import simiImg5 from '../../imgs/page1/Rectangle 3677 (10).png';
//icons
import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
const SimilarProducts = () => {
    const [showLink1 , setShowLink1] = useState(false);
    const [showLink2 , setShowLink2] = useState(false);
    const [showLink3 , setShowLink3] = useState(false);
    const [showLink4 , setShowLink4] = useState(false);
    const [showLink5 , setShowLink5] = useState(false);
    return (
        <section className='similarProducts'>
            <div className='similar'>
            <div>
                        <img src={simiImg1} alt='pic1' onMouseOver={()=>{setShowLink1(true)}} onMouseLeave={()=>setShowLink1(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                        {showLink1 && (<button>أضف للعربة</button>)}
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
            </div>
            {/*simi2*/}
            <div className='similar'>
            <div>
                        <img src={simiImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
                    </div>
                {/*link*/}
                    <div className='link'>
                        {showLink2 && (<button>أضف للعربة</button>)}
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
            </div>
            {/*simi3*/}
            <div className='similar'>
            <div>
                        <img src={simiImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
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
            </div>

            {/*simi4*/}
            <div className='similar'>
            <div>
                        <img src={simiImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
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
            </div>

            {/*simi5*/}
            <div className='similar'>
            <div>
                        <img src={simiImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
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
            </div>

        </section>
    )
}

export default SimilarProducts