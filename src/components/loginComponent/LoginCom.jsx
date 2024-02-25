import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

//import imgs
import linkedin from '../../imgs/page5/Group 9319.png';
import pinterest from '../../imgs/page5/logos_pinterest.png';
import facebook from '../../imgs/page5/Facebook - Original (2).png';
import twitter from '../../imgs/page5/Twitter (2).png';
import emailImg from '../../imgs/page6/email.png';
import passwordImg from '../../imgs/page6/password.png'


const Login = () => {
    
    return (
        <>
            <section className='login'>{/*main section*/}
                <section className='loginSign'>
                <div className='smShop'> <p> Smart Shop</p></div> {/*div 1 --> sm shop*/}
                    <div className='para'> {/*para*/}
                        <p className='para1'> تسجيل الدخول  </p>
                        <p className='para2'> تسجيل الدخول للمتابعة في موقعنا </p>
                    </div> {/*ed of para*/}
                    <div className='create1'> {/*big account*/}

                        <div className='account1'>  {/*account1*/}
                            <img src={emailImg} alt='img'/>
                            <input type='email' placeholder='البريد الالكتروني'/>
                        </div> {/*account1*/}

                        <div className='account2'> {/*account2*/}
                            <img src={passwordImg} alt='img'/>
                            <input type='password' placeholder='كلمة المرور'/>
                        </div> {/*account2*/}
                    </div> {/*big account*/}
                    <div className='create2'>  {/*create2*/}
                        <Link className='forget'> هل نسيت كلمة المرور؟ </Link>
                        <Link className='createAcc'> تسجيل الدخول </Link>
                    </div>
                    <div className='para3'> <p> او سجل الدخول عبر: </p></div>
                    <div className='create3'>
                        <img src={linkedin} alt='img'/>
                        <img src={pinterest} alt='img'/>
                        <img src={facebook} alt='img'/>
                        <img src={twitter} alt='img'/>
                    </div>
                </section> 
                <section className='loginImg'> {/*imageSign*/}
                    <Link className='log' to='/Login'> تسجيل الدخول </Link>
                    <Link className='signn'> انشاء حساب </Link>
                </section>
            </section>
        </>
    )
}

export default Login
