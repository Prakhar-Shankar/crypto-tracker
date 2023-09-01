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
                        <a className='links' href='https://twitter.com/PrakharShankar2' target='_blank'><FaTwitter className='icon'/></a>
                        <a className='links' href='https://www.linkedin.com/in/prakhar-shankar-24a788227/'><FaLinkedin className='icon' target='_blank'/></a>
                        <a className='links' href='https://github.com/Prakhar-Shankar' target='_blank'><FaGithub className='icon'/></a>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer