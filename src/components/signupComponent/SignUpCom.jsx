import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

//import imgs
import linkedin from '../../imgs/page6/Group 9319.png';
import pinterest from '../../imgs/page6/logos_pinterest.png';
import facebook from '../../imgs/page6/Facebook - Original (2).png';
import twitter from '../../imgs/page6/Twitter (2).png';
import nameImg from '../../imgs/page6/name.png';
import emailImg from '../../imgs/page6/email.png';
import passwordImg from '../../imgs/page6/password.png'


const  SignUpCom = () => {
    const navigate= useNavigate();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    //handle api
    const handleSubmit = e=>{
        let userData = {name , email , password}
        axios.post('http://localhost:5000/admins' , userData)
        .then(res=>{
            toast.success('signUp completed')
            navigate('/Login')
        })
        .catch(err=>toast.error('signUp failed'))
    }
    return (
        <>
            <section className='signUp'>
                <section className='sign'> {/*login sign*/}
                    <div className='smShop'> <p> Smart Shop</p></div> {/*div 1 --> sm shop*/}
                    <div className='para'> {/*para*/}
                        <p className='para1'> انشاء حساب  </p>
                        <p className='para2'> انشئ حساب مجاني و استمتع به </p>
                    </div> {/*ed of para*/}
                    <div className='create1'> {/*big account*/}
                        <div className='account1'> {/*account1*/}
                            <img src={nameImg} alt='img' />
                            <input type='text' placeholder='الاسم' value={name} onChange={e=>setName(e.target.value)}/>
                        </div> {/*account1*/}

                        <div className='account2'>  {/*account2*/}
                            <img src={emailImg} alt='img'/>
                            <input type='email' placeholder='البريد الالكتروني' value={email}  onChange={e=>setEmail(e.target.value)}/>
                        </div> {/*account2*/}

                        <div className='account3'> {/*account3*/}
                            <img src={passwordImg} alt='img'/>
                            <input type='password' placeholder='كلمة المرور' value={password}  onChange={e=>setPassword(e.target.value)}/>
                        </div> {/*account3*/}
                    </div> {/*big account*/}
                    <div className='create2'>  {/*create2*/}
                        <Link className='forget'> هل نسيت كلمة المرور؟ </Link>
                        <Link className='createAcc' onClick={handleSubmit}> انشاء حساب </Link>
                    </div>
                    <div className='para3'> <p> او سجل الدخول عبر: </p></div>
                    <div className='create3'>
                        <img src={linkedin} alt='img'/>
                        <img src={pinterest} alt='img'/>
                        <img src={facebook} alt='img'/>
                        <img src={twitter} alt='img'/>
                    </div>
                </section>
                <section className='signImg'> {/*img*/}
                    <Link className='log' to='/Login'> تسجيل الدخول </Link>
                    <Link className='signn'> انشاء حساب </Link>
                </section>
            </section>
        </>
    )
}

export default SignUpCom
