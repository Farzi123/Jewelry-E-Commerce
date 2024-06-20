import React from 'react'
import '../Components/Styles/AboutUs.css'
import aboutimg1 from '../Components/Assets/jasmin-chew-UBeNYvk6ED0-unsplash.jpg'
import aboutimg2 from '../Components/Assets/harper-sunday-Vya9Ji2Eg6A-unsplash.jpg'
import { Card, Col, Row } from 'react-bootstrap'

function AboutUs() {
  return (
    <div className='about'>
        <div style={{display:'inline-flex'}}>
    
        <img className='img1'  src={aboutimg1} alt="" />
        <img className='img2'  src={aboutimg2} alt="" />

        <h2 className='jquotes'>"A piece of jewelry is often a piece of art. But it only becomes valuable when emotions are added to it."</h2>
        </div>
        <h1 className='us'>ABOUT US</h1>
        <p className='bio'>At AA, each piece is meticulously crafted by skilled artisans who share our
           dedication to perfection. We use only the finest materials, including ethically sourced gemstones
           and precious metals, ensuring that every piece not only looks beautiful but also stands the test
           of time. Our designs range from classic elegance to contemporary chic, catering to diverse tastes and occasions.</p>
        <p className='bio'>Our collections are a reflection of our commitment to innovation and artistry. Whether you are looking for a statement
           piece for a special occasion, a meaningful gift, or something to add a touch of sparkle to your everyday wear, you will
           find it at AA . Our jewelry is designed to make you feel confident, beautiful, and uniquely you. We believe in creating beauty responsibly.
           That’s why we are committed to sustainable practices and ethical sourcing. We work with suppliers who share our values, ensuring that our
           jewelry is made with respect for both people and the planet. Our sustainable approach means you can wear our pieces with pride, knowing
           they are made with integrity.</p>   
    </div>
  )
}

export default AboutUs