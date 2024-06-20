import React, { Fragment, useContext } from 'react'
import '../Components/Styles/Wishlistproduct.css'
import { cartcontext, cartlabelcontext, wishlistdatacontext } from './RouterDom'
import { Link } from 'react-router-dom'
import imageee from '../Components/Assets/display-shiny-luxurious-golden-chain.jpg'
import toast from 'react-hot-toast'

function Wishlistproduct() {

    const [neww, setneww] = useContext(cartcontext)
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
    const [wishlist, setwishlist] = useContext(wishlistdatacontext)


    const removeFrom = (id) =>{
        const removedata = wishlist.filter((display) => display.id !== id)
        setwishlist(removedata)
        
     }



     const addtocart =(prdct)=>{
      const additem = neww.find((show) =>show.id === prdct.id )
      if(additem){
        toast.error('Item already in the cart')
      }
      else{
      setcartvalue(cartvalue+1)
        setneww([...neww, {...prdct, quantity: 1, baseprice: prdct.pricee}])
        toast.success('Successfully Moved!')
    
      }
    }
    



  return (
    <div>
        
        {wishlist.length == 0 ?

        <div className='intro'>
       <h1>Your Wishlist is Empty</h1>
       <Link to={'/'}><button>Continue Shopping</button></Link>
       </div>
          :

          <Fragment>
          <div className='wishliststyle' >
          {wishlist.map((display1)=>
          <div className='wish'>
            <div style={{display:'flex',justifyContent:'center',paddingTop:'30px'}}>
            <div id='display1.id'></div>
            <img className='wishimage' src={display1.image} alt="" />
            </div>
            <h3 className='wishname'>{display1.name}</h3>
            <div style={{display:'flex'}}>
            <h3 className='wishprice'>${display1.pricee}</h3>
            <h3 onClick={()=>removeFrom(display1.id) } className='wishremove'>Remove</h3>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <button  onClick={()=>addtocart(display1) } className='wishadd'>ADD TO CART</button>
            </div>
          </div>
          
          )}
          </div>
          </Fragment>

          }

    </div>
  )
}

export default Wishlistproduct