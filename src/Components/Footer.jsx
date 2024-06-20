import React from 'react'
import '../Components/Styles/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
       <div className='settingfooter'>
      <div>
        <h1 className='footerlogo'>AA</h1>
        <h3 className='company'>AA Group of Companies PVT LTD</h3>
        <ul className='icons'>
          <li><a className='facebookic' href=""><FaFacebook fontSize='25px' color='white' /></a></li>
          <li><a className='otheric' href=""><AiFillInstagram fontSize='25px' color='white'/></a></li>
          <li><a className='otheric'  href=""><FaXTwitter fontSize='25px' color='white'/></a></li>
          <li><a className='otheric'  href=""><FaYoutube fontSize='25px' color='white'/></a></li>
        </ul>
        </div>
       
        <div>
        <h2 className='help'>Need help?</h2>
        <h2 className='need'>Order status <br /> Delivery <br /> Returns <br /> FAQ <br /> Shipping Policy <br /> Cancelation Policy <br /> Contact Us</h2>
        </div>
        <div>
        <h2 className='help1'>About US</h2>
        <h2 className='need1'>Find a Store <br /> Terms & Condition <br /> Membership Program</h2>
        </div>
        <div>
        <h2 className='community'>Join Our Community</h2>
        <input className='mail' type="text" placeholder='Enter your email'/>
        </div>
        </div>
        <p className='emailarrow' href=""><FaAngleRight size='19px'/></p>
        <h3 className='copywrite'><FaRegCopyright/> 2024 AA Group of Companies PVT LTD , All Rights Reserved.</h3>
    </div>
  )
}

export default Footer