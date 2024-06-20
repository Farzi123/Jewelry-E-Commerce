import React, {  Fragment, useContext, useEffect, useState } from 'react'
import '../Components/Styles/CartProduct.css'
import '../Components/Styles/OrderSummary.css'
import itemimg from '../Components/Assets/luxurious-shiny-golden-chain.jpg'
import img from '../Components/Assets/display-shiny-luxurious-golden-chain.jpg'
import { amountcontext, cartcontext, cartlabelcontext, checkcontext, } from './RouterDom'
import { Button, Card } from 'react-bootstrap'
import imgg1 from '../Components/Assets/display-shiny-luxurious-golden-chain.jpg'
import { Link } from 'react-router-dom'


function CartProduct() {


const [neww, setneww] = useContext(cartcontext)
const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
const [total, settotal] = useContext(amountcontext)
// const [checkOUT, setcheckOUT] = useState(checkcontext)
 
       
    

      const deleteitem = (id) => {
        const newlist = neww.filter((display) => display.id != id);
        setneww(newlist);
        setcartvalue(cartvalue-1)
      };

      const handletotal = () => {
        settotal(neww. reduce ((totalans,item) =>  parseInt(totalans+item.pricee) , 0));
      };

      useEffect(() => {
        handletotal() 
      }, [neww])


      const additem = (id) => {
console.log(id);
        const newarray = neww.map((display1) =>
          display1.id == id && display1.quantity<5
            ? {
                ...display1,
                quantity: parseInt(display1.quantity) + 1,
                pricee:  display1.baseprice * (display1.quantity + 1),
              }
            : display1
        );
    
        setneww(newarray);

      };


      const decreasequantity = (id) => {
        const newarray = neww.map((display1) =>
          display1.id == id && display1.quantity > 1
            ? {
                ...display1,
                quantity: parseInt(display1.quantity) - 1,
                pricee: display1.baseprice * (display1.quantity -1),
              }
            : display1
        );
        setneww(newarray);
    
      };


      // const checkoutdata =()=>{
      //   setcheckOUT([...neww])
      //     }
    

  return (
    <div >

   {cartvalue == 0 ?

   <div className='intro'>
       <h1>Your Cart is Empty</h1>
       <Link to={'/'}><button>Continue Shopping</button></Link>
   </div>
      
      :

   <Fragment>
    {neww.map((display,index)=>
      <>
      <div style={{display:'flex',justifyContent:'center'}}>
    <div className='cartitem'>
     
        <div id='display.id'></div>
        <img className='item1' src={display.image} alt="" />
        <h3 className='arrival'>New Arrival</h3>
        <h3 className='productname'>{display.name}</h3>
        <h3 className='productprice'>${display.pricee}</h3>
        <div className='quantity'>
           <button onClick={() => decreasequantity(display.id)}  style={{border:'none',backgroundColor:'rgb(156, 155, 155)',fontSize:'16px',marginLeft:'-15px',cursor:'pointer'}}>-</button>
           <p>{display.quantity}</p>
           <button onClick={() => additem(display.id)} style={{border:'none',backgroundColor:'rgb(156, 155, 155)',fontSize:'15px',cursor:'pointer',marginLeft:'10px'}}> +</button>
        </div>
        <button onClick={() => deleteitem(display.id)} className='cancel'>Cancel</button>
        </div>
        </div>
        </>
      )}

   </Fragment>
   
    }
      {neww.length > 0 &&  <div className='cartfinal'>
        {/* <h1>Promo code</h1>
        <input type="text" placeholder='Enter the code'  /> */}
        <h2 className='total'>TOTAL<span className='tax'>(Inclusive all taxes)</span> : ${total}</h2>
       </div>
       }

      {neww.length > 0 &&
       <div style={{display:'flex',justifyContent:'center'}}>
       <Link to={'/Buy'}><button className='buynow' >Buy Now</button></Link>
       </div>
     }
    
    {neww.length > 0 &&
       <div style={{display:'flex',justifyContent:'center',height:'30px'}}>
       </div>
     }
      

   
    </div>
  )
}

export default CartProduct