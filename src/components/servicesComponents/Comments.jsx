import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

//import imgs
import imgComm from '../../imgs/page3/Ellipse 190.png';
const Comments = () => {
    const [data1 , setData1]=useState('');
    const [data2 , setData2]=useState('');
    const [data3 , setData3]=useState('');
    const [data4 , setData4]=useState('');
    const [data5 , setData5]=useState('');
    const [postData , setPostData] = useState('')

    const handleSumit = (e)=>{
        let userData = {data1 , data2 , data3 , data4 , data5};
        //handle api
        axios.post('http://localhost:5000/posts' , userData)
        .then(res=>{
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log("server done")
            //navigate('/users')
            })
            .catch(e=>{
                toast.error(e.message)
                console.log("التوست شغال بس الكومبيلر بيضحك معاكي")
            })
    }
    const ratingChanges = (newRating) =>{
        console.log(newRating);
        setData1(newRating);
    }

    const getData= ()=>{
        axios.get('http://localhost:5000/posts')
        .then(res=>setPostData(res.data))
        .catch(err=>toast.error(err.message))
    }

    const navigate = useNavigate()


    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <>
            <section className='options'> {/*first section*/} {/*options*/}
                <p className='rateProduct'> تقييمات المنتج </p>
                <p> معلومات اضافية </p>
                <p> الوصف </p>
            </section> {/*end of section (options)*/}

            <section className='productComments'>  {/*productComments*/}  {/*main section*/}
                <section className='addRate'>  {/*add rate*/}
                    <p className='addR'> اضف تقييم </p>
                    <div className='rateStar'>
                        <ReactStars size = {25}
                         onChange={ratingChanges} 
                         value={data1}
                         activeColor="#ffd700"
                         />
                        <p> تقييمك </p>
                    </div>
                    <div className='inputOne'>
                        <input type='text' placeholder='عنوان التقييم' value={data2} onChange={e => setData2(e.target.value)} />
                    </div>

                    <div className='inputTwo'>
                        <input type='text' placeholder=' اكتب تقييمك هنا ' value={data3} onChange={e => setData3(e.target.value)} />
                    </div>

                    <div className='inputThree'>
                        <input className='un' type='email' placeholder='بريدك الالكتروني' value={data4} onChange={e => setData4(e.target.value)} />
                        <input className='du' type='text' placeholder=' اسمك' value={data5} onChange={e => setData5(e.target.value)} />
                    </div>

                    <button onClick={handleSumit}  className='sendData'>أضف الآن</button>
                </section>
                <section className='comments'>  {/*start of comments*/}
                    <div className='tenRate'> 10 تقييمات</div>   {/*ten rate*/}
                    <div className='comment'>
                        <div className='commentt'>{/*comment1*/} 
                            <div className='commentText'>  {/* start of text*/}
                                <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                                <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                                <div className='reactStars'>
                                <ReactStars size={23}/>
                                </div>
                                <div className='name_date'>{/*name and date*/}
                                    <p className='date'> 9 اغسطس, 2022  </p>
                                    <p className='name'> احمد بلال </p>
                                </div>
                            </div>  {/*end of div(commentText)*/}
                            <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                                <img src={imgComm} alt='img'/>
                            </div>  {/*end of div(img comment)*/}
                            
                        </div>  {/*end of div(commentt)*/}

                        <div className='commentt'>{/*comment2*/} 
                            <div className='commentText'>  {/* start of text*/}
                                <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                                <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                                <div className='reactStars'>
                                <ReactStars size={23}/>
                                </div>
                                <div className='name_date'>{/*name and date*/}
                                    <p className='date'> 9 اغسطس, 2022  </p>
                                    <p className='name'> احمد بلال </p>
                                </div>
                            </div>  {/*end of div(commentText)*/}
                            <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                                <img src={imgComm} alt='img'/>
                            </div>  {/*end of div(img comment)*/}
                            
                        </div>  {/*end of div(commentt)*/}

                        <div className='commentt'>{/*comment3*/} 
                            <div className='commentText'>  {/* start of text*/}
                                <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                                <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                                <div className='reactStars'>
                                <ReactStars size={23}/>
                                </div>
                                <div className='name_date'>{/*name and date*/}
                                    <p className='date'> 9 اغسطس, 2022  </p>
                                    <p className='name'> احمد بلال </p>
                                </div>
                            </div>  {/*end of div(commentText)*/}
                            <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                                <img src={imgComm} alt='img'/>
                            </div>  {/*end of div(img comment)*/}
                            
                        </div>  {/*end of div(commentt)*/}

                        
                        
                        

                    </div>  {/*end of div(comment)*/}
                </section>  {/*end of comments*/}
            </section>
        </>
    )
}

export default Comments
