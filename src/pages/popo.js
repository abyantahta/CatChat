import React from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
import backArrow from '../images/backArrow.png'
import catIcon2 from '../images/catIcon2.png'
import arrow from '../images/arrow.png'
import catHero from '../images/catHero.png'
import catImage from '../images/catImage.png'
import cat1 from '../images/cat1.png'
import cat2 from '../images/cat2.png'
import background from '../images/background.png'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="container relative text-4xl font-bold font-title  w-[600px] mx-auto h-[1100px] border-4 border-slate-950">
        {/* <img className='absolute w-full top-0 left-0 -z-10' src={background} alt="" /> */}
        <img className='sticky bg-white z-30 top-0 left-0 w-full' src={statusBar} alt="" />
        <div className="sticky flex items-center bg-white pb-2 px-6">
            <Link to='/home'>
            <img className='w-10' src={backArrow} alt="" />
            </Link>
            <img className='w-16' src={catIcon} alt="" />
            <h2 className='text-3xl'>CatChat</h2>
        </div>   
        <div className="screen mt-3 h-full px-8">
        </div>
    </div>
  )
}

export default Landing