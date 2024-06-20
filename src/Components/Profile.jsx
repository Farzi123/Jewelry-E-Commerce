import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../Components/Styles/Profile.css'
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <div>
         <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><a href=""><FaAngleLeft size='25px' color='black'/></a></li></Link>
        </ul>
        <h2 className='fontset01'>PROFILE</h2>
        </div>
        <div style={{lineHeight:'1px'}}> 
          <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
          <p><CgProfile size={'50px'} /></p>
          </div>
          <p className='profilename'>Farzeen</p>
          <p className='profilemail'>farzi@gmail.com</p>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div className='orderss'>
            <Link to={'/orders'}><p className='myorder'>Orders</p></Link>
          </div>
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div className='orders'>
          <Link to={'/contact'}>  <p className='myorder'>Contact Us</p></Link>
          </div>
          </div>
          
         <Link to={'/enter'}><p className='logout'>Log Out</p></Link> 
          
        </div>
    </div>
  )
}

export default Profile