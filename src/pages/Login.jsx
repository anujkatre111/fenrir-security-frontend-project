import { CheckIcon, Star, StarIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-between items-center h-screen'>
      <img src='/images/image.png' alt="logo" className='absolute top-0 left-0' />
      <div className='flex ml-[50px]'>
        <div className='flex flex-col gap-4 w-[400px] z-1'>
          <h1 className='text-[32px] tracking-tight leading-tight font-medium text-[#f7f7f7]'>Expert level Cybersecurity
          in<span className='text-[#068f78]'> hours</span> not weeks</h1>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[#F5F5F5] text-[16px] font-light'>What's included</h1>
            <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Effortlessly spider and map targets to uncover hidden security
            flaws</h1>
            <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Deliver high- quality, validated findings in hours, not weeks.</h1>
            <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Generate professional, enterprise - grade security reports
            automatically.</h1>
            <div>
              <h1 className='flex items-center text-[#f7f7f7] text-[14px] font-thin gap-2'><StarIcon fill='#068f78' stroke='#068f78'  className='w-3 h-3' />Trustpilot</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-4 z-1 bg-white rounded-lg p-4 w-[400px] h-[500px] mr-[50px]'>
        <h1 className=''>SignUp</h1>
        <h1 className='text-center text-[#666666] text-[14px] font-thin'>Already have an account? <Link to="/login" className='text-[#068f78]'>Login</Link></h1>
        <form className='flex flex-col gap-4'> 
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          
          <label className='flex items-start gap-3 cursor-pointer'>
            <input type="checkbox" className='mt-1 rounded border-gray-300 text-[#068f78] focus:ring-[#068f78]' />
            <span className='text-sm text-gray-600'>I agree to the <Link to="/terms" className='text-[#068f78] hover:underline'>Terms of Service</Link> and <Link to="/privacy" className='text-[#068f78] hover:underline'>Privacy Policy</Link></span>
          </label>
          <button type='submit' className='bg-[#0aa49c] text-white p-2 rounded-[24px] hover:bg-[#068f78] transition-all duration-300 font-thin'>Create Account</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
