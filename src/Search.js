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
        <div className=" w-full items-center  grid place-items-center h-18 bg-white shadow-md shadow-gray-300 ">
     <header className="top-0 lg:w-340 md:w-270 xl:w-400 relative w-full  grid place-items-center  ">
        <input type="text" ref={inputRef} placeholder="Search products, brands and categories" className="w-72 sm:w-82 md:pl-12  pr-6 md:border-r md:border  md:pr-0 pt-1 pb-1 placeholder:text-lg text-xl border-r-2 outline-none lg:pt-2 lg:pb-2 lg:w-150 xl:w-260 md:w-98 md:pt-1 md:pb-1   border-gray-300" />
        <img src={search} className="absolute xl:left-80 md:left-40 lg:left-64 right-6" />
        <div className="absolute left-6 lg:left-12" onClick={navigateBack}><FaArrowLeft className="text-xl"/></div>
        <button className="bg-orange-400 absolute hidden md:block lg:px-3 xl:px-4 md:px-1 h-10 xl:ml-1 mt-1 md:right-14 lg:right-28 text-white  font-medium shadow-lg rounded-md">SEARCH</button>
     </header>

     </div>



    </div>
  )

}

export default Search