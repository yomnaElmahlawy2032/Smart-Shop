import React , {useState} from 'react'
// import imgs 
import shopImg from "../../imgs/page4/Rectangle 3705.png";
const ShoppingBasket = () => {
    const [count1, setCount1]= useState(0);
    const [count2, setCount2]= useState(0);
    const [count3, setCount3]= useState(0);
    const [count4, setCount4]= useState(0);
    //count1
    let incNum1 =()=>{
    if(count1<10)
    {
        setCount1(Number(count1)+1);
    }
    };
    let decNum1 = () => {
    if(count1>0)
    {
        setCount1(count1 - 1);
    }
    }
    let handleChange1 = (e)=>{
    setCount1(e.target.value);
    }

    //count2
    let incNum2 =()=>{
        if(count2<10)
        {
            setCount2(Number(count2)+1);
        }
        };
        let decNum2 = () => {
        if(count2>0)
        {
            setCount2(count2 - 1);
        }
        }
        let handleChange2 = (e)=>{
        setCount2(e.target.value);
        }
        //count3
        let incNum3 =()=>{
            if(count3<10)
            {
                setCount3(Number(count3)+1);
            }
            };
            let decNum3 = () => {
            if(count3>0)
            {
                setCount3(count3 - 1);
            }
            }
            let handleChange3 = (e)=>{
            setCount3(e.target.value);
            }
        //count4
        let incNum4 =()=>{
            if(count4<10)
            {
                setCount4(Number(count4)+1);
            }
            };
            let decNum4 = () => {
            if(count4>0)
            {
                setCount4(count4 - 1);
            }
            }
            let handleChange4 = (e)=>{
            setCount4(e.target.value);
            }
    return (
        <>
            <section className='BigCont'>{/*main section*/}
                <section className='cobon'>{/*cobon section // left side*/}
                    <div className='frame1'>  {/*frame1*/}
                        <h1> الكوبون </h1>
                        <p>أدخل رمز الكوبون الخاص بك إذا كان لديك واحد.</p>
                    </div> {/*end of frame1*/}

                    <div className='frame2'> {/*frame2*/}
                        <button className='btnFrame'> تأكيد الكوبون </button>
                        <input type='text' placeholder='رمز الكوبونِ'/>
                    </div> {/*end of frame2*/}

                    <div className='frame3'> {/*frame3*/}
                        <h1>ملحوظة </h1>
                        <p>اضافة ملحوظة للبائع ...</p>
                    </div>  {/*end of frame3*/}


                    <div className='frame4'>  {/*frame4*/}
                        <input type='text' placeholder='اكتب ملحوظتك هنا ...' />
                    </div> {/*end of frame4*/}


                    <div className='frame5'>  {/*frame5*/}
                        <p className='k'>6000 ج.م</p>
                        <p>المجموع الفرعي</p>

                    </div> {/*end of frame5*/}

    
                    <div className='frame5'> {/*frame5*/}
                        <p className='k'>6000 ج.م</p>
                        <p>المجموع الاجمالي</p>

                    </div> {/*end of frame5*/}
                    <div className='frameText'> الشحن والضرائب محسوبة عند الدفع </div>

                    <div className='frame6'> {/*frame6*/}
                        <button className='btnFramee'> الدفع</button>
                        <button className='btnFrame22'>تحديث السلة </button>
                    </div> {/*end of frame6*/}
                </section>  {/*end of cobon section*/}

                <section className='shopBasket'>{/*shop basket section*/}
                    <div className='textBasket'>{/*textBasket the first div*/}
                        <h1> سلة التسوق </h1>
                    </div> {/*end*/}

                    <div className='shopB'>{/*shopB the second div*/}
                        <p> المجموع </p>
                        <p> الكمية </p>
                        <p className='b2'> السعر </p>
                        <p  className='b1'> المنتج </p>
                    </div> {/*end*/}
                
                <div className='borde'></div>
                    <div className='basket'>{/*basket div the third div  flex*/}
                        <div className='total'>
                            <p className='shopPrice1'> 2500 ج.م </p>
                            <div className='counter'>  {/*counter  flex*/}
                                <button className='decrease' onClick={decNum1}>-</button>
                                <p className='elCount' onChange={handleChange1}>{count1}</p>
                                <button className='plusY' onClick={incNum1}>+</button>
                            </div> {/*end of counter*/}
                            <p className='shopPrice2'> 2500 ج.م </p>
                        </div> {/*end of total*/}
                        <div className='right'> {/*right of div contain img and text*/}
                            <div className='nextImg'> {/*nextImg  flex*/}
                                <p className='n1'> فستان ابيض عصري </p>
                                <p className='n1'> اللون: ابيض </p>
                                <p className='n1'> الوزن : 2 كيلو </p>
                            </div>{/*next img*/}
                            <img src={shopImg} alt='img'/>
                            <div className='delete'><p> x </p> </div> {/*div of delete*/}
                        </div> {/*end of right*/}
                        
                    </div>{/*end of basket*/}
                    <div className='bord'></div>
                    <div className='basket'>{/*basket div the third div  flex*/}
                        <div className='total'>
                            <p className='shopPrice1'> 2500 ج.م </p>
                            <div className='counter'>  {/*counter  flex*/}
                                <button className='decrease' onClick={decNum2}>-</button>
                                <p className='elCount' onChange={handleChange2}>{count2}</p>
                                <button className='plusY' onClick={incNum2}>+</button>
                            </div> {/*end of counter*/}
                            <p className='shopPrice2'> 2500 ج.م </p>
                        </div> {/*end of total*/}
                        <div className='right'> {/*right of div contain img and text*/}
                            <div className='nextImg'> {/*nextImg  flex*/}
                                <p className='n1'> فستان ابيض عصري </p>
                                <p className='n1'> اللون: ابيض </p>
                                <p className='n1'> الوزن : 2 كيلو </p>
                            </div>{/*next img*/}
                            <img src={shopImg} alt='img'/>
                            <div className='delete'><p> x </p> </div> {/*div of delete*/}
                        </div> {/*end of right*/}
                        
                    </div>{/*end of basket*/}
                <div className='bord'></div>
                <div className='basket'>{/*basket div the third div  flex*/}
                        <div className='total'>
                            <p className='shopPrice1'> 2500 ج.م </p>
                            <div className='counter'>  {/*counter  flex*/}
                                <button className='decrease' onClick={decNum3}>-</button>
                                <p className='elCount' onChange={handleChange3}>{count3}</p>
                                <button className='plusY' onClick={incNum3}>+</button>
                            </div> {/*end of counter*/}
                            <p className='shopPrice2'> 2500 ج.م </p>
                        </div> {/*end of total*/}
                        <div className='right'> {/*right of div contain img and text*/}
                            <div className='nextImg'> {/*nextImg  flex*/}
                                <p className='n1'> فستان ابيض عصري </p>
                                <p className='n1'> اللون: ابيض </p>
                                <p className='n1'> الوزن : 2 كيلو </p>
                            </div>{/*next img*/}
                            <img src={shopImg} alt='img'/>
                            <div className='delete'><p> x </p> </div> {/*div of delete*/}
                        </div> {/*end of right*/}
                        
                    </div>{/*end of basket*/}
                <div className='bord'></div>
                <div className='basket'>{/*basket div the third div  flex*/}
                        <div className='total'>
                            <p className='shopPrice1'> 2500 ج.م </p>
                            <div className='counter'>  {/*counter  flex*/}
                                <button className='decrease' onClick={decNum4}>-</button>
                                <p className='elCount' onChange={handleChange4}>{count4}</p>
                                <button className='plusY' onClick={incNum4}>+</button>
                            </div> {/*end of counter*/}
                            <p className='shopPrice2'> 2500 ج.م </p>
                        </div> {/*end of total*/}
                        <div className='right'> {/*right of div contain img and text*/}
                            <div className='nextImg'> {/*nextImg  flex*/}
                                <p className='n1'> فستان ابيض عصري </p>
                                <p className='n1'> اللون: ابيض </p>
                                <p className='n1'> الوزن : 2 كيلو </p>
                            </div>{/*next img*/}
                            <img src={shopImg} alt='img'/>
                            <div className='delete'><p> x </p> </div> {/*div of delete*/}
                        </div> {/*end of right*/}
                        
                    </div>{/*end of basket*/}
                    <div className='bord'></div>
                    <div className='btns'>
                        <button className='deletBasket'> مسح السلة </button>
                        <button className='continueShop'> واصل التسوق </button>
                    </div>
                    ص3
                </section>
            </section>
        </>
    )
}

export default ShoppingBasket
