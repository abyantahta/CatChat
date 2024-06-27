import React, { useEffect, useState } from 'react'
import statusBar from '../images/statusBar.png'
import catIcon from '../images/catIcon.png'
import background from '../images/background.png'
import catHero from '../images/catHero.png'
import camera from '../images/camera.png'
import sendIcon from '../images/sendIcon.png'
import close from '../images/close.png'
import backArrow from '../images/backArrow.png'
import { Link } from 'react-router-dom'
const Chat = () => {
  const [message,setMessage]= useState('')
  const [messages,setMessages]= useState([])
  const [files,setFiles] = useState()
  const [previews,setPreviews] = useState()
  const handleSend = () => {
    setMessages([...messages,{
      sender : 'user',
      message : message,
      file : files,
      preview: previews
    }])
      setFiles('')
      setPreviews('')
    console.log(messages)
  }
    useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);
  return (
    <div className="container relative text-4xl font-bold font-title  w-[600px] mx-auto h-[1100px] border-4 border-slate-950">
        <img className='absolute w-full h-full top-0 left-0 -z-10' src={background} alt="" />        
        <img className='bg-white' src={statusBar} alt="" />
        <div className="bg-white pl-4 flex items-center ">
          <img className='w-10' src={backArrow} alt="" />
          <img className='w-16' src={catIcon} alt="" />
          <h2 className='text-3xl'>CatChat</h2>
        </div>
        {/* <label htmlFor="file-input">
          <img src={catIcon} alt="" />
        </label>
        <input type="file" id='file-input'accept="image/jpg, image/jpeg, image/png"className='hidden'onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFiles(e.target.files);
          }
        }}/> */}
      {/* {previews &&
        previews.map((pic) => {
          return <img alt='moko' src={pic} />;
        })} */}
        <div className="screen px-8 pt-8 h-[830px] overflow-auto font-semibold text-left flex flex-col gap-6">
            <p className='self-start w-3/4 text-xl bg-white p-6 shadow-xl rounded-b-xl rounded-r-xl break-words'>Tell us about the condition of your cat!</p>
            {
              messages.map((message)=>{
                if(message.sender==='user') return (
                  <div className="self-end w-3/4 text-xl bg-biru text-white p-4 shadow-xl rounded-b-xl rounded-l-xl">
                    {
                      message.preview && message.preview.map(pic=>(
                        <img src={pic} alt="" className='mb-4' />
                      ))
                    }
                    <p className=''>{message.message}</p> 
                  </div>
                ) 
                return(
                  <p className='self-start w-3/4 text-xl bg-white p-6 shadow-xl rounded-b-xl rounded-r-xl'>{message.message}</p>
                )
              })
            }
            {/* <h2>hdasdhsaudhsa</h2> */}
          <div className="absolute flex  bottom-0 pb-12 px-8  left-0 w-full ">
            {previews &&
            previews.map((pic) => {
              return (
                <div className="absolute top-[-150%] px-8 left-0 w-full ">
                  <div className="h-36 p-4 bg-white rounded-md flex items-center justify-between">
                    <img className=' h-full' alt='moko' src={pic} />
                    <button className='w-12' onClick={()=>{
                      setFiles('')
                      setPreviews('')
                    }}>
                      <img src={close} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="w-full bg-white shadow-2xl rounded-md text-xl font-medium flex items-center px-4">
              <label htmlFor="file-input" className='bg-red'>
                <img src={camera} alt="" className='w-16 cursor-pointer'/>
              </label>
              <input type="file" id='file-input'accept="image/jpg, image/jpeg, image/png"className='hidden'onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files);
                }
              }}/>
              <input type="text" onChange={(e)=>setMessage(e.target.value)} className='w-full  shadow-2xl rounded-md text-xl p-4 px-8 font-medium outline-none break-words' />
              <button onClick={handleSend} className='cursor-pointer hover:scale-105 duration-75 hover:duration-75'>
              <img className='h-12' src={sendIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chat