import React, { useContext } from 'react'
import '../Components/Styles/NewCollection.css'
import { Link } from 'react-router-dom'
import { cartcontext, cartlabelcontext, maincontext, wishlistdatacontext } from './RouterDom'
import toast, {} from 'react-hot-toast'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from "react-icons/ci";

function NewCollection() {

const [list, setlist] = useContext(maincontext)
const [neww, setneww] = useContext(cartcontext)
const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
const [wishlist, setwishlist] = useContext(wishlistdatacontext)



const checkwishlist = (i) =>{

  if(!wishlist.includes(i))
  {
    setwishlist([...wishlist,i])
  }
  else{

    setwishlist(wishlist.filter((item) => item.id !== i ))
  }

}




const addcart =(prdct)=>{
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
    <div className='head3'>
        <h1 className='new'>NEW COLLECTIONS</h1>
        <div className='collections'>
        {list.map((show,ind)=>
        <div className='listt' key={ind}>
        <Link to={`/details/${show.name}/${ind}`}><img  src={show.image} alt="" /></Link>
        <div>
        <p onClick={()=>checkwishlist(show)} className='forlike'>{ wishlist.includes(show) ? <FaHeart style={{fontSize:"24px"}}/> : <CiHeart  style={{fontSize:"25px"}}/>}</p>
        </div>
        <div className='priceline'  >
        <h3 className='listt1'>{show.name}</h3>
        <h3 className='listt1'>${show.pricee}</h3>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button className='bttt' onClick={()=>addcart(show)} >ADD TO CART</button>
        </div>
        </div>
        )}
        </div>
        <Link to={'/shop'}><h4 className='more'>VIEW MORE</h4></Link>
    </div>

  )
}

export default NewCollection