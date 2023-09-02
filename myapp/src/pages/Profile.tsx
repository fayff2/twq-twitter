import React from 'react'
import axios from "axios"
type Itweet = {
  tweet:string;
}
function Profile() {
  const[inputTweet , setInputTweet] = React.useState<Itweet[]>([])
  const showData=()=> {
    axios.get("https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets")
    .then((res)=>{
     console.log(res.data)
     setInputTweet(res.data)

    })
     
 }

 
  return (
    <>

    <div className='h-screen flex justify-center'>

      <div className='border border-slate-200 w-80 h-72 '>
        {/* header photo */}
        <div className='border border-slate-400 '>
          <img className='' src="./src/assets/react_header.png" alt="" />
        </div>
        {/* logo and edit button */}
        <div className='flex justify-between'> 
          <div className='border border-slate-400 h-14 w-14 rounded-full mr-3'>
              <img className='rounded-full w-auto h-14' src="./src/assets/react-logo.png" alt="" />
          </div>
          <div>
            <button className='text-xs ml-3 rounded-full border border-slate-400 p-1 mt-1'>تعديل الملف الشخصي</button>
          </div>
        </div>
        {/* information */}

        <div className='flex flex-col  mr-3 '>
          <p className='text-sm font-bold'>React</p>
          <p className='text-xs text-slate-400 mb-1'>react@</p>
          <div className='flex gap-2'>
            <div className='flex'>
              <img className='w-3 ' src="./src/assets/loc.svg" alt="" />
            <p className='text-xs text-slate-400 mb-1'>
              المملكة العربية السعودية
              </p>

            </div>
            <div className='flex'>
              <img className='w-3 sla text-slate-400' src="./src/assets/calender.svg" alt="" />
            <p className='text-xs text-slate-400  mb-1'>
              انضم في يناير 2013 
              </p>
            </div>

          </div>
          <div className='flex mt-2'>
            <p className='text-xs ml-2'> 593 <span className='text-slate-400'> متابَع</span></p>
            <p className='text-xs '> 144 <span className='text-slate-400'>متابِع</span></p>
          </div>
        </div>

        {/* list */}

        <div className='flex gap-5 text-xs justify-center mt-5'>
          <button onClick={()=> showData()} >المنشورات</button>
          <a href="">الردود</a>
          <a href="">المميزة</a>
          <a href="">الوسائط</a>
          <a href="">الإعجابات</a>
        </div>



      </div> 
    </div>

    
    
    
    
    </>
  )
}

export default Profile