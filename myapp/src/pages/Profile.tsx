import React from 'react'

function Profile() {





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
          <div>
            <button className='text-xs ml-3 rounded-full border border-slate-400 p-1 mt-1'>تعديل الملف الشخصي</button>
          </div>
          <div className='border border-slate-400 h-14 w-14 rounded-full mr-3'>
              <img className='rounded-full w-auto h-14' src="./src/assets/react-logo.png" alt="" />
          </div>
        </div>
        {/* information */}

        <div className='flex flex-col items-end mr-3 '>
          <p className='text-sm font-bold'>React</p>
          <p className='text-xs text-slate-400 mb-1'>@react</p>
          <div className='flex'>
            <p className='text-xs text-slate-400 mr-2 mb-1'>انضم في يناير 2013</p>
            <p className='text-xs text-slate-400 mb-1'>
              المملكة العربية السعودية
              </p>

          </div>
          <div className='flex '>
            <p className='text-xs '>  <span className='text-slate-400 mr-1'> Flowers</span>144</p>
            <p className='text-xs ml-2'>  <span className='text-slate-400 mr-1'> floweing</span>593</p>
          </div>
        </div>

        {/* list */}

        <div className='flex gap-5 text-xs justify-center mt-5'>
          <a href="">الإعجابات</a>
          <a href="">الوسائط</a>
          <a href="">المميزة</a>
          <a href="">الردود</a>
          <a href="">المنشورات</a>
        </div>



      </div> 
    </div>
    
    
    </>
  )
}

export default Profile