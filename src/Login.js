import React from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink } from "react-router-dom";





function Login (){


    return(
        <div className="  relative overflow-y-hidden h-screen md:overflow-y-visible">
 



  <div className="hidden md:block">  

<div className=" lg:flex md:flex md:justify-around border-b-r bor pt-6 h-20 border-gray-300  ">    

 <div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<NavLink to='/CreateInfo' className='text-md font-semibold hover:underline'>Home</NavLink>
<NavLink to='/CreateInfo' className='text-md font-semibold hover:underline'>Contact</NavLink>
<NavLink to='/CreateInfo' className='text-md font-semibold hover:underline'>About</NavLink>
<NavLink to='/SignUp' className='hover:underline text-md font-semibold' >Sign Up</NavLink>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>





        <div className="md:flex lg:justify-center  md:mt-20 lg:mt-20    ">

            <div className=" lg:mr-24 md:mr-6  ">
            <img src={imgages} className=" lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />
            </div>

            <div className="mt-16 ">
                <h3 className=" lg:text-2xl lg:semibold  md:text-2xl md:semibold">Log in to Exclusive </h3>
                <p className="mt-6 text-sm">Enter your details below</p>
                <form>
                    <input type="text" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90  outline-none md:mt-10 md:mb-6' placeholder="Name"required /> <br/>
                    <input type="email" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none md:mb-6' placeholder="Email Address" required /><br/>
                    <input type="password" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none md:mb-6' max={25} placeholder="Password" required/><br/>
                     <button type="submit" className="rounded-lg pt-1 pb-1 md:w-90 bg-red-400 lg:w-90 text-white mt-4">Login in</button>
                     <p className="text-center mt-8 text-lg">Don't have an account? <span><NavLink to='/Signup' className='underline'>Sign Up</NavLink></span></p>
                </form>
            </div>
        </div>



        </div> 





        </div>
    )
}


export default Login;