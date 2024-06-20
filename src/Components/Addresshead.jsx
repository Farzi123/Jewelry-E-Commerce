import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Addresshead() {
  return (
    <div>
       <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/MyBag'}><li><p><FaAngleLeft size='25px' color='black'/></p></li></Link>
        </ul>
        <h2 className='fontset1'>ADDRESS & PAYMENT</h2>
        {/* <ul className='cartt'>
         <Link to={'/MyBag'}> <li><p><HiOutlineShoppingBag size='25px'/></p></li> </Link>
        </ul> */}
        {/* <div class="line"></div> */}
    </div>

    </div>
  )
}

export default Addresshead