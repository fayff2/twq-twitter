import axios from "axios";
import Navbar from "../component/Navbar"
import { useEffect, useState } from "react";
import img from '../assets/pexels-vincenzo-giove-1928645.jpg'
// import { Link } from "react-router-dom";

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

import {
  FcLike,
} from 'react-icons/fc';



type Itweet = {
  tweet:string;
  id:string;
  like:boolean;
  
}
function Home() {

  const flag = localStorage.getItem("isLogin");
  if (!flag) {
    window.location.href = "/login";
  }

  
  // const userName = localStorage.getItem("userName")
  // console.log(userName)
  const[inputTweet , setInputTweet] = useState<Itweet[]>([])
  const [isActive , setIsActive]= useState<boolean>(false);

    const [tweet ,setTweet] = useState <Itweet>({
       tweet:"" ,
       id: "",
       like:false,
    })

    useEffect(()=>{
      getTweet()
    },[]);
  

  const postTweet = ()=> {
    axios.post("https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets",{
     tweet:tweet.tweet,
     like:tweet.like,
     
    }).then(()=>{
     getTweet()
    }).catch(err=> console.log(err))
     
 }
    const getTweet =()=> {
      axios.get("https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets")
   .then((res)=>{
       console.log(res.data)
       setInputTweet(res.data)

      })
       
   }
 
   const like = (id:string)=>{
    axios.put(`https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets/${id}`,{
       like:true,
    }).then((res)=>{
    console.log(res)
  
    })
   }
  

  const delbtn =(id:string)=>{
    axios.delete(`https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets/${id}`)
    .then((res)=>{
        console.log(res)
        setInputTweet(inputTweet.filter((del)=>{
            return del.id !==id;

        }))
    })
}


  return (<>
   <div className='flex h-full overflow-scroll' >
  <Navbar></Navbar> 
 <div className=" w-full h-screen overflow-scroll lg:flex lg:flex-col lg:items-center ">

<div className=" mt-3 border-b w-full">   

<div className="">
  <h1 className="mx-5 text-3xl">الرئيسيّة</h1>
</div>
    <div className=" flex gap-10 overflow-scroll text-lg mx-2 my-4 lg:flex lg:justify-center lg:items-center text-zinc-600 cursor-pointer">
      <span>لك</span>
      <span>الموضوعات المتداولة</span>
      <span>أخبار</span>
      <span>رياضة</span>
      <span>ترفية</span>
    </div>

</div>
<div className="border-b h-60 w-full mb-10">
<input type="text" className="border-b  w-full h-4/6 input-tweet "  placeholder="ماذا يحدث؟"  onChange={e =>setTweet({...tweet,tweet:e.target.value})} />
<div className=" flex justify-between items-center gap-10 mx-20 my-2">
  <div className="flex gap-2">
  <span className="text-blue-400 text-xl"><HiOutlinePhotograph/></span>
  <span className="text-blue-400 text-xl"><AiOutlineFileGif/></span>
  <span className="text-blue-400 text-xl"><CiLocationOn/></span>
  </div>

  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={postTweet}>
      نشر
      </button>
  {/* <button onClick={postTweet} className="border">نشر</button> */}
</div>
</div>

<div className="h-screen overflow-scroll w-full">
 {inputTweet.map((item)=>(

<div className=" border bg-white overflow-scroll w-full">
  <div className="title flex justify-between mx-5 my-2">
    <div className="flex justify-center items-center gap-1 ">
    <img src={img} alt="" className='rounded-full w-10 h-10'/>
    <div className="">  <span className="text-zinc-600">fay@</span>   <span className="font-bold">Fay Aldossri</span></div>
    </div>
    <div className="">
     <p className="cursor-pointer"  onClick={()=>delbtn(item.id)}>...</p> 
    </div>
  </div>
  <div className="content">
  <p className="text-black m-5">{item.tweet}</p>
  </div>
  <div className="flex gap-20 mx-5 my-2 text-neutral-500 justify-center items-center text-xl">
    <span><FaRegComment/></span>
    <span><FaRetweet/></span>
  
  
    <button className=" cursor-pointer" onClick={()=>{localStorage.setItem("id",item.id),like(item.id)}}>
    {/* <span><AiOutlineHeart/></span></button> */} {item.like?(<FcLike/> ) : (<AiOutlineHeart/>)} </button>
    
    <span ><BiBarChart/></span>
   
  
    <span><AiOutlineShareAlt/></span>
  </div>


</div>

))}

</div> 



</div>
<div className="hidden lg:flex w-3/6 border h-screen">
  <div className="relative w-4/5 mt-5">
        <div className="absolute  right-10 top-3 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-60  mx-5 lg:w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="         بحث"/>
      
    </div>
</div> 
 


{/* <input type="text" className="border" placeholder="ماذا يحدث؟"  onChange={e =>setTweet({...tweet,tweet:e.target.value})} />
<button onClick={postTweet} className="border">نشر</button>

{inputTweet.map((item)=>(


    <div>
    <p  className="text-black">{item.tweet}</p>

    </div>
   
))} */}


<div/>
</div>
  
  </>)}




export default Home