import React from "react";
import {FaSearch} from 'react-icons'
import vector from './images/Vector.png'

function Header (){

    return(
        <div>

            <div className=" md:block  ">
            <header className="  bg-black lg:h-14 sm:h-12 h-12   lg:flex md:flex   md:items-center md:justify-center text-center  w-full ">
                <p className="text-white text-sm  ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <p className="text-white text-sm md:ml-60 lg:ml-80 mr-2 md:block hidden">English  </p>
             <img src={vector} className= "md:block hidden" />
                </header>


                </div>

                <div className="w-full md:h-12 h-10 bg-gray-300 lg:grid  hidden md:place-items-center">
                <div className=" flex xl:w-400 items-center lg:w-340 md:w-270 ">
                    <p className="text-orange-400  text-sm font-medium">Sell on  Exclusive</p>
                    <p className="font-mono font-bold text-lg lg:ml-96 md:ml-80 ">Exclusive <span className="text-gray-400 hover:text-orange-400 font-mono ml-5  ">Pay</span><span className="text-gray-400 hover:text-orange-400 font-mono ml-5  ">Food</span><span className="text-gray-400 font-mono ml-5 hover:text-orange-400  ">LOGISTICS</span></p>
                  
                </div>

                </div>

        </div>
    )
}

export default Header;