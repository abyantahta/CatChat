import React, { useState } from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
import catHero from '../images/catHero.png'
import { Link } from 'react-router-dom'
const Login = () => {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [messageError,setMessageError] = useState('')
  // const messageError
  let errorMessage

  const loginHandler = ()=> {
    if(!username && !password){
      setMessageError('Please enter your username and password')
      return
    }
    if(!username){
      setMessageError('Please enter your username')
      return
    }
    if(!password){
      setMessageError('Please enter your password')
      return
    }
    console.log('username : ',username)
    console.log('password : ',password)
  }
  return (
    <div className="container px-8 relative text-4xl font-bold font-title  w-[600px] mx-auto h-[1100px] border-4 border-slate-950">
        <img className='' src={statusBar} alt="" />
        <div className="screen">
            <div className="mt-10 logo flex items-center justify-center">
                <img className='w-16' src={catIcon} alt="" />
                <h2>CatChat</h2>
            </div>
            <h2 className='mt-8'>Login to your account</h2>
            <p className='mt-3 font-medium text-xl'>Enter your username and password of your existing account.</p>
            <form className='mt-8' action="">
              <h3 className='text-3xl font-semibold'>Username</h3>
              <input onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your username' required className='pl-4 py-4 mt-3 font-medium w-full rounded-xl text-2xl outline-none border-2 border-slate-400' type="text" />
              <h3 className='text-3xl mt-8 font-semibold'>Password</h3>
              <input onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your username' required className='pl-4 py-4 mt-3 font-medium w-full rounded-xl text-2xl outline-none border-2 border-slate-400' type="password" />
            </form>
            <div className="buttonArea mt-12">
              <button onClick={loginHandler} className='w-full inline-block text-center bg-biru py-5 text-white text-2xl rounded-xl duration-75 hover:brightness-125 hover:duration-75'>
              Login
              </button>
              <Link className='w-full mt-6 inline-block text-center bg-white py-5 text-biru border-biru border-4 text-2xl rounded-xl duration-75 hover:brightness-125 hover:duration-75' to='/register'>
              Sign up instead
              </Link>
              {
                messageError && (
                  <p className='mt-6 text-red-600 text-xl text-center'>*{messageError}</p>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Login