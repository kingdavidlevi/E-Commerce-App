import React from "react";


function Cart() {

return(
   <div >


    <div>
      <p className=" mt-14 lg:ml-24 md:ml-14 mb-14 font-normal text-gray-400 text-lg  " >Home / <span className="font-medium text-black">Cart</span></p>  
    </div>

    <div className="flex lg:ml-24 md:gap-36 md:ml-14 xl:gap-72 lg:w-310 h-16 shadow-lg xl:w-370  bg-gray-300 md:w-270 ">

      <div><p>Products</p></div> 
      <div><p>Price</p></div> 
      <div><p>Quantity</p></div> 
      <div><p>Subtotal</p></div> 

    </div>


    </div>

)
    
}



export default Cart;