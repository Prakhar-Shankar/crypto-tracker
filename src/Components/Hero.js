import React from 'react'
import './Hero.css'
import Crypto from '../Assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            {/* Left-side */}
            <div className="left">
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrency using IRA</h1>
                <p>Buy, sell and store hundereds of crypto currency</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            {/* right-side */}
            <div className='right'>
                <div className="img-container">
                    <img src={Crypto} alt="" />
                </div>
            </div>
        </div>
      
    </div>

)
}

export default Hero
