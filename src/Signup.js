import React from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink } from "react-router-dom";
function Signup (){


    return(
        <div className=" relative overflow-y-hidden h-screen md:overflow-y-visible ">
 


<div className="hidden md:block">


            
<div className=" lg:flex md:flex md:justify-around border-b-r bor pt-6 h-20 border-gray-300 hidden ">    

 <div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<NavLink to='/Info' className='hover:underline text-md font-semibold'>Home</NavLink>
<NavLink to='/Info' className='hover:underline text-md font-semibold'>Contact</NavLink>
<NavLink to='/Info' className='hover:underline text-md font-semibold'>About</NavLink>
<NavLink to='/Login' className='hover:underline text-md font-semibold' >Login</NavLink>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>





        <div className="md:flex lg:justify-center md:mt-20 lg:mt-20   hidden   ">

            <div className=" lg:mr-20 md:mr-6  ">
            <img src={imgages} className="lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />
            </div>

            <div className="mt-16 ">
                <h3 className=" lg:text-2xl lg:semibold  md:text-2xl md:semibold">Create an account</h3>
                <p className="mt-6 text-sm">Enter your details below</p>
                <form>
                    <input type="text" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90  outline-none md:mt-10 md:mb-6' placeholder="Name"required /> <br/>
                    <input type="email" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none md:mb-6' placeholder="Email Address" required autoCapitalize="" /><br/>
                    <input type="password" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 outline-none md:mb-6' max={25} placeholder="Password" required/><br/>
                     <button type="submit" className="rounded-lg pt-1 pb-1 md:w-90 bg-red-400 lg:w-96 text-white mt-4">Create Account</button>
                     <p className="text-center mt-8 text-lg">Already have an account? <span><NavLink to='/Login' className='underline'>Log in</NavLink></span></p>
                </form>
            </div>
        </div>

        </div>






        </div>
    )
}


export default Signup;