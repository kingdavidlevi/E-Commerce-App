import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import generator from './images/1 (6).jpg'
import up from './images/Drop-Up-Small.png'
import down from './images/Drop-Down-Small (1).png'
import { useNavigate } from "react-router-dom";



function Cart() {
const [addCart, setAddCart] = useState(1)
const [zero,setZero] = useState(true)
const navigate = useNavigate()


const Add = () =>{
setAddCart(prevstate => prevstate + 1)

if(addCart >= 9){
setZero(false)
}



}


const Subtract = () =>{
setAddCart(prevstate => prevstate - 1)

if(addCart === 1){
  setAddCart(1)
}

if(addCart <= 10){
  setZero(true)
}

}



const Back = () => {
   navigate('/')
}

return(
   <div >


    <div>
      <p className=" mt-14 lg:ml-24 xl:ml-36 md:ml-14 mb-14 font-normal text-gray-400 text-lg  " ><NavLink to='/'>Home</NavLink>   / <span className="font-medium text-black">Cart</span></p>  
    </div>

    <div className="flex md:pl-8 md:pr-10 lg:ml-24  mb-6 justify-between items-center md:ml-14 lg:w-310 h-18 shadow-xl xl:w-370 bg-white md:w-265 xl:ml-36">

      <div><p className="text-lg font-medium " >Products</p></div> 
      <div><p className="text-lg font-medium">Price</p></div> 
      <div><p className="text-lg font-medium">Quantity</p></div> 
      <div><p className="text-lg font-medium">Subtotal</p></div> 

    </div>


<div className="flex md:pl-4 lg:ml-24 md:pr-10  mb-6 justify-between items-center md:ml-14   lg:w-310 h-26 shadow-xl xl:w-370 xl:ml-36 bg-white  md:w-265">

<div className="flex  ">
  <img src={generator} className="h-18 w-18" />
  <p className="font-medium mt-6 ml-1">Sumec Generator</p>  
</div>


<div className="mr-28 ">
<p className="font-medium">$500</p>
</div>



<div className="border-gray-300 mr-36 justify-around items-center flex border-2 h-11 w-18 rounded-md  ">

<div><p>{zero && <span>0</span>}{addCart}</p></div>

<div className="w-4 h-8">
  <div onClick={Add}><img src={up} /> </div>
  <div onClick={Subtract}><img src={down} /> </div>


</div>

</div>


<div>
<p className="font-medium">$500</p>
</div>


</div>




<div className="flex  lg:ml-24  md:ml-14  justify-between items-center    lg:w-310 h-14   xl:w-370 xl:ml-36  md:w-265">
<div onClick={Back} c className="h-14 w-53 cursor-pointer border-2 text-center grid place-content-center  border-gray-300 rounded-md "><p className="font-medium">Return To Shop</p></div>
<div className="h-14 w-53 border-2  cursor-pointer text-center grid place-content-center  border-gray-300 rounded-md"><p className="font-medium">Update Cart</p></div>

</div>
 




<div className="flex    md:ml-14 mt-20 lg:w-310 xl:w-370 mb-36 justify-between md:w-265 h-80 lg:ml-24 xl:ml-36">
<div className="flex h-14 gap-4 w-100">
  <div className="h-14 md:w-48 lg:w-60 grid items-center pl-4 border-2 rounded-md border-gray-400 bg-white "><p className="text-md font-medium  text-gray-300">Coupon Code</p></div>
  <div className="h-14 lg:w-52 md:w-38 grid place-content-center rounded-md bg-orange-700"><p className="text-white text-lg font-medium  ">Apply Coupon</p></div>
</div>


<div className=" pl-4 pt-4 pr-3 border-2 rounded-md border-gray-400 xl:h-77 lg:h-72 lg:w-90 md:w-80 md xl:w-99">
<div className="mb-4"><p className="text-lg font-medium">Cart Total</p></div>


<div className="flex justify-between h-6 lg:w-86 xl:w-101 mb-2">
<p className="font-medium">Subtotal:</p>
<p className="font-medium">$1250</p>

</div>
<hr className="border border-gray-300 lg:w-86 xl:w-101"/>








</div>


</div>












    </div>

)
    
}



export default Cart;