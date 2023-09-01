import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                
                
                <div className='col'>
                    <h5>Developed with ❤️ by</h5>
                    <span className='bar'> </span>
                        <p>Prakhar</p>
                        
                   
                </div>
               
                <div className='col'>
                    <h5>Social</h5>
                    <div className="social-media ">
                        <a className='links' href='/'><FaFacebook className='icon'/></a>
                        <a className='links' href='/'><FaTwitter className='icon'/></a>
                        <a className='links' href='/'><FaLinkedin className='icon'/></a>
                        <a className='links' href='/'><FaGithub className='icon'/></a>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer