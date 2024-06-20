import React from 'react'
import '../Components/Styles/Custom.css'
import splimg from '../Components/Assets/alexa-soh-38IbmGe8mUM-unsplash.jpg'
import splimg1 from '../Components/Assets/nayeli-rosales--WPdfVgIlPc-unsplash.jpg'
import { Card } from 'react-bootstrap'

function Custom() {
  return (
    <div className='custom'>
    
        <img className='cimg' src={splimg1} alt="" />
        <div className='forcustom'>
        <h1 className='ctext'>WE CUSTOMIZE</h1>
        <h1 className='ctextt'>FOR YOUR SPECIAL ONE!!</h1>
        <button className='cbutton'>Explore</button>
        </div>
    </div>
  )
}

export default Custom