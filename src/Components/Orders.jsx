import React, { Fragment, useContext } from 'react'
import '../Components/Styles/Orders.css'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { cartcontext, totalordercontext } from './RouterDom'

function Orders() {

      const [order, setorder] = useContext(totalordercontext)
      const [neww, setneww] = useContext(cartcontext)



  return (
    <div>
          <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><a href=""><FaAngleLeft size='25px' color='black'/></a></li></Link>
        </ul>
        <div style={{display:'inline-flex',justifyContent:'center'}}>
        <h2 className='fontset01'>MY ORDERS</h2>
        </div>
        </div>
    <div>

        {order.length == 0 ?
        <div>
            <h1 style={{textAlign:'center',fontSize:'35px',gap:'10px',paddingTop:'100px'}}>No orders...</h1>
        </div>

         :

         <Fragment>
            {order.map((display,index)=>
      <>
      <div style={{display:'flex',justifyContent:'center'}}>
    <div className='cartitem'>
     
        <div id='display.id'></div>
        <img className='item1' src={display.image} alt="" />
        <h3 className='arrival'>New Arrival</h3>
        <h3 className='productname'>{display.name}</h3>
        <h3 className='productprice'>${display.pricee}</h3>
        <p className='quantitystyle'>Quantity: {display.quantity}</p>
     </div> 
    
     </div>
       </>
            )}
         </Fragment>
          
        }
        <div style={{height:'30px'}}>
           
           </div>
    </div>
    </div>
  )
}

export default Orders