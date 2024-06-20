import React from 'react'
import '../Components/Styles/Navbar.css'
import bgvideo from '../Components/Assets/4236565-uhd_3840_2160_24fps.mp4'
import bgvideo2 from '../Components/Assets/7305158-uhd_4096_2160_25fps.mp4'
import search from '../Components/Assets/loupe.png'
import like from '../Components/Assets/like white.png'
import bag from '../Components/Assets/bag white.png'
import profile from '../Components/Assets/user white.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='head'>
      
        <nav>
            <ul className='navv1'>
                <li style={{cursor:'pointer'}}><p>New Arrival</p></li>
                <Link to={'/shop'}><li style={{cursor:'pointer'}}><p>Shop</p></li></Link>
                <Link to={'/enter'}><li><p>Login</p></li></Link>
            </ul>
            <h1 style={{fontSize:"30px",letterSpacing:"-9px",color:'white'}} >AA</h1>
            <ul className='navv'>
                <Link to={'/like'}><li><p><img className='searchh' src={like} alt="" /></p></li></Link>
               <Link to={'/MyBag'}><li><p><img className='searchh' src={bag} alt="" /></p></li></Link>
               <Link to={'/profile'}><li><p><img className='searchhh1' src={profile} alt="" /></p></li></Link>
            </ul>
        </nav>
        {/* <video autoPlay loop className='video' src={bgvideo2}></video> */}
        <div>
        <h1 className='quote'>JEWELERY FOR</h1>
        <h1 className='quote2'>YOUR SIMPLICITY</h1>
        </div>

    </div>
  )
}

export default Navbar