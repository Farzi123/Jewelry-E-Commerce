import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi";

function Whislist() {
  return (
    <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><p><FaAngleLeft size='25px' color='black'/></p></li></Link>
        </ul>
        <h2 className='fontset'>MY WHISLIST</h2>
        <ul className='cartt'>
         <Link to={'/MyBag'}> <li><p><HiOutlineShoppingBag size='25px' color='black'/></p></li> </Link>
        </ul>
        {/* <div class="line"></div> */}
    </div>
  )
}

export default Whislist