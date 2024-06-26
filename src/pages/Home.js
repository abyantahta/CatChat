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
const Home = () => {
  return (
    <div className="container relative text-4xl font-bold font-title  w-[600px] overflow-auto mx-auto h-[1100px] border-4 border-slate-950">
        <img className='absolute w-full h-[145vh] top-0 left-0 -z-10' src={background} alt="" />
        {/* <div className=""> */}
        <img className='sticky bg-white z-30 top-0 left-0 w-full' src={statusBar} alt="" />
        {/* </div> */}
        <div className="screen mt-3 h-full px-8">
            <div className="logo flex items-center ">
                <img className='w-16' src={catIcon} alt="" />
                <h2>CatChat</h2>
            </div>
            <h2 className='mt-8'>Welcome, Felix!</h2>
            <div className="relative overflow-hidden p-6 rounded-xl shadow-lg border-2 border-gray-300 mt-4 bg-white">
              {/* <div className=""> */}
                <h2 className='text-2xl'>Felix Kjellberg</h2>
                <h3 className='text-xl font-normal'>3 years, 2 months</h3>
                <p className='text-xl font-normal mt-5'>Maine coon</p>
                <Link className='text-lg font-semibold bg-biru rounded-md text-white px-6 py-2 hover:duration-75 duration-75 hover:brightness-125 ' to=''>Start Consultation</Link>
              {/* </div> */}
              <img className='absolute right-0 top-0 h-full' src={catImage} alt="" />
              
            </div>
            <button className='outline-none bg-blue-100 px-4 py-2 shadow-md rounded-md mt-4 w-full flex justify-between '>
              <div className="flex items-center gap-3">
                <img src={catIcon2} alt="" className='w-8'/>
                <p className='text-xl'>Have more cats?</p>
              </div>
              <div className="flex items-center gap-3">
                <p className='text-xl'>add Now?</p>
                <img src={arrow} alt="" className='w-8'/>
              </div>
            </button>
            <h2 className='mt-8'>Cat Wiki</h2>
            <Link className="w-full">
              <div className="bg-yellow-400 h-42 rounded-t-xl mt-4 overflow-hidden">
                <img className='w-full' src={cat1} alt="" />
              </div>
              <div className="bg-white p-6">
                <h2 className='text-3xl'>Cat's Adoption - What's Next?</h2>
                <p className='text-red-500 text-xl'>A guide towards a healthy feline buddy</p>
                <div className="flex justify-between mt-4">
                  <p className='text-lg bg-biru text-white px-3 py-1 rounded-md font-semibold'>5 mins read</p>
                  <p className='text-lg text-slate-500 font-normal'>posted 5 days ago</p>
                </div>
              </div>
            </Link>
            <Link className="w-full mt-8 inline-block">
              <div className="bg-yellow-400 h-42 overflow-hidden rounded-t-xl mt-4 overflow-hidden">
                <img className='w-full' src={cat2} alt="" />
              </div>
              <div className="bg-white p-6">
                <h2 className='text-3xl'>Cat's Adoption - What's Next?</h2>
                <p className='text-red-500 text-xl'>A guide towards a healthy feline buddy</p>
                <div className="flex justify-between mt-4">
                  <p className='text-lg bg-biru text-white px-3 py-1 rounded-md font-semibold'>5 mins read</p>
                  <p className='text-lg text-slate-500 font-normal'>posted 5 days ago</p>
                </div>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Home