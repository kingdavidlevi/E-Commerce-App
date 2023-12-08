import React from "react";
 import { useNavigate } from "react-router-dom";


function Info () {
const navigate = useNavigate()


const handlechange = () => {
    navigate('/Signup')
}


    return(
        <div className=" overflow-y-hidden md:overflow-y-visible">



<div className="hidden md:block">

<div className=" lg:flex md:flex md:justify-around border-b-r bor pt-6 h-20 border-gray-300  ">    

<div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<p className='text-md font-semibold '>Home</p>
<p to='/Contact' className='text-md font-semibold'>Contact</p>
<p to='/About' className='text-md font-semibold'>About</p>
<p to='./SignUp' className=' text-md font-semibold' >Sign Up</p>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>



<div>
<p className="mt-16 ml-24 ">Sign Up / Error</p>
</div>
<div className="mt-20  grid place-items-center  h-full">
        
    <h2 className="text-4xl text-center font-semi">Opps You've NOt Signed Up Yet!</h2>
    <p className=" text-sm text-center mt-10">Your visited page not found. <span className="ml-1"> You may go to the Sign Up page</span> </p>
    <div>
    <button onClick={handlechange}  className=" pt-1 pb-1  md:px-8 bg-red-400 rounded  ml-10 text-white mt-6">Back to Sign Up page</button>
    
 
    </div>
</div>

</div>






        </div>
    )
}

export default Info;