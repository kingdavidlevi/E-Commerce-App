import React,{useEffect, useRef,useState} from "react";
import {FaBars,FaCog, FaHeartbeat,FaTimes} from 'react-icons/fa'
import { NavLink,useLocation,useNavigate, useOutletContext } from "react-router-dom";
import MiddlePage from "./MiddlePage";
import './ScrollableComponent.css';
import cart from './images/Cart1.png'
import user from './images/user.png'
import search from './images/Component 2.png'
 


function HomePage() {
 const Ref = useRef()
const location = useLocation()
const {isFixed,mobileFixed,hamburger,setHamburger,formValues,setFormValues,cartDiv,setCartDiv,updateCart,setUpdateCart} = useOutletContext()
const navigate = useNavigate()


const clickHumburger = () => {
  setHamburger(prevstate => !prevstate)
  setUpdateCart(1)
  console.log(updateCart)
 
}



/*window.addEventListener('popstate', function(event){
    if(document.location.pathname === '/Login'){
      Ref.current.NavLink = underline
      
    }
  })*/



 /*  <div className="md:flex md:justify-between  gap-10">
        <NavLink to='/Home' className='text-lg  underline font-medium' ref={Ref}>Home</NavLink>
        <NavLink to='/Contact' className='text-lg font-sm hover:underline font-medium'>Contact</NavLink>
 
        <NavLink to='/About' className='text-lg font-sm hover:underline font-medium'>About</NavLink>
        <NavLink to='./Products' className='hover:underline text-lg font-sm font-medium' >Products</NavLink>
       </div>*/
      

      /* */
        

      const NavigateCart = () =>{

            navigate('/Second/Login')
          }



          
    
    
         
       



      const navigateAccount = () =>{
         navigate('/Account')
      }
    

      const navigateSearch = () =>{
        navigate('/Second/Search')
      }


    return (
        <div  >


     <div className=" hidden  lg:block">

      <div className={`${isFixed ? 'w-full bg-white grid h-18 top-0 z-10   text-black place-items-center fixed' : 'w-full bg-white  text-black grid h-18 top-26 z-10  place-items-center '   }`}>

        <div className=" lg:flex md:flex  xl:w-400  lg:w-340   md:w-270 ">    

         <div className=" lg:mr-3 md:mr-3 xl:mr-16"><p className='md:text-3xl lg:text-4xl text-black  md:font-bold font-mono' >Exclusive</p></div>


       



       <div className="relative flex xl:gap-4 lg:gap-3 md:gap-2" >
        <form>
        <div onClick={navigateSearch} className={`${isFixed ? " text-lg rounded-md  text-gray-400  bg-white border-r  border-black pl-12 lg:pt-2 lg:pb-2 lg:w-150 xl:w-260 md:w-98 md:pt-1 md:pb-1 outline-none pr-8    mt-1" : " xl:w-260 text-lg rounded-md  text-gray-400 bg-white border-r  border-black pl-12 lg:pt-2 lg:pb-2 lg:w-150 md:w-98 md:pt-1 md:pb-1 outline-none pr-8     mt-1" }`} ><p>Search Products, brands and categories</p></div>
        </form>
        <button className="bg-orange-400 hover:bg-orange-600 lg:px-3 xl:px-4 md:px-1 h-10 xl:ml-1 mt-1 text-white  font-medium shadow-lg rounded-md">SEARCH</button>
        <img src={search} className={`${isFixed ? "absolute text-xl bottom-3 text-gray-900 ml-4   " : "absolute text-xl bottom-3 text-gray-900 ml-4   "}`} />
       
       </div>
       
     <div className="flex cursor-pointer hover:text-orange-400 lg:ml-2 xl:ml-8 md:ml-1  " onClick={NavigateCart}>
     <img src={cart}  className="mt-4  h-7 w-7 " />
        <p className= "font-medium mt-4 lg:ml-2 md:ml-1 text-lg" >Cart</p>
           
        </div>


        <div className="lg:flex cursor-pointer hover:text-orange-400 lg:ml-3 xl:ml-8 md:hidden   " onClick={navigateAccount}>
            
        <img src={user}  className={`${isFixed ? " h-9 mt-2  " : "  h-9 mt-2 " }`} />

        <p className="font-medium mt-4 xl:ml-1 md:ml-0 text-lg">Account</p>
      
   
        </div>
   

        </div>

        </div>
 
        </div>

        
        <div className= "lg:hidden fixed bg-white h-28 w-full top-0  z-10 pt-4 px-4" >
         <div className="flex justify-between">
      { hamburger ?   <div className="flex"><span className="text-xl mt-2 mr-3.5" onClick={clickHumburger}><FaTimes/></span> <p className="text-2xl  text-black  font-bold font-mono"> Exclusive</p></div> :
        <div className="flex"><span className="text-lg mt-2 mr-4" onClick={clickHumburger}><FaBars/></span> <p className="text-2xl  text-black  font-bold font-mono"> Exclusive</p></div> }

         <div className="flex" ><div onClick={navigateAccount} className="cursor-pointer"><img src={user} alt="user"  /></div> <div className="ml-4 cursor-pointer" onClick={NavigateCart}><img src={cart} /></div> </div>

         </div>


     <div className="grid place-items-center relative ">
      <img src={search} className="absolute mr-64 sm:mr-100 mt-5 z-10"/>
      <div onClick={navigateSearch} className="w-86 sm:w-100 sm:mt-4 mt-5 sm:text-lg text-sm rounded-full py-1   bg-white text-gray-400   border-r  border-black pl-11  sm:pl-12  outline-none   placeholder-gray-900  "><p>Search Products, brands and categories</p></div>
     </div>

        </div>
   
   <div className="bg-gray-300">
   <MiddlePage/>
   </div>

        </div>
    )
}

export default HomePage;