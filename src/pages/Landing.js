import React from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
import catHero from '../images/catHero.png'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="container px-8 relative text-4xl font-bold font-title  w-[600px] mx-auto h-[1100px] border-4 border-slate-950">
        <img className='' src={statusBar} alt="" />
        <div className="screen">
            <div className="mt-12 logo flex items-center ">
                <img className='w-16' src={catIcon} alt="" />
                <h2>CatChat</h2>
            </div>
        <h1 className='mt-4 text-6xl'>Ask Online Advice <br /> for your feline <br /> friend and keep them healthy!</h1>
        <img className='mt-8  w-full' src={catHero} alt="" />
        <div className="buttonArea">
          <Link className='w-full inline-block text-center bg-biru py-5 text-white text-2xl rounded-xl duration-75 hover:brightness-125 hover:duration-75' to='./login'>
          Login to your account
          </Link>
          <Link className='w-full mt-6 inline-block text-center bg-white py-5 text-biru border-biru border-4 text-2xl rounded-xl duration-75 hover:brightness-125 hover:duration-75' to='./Login'>
          Sign up for new account
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Landing