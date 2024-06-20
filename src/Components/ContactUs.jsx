import React from 'react'
import '../Components/Styles/Contact.css'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import contact from '../Components/Assets/pisces-portrait-beautiful-woman.jpg'
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


function ContactUs() {
  return (
    <div>
        <Link to={'/'}> <p className='closeall'><IoIosCloseCircle fontSize={'40px'} color='black'/></p></Link>
        <div style={{display:'flex'}}>
        <img className='contactimg' src={contact} alt="" />
        <div>
        <h3 className='contactus'>Contact Us</h3>
        <p className='phone'><FaPhoneSquareAlt fontSize={'20px'} />  +91 999 5255 478</p>
        <p className='mail1'><MdEmail fontSize={'20px'} /> AAGroups@gmail.com</p>
        </div>
        </div>
    </div>
  )
}

export default ContactUs