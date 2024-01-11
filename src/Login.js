import React from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink } from "react-router-dom";





function Login (){


    return(
        <div className="  relative overflow-y-hidden h-screen md:overflow-y-visible">
 



  <div className="block">  

<div className=" lg:flex md:flex md:justify-around border-b-r bor pt-6 h-20 border-gray-300 hidden ">    

 <div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>Home</NavLink>
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>Contact</NavLink>
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>About</NavLink>
<NavLink to='/Second/SignUp' className='hover:underline text-md font-semibold' >Sign Up</NavLink>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>





        <div className="md:flex lg:justify-center  md:mt-20 lg:mt-20    ">

            <div className=" lg:mr-24 md:mr-6  hidden md:block">
            <img src={imgages} className=" lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />
            </div>

            <div className="md:mt-16 md:block grid place-content-center items-center h-screen">
                <h3 className=" lg:text-2xl text-center md:text-start lg:font-semibold  md:text-2xl font-semibold md:font-semibold">Log in to Exclusive </h3>
                <p className="md:mt-6 mt-14  text-sm">Enter your details below</p>
                <form>
                    <input type="text" className='border-2 border-r-0 border-l-0 pb-1 w-80 border-t-0 border-gray-300 lg:w-96 md:w-90  outline-none mt-10 mb-6' placeholder="Name"required /> <br/>
                    <input type="email" className='border-2 border-r-0 border-l-0 pb-1 w-80 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none mb-6' placeholder="Email Address" required /><br/>
                    <input type="password" className='border-2 border-r-0 border-l-0 pb-1 w-80 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none mb-6' max={25} placeholder="Password" required/><br/>
                     <button type="submit" className="rounded-lg pt-1 pb-1 md:w-90 bg-red-400 w-80 lg:w-90 text-white mt-4">Login in</button>
                     <p className="text-center mt-8 text-lg">Don't have an account? <span><NavLink to='/Second/Signup' className='underline'>Sign Up</NavLink></span></p>
                </form>
            </div>
        </div>



        </div> 





        </div>
    )
}


export default Login;