import React, { useEffect, useState } from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
import background from '../images/background.png'
import catHero from '../images/catHero.png'
import camera from '../images/camera.png'
import sendIcon from '../images/sendIcon.png'
import close from '../images/close.png'
import backArrow from '../images/backArrow.png'
import cat1 from '../images/cat1.png'
import { Link } from 'react-router-dom'
const Article = () => {

  return (
    <div className="container relative text-4xl font-bold font-title  w-[600px] mx-auto h-[1100px] border-4 border-slate-950">
        <img className='bg-white' src={statusBar} alt="" />
        <div className="bg-white pl-4 flex items-center ">
          <Link to='/home'><img className='w-10' src={backArrow} alt="" /> </Link>
          {/* <img className='w-16' src={catIcon} alt="" /> */}
          <h2 className='text-3xl'>CatWiki</h2>
        </div>
          <div className="bg-red-400 mt-6 w-full">
            <img src={cat1} alt="" className='w-full' />
          </div>
        <div className="screen px-8 pt-8 h-[830px] overflow-auto font-semibold text-left flex flex-col gap-2">
          <h7 className='text-xl text-slate-500'>Posted 5 days ago</h7>
          <h2 className='text-3xl'>Cat's adoption - What's Next?</h2>
          <h7 className='text-red-600 text-xl'>A guide towards a healthy feline buddys</h7>

          <p className='text-lg mt-4'>There is plenty to think about as you prepare to bring your new feline friend home for the first time, and though it may seem daunting at first, we have lots of helpful advice to make this transition as smooth as possible for both you and your new pet. <br /> <br />Preparing for the first few days When a cat arrives home for the first time it can be a very stressful period. They have usually come from a place they have known well and are suddenly thrown into a world that smells funny, looks enormous and it can be very daunting. <br /><br />There is plenty to think about as you prepare to bring your new feline friend home for the first time, and though it may seem daunting at first, we have lots of helpful advice to make this transition as smooth as possible for both you and your new pet.</p>
        </div>


    </div>
  )
}

export default Article