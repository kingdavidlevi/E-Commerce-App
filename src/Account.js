import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import {FaBars  } from "react-icons/fa";



function Account () {

const {mobileFixed} = useOutletContext()


return(
    <div className="mb-36">


 <div className= {`${mobileFixed ? "flex justify-between px-8 w-full z-10 fixed top-0   lg:hidden h-14 place-items-center bg-gray-300 " :  "flex px-8 justify-between w-full z-10    lg:hidden h-14 place-items-center bg-gray-300 " } `} >
<div><FaBars className="text-lg "/></div>

<div><p>Welcome</p></div>
 </div>






    <div className="lg:flex hidden justify-center lg:justify-around  mb-6 mt-6 lg:mb-20 md:mb-12 md:mt-16">

    <div>  <p className="  font-normal text-gray-400 text-md   " ><NavLink to='/'>Home</NavLink>   / <span className="font-medium text-black">My Account</span></p> </div>

<div className="xl:w-315 lg:w-305 hidden  lg:flex justify-end">
<p>Welcome ....</p>
</div>

    </div>




     <div className="flex justify-around">
      

  <div className="hidden lg:block">

     <div>
       <p className="font-medium text-sm text-black">Manage My Account</p>

     <div className=" h-20 pl-8">
      <p className="text-red-400 mt-4 text-md">My Profile</p>  
      <p className="text-gray-400 mt-1 text-md">Address Book</p>  
      <p className="text-gray-400 mt-1 text-md">My payments Options</p>  
     </div>
    </div>






<div>

<p className="font-medium mt-4 text-sm text-black">My Orders</p>

<div className=" h-14 pl-8  mb-4">
 <p className="text-gray-400 mt-4 text-md">Address Book</p>  
 <p className="text-gray-400 mt-1 text-md">My Cancellations</p>


</div>
     </div>

 <div>
 <h3 className="font-medium text-sm text-black">My Wishlist</h3> 
 </div>


     </div>





<div className="shadow-2xl hidden lg:block  bg-white xl:w-310 lg:w-280 md:w-260 md:h-260  md:pt-10">


    <div className="grid place-items-center ">
    <div className=" xl:w-255 lg:w-256 md:w-200">
 <h3 className="font-medium text-red-400 ">Edit Your Profile</h3>
 </div>
 </div>




<div className="w-full grid place-items-center">


<div className="flex justify-around md:w-250 xl:w-130 lg:w-255  md:h-22">

<div className="xl:w-82 md:w-70 lg:w-75 md:h-20 mt-6">
 <label  className="font-medium">First Name</label> <br/>
 <input type="text" className=" text-gray-400  bg-gray-100 md:h-10 rounded-md pl-4 outline-none mt-1 md:w-70 lg:w-75 xl:w-82" />
</div>


<div className="xl:w-82 lg:w-75 md:h-20 mt-6">
 <label  className= "font-medium">Last Name</label> <br/>
 <input type="text" className=" md:w-70 text-gray-400  bg-gray-100 rounded-md md:h-10 outline-none pl-4 lg:w-75 mt-1 xl:w-82" />
</div>


</div>


<div className="flex justify-around md:w-250 lg:w-255 xl:w-130 xl:h-22">

<div className="xl:w-82 lg:w-75 md:h-20 mt-8">
 <label  className="font-medium">Email</label> <br/>
 <input type="email" className=" md:w-70 lg:w-75 text-gray-400  bg-gray-100 md:h-10 rounded-md pl-4 outline-none mt-1 xl:w-82" />
</div>


<div className="xl:w-82 lg:w-75 md:h-20 mt-8">
 <label   className="font-medium">Address</label> <br/>
 <input type="text" className="text-gray-400 lg:w-75 md:w-70 bg-gray-100 rounded-md md:h-10 outline-none pl-4 mt-1 xl:w-82" />
</div>


</div>







<div className="xl:w-255 md:w-200 lg:w-256 md:mt-8 xl:mt-12 xl:h-56">

<label   className="font-medium">Password Changes</label> <br/>

<div className="w-full grid place-items-center mt-1">
<input className="xl:w-255 md:w-200 lg:w-256 rounded-md h-10  text-gray-400 outline-none  bg-gray-100 pl-4" type="password" placeholder="Current Password"/> <br/>
<input className="xl:w-255 md:w-200 lg:w-256 rounded-md h-10 text-gray-400 outline-none bg-gray-100 pl-4" type="password" placeholder="New Pasword"/> <br/>
<input className="xl:w-255 md:w-200 lg:w-256 rounded-md h-10 text-gray-400 outline-none bg-gray-100 pl-4" type="password" placeholder="Confirm New Password"/> <br/>

</div>

</div>


</div>



<div className=" mt-4 grid place-items-center ">

    <div className="flex justify-end gap-4 lg:w-256 xl:w-255">
    <button className="md:w-53 h-12 text-lg font-medium hover:bg-slate-200 rounded-md" type="button" >Cancel</button>
    <button className="text-white text-lg font-normal md:w-53 h-12 rounded-md bg-red-600" type="button" >Save Changes</button>
    </div>
</div>




</div>









<div className={`${mobileFixed ? "shadow-2xl lg:hidden block mt-30 bg-white xl:w-310 lg:w-280 md:w-260 md:h-260 w-90 pt-4  md:pt-10" : "shadow-2xl pt-4 w-90 lg:hidden block mt-16 bg-white xl:w-310 lg:w-280 md:w-260 md:h-260  md:pt-10" }`}>


    <div className="grid place-items-center ">
    <div className=" xl:w-255 lg:w-256 md:w-200">
 <h3 className="font-medium text-red-400 ">Edit Your Profile</h3>
 </div>
 </div>




<div className="w-full grid place-items-center">


<div className="md:flex block md:justify-around md:w-250 xl:w-130 lg:w-255  md:h-22">

<div className="xl:w-82 md:w-70 lg:w-75 md:h-20 mt-6">
 <label  className="font-medium">First Name</label> <br/>
 <input type="text" className=" text-gray-400  bg-gray-100 md:h-10 rounded-md w-70 pl-4 outline-none mt-1 md:w-70 lg:w-75 xl:w-82" />
</div>


<div className="xl:w-82 lg:w-75 md:h-20 mt-6">
 <label  className= "font-medium">Last Name</label> <br/>
 <input type="text" className=" md:w-70 text-gray-400 w-70  bg-gray-100 rounded-md md:h-10 outline-none pl-4 lg:w-75 mt-1 xl:w-82" />
</div>


</div>


<div className="md:flex block md:justify-around md:w-250 lg:w-255 xl:w-130 xl:h-22">

<div className="xl:w-82 lg:w-75 md:h-20 mt-8">
 <label  className="font-medium">Email</label> <br/>
 <input type="email" className=" md:w-70 lg:w-75 w-70 text-gray-400  bg-gray-100 md:h-10 rounded-md pl-4 outline-none mt-1 xl:w-82" />
</div>


<div className="xl:w-82 lg:w-75 md:h-20 mt-8">
 <label   className="font-medium">Address</label> <br/>
 <input type="text" className="text-gray-400 w-70 lg:w-75 md:w-70 bg-gray-100 rounded-md md:h-10 outline-none pl-4 mt-1 xl:w-82" />
</div>


</div>







<div className="xl:w-255 md:w-200 lg:w-256 mt-8 md:mt-8 xl:mt-12 xl:h-56">

<label   className="font-medium">Password Changes</label> <br/>

<div className="w-full grid place-items-center mt-1.5 md:mt-1">
<input className="xl:w-255 md:w-200 lg:w-256 w-70 rounded-md h-10  text-gray-400 outline-none  bg-gray-100 pl-4" type="password" placeholder="Current Password"/> <br/>
<input className="xl:w-255 md:w-200 lg:w-256 w-70 rounded-md h-10 text-gray-400 outline-none bg-gray-100 pl-4" type="password" placeholder="New Pasword"/> <br/>
<input className="xl:w-255 md:w-200 lg:w-256 w-70 rounded-md h-10 text-gray-400 outline-none bg-gray-100 pl-4" type="password" placeholder="Confirm New Password"/> <br/>

</div>

</div>


</div>



<div className=" mt-4 grid place-items-center ">

    <div className="flex justify-end gap-4 lg:w-256 xl:w-255">
    <button className="md:w-53 h-12 text-lg font-medium hover:bg-slate-200 rounded-md" type="button" >Cancel</button>
    <button className="text-white text-lg font-normal md:w-53 h-12 rounded-md bg-red-600" type="button" >Save Changes</button>
    </div>
</div>




</div>




     </div>







    </div>
)


}


export default Account;