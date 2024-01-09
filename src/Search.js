import React,{useEffect,useRef} from "react";
import search from './images/Component 2.png'
import {FaArrowLeft} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

function Search (){
const inputRef = useRef(null)
const navigate = useNavigate()
useEffect(() => {
    inputRef.current.focus()
},[])



 const navigateBack = () => {
    navigate('/')
 }

  return(

    <div>
        <div className=" w-full items-center  grid place-items-center md:h-18 h-16 bg-white shadow-md shadow-gray-300 ">
     <header className="top-0 lg:w-340 flex md:w-270 xl:w-400 md:grid items-center justify-around relative w-full place-items-center    ">
     <div className="absolute left-6 lg:left-12 md:hidden block" onClick={navigateBack}><FaArrowLeft className="text-xl"/></div>
      <div> <input type="text" ref={inputRef} placeholder="Search products, brands and categories" className="w-60 sm:w-96 md:pl-12 ml-12 md:ml-0 text-lg pr-4 md:border-r md:border  md:pr-0  placeholder:text-base  border-r-2 outline-none lg:pt-2 lg:pb-2 lg:w-150 xl:w-260 md:w-98 md:pt-1 md:pb-1   border-gray-300" /> </div> 
      <div>  <img src={search} className="absolute right-6 xl:left-80 bottom-0.5 md:bottom-2 md:left-40 lg:left-64 " /></div>
        <div className="absolute left-6 lg:left-12 hidden md:block" onClick={navigateBack}><FaArrowLeft className="text-xl"/></div>
        <button className="bg-orange-400 absolute hidden md:block lg:px-3 xl:px-4 md:px-1 h-10 xl:ml-1 mt-1 md:right-14 lg:right-28 text-white  font-medium shadow-lg rounded-md">SEARCH</button>
     </header>

     </div>



    </div>
  )

}

export default Search