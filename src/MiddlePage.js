import React, { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { FaPhone,FaGamepad,FaLaptop, FaCheck, } from "react-icons/fa";
import Advert from './images/BINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS (1).jpg'
import ImageSlider from "./ImagesSlider";
import vectorSide from './images/Vector (5).png'
import sideImages from './images/Side Image.png'
import page1 from './images/Frame 870.png'
import page2 from './images/Frame 871.png'
import page3 from './images/Frame 872.png'
import page4 from './images/Frame 873.png'
import vector from './images/Vector.png'




/*useEffect(() => {
    const inter = setInterval(() => {
        const currentTime = new Date();
        const targetTime = new Date ('2023-01-01T00:00:00')
        const differnce = targetTime - currentTime;
        setTimeDiffernce(differnce)

    },1000)

    return () => clearInterval(inter)
},[])

const formatTime = (time) => (time < 10 ? `${time}` : `${time}`)

const absoluteDays = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)))

 
const days = Math.floor(timeDifference / (1000 * 60 * 60 *24 ));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((timeDifference % (1000 *60)) /1000)
*/





 function MiddlePage () {
const [timeDifference,setTimeDiffernce] = useState(0)
const [currentDate, setCurrentDate] = useState(new Date())
const [hours,setHours] = useState('')
const [minutes,setMinutes] = useState('')
const [seconds,setSeconds] = useState('')
const [Hover1, setHover1] = useState(false)
const [Hover2, setHover2] = useState(false)
const {isFixed,mobileFixed,hamburger} = useOutletContext()

useEffect(() => {

    const intervalid = setInterval(() => {
        setCurrentDate(new Date())
    
    },1000)
    
    return () => clearInterval(intervalid);
    
    
    },[])



useEffect(() => {
    function  startTime () {
    const today = new Date()
    let h = today.getHours()
setHours(h)
    let m = today.getMinutes()
    setMinutes(m)
    let s = today.getSeconds()
    setSeconds(s)
    m = CheckTime(m)
    s = CheckTime(s)
}

setTimeout(startTime, 1000)

},[])


const CheckTime = (i) => {
if (i < 10 ){ i = "0" + i }

return i


}


 



    return(

        <div className={`${ isFixed ? "lg:pt-30 md:pb-10   lg:pb-10 " : "lg:pt-8 md:pb-10  lg:pb-10 " }`}>


        <div className="lg:flex block  lg:justify-center  ">

     <div className="border-r-r  rounded-md h-98 shadow-lg bg-white pl-4 pr-6 lg:w-56 md:w-48 mr-2 border-gray-300 lg:block hidden ">
 <div className="flex hover:text-orange-400 justify-between mt-4  "   >  <NavLink to='/Appliances' className='text-sm font-medium block w-full'>Appliances </NavLink>   <img src={vectorSide} className="h-3 w-2 mt-1  " /> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5 cursor-pointer">  <NavLink to='/Phones' className='text-sm font-medium  block w-full'>Phones & Tablets</NavLink>  <img src={vectorSide} className="h-3 w-2 mt-1" /> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Fashion' className='text-sm font-medium block w-full'>Fashion</NavLink>   </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Gaming</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Generator</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Shoes</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Glassess</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Laptops</NavLink>  </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Electronics</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Health & Beauty</NavLink> </div>
 
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>other categories</NavLink> </div>
 

     </div>
  



     <div className=" lg:hidden block  overflow-x-hidden w-screen ">

<div className={`${ hamburger ? "border-r-r top-32 sm:top-28 mt-2 rounded-md h-98  ml-0 shadow-lg fixed z-20 bg-white w-48 block pl-6 sm:w-60   border-gray-300  pr-2 " : "sm:w-60   pr-2   transition-transform duration-500 sm:top-28  sm:mt-2 ease-in-out   border-r-r top-32 rounded-md h-98 right-96 mr-20 shadow-lg fixed z-20 bg-white w-48 block pl-6    border-gray-300 lg:hidden  " }`}>
<div className="flex  hover:text-orange-400  justify-between  mt-4  "   >  <NavLink to='/Appliances' className='text-sm font-medium block w-full'>Appliances </NavLink> <img src={vectorSide} className="h-3 w-2 mt-1  " />   </div>
<div className="flex hover:text-orange-400 justify-between mt-5 cursor-pointer">  <NavLink to='/Phones' className='text-sm font-medium  block w-full'>Phones & Tablets</NavLink>  <img src={vectorSide} className="h-3 w-2 mt-1" />   </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Fashion' className='text-sm font-medium block w-full'>Fashion</NavLink>   </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Gaming</NavLink> </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Generator</NavLink> </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Shoes</NavLink> </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Glassess</NavLink> </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Laptops</NavLink>  </div>
 
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Electronics</NavLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Health & Beauty</NavLink> </div>
 
 <div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>other categories</NavLink> </div>
</div>

</div>








<div className=    "sm:pt-34   pt-34   lg:pt-0" >
    <ImageSlider />
</div>




</div>


<div className=" mt-10 grid place-items-center ">


<div className=" h-14 border-top-rounded items-center grid place-items-center lg:w-340 md:w-270 w-screen bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Appliances Deals</p>

</div>



 <div className="lg:w-340 md:w-270 h-60 md:h-82 w-screen bg-white shadow-lg xl:w-400 border-black ">

 </div>




<section className="mt-24  ">
    <h2 className="lg:text-4xl ml-2 md:ml-0 lg:font-bold md:text-3xl text-2xl font-medium  md:font-bold"> About Us</h2>

<div className="lg:flex lg:mt-32 md:mt-24 grid place-items-center md:justify-center  mt-12">
    <p className="text-lg ml-2 md:ml-0 lg:mr-12 xl:mr-16 lg:mt-24 md:mb-0 mb-10 "><span className="lg:text-3xl md:text-2xl   font-medium">Our Story</span> <br/><br/>Launched in 2015,Exclusive is south Asia's premier online shopping<br/> marketplace with an active presence in Bangladesh. Supported <br/>by wide range of tailored marketing, data and service solutions.<br/>Exclusive has 10,500 sellers and 300 brands and serves 3 <br/> millons customers across the region.<br/><br/>Exclusive has more than 1 Million products to offer,growind at a <br/>very fast pace.Exclusive offers a diverse assotment in categories<br/> ranging from consumer.</p>
    <img src={sideImages} className="md:w-100  md:h-100 w-90 h-80 lg:mt-0 lg:w-97 lg:h-97  md:mt-10 xl:h-100 xl:w-100"/>
</div>

</section>



<section className=" mt-20 lg:gap-8 md:gap-6 md:flex pb-20 md:pb-0 grid place-items-center">
    <div>
    <img src={page1} className="md:w-36 md:h-32 h-36 w-40  mb-5 md:mb-0   bg-white " />
    </div>

    <div className="  ">
    <img src={page2} className="md:w-38 md:h-33 h-36 w-44 mb-5 md:mb-0 " />
    </div>

    <div>
    <img src={page3} className="md:w-36 md:h-32 bg-white  mb-5 md:mb-0   h-36 w-40  " />
    </div>

    <div>
    <img src={page4} className="md:w-36 md:h-32 bg-white  h-36 w-40 "  />
    </div>

</section>



</div>




</div>
        
    )
}


export default MiddlePage;