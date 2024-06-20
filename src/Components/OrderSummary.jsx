import React, { useState } from 'react'
import '../Components/Styles/OrderSummary.css'
import '../Components/CartProduct'

function OrderSummary() {

  const [subtotal, setsubtotal] = useState(170)

  const add=()=>
    {
      setsubtotal(subtotal +170)
    }


  return (
    <div className='order'>
        <h3 className='promo'>Promo code</h3>
        <input className='code' type="text" placeholder="Enter the code" />
        <button className='btncodebutton'>Search</button>
        <hr style={{width:'300px',marginTop:'15px'}}/>
        <h3 className='subtotal'>Subtotal</h3>
        <h3 className='subtotal1'>Discount</h3>
        <h3 className='subtotal2'>Delivery Charge</h3>
        <h3 className='subtotal3'>Total</h3>
        <h3 className='subtotal4'>(Inclusive of all taxes)</h3>
        <h3 onClick={add} className='subprice'>${subtotal}</h3>
        <h3 className='subprice1'>$30</h3>
        <h3 className='subprice2'>$10</h3>
        <h3 className='subprice3'>$150</h3>
        <button className='btnpayment'>PAY NOW</button>
    </div>
  )
}

export default OrderSummary