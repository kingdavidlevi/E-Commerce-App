import React from "react";
import gitHub from './images/logo-github.png'
import linkedin from './images/logo-linkedin.svg'
import twitter from './images/logo-twitter.svg'
import { FaInstagram, FaFacebook,FaTwitter } from "react-icons/fa";

function Footer (){
    return(

       <div className="   inset-x-0 bottom-0 bg-black text-white pt-8 pb-10 block">
      

      <div className="mt-4 grid mx-12 border-b-r border-white place-items-center">
       <ul>
        <li  className="text-xl md:text-2xl text-center font-bold text-white">
          Exclusive
        </li>
        <li  className="text-lg mt-6 text-center font-medium text-white"> 
          Gift & decoration store
        </li>
        <li  className="text-lg mt-6 text-center font-medium text-white">
          Shopping made easy
        </li>
        < li className="text-lg  mt-6 text-center  text-white">
          Contact
        </li>
        <li className="text-lg mb-6 mt-6 text-center f text-white">
         Cart
        </li>
         
       </ul>


      </div>
     



        <div className="grid place-items-center mt-6" >
        
        <ul className=" flex gap-5 ">
          <li>
            <FaInstagram className="text-lg" />
          </li>
          <li>
            <FaFacebook className="text-lg"/>
          </li>
          <li>
            <FaTwitter className="text-lg"/>
          </li>
        </ul>

        <ul className="flex gap-8 mt-6" >

          <li className="font-medium text-lg text-white">privacy Policy</li>

          <li className="font-medium text-lg text-white">Terms of Use </li>
        </ul>


        <ul className="mt-6">
          <li className="font-medium text-white">
            Copyright 2023 Exclusive. All rights reserved.
          </li>
        </ul>

        </div>
       
      

        </div>
    )
}


export default Footer;