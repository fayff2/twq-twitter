import React from 'react'
import axios from "axios"

import {
  HiOutlinePhotograph,
} from 'react-icons/hi';
import {
  CiLocationOn,
} from 'react-icons/ci';
import {
  AiOutlineFileGif,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';

import {
  FaRegComment,
  FaRetweet,
} from 'react-icons/fa';
import {
  BiBarChart,
} from 'react-icons/bi';

const userInfo={
    username:"react",
    name:"React"
}

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
 const editInf= () => {
  const [name, setName]= React.useState(userInfo.name)
  setName("mmm")
  
 }

 

 
  return (
    <>
    <div className='flex justify-center'>

    <div className='h-screen flex  flex-col '>

      <div className='border border-slate-200 w-96 h-auto '>
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
            <button className='text-xs ml-3 rounded-full border border-slate-400 p-1 mt-1'
            onChange={() => {editInf()}}
            >
              تعديل الملف الشخصي
            </button>
          </div>
        </div>
        {/* information */}

        <div className='flex flex-col  mr-3 '>
          <p className='text-sm font-bold'>{userInfo.name}</p>
          <p className='text-xs text-slate-400 mb-1'>@{userInfo.username}</p>
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

        <div className='flex gap-8 text-xs justify-center mt-5 mb-2'>
          <button onClick={()=> showData()} >المنشورات</button>
          <button>الردود</button>
          <button>المميزة</button>
          <button>الوسائط</button>
          <button>الإعجابات</button>
        </div>



      </div> 

      <div className="h-screen overflow-scroll w-96">
 {inputTweet.map((item)=>(
  
<div className=" border bg-white  w-full">
  <div className="title flex justify-between mx-5 my-2">
    <div className="flex justify-center items-center gap-1 ">
    <img src="./src/assets/react-logo.png" alt="" className='rounded-full w-10 h-10'/>
    <div className="" lang='en' dir='ltr'>  <span className="text-zinc-600">@{userInfo.username}</span>   <span className="font-bold">{userInfo.name}</span></div>
    </div>
    <div className="">
      ...
    </div>
  </div>
  <div className="">
  <p className="text-black m-5">{item.tweet}</p>
  </div>
  <div className="flex gap-14 mx-5 my-2 text-neutral-500 justify-center items-center text-xl">
    <span><FaRegComment/></span>
    <span><FaRetweet/></span>
    <button
      
    >
      <AiOutlineHeart/>
      </button>
    <span><BiBarChart/></span>
    <span><AiOutlineShareAlt/></span>
  </div>


</div>


))}

</div> 
    </div>

    
    
    
    
    </div>
    </>
  )
}

export default Profile