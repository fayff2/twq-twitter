import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Rigster() {
    const [inputValue , setInputValue] = useState({
        userName :"",
        email:"",
        password:""
    })
    const [data] =useState([]);
    const navigate = useNavigate();
    const submitData =()=>{
       axios.post("https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/login",inputValue) .then((res)=>{
        console.log(res)

       const {userName , email,password }= inputValue;
 if (userName === ""){
    alert("name field is requred");
 } else if (email === ""){
    alert("email field is requred"); 
 }else if (!email.includes("@")){
    alert("please enter vaild email adress")}
else if (password === ""){
    alert("password field is requred")
 }else if (password.length < 5){
    alert("password length greater five ")
 }else{
    alert("data added succesfully")
    localStorage.setItem("userInfo",JSON.stringify([...data,inputValue]))
    localStorage.setItem("userName",JSON.stringify([...data,userName]))
    navigate('/login')
 }
  

       })

    }
  
  return (
    <>
        {/* <input type="text" onChange={e=>setInputValue({...inputValue,userName:e.target.value})}  className='border m-2'/><br/>
        <input type="text"  onChange={e=>setInputValue({...inputValue,email:e.target.value})}  className='border m-2'/><br/>
        <input type="password" onChange={e=>setInputValue({...inputValue,password:e.target.value})}  className='border m-2' /><br/>
        <button onClick={submitData}>Submit</button> */}


        <div className="flex justify-center items-center h-screen">
<div className="w-full max-w-xs">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
       اسم المستخدم 
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
        placeholder="ادخل اسم المستخدم"  onChange={e=>setInputValue({...inputValue,userName:e.target.value})} />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
    البريد الالكتروني
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  placeholder="ادخل البريد الالكتروني"  onChange={e=>setInputValue({...inputValue,email:e.target.value})} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
     كلمة المرور
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  id="password" type="password" placeholder="********" onChange={e=>setInputValue({...inputValue,password:e.target.value})}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitData}>
      التسجيل 
      </button>
    </div>
  </div>
 
</div>
</div>
        


    </>
  )
}
