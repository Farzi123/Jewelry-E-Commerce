import React, { useContext } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import '../Components/Styles/Cart.css'
import { cartcontext, cartlabelcontext, maincontext } from './RouterDom'
import '../Components/Styles/Productdetails.css'
import {} from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import toast from 'react-hot-toast'

function Productdetails() {

    const [list, setlist] = useContext(maincontext)
    const [neww, setneww] = useContext(cartcontext)
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)

    const {product} = useParams()
    const viewproduct = list[product]
    console.log(viewproduct)



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
    <div>
         <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><a href=""><FaAngleLeft size='25px' color='black'/></a></li></Link>
        </ul>
        <h2 className='fontset1'>DETAILS</h2>
        </div>
        <div>
            <img className='pimage' src={viewproduct.image} alt="" />
        </div>
        <div className='detaling'>
         <h1>New Arrival</h1>
         <h2>{viewproduct.name}</h2>
         <h3>${viewproduct.pricee}</h3>
         <h4><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalf/></h4>
         <h5>Crafted from the finest sterling silver, this necklace features a
           stunning oval-cut sapphire at its center, surrounded by a halo of sparkling
            cubic zirconia stones. The pendant measures 1 inch in length and is suspended 
            from an 18-inch sterling silver chain, ensuring it sits perfectly at the neckline.</h5>
          <button onClick={()=>addcart(viewproduct)}>Move to Cart</button>
        </div>
    </div>
  )
}

export default Productdetails