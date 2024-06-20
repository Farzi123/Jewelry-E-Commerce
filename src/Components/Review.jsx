import React from 'react'
import '../Components/Styles/Review.css'
import reviewimg from '../Components/Assets/portrait-smiling-blonde-woman.jpg'
import ring from '../Components/Assets/pngimg.com - ring_PNG123.png'
import {FaAngleLeft} from "react-icons/fa6";
import {FaAngleRight} from "react-icons/fa6";

function Review() {
  return (
    <div className='review'>
       <h1 className='choose'>MEET THE PEOPLE WHO CHOOSE</h1>
       <h1 className='choose1'>OUR PRODUCTS</h1>
       <div style={{display:'flex',justifyContent:'center'}}>
       <img className='rimg' src={reviewimg} alt="" />
       </div>
       <div className='rbio'>
       <h4 className='customer'>"Thanks so much for sending such joy my way! I was impressed from the moment I opened my package.
         Each piece of jewellery was individually wrapped to look like a million dollars ... almost too good
         to open! The jewellery itself is awesome."</h4>
         </div>
       {/* <p className='arrow' href=""><FaAngleLeft fontSize='30px'/></p> */}
       {/* <p className='arrow1' href=""><FaAngleRight fontSize='30px'/></p> */}
    </div>
  )
}

export default Review