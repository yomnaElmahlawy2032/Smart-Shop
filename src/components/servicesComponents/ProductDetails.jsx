import React, { useState } from 'react'
// import imgs
import ellipse1 from "../../imgs/page3/Ellipse 186.png";
import ellipse2 from "../../imgs/page3/Ellipse 187.png";
import ellipse3 from "../../imgs/page3/Ellipse 188.png";
import ellipse4 from "../../imgs/page3/Ellipse 189.png";
import social1 from  "../../imgs/page3/Component (1).png";
import social2 from "../../imgs/page3/Youtube (1).png";
import social3 from "../../imgs/page3/Facebook - Original (1).png";
import social4 from "../../imgs/page3/Twitter (1).png";
import heartFav from "../../imgs/page3/favorite.png" 
// import icons
import { RiStarSFill } from "react-icons/ri";


const ProductDetails = () => {
  //swiper img
  const imgs =[

    {
      id:0 ,
      value:"https://s3-alpha-sig.figma.com/img/9403/982f/73719290c6a765857ddb341640776c5d?Expires=1690761600&Signature=CEe7xliXsnhwuNruWGmUl6JKMUQSLWHR3oJVmZcv9dCAGWvuMz2rIV8FnpDjtzHI0kbT-bq7Tu~zYHkaqYp-uAw9e5nDAD28nCV6zM3dREjknbvgieGwHejsaUPVwboJ~opUdVrXkedZxIRqokx08Ka1AcE7KpRvFtxo7vn4cF9qf5YrRRxU1Wt9jYXnI-QOVvEw5WN8euQ8nVcKakIEfSZYqjmhL~k5CBwDUk5KvvPtWzWnMql3QiaT04XQmuhM79e8B2l9HKCVf1P7bkdtMFqp9fvTHM3vlfX9LH98pDLW8Qdn7kMDQxu6WQu~aqmYTyChShXuo3pqVSBEi61c1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
      id:1 ,
      value:"https://s3-alpha-sig.figma.com/img/e58d/9c26/d84ea266df0d7bd2214880e2d33430de?Expires=1690761600&Signature=AxCCk5Xv3L1a5-rbNXVhKbTu43XS6snCDHJ130HajQmNK-k5W6fJ~rRALoHP2uI7g~3bHxT~dM7mIVU3NZAIxRbGSMwu7rcOCOPSgHwly7pTnHYwgl5xQwDgKS2Tvd32tNB5737VsbPBmZmSP8o5ia9pKd6LRVaOA4caOwXtC3fx-VdqTxvDCkuehObdw1Ayw96h~nqeXGG3rX03i6Zt5jF1Su~0OIhivPHepeqjR8z5GSLBK9ksAjwXSSBUBewXGO9nJRZshOtiijh1had7yyBLNH4plaRXh5zUSCJE2e15wT~yUoBybXy2Minr8Epp5vm4DPsUGjk4Sa5icZGUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
      id:2 ,
      value:"https://s3-alpha-sig.figma.com/img/e6ae/1590/53a17d8347010ed317d76b9e8faa0a68?Expires=1690761600&Signature=QEFDWQXhyEiMdlBBWcf1BQRRyJNK6g04Q~5wgxMlsiGGQUCvESpqzxFX1c~QpAD5UT5bzEgSGwXe0D7n~dWYnSN-rIuQiigyPgMc91zlmwf00QAHP~naSReXTCHChYYYn3oKMO5kkvfyVXZQ~Fl0KgMuR63zSPZlGM8lhd-hdqtdjvaKZ1gPJj4det3RRDHynsFv8C0FmHOchHIYtpHF-kMETbGJdvJQh30PXEofM2E8VYE6kcEO2IZFnB5j~tb1Ai8xPxeX7TqwuQM~I~Pg4PtS29hNMXhDyB2hjJa7hzvzsNp~shFLTEe0zQIkJ1fSYOwsZhETQBe~yBwCUVXcPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
      id:3 , 
      value:"https://s3-alpha-sig.figma.com/img/c4d4/06a5/cec56ae398a8f9f37ceb6f3d7a80428c?Expires=1690761600&Signature=V5bvZSXM1lmAPCHGJ3anPwIO0KMJGReE2RYIbODJsy~mjWdCFp4Dq35ZEMUjV~KbQ0FZApMwEcDqu0xCiWzzLeJ2hss-A7x8eZlqccXmeIkHGScya7u2N5MyqWpjJ62dqTkmx9d9qYOpP7V8zRRQPLEQZXqE0Bkj3HHonkrjYqRtHCTEZLs5RoqecZkO6vCIGrsRnqoay2f60oZcN59P7STGb5Jj7nU5ah8CG7l4U7dkfUV4P6xazxB-UdYP2uhmwoynT~nMjThh6319NFBwwv7JM6TK-0xzW2DwAm94kHjWFYwzKK4BIq8NLKMhUnRYUuToFg3QyBobeLBZE-kKNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
      id:4 , 
      value:"https://s3-alpha-sig.figma.com/img/e58d/9c26/d84ea266df0d7bd2214880e2d33430de?Expires=1690761600&Signature=AxCCk5Xv3L1a5-rbNXVhKbTu43XS6snCDHJ130HajQmNK-k5W6fJ~rRALoHP2uI7g~3bHxT~dM7mIVU3NZAIxRbGSMwu7rcOCOPSgHwly7pTnHYwgl5xQwDgKS2Tvd32tNB5737VsbPBmZmSP8o5ia9pKd6LRVaOA4caOwXtC3fx-VdqTxvDCkuehObdw1Ayw96h~nqeXGG3rX03i6Zt5jF1Su~0OIhivPHepeqjR8z5GSLBK9ksAjwXSSBUBewXGO9nJRZshOtiijh1had7yyBLNH4plaRXh5zUSCJE2e15wT~yUoBybXy2Minr8Epp5vm4DPsUGjk4Sa5icZGUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    }
  ]
    const [count, setCount]= useState(0);
    let incNum =()=>{
      if(count<10)
      {
      setCount(Number(count)+1);
      }
    };
    let decNum = () => {
      if(count>0)
      {
        setCount(count - 1);
      }
    }
  let handleChange = (e)=>{
    setCount(e.target.value);
    }

     //swiper
    const [sliderData , setSliderData]= useState(imgs[0])
    const handleClick=(index)=>{
      console.log(index);
      const slider = imgs[index];
      setSliderData(slider);
    }
    return (

    <>
        <section className='productDetails'>  {/* start of main section*/}
            <section className='details'>     {/*details of products*/}
            {/*t10 h1*/}
                <div className='t10'>
                    <h1> فستان ازرق عصري </h1>
                </div>
            {/*money*/}
                <div className='money'>
                <p> 1500 ج.م </p>
                <p>-</p>
                <p className='discount'> 2000 ج.م </p>
                </div>
                {/*stars*/}
                <div className='rate'>
                    <div className='type'><p>(50)</p></div>
                    <div className='yellow'>{<RiStarSFill/>}</div>
                    <div className='yellow'>{<RiStarSFill/>}</div>
                    <div className='yellow'>{<RiStarSFill/>}</div>
                    <div className='yellow'>{<RiStarSFill/>}</div>
                    <div className='yellow'>{<RiStarSFill/>}</div>
                </div>
            {/*t11*/}
                <div className='t11'> <p>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p></div>
            
                <div className='type4'>{/** text color */}
                    <h1>اللون :</h1>
    
                </div>{/**end text color */}

                <div className='FourPics'>{/**under color pics */}
                    <img src={ellipse1} alt='COLOR' />
                    <img src={ellipse2} alt='COLOR' />
                    <img src={ellipse3} alt='COLOR' />
                    <img src={ellipse4} alt='COLOR' />
                </div>{/**end under color pics */}


                <div className='type5'>{/** text weight */}
                <h1>الوزن :</h1>
               </div>{/**end text weight */}


     <div className='sizeBox'>{/**  size box */}
        <div className='Frame'><p> 5 كيلو </p></div>
        <div className='Frame'><p> 3 كيلو </p></div>
        <div className='Frame'><p> 2 كيلو </p></div>
     </div>{/** end size box */}

            <div className='shop'> {/*shop*/}
                <div className='shopp'> {/*shopp button*/}
                    <button> اضف للسلة </button>
                </div>

                <div className='counter'>  {/*counter*/}
                    <button className='decrease' onClick={decNum}>-</button>
                    <p className='elCount' onChange={handleChange}>{count}</p>
                    <button className='plusY' onClick={incNum}>+</button>
                </div>
            </div>

                <div className='favorite'>   {/*Favorite*/}
                    <p className='addFav'> اضف للمفضلة </p>  {/*addFav*/}
                    <img src={heartFav} alt='img'/>  {/*heart Icon*/}
                    
                </div> 

                <div className='addBtn'> {/*add btn*/}
                    <button> اشتري الان </button>
                </div>

                <div className='social' >  {/*social*/}
                    <p> شارك عبر مواقع التواصل </p>
                    <div className='socialIcons'>  {/*social icons*/}
                        <img src={social1} alt='img'/>
                        <img src={social2} alt='img'/>
                        <img src={social3} alt='img'/>
                        <img src={social4} alt='img'/>
                    </div>
                </div>
            </section>

            <section className='imgSlide'>  {/*img slide (swiper)*/}
            <div className='images'>


            <img src={sliderData.value}  className='bigImg'/>
          <div className='thumpunails'>
          
          {
              imgs.map((data , i)=>
              <div className='sImg'>
                <img key={data.id} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" className='smallImgs'/>
                </div>
              )
              
            }

           </div>
            </div>
            
            </section> 
            
        
        </section>
    </>
    )
}

export default ProductDetails;
