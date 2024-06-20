import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../Components/Styles/Orderplaced.css'
import order from '../Components/Assets/check-out.png'

function Orderplaced() {
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center'}}>
           <img style={{height:'70px',width:'70px',marginTop:'190px'}} src={order} alt="" />
        </div>
      <h1 className='order'>ORDER PLACED!</h1>
      <div style={{justifyContent:'center',display:'flex'}}>
      <Link to={'/'}><button className='last'>Continue Shopping</button></Link>
      </div>
    
           
</div>
    
  )
}

export default Orderplaced