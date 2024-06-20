import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Components/Styles/Login.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

function Login() {

      const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Handle login logic here
    };


  return (

    <div>
    <div className='loginbg'>
    <div className='logarrange'>
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h2 className='head12'>LOG IN</h2>
                <p className='create'>New user?<span> Create an account</span></p>
                <div>
                    <label className='email'>Email</label><br />
                    <input className='emailbox'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='pass'>Password</label><br />
                    <input className='passbox'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
               <Link to={'/'}> <button className='logbutton' type="submit" >Login</button></Link>
               </div>
            </form>
            <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
            <hr className='line1' />
            <p style={{textAlign:'center',fontSize:'15px',padding:'10px 20px'}}>Or</p>
            <hr className='line2' />
            
            </div>
            <div className='google'>
                <p className='googleicon'><FcGoogle style={{fontSize:'25px'}}/></p>
                <p className='withgoogle'>Continue with Google</p>
            </div>
            <div className='google' style={{marginTop:'10px'}}>
                <p className='googleicon'><FaFacebook style={{fontSize:'25px',color:'rgb(6, 77, 105)'}}/></p>
                <p className='withgoogle'>Continue with Facebook</p>
            </div>
            <div className='google' style={{marginTop:'10px'}}>
                <p className='googleicon1'><FaApple  style={{fontSize:'25px',color:'black'}}/></p>
                <p className='withgoogle'>Continue with Apple</p>
            </div>
            <p className='loginmore'>View more</p>
            <p className='signin'>Get help signing in</p>
        </div>
        <h1 style={{position:'relative',right:'1350px',letterSpacing:'-15px',fontSize:'50px',color:'white',top:'20px'}}>AA</h1>
    </div>
    </div>
    </div>
  )
}

export default Login