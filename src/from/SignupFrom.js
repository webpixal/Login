import React from 'react';
import {Link} from 'react-router-dom'
export const SignupForm = () => {
  return <div className="bg-[#093545] h-screen flex items-center justify-center">
  
  <div>
                <div className="flex flex-col items-center">
                <div className='mt-4'>
                  <h1 className='font-w-[400] text-[64px] text-white'> 
                    Sign Up
                  </h1>
                </div>

                
                <div className='mt-4'>
                  <h2 className='ont-w-[400] text-[24px] text-white'>
                  Enter Your Details to Begin
                  </h2>
                </div>
                
              </div>
                
<div className='mt-4 sm'>
              <div className="grid gap-4 grid-cols-1 md:gap-4 grid-cols-2 ">
                <div>
                    <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='fullname' id='username' placeholder='Enter Your Full Name' />
                </div>
                <div>
                    <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Username' />
                </div>
                <div>
                  <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='email' id='username' placeholder='Enter Your Email Address' />
                </div>
                <div>
                  <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Mobile Numer' />
                </div>
                <div>
                  <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Password' />
                </div>
                <div>
                  <input className='bg-[#224957] text-[14px] h-[45px] w-[300px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Confrim Password' />
                </div>
              </div>
</div>
  

<div className='m-4 ml-[163px]'>
              <div className="grid gap-x-10 pag-y-4 grid-cols-2 place-items-center w-[290px] h-[26]  ">
                <div className='form-check form-check-inline'> 
                      <input className='form-check-input form-check-input appearance-none rounded-full h-[26px] w-[26px] border-[3px] border-[#FFA800] bg-transparent checked:bg-[#FFA800] checked:border-[#FFA800] box-border-[3px] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-auto float-left mr-2 cursor-pointer' type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className='form-check-label inline-block text-white font-bold mt-[3px]' for="inlineRadio10">General ID</label>
                </div>
                <div className='form-check form-check-inline'>
                      <input className='form-check-input form-check-input appearance-none rounded-full h-[26px] w-[26px] border-[3px] border-[#FFA800] bg-transparent checked:bg-[#FFA800] checked:border-[#FFA800] box-border-[3px] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className='form-check-label inline-block text-white font-bold mt-[3px]' for="inlineRadio20">Primium ID</label>
                </div>
              </div>
</div>

<div className='m-4'>

<div className="flex flex-col items-center">
                <div>
                  
                <button className=' text- bg-[#ffa800] hover:bg-white hover:text-[#ffa800] font-bold w-[155px] h-[45px] p-[10px] text-[16px] rounded-[10px] text-[#093545]'> Sign Up </button>
                </div>
                <div className='flex-nowrap w-[239px] mt-4'>
                  <label className='text-[#ffffff] text-[14px]' for="inlineRadio10">Already have an Account
                  
                  <Link to="/">
                  <button className='text-[#ffa800] text-[14px] ml-[10px] font-bold'>Sign in</button>
                  </Link>
                  
                  
                  </label>
                  
                  
                  
                
                
                </div>

                
              </div>
</div>

  </div>
  </div>
};

export default SignupForm