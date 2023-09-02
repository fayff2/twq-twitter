import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type event = {
    email: string;
    password: string;
  };

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const submitLogin =()=>{
        axios.get("https://64ec68e3f9b2b70f2bfa43c4.mockapi.io/login").then(res =>{
            console.log(res.data)
          
          const isLogin = res.data.some((e:event) => {
          return e.email ===email && e.password === password;
            
          });

          localStorage.setItem("isLogin", isLogin);
          if (isLogin) {
            nav("/home");
          } else {
            alert("not login");
          }

           
        })
    }

  return (
    <>
    {/* <input type="text"  value={email} placeholder='email' onChange={e => setEmail(e.target.value)}/>
    <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={submitLogin}>login</button> */}

<div className="flex justify-center items-center h-screen">
<div className="w-full max-w-xs">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
    البريد الالكتروني
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={email} placeholder="ادخل البريد الالكتروني"  onChange={e => setEmail(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
     كلمة المرور
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  value={password} id="password" type="password" placeholder="********" onChange={e => setPassword(e.target.value)}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitLogin}>
      تسجيل الدخول 
      </button>
    </div>
  </div>
 
</div>
</div>
  
    </>
  )
}
