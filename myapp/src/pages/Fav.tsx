
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import img from '../assets/pexels-vincenzo-giove-1928645.jpg'
// import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom";


  import {
  
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
  
  
  
  
  


type Ifav = {
    id?:string;  
    tweet:string;
    like:boolean

}

export default function Fav() {
    const[inputTweet , setInputTweet] =React.useState<Ifav[]>([]);
    const [like , setLike]=React.useState([false]);
    const id = localStorage.getItem("id")


    useEffect(()=>{
        getTweet()
    },[]);

    const getTweet =()=> {
        axios.get(`https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/tweets`)
     .then((res)=>{
      if(res.data == true){
          // alert("test")
          setInputTweet(res.data)
          setLike([...like,res.data.like ,inputTweet])
        }
        console.log(res.data + "hello")

  
        })
         
     }
  return (
    <>
    {inputTweet.map(item=>(
      <div key={item.id}>
      {item.id}
      
      </div>
    ))}
 
         {/* <p className="text-black m-5">{inputTweet?.tweet}</p> */}
  
    
    <h1 className='text-center  text-xl font-bold my-5'>Favorite list</h1>

    <div className=" border bg-white overflow-scroll w-full">
  <div className="title flex justify-between mx-5 my-2">
    <div className="flex justify-center items-center gap-1 ">
    <img src={img} alt="" className='rounded-full w-10 h-10'/>
    <div className="">  <span className="text-zinc-600">fay@</span>   <span className="font-bold">Fay Aldossri</span></div>
    </div>
    <div className="">
     <p className="cursor-pointer">...</p> 
    </div>
  </div>
  <div className="content">
 
 
  </div>
  <div className="flex gap-20 mx-5 my-2 text-neutral-500 justify-center items-center text-xl">
    <span><FaRegComment/></span>
    <span><FaRetweet/></span>
  
    <span><FcLike/></span>
    
    <span ><BiBarChart/></span>
   
  
    <span><AiOutlineShareAlt/></span>
  </div>


</div>
    
       




    </>
  )
    
}
