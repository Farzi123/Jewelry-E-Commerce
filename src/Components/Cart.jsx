import React from 'react'
import '../Components/Styles/Cart.css'
import {FaAngleLeft} from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Cart() {


  return (
    <div>
    <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><p><FaAngleLeft size='25px' color='black'/></p></li></Link>
        </ul>
        <h2 className='fontset'>MY CART</h2>
        <ul className='cartt'>
         <Link to={'/like'}> <li><p><AiOutlineHeart size='25px' color='black'/></p></li></Link>
        </ul>
        {/* <div class="line"></div> */}
    </div>
    </div>
  )
}

export default Cart