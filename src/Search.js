import React,{useEffect,useRef, useState} from "react";
import search from './images/Component 2.png'
import {FaArrowLeft,FaTimes} from 'react-icons/fa'
import { useNavigate, useOutletContext } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'

function Search (){
const inputRef = useRef(null)
const navigate = useNavigate()
const {input,setInput} = useOutletContext()

const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app)

useEffect(() => {
    inputRef.current.focus()
},[])



const handleInput = (event) =>{
  const userInput = event.target.value;

  setInput(userInput)
   
}

const clearInput = () => {
  setInput('')
}

 const navigateBack = () => {
    navigate('/')
 }

 
const navigatetoResult = () => {
  if(input.length > 0){
  navigate('/Second/ResultFromSearch')
  }
  else return
}


const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    if(input.length > 0){
      navigate('/Second/ResultFromSearch')
      }
      else return
   
      
  }

}

  return(



    <div>
        <div className=" w-full items-center  grid place-items-center md:h-18 h-16 bg-white shadow-md shadow-gray-300 ">
     <header className="top-0 lg:w-340 flex md:w-270 xl:w-400 md:grid items-center justify-around relative w-full place-items-center    ">
     <div className="absolute left-6 lg:left-12 md:hidden block" onClick={navigateBack}><FaArrowLeft className="text-xl"/></div>
      <div> <input type="text" ref={inputRef} value={input} onChange={handleInput}    onKeyDown={handleKeyDown} placeholder="Search products, brands and categories" className="input-width w-60 sm:w-97 sm:pl-12  md:pl-12 ml-12 md:ml-0 text-base pr-4 sm:border-r sm:border  md:pr-0  placeholder:text-base  border-r-2 outline-none lg:pt-2 lg:pb-2 lg:w-150 xl:w-260 md:w-98 sm:pt-1.5 sm:pb-1.5   border-gray-300" /> </div> 
      <div onClick={navigatetoResult}  > <img src={search} className="absolute right-4 xl:left-80 top-0.5 sm:top-2 md:top-2 md:left-40 sm:left-32 lg:left-64 " /></div>
        <div className="absolute left-6 lg:left-12 hidden hover:cursor-pointer md:block" onClick={navigateBack}><FaArrowLeft className="text-xl"/></div>
     {input.length > 0 ? (   <div className="absolute screen-size sm:right-52 md:right-44 lg:right-72 xl:right-80 right-20" onClick={clearInput}><FaTimes className="text-gray-400 text-lg"/></div>):null}
        <button onClick={navigatetoResult}  className="bg-orange-400 hover:bg-orange-600 absolute hidden sm:block lg:px-3 xl:px-4 sm:px-1 h-10 sm:right-16 xl:ml-1 mt-1 md:right-14 lg:right-28 text-white  font-medium shadow-lg rounded-md">SEARCH</button>

     </header>

     </div>






    </div>
  )

}

export default Search