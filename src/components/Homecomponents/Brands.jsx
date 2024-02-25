import React from 'react'
import b1 from '../../imgs/page1/brandlogo5 (1).png'
import b2 from '../../imgs/page1/tablogo1.png';
import b3 from '../../imgs/page1/brandlogo4 (1).png';
import b4 from '../../imgs/page1/brandlogo6.png'
import b5 from '../../imgs/page1/brandlogo2.png'

const Brands = () => {
    return (
        <section className='brands'>
            <div className='text4'>
                <p>البرندات</p>
            </div>
            <div className='brand'>
                <img src={b1}/>
                <img src={b2}/>
                <img src={b3}/>
                <img src={b4}/>
                <img src={b5}/>
                <img src={b1}/>
                <img src={b3} className='b3'/>
            </div>
        </section>
    )
}

export default Brands