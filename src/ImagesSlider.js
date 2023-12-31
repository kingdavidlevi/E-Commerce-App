import React, { useState,useEffect, useRef } from "react";
import image1 from './images/BINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS (1).jpg'
import image2 from './images/slider.jpg'
import image3 from './images/BINATONE_BLACK_FRIDAY_BRAND_DAY_Slider_copy.jpg'
import image4 from './images/BINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS.jpg'
import image5 from './images/1168x384red-copy-11-11.jpg'
import image6 from './images/Adis_BLF231168X384copy.jpg'
import image7 from './images/Desktop_MLP_Slider__1168x384.jpg'
import image8 from './images/Frame 600.png'
import { FaDot,FaChevronRight,FaChevronLeft } from "react-icons/fa";
//import './style.css'
import { Carousel } from "react-bootstrap";
 





function ImageSlider () {


   const [index,setIndex] = useState(0)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [mobilecurrentIndex,mobilesetCurrentIndex] = useState(0)
    const [div1 , setdiv1] = useState(false)
    const [div2 , setdiv2] = useState(false)
    const [div3 , setdiv3] = useState(false)
    const [div4 , setdiv4] = useState (false)
    const [div5 , setdiv5] = useState(false)
    const [div6 , setdiv6] = useState(false)
    const [div7 , setdiv7] = useState(false)
    const [div8 , setdiv8] = useState(false)
   const containerRef = useRef(null)





const allImages  = [
    <img key={0} src={image1}  className="md:h-75 md:w-270 xl:w-350  lg:w-280 sm:w-200 sm:h-64 w-80 h-33  "  />  ,
    <img key={1} src={image2}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33   "  />,
    <img key={2} src={image3}   className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33 " />,
    <img key={3} src={image4}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33"  />,
    <img key={4} src={image5}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33 "  />,
    <img key={5} src={image6}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33"  />,
    <img key={6} src={image7}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33"  />,
    <img key={7} src={image8}  className="md:h-75 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-33"  />,
];


 


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length );
      
      if(currentIndex ===  0){
        setdiv1(true)
        
        
      }

      else{
        setdiv1(false)
         
      }

      if(currentIndex === 1){
        setdiv2(true)
      }
      else{
        setdiv2(false)
      }


      if(currentIndex === 2){
        setdiv3(true)
      }


      else{
        setdiv3(false)
      }

      if(currentIndex === 3){
        setdiv4(true)
      }
      else{
        setdiv4(false)
      }

      if(currentIndex === 4){
        setdiv5(true)
      }

      else{
        setdiv5(false)
      }


      if(currentIndex === 5){
        setdiv6(true)
      }

      else{
        setdiv6(false)
      }
      if(currentIndex === 6){
        setdiv7(true)

      }
      else{
        setdiv7(false)
      }

      if(currentIndex === 7){
        setdiv8(true)

      }
      else{
        setdiv8(false)
      }

  



       
        
    },3000);

    return () => clearInterval(interval)

},[currentIndex])




 


useEffect(() => {
const intervalid = setInterval(() => {
  mobilesetCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length)


if (containerRef.current){
  const imageHeight = containerRef.current.clientHeight;
  containerRef.current.scrollTop = mobilecurrentIndex * imageHeight
}



},3000)

 
return () => clearInterval(intervalid)

},[allImages.length])

const handlePrev = () => {
  mobilesetCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);

  if(containerRef.current){
    const imageHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTop = mobilecurrentIndex * imageHeight;
  }
}


const handleNext = () => {
  mobilecurrentIndex((prevIndex) => (prevIndex + 1 ) % allImages.length)


  if (containerRef.current) {
    const imageHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTop = mobilecurrentIndex * imageHeight;
  }
}



/*<div className="md:hidden overflow-x-auto pl-2 pr-2 gap-4 flex w-screen bg-white sm:h-80 h-48 pt-4 custom-scrollbar">
      <Carousel activeIndex={index} onSelect={handleSelect} className="w-full">
        {allImages.map((image, idx) => (
          
          <Carousel.Item key={idx}>
            <div className="w-80 flex-grow-0 flex-shrink-0 relative overflow-hidden sm:w-200 sm:h-64">
              {image}
            </div>
          </Carousel.Item>
          
        ))}
      </Carousel>
    </div>*/

















return(
<div>




    <div className="hidden md:block ">


   { allImages.map((image, index) => {

    return(
        
        <div key={index} className="relative " style={{display:index === currentIndex ? 'block' : 'none'}}>
            {image}
        </div>   

    )
   })

   }


<div>
  <div><FaChevronLeft/></div>
  <div><FaChevronRight/></div>
</div>


<div className="grid place-items-center relative">
<div className="absolute   gap-2  md:justify-center xl:w-400 lg:w-250 md:w-270 flex bottom-5 ">
        <div className={`${ div1 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`}></div>
        <div className={`${ div2 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div3 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`} ></div>
        <div className={`${ div4 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div5 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div6 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ div7 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ div8 ? 'w-2 h-2 bg-orange-400 rounded-full'  : 'w-2 h-2 bg-gray-400 rounded-full' }`}></div>






        </div>

        </div>



  </div>


  






  <div className=" md:hidden   overflow-x-auto pl-2 pr-2  gap-2  flex   w-screen  bg-white sm:h-80   h-48 pt-4 custom-scrollbar ">

{ allImages.map((image, index) => {

 return(
     
   

     <div key={index} className="w-80 flex-grow-0  flex-shrink-0 transition-transform duration-500 ease-in-out  relative overflow-hidden    sm:w-200 sm:h-64 " ref={containerRef}  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
         {image}
     </div>   
  
     
 )
})

}


</div>




<div>
  <div><FaChevronLeft/></div>
  <div><FaChevronRight/></div>
</div>








<div className="grid place-items-center relative md:hidden">
<div className="absolute   gap-1  flex sm:bottom-4 bottom-2 ">
        <div className={`${ div1 ? 'w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div className={`${ div2 ? ' w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div3 ? ' w-1.5 h-1.5  bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div className={`${ div4 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div5 ? ' w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ div6 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ div7 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ div8 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
       

  </div>

  </div>







  </div>



)

}

export default ImageSlider;