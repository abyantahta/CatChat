import React from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
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
    <div className="container relative text-4xl font-bold font-title  w-[600px] overflow-auto mx-auto h-[1100px] border-4 border-slate-950">
        <img className='absolute w-full h-[145vh] top-0 left-0 -z-10' src={background} alt="" />
        {/* <div className=""> */}
        <img className='sticky bg-white z-30 top-0 left-0 w-full' src={statusBar} alt="" />
        {/* </div> */}
        <div className="screen mt-3 h-full px-8">
        </div>
    </div>
  )
}

export default Landing