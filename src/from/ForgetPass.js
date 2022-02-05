import React from 'react';
import {Link} from "react-router-dom"
// import Home from "./datepiker"
import Datepiker from './datepiker';
export const ForgetPass = () => {
  return <div className="bg-[#093545] h-screen flex items-center justify-center">
 <div className='flex flex-col content-center'>
  {/* Header */}
  <div className ="flex items-center justify-center text-[64px] font-bold text-white ">
    Forget Password
    </div>

  <div className ="flex items-center justify-center text-[18px] font-raguler text-white bg-center">
    Lorem Ipsum is simply dummy text
    </div>

  {/* From Field */}
  <div className='flex items-center justify-center flex-col mt-[10px]'>
          <from action="">
                    <div className='mt-[10px]'>
                      <input className='bg-[#224957] text-[14px] h-[45px] w-[350px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Uasername' />
                    </div>
                   
                    <div className='mt-[10px]'>
                      <input className='bg-[#224957] text-[14px] h-[45px] w-[350px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Email Uasername' />
                    </div>


                    <Datepiker/>

                    </from>
                    <Link to="/Sucess" >
                    <button className=' text- bg-[#ffa800] hover:bg-white hover:text-[#ffa800] mt-[10px] font-bold w-[350px] h-[45px] p-[10px] text-[16px] rounded-[10px] text-[#093545]'  > Submit </button>
                    </Link>
  </div>
 </div>

  </div>
};

export default ForgetPass