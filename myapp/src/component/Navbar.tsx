import{ useState } from 'react';
import img from '../assets/pexels-vincenzo-giove-1928645.jpg'
import {
  MdNotificationsNone,
  MdOutlineDashboard,
  MdLogout,
  MdListAlt,
} from 'react-icons/md';
import {
  BsBookmark,
} from 'react-icons/bs';

import {
  BiUser,
  BiSearch ,
  BiSolidHomeCircle,
} from 'react-icons/bi';
import icon from '../assets/email.png'

import {
  FiLogOut,
  
} from 'react-icons/fi';

import {
  CgMoreO,
} from 'react-icons/cg';





const Menus = [
  { title: "", src: '',gap:true ,icon: <BiSolidHomeCircle /> },
  { title: 'اكتشف', src: '',gap:true , icon: <BiSearch/> },
  { title: 'التنبيهات', src: '',gap:true , icon: <MdNotificationsNone /> },
  { title: 'الرسائل', src: '',gap:true , icon: <img src={icon} alt=""  width={18}/> },
  { title: 'القوائم', src: '',gap:true , icon: <MdListAlt/>},
  { title: 'العلامات المرجعية', src: 'Logout',gap:true ,icon: <MdLogout /> },
  { title: 'موثق', src: '',gap:true ,icon: <BsBookmark /> },
  { title: 'الملف الشخصي', src: '',gap:true ,icon: <BiUser /> },
  { title: 'المزيد', src: '',gap:true ,icon: <CgMoreO /> }
];

const Navbar = () => {

  const [Menu] = useState(Menus)
  const [open, setOpen] = useState(true);
  
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const logout = () => {
    localStorage.removeItem("isLogin");
    window.location.href = "/login/1213";
  };
  return (
    <div className=" h-screen flex items-end justify-end ">
      <div
        className={` ${open ? 'w-48 px-2 ' : 'w-0 hidden '
          } lg:w-72  h-screen border  border-l-neutral-200 relative duration-500`}
      >

        <div className=" justify-center mt-3">

          <div className="flex justify-between">
          <div className="">
      <h1
            className={`text-black  text-2xl text-center duration-200 ${!open && 'invisible'
              }`}
          >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10" enable-background="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x"><path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99 h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" transform="translate(52.39 -25.059)"></path></svg>
          </h1>
      </div>
      
       
     
          </div>
       
          
         
        </div>
        <ul className="pt-6">
          {Menu.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg text-black text-xl items-center gap-x-4 
              ${Menu.gap ? 'mt-2' : 'mt-2'}  `}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                {Menu.title? Menu.title : Menu.title}
                {/* <span className="flex-1">{Menu.title}</span> */}
                
    
              </li>

              
            
            </>
          ))}
        </ul>
  

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 mt-10 rounded-full focus:outline-none focus:shadow-outline" type="button">
      نشر
      </button>
      <div className="mt-20">
<button onClick={logout}> <FiLogOut/></button>
</div>
              
      </div>
            
      <button
        className="fixed lg:hidden z-100  left-1 top-3 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
    
       <img src={img} alt=""  className='rounded-full w-10 h-10'/>
      </button>
      

    </div>
    
  );
}

export default Navbar;