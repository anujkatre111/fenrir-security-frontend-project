import { CheckIcon,  StarIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-between items-center h-screen'>
      <img src='/images/image.png' alt="logo" className='absolute top-0 left-0' />
      <div className='flex ml-[100px]'>
        <div className='flex flex-col gap-[72px] w-[400px] z-1'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[36px] tracking-tight leading-tight font-medium text-[#f7f7f7]'>Expert level Cybersecurity
            in<span className='text-[#068f78]'> hours</span> not weeks</h1>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[#F5F5F5] text-[16px] font-light'>What's included</h1>
              <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Effortlessly spider and map targets to uncover hidden security
              flaws</h1>
              <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Deliver high- quality, validated findings in hours, not weeks.</h1>
              <h1 className='flex gap-2 text-[#F5F5F5] text-[14px] font-light'><CheckIcon className='w-4 h-4 text-[#068f3b]' /> Generate professional, enterprise - grade security reports
              automatically.</h1>
            <div>
            </div>
          </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='flex items-center text-[#f7f7f7] text-[14px] font-thin gap-2'><StarIcon fill='#068f78' stroke='#068f78'  className='w-3 h-3' />Trustpilot</h1>
                <span className='text-[#f7f7f7] font-regular tracking-tight text-[18px]'> Rated 4.5/5 <span className='text-[#f7f7f7] font-thin text-[12px]'> (100k+ reviews) </span></span>
          </div>
          
        </div>
      </div>


      <div className='flex flex-col justify-center gap-4 z-1 bg-white rounded-lg py-[32px] px-[42px] mr-[100px]'>
        <h1 className='text-[#333333] text-[32px] font-medium text-center'>SignUp</h1>
        <h1 className='text-center text-[#666666] text-[14px] font-thin'>Already have an account? <Link to="/login" className='text-[#068f78]'>Login</Link></h1>
        <form className='flex flex-col gap-4 w-[350px]'> 
          <div className='border border-gray-300 rounded-[8px] px-2 py-3'>
            <input type="text" placeholder="First Name" className='w-full bg-transparent placeholder:text-[#989797] placeholder:text-[12px] placeholder:tracking-tight outline-none' />
          </div>
          <div className='border border-gray-300 rounded-[8px] px-2 py-3'>
            <input type="text" placeholder="Last Name" className='w-full bg-transparent placeholder:text-[#989797] placeholder:text-[12px] placeholder:tracking-tight outline-none' />
          </div>
          <div className='border border-gray-300 rounded-[8px] px-2 py-3'>
            <input type="email" placeholder="Email" className='w-full bg-transparent placeholder:text-[#989797] placeholder:text-[12px] placeholder:tracking-tight outline-none' />
          </div>
          <div className='border border-gray-300 rounded-[8px] px-2 py-3'>
            <input type="password" placeholder="Password" className='w-full bg-transparent placeholder:text-[#989797] placeholder:text-[12px] placeholder:tracking-tight outline-none' />
          </div>
          
          <label className='flex items-start gap-3 cursor-pointer'>
            <input type="checkbox" className='mt-1 rounded border-gray-300 text-[#068f78] focus:ring-[#068f78]' />
            <span className='text-sm text- font-thin'>I agree to the <Link to="/terms" className='text-[#068f78] hover:underline'>Terms of Service</Link> and <Link to="/privacy" className='text-[#068f78] hover:underline'>Privacy Policy</Link></span>
          </label>
          <button type='submit' className='bg-[#0aa49c] text-white p-2 rounded-[24px] hover:bg-[#068f78] transition-all duration-300 font-thin'>Create Account</button>
        </form>

        <div className='flex justify-between'>
          <div className='bg-red-50 flex justify-center items-center w-full py-[4px] rounded-[24px]'>
          <svg className='w-6 h-6' viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
          </div>
          <div className='bg-black flex justify-center items-center w-full py-[4px] rounded-[24px]'>
          <svg className='w-6 h-6' viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>apple [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#ffffff]"> </path> </g> </g> </g> </g></svg>
          </div>
          <div className='bg-[#0c51b1] flex justify-center items-center w-full py-[4px] rounded-[24px]'>
          <svg fill="#ffffff" viewBox="0 0 36 3" id="Camada_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"></path></g></svg>
          </div>
        </div>  

      </div>
      
    </div>
  )
}

export default Login
