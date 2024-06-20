import React, { useContext, useState } from 'react'
import '../Components/Styles/Shop.css'
import { FaAngleLeft, FaHeart } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { cartcontext, cartlabelcontext, maincontext, wishlistdatacontext } from './RouterDom'
import toast from 'react-hot-toast'
import { CiHeart } from 'react-icons/ci'
import { AiOutlineHeart } from 'react-icons/ai'

function Shop() {

    const [list, setlist] = useContext(maincontext)
    const [neww, setneww] = useContext(cartcontext)
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
    const [wishlist, setwishlist] = useContext(wishlistdatacontext)
    const [products, setProducts] = useState(list)
    const [Filterdata, setFilterdata] = useState('')
    const [sorting, setsorting] = useState('')
    const [filtering, setfiltering] = useState('')

    


    const checkwishlist = (i) =>{

        if(!wishlist.includes(i))
        {
          setwishlist([...wishlist,i])
        }
        else{
      
          setwishlist(wishlist.filter(item => item != i ))  
        }
      
      }
      
      
      const sortData = (e) => {
        const type = e.target.value
        setsorting(type)
        if(type == "0") return;
          const sorted = list.sort((a, b) => {
            if(type == "min"){
              return a.pricee - b.pricee
            }
            if(type == "max"){
              return b.pricee - a.pricee
            }
          })
          setProducts(sorted)
      }
      
      
      const getfilter =(e)=>{
        const values = e.target.value
        setfiltering(values)
        const [min, max] = values.split("-")
        const filtered = list.filter((prd)=>{
            if(prd.pricee >= min && prd.pricee <= max){
              return prd
            }
        }
        )
        setProducts(filtered)
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

    const generateFilterdata =()=>{
      const response= list.filter( (product) =>{
      
      if (product.name.toLowerCase().includes(Filterdata.toLowerCase()))
        {
          return product
        }
    
      }
      )
      setProducts(response)
    
    }

  return (
    <div>
        <div className='cartnav'>
        <ul className='cartt'>
          <Link to={'/'}><li><p><FaAngleLeft size='25px' color='black'/></p></li></Link>
        </ul>
        <h2 className='fontset2'>SHOP</h2>
        <ul className='cartt2'>
         <Link to={'/like'}> <li><p><AiOutlineHeart size='25px' color='black' /></p></li></Link>
        </ul>
        <ul className='cartt'>
         <Link to={'/MyBag'}> <li><p><HiOutlineShoppingBag size='25px' color='black'/></p></li> </Link>
        </ul>
        
        {/* <div class="line"></div> */}
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className='searchbar'>
        <input className='searchall' type="text" placeholder='Search here..' value={Filterdata} onChange={(e)=>setFilterdata(e.target.value)}/>
    </div>
        <button onClick={()=>generateFilterdata()} className='sbox'>Search</button>
    </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
      <div>
        <select name="sort" id="" value={sorting} onChange={sortData} >
        <option value="0">sort</option>
          <option value="min">low to high</option>
          <option value="max">high to low</option>
        </select>
      </div>
      <div style={{marginLeft:'10px'}}>
        <select name="" id="" value={filtering} onChange={getfilter} >
        <option value="0-100000">Filter</option>
          <option value="0-100">$0 to $100</option>
          <option value="100-150">$100 to $150</option>
          <option value="150-500">$150 to $500</option>
        </select>
      </div>

    </div>
    <div className='shopstyle'>
        {products.map((show,ind)=>
        <div className='listt' key={ind}>
        <Link to={`/details/${show.name}/${ind}`}><img  src={show.image} alt="" /></Link>
        <div>
        <p onClick={()=>checkwishlist({...show, quantity: 1, baseprice: show.pricee})} className='forlike'>{ wishlist.some(item=> item.id == show.id) ? <FaHeart style={{fontSize:"24px"}}/> : <CiHeart  style={{fontSize:"25px"}}/>}</p>
        </div>
        <div className='shopstyle2'>
        <h3 className='listt1'>{show.name}</h3>
        <h3 className='listt2'>${show.pricee}</h3>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button className='bttt1' onClick={()=>addcart(show)} >ADD TO CART</button>
        </div>
        </div>
        )}
        {
          products.length==0 && 
          <div>
            <h1>No Produts Avaliable</h1>
          </div>
        
        }
        </div>


    </div>
  )
}

export default Shop