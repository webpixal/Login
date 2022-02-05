import React from 'react';
import {Link} from 'react-router-dom'
export const LoginForm = () => {
  return <div className="bg-[#093545] h-screen flex items-center justify-center">
 <div className='flex flex-col content-center'>
  {/* Header */}
  <div className ="flex items-center justify-center text-[64px] font-bold text-white ">
    Sign In
    </div>

  <div className ="flex items-center justify-center text-[18px] font-raguler text-white bg-center">
    Lorem Ipsum is simply dummy text
    </div>

  {/* From Field */}
  <div className='fle flex-col mt-[10px]'>
          <from action="">
                    <div className='mt-[10px]'>
                      <input className='bg-[#224957] text-[14px] h-[45px] w-[350px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Uasername' />
                    </div>
                   
                    <div className='mt-[10px]'>
                      <input className='bg-[#224957] text-[14px] h-[45px] w-[350px]  p-[20px] rounded-[10px]' type="text" name='uasername' id='username' placeholder='Enter Your Uasername' />
                    </div>
                    </from>
  </div>
  
  {/* Remember  */}
  <div className= 'flex justify-center flex-nowrap mt-[10px] '>
            <div className='flex flex-nowrap'>
                      <input className='w-[18px] h-[18px] bg-[#224957]  rounded-[5px] appearance-none checked:bg-[#ffa800] ' type="checkbox" />
                      <h3 className='text-[14px] pl-[10px] font-bold text-white'>Remember Me</h3>
                  </div>
                  
                  <div className='flex-row-reverse ml-[100px]'>
                  <Link to="/forget">
                  <h2 className='text-[#ffa800] text-[14px] font-bold'>Forget Password</h2>
                  </Link>
                      
                  </div>

              {/* Button  */}

            </div>
            <div className= 'flex item flex-nowrap gap-x-8 mt-[10px]'>
              <div lassName='flex flex-nowrap'>
                       <button className=' text- bg-[#ffa800] hover:bg-white hover:text-[#ffa800] font-bold w-[155px] h-[45px] p-[10px] text-[16px] rounded-[10px] text-[#093545]'  > Login </button>
                </div>
             
             <div>
               <Link to="/register" >
                      <button className='bg-[#ffa800] hover:bg-white hover:text-[#ffa800] w-[155px] font-bold h-[45px] p-[10px] text-[16px] rounded-[10px] text-[#093545]'> Signup </button>
                </Link>
             </div>
          </div>
      </div>
 {/* main div */}
  </div>
};

export default LoginForm