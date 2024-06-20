import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Aboutus from './AboutUs'
import Newcollection from './NewCollection'
import Cart from './Cart'
import Collections from './Collections'
import Custom from './Custom'
import Review from './Review'
import CartProduct from './CartProduct'
import OrderSummary from './OrderSummary'
import Footer from './Footer'
import cartdata from './List'
import products from './Main'
import cartval from './Cartt'
import Whislist from './Whislist'
import Productdetails from './Productdetails'
import totalamount from './Total'
import checkout from './checkout'
import Wishlistproduct from './Wishlistproduct'
import wishdata from './Wishlistdata'
import Login from './Login'
import Orderplaced from './Orderplaced'
import Addresshead from './Addresshead'
import Address from './Address'
import Profile from './Profile'
import Shop from './Shop'
import myorder from './Order'
import Orders from './Orders'
import ContactUs from './ContactUs'



const cartcontext = createContext()
const maincontext = createContext()
const cartlabelcontext =createContext()
const amountcontext = createContext()
const checkcontext = createContext()
const wishlistdatacontext = createContext();
const totalordercontext = createContext();

function RouterDom() {

  const [neww, setneww] = useState(cartdata)
  const [list, setlist] = useState(products)
  const [cartvalue, setcartvalue] = useState(cartval)
  const [total, settotal] = useState(totalamount)
  const [checkOUT, setcheckOUT] = useState(checkout)
  const [wishlist, setwishlist] = useState(wishdata)
  const [order, setorder] = useState(myorder)

  

 

  return (
    <div>

     <cartcontext.Provider value={[neww, setneww]}>
     <maincontext.Provider value={[list, setlist]}>
     <cartlabelcontext.Provider value={[cartvalue, setcartvalue]}>
     <amountcontext.Provider value={[total,settotal]}>
     <checkcontext.Provider value={[checkOUT, setcheckOUT]}>
     <wishlistdatacontext.Provider value={[wishlist, setwishlist]}>
     <totalordercontext.Provider value={[order, setorder]}>
     
    

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<><Navbar/><Aboutus/><Newcollection/><Custom/><Review/><Footer/></>}></Route>
        <Route path='/MyBag' element={<><Cart/><CartProduct/></>}></Route>
        <Route path='/like' element={<><Whislist/><Wishlistproduct/></>}></Route>
        <Route path='/NewArrivals' element={<><Collections/></>}></Route>
        <Route path='/details/:name/:product' element={<><Productdetails/></>}></Route>
        <Route path='/enter' element={<><Login/></>}></Route>
        <Route path='/Buy' element={<><Addresshead/><Address/></>}></Route>
        <Route path='/placed' element={<><Orderplaced/></>}></Route>
        <Route path='/profile' element={<><Profile/></>}></Route>
        <Route path='/shop' element={<><Shop/></>}></Route>
        <Route path='/orders' element={<><Orders/></>}></Route>
        <Route path='/contact' element={<><ContactUs/></>}></Route>

      </Routes>
      </BrowserRouter>


   

      </totalordercontext.Provider>
      </wishlistdatacontext.Provider>
      </checkcontext.Provider>
      </amountcontext.Provider>
      </cartlabelcontext.Provider>
      </maincontext.Provider>
      </cartcontext.Provider>
     
    </div>
  )
}

export default RouterDom
export {cartcontext}
export {maincontext}
export {cartlabelcontext}
export {amountcontext}
export {checkcontext}
export {wishlistdatacontext}
export {totalordercontext}