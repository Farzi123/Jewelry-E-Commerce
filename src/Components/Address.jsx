import React, { useContext, useEffect, useState } from 'react'
import '../Components/Styles/Address.css'
import { amountcontext, cartcontext, cartlabelcontext, totalordercontext } from './RouterDom';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Address() {

    const [neww, setneww] = useContext(cartcontext)
    const [total, settotal] = useContext(amountcontext)
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
    const [showNotification, setShowNotification] = useState(false);
    const [order, setorder] = useContext(totalordercontext)
    

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to API
        console.log('Form Data Submitted:', formData);
        save()
    };


    const enter = ()=>
        {
            for(let key in formData){
                if(!formData[key]){
                    return toast.error(key + " is required")
                }
            }
            setorder([...order, ...neww])
            setneww([])
            setcartvalue(0)
            
            navigate("/placed")
        }

     

    const handletotal = () => {
        settotal(neww. reduce ((totalans,item) =>  parseInt(totalans+item.pricee) , 0));
      };

      useEffect(() => {
        handletotal() 
      }, [neww])


      const save =()=>
        {
            toast.success('Address Saved') 
        }
  
   

  return (
    <div className='addressstyle'>
    <div className='address'>
         <form onSubmit={handleSubmit}>
            <div style={{paddingTop:'20px'}}>
                <label className='name'>Full Name</label><br />
                <input className='namebox'
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>Address Line 1</label><br />
                <input className='namebox'
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>Address Line 2</label><br />
                <input className='namebox'
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>City</label><br />
                <input className='namebox'
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>State</label><br />
                <input className='namebox'
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>Pin Code</label><br />
                <input className='namebox'
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{paddingTop:'10px'}}>
                <label className='name'>Country</label><br />
                <input className='namebox'
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
                </div>
            <div style={{paddingTop:'20px'}}>
            <button onClick={enter} className='addressbutton' type="submit">Save</button>
            </div>
        </form>
 
    </div>
    <div>
    <div className='promocode'>
        <h1>Promo Code</h1>
        <div>
        <input className='promoenter' type="text"  placeholder='Enter here'/>
        <button className='apply'>Apply</button>
        </div>
    </div>
    <div className='payment'>
        <h4 className='paymentmethod'>Payment Method</h4>
    <div className='dropdown'>
         <button>Card</button>
         <div className='content'>
            <p>Credit Card</p>
            <p>Debit Card</p>
            <p>Voucher Card</p>
         </div>
    </div>
    <div style={{marginTop:'15px'}} className='dropdown'>
         <button >Online Payment</button>
         <div className='content'>
            <p>Google Pay</p>
            <p>Phone Pay</p>
            <p>Amazon Pay</p>
         </div>
    </div>
    <div style={{marginTop:'15px'}} className='dropdown'>
         <button >Cash on Delivery</button>
    </div>
    <div className='conclusion'>
        <h3>Amount to be paid</h3>
        <h4>Total <span className='pay'>(Inclusive all taxes)</span> : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;${total}</h4>
    </div>
    <div>
         <button onClick={()=>enter()}  className='placeorder'>Place Order</button>
    </div>
      
    </div>
    
    </div>
    </div>
  )
}

export default Address