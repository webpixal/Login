import React from 'react';
import {Link} from "react-router-dom"
import Sendcon from "./sendcon"


export const ForgetSucess = () => {
  return <div className="bg-[#093545] h-screen flex items-center justify-center">
     
 <div className='flex flex-col content-center'>

 <Sendcon/>
  {/* From Field */}
  <div className='flex items-center justify-center flex-col mt-[10px] text-[24px] font-bold text-white'>
     
        <h1> Passsword Reset Links Has Been Send to</h1>
        <h1> Your Email Sucessfully</h1>

                    <Link to="/" >
                    <button className=' text- bg-[#ffa800] hover:bg-white hover:text-[#ffa800] mt-[10px] font-bold w-[350px] h-[45px] p-[10px] text-[16px] rounded-[10px] text-[#093545]'  > OK </button>
                    </Link>
  </div>
 </div>

  </div>
};

export default ForgetSucess