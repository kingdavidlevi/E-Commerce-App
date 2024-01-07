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
 import getImageUrls from "./getImageUrls";
 import { initializeApp } from "firebase/app";
 import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
 import {firebaseConfig} from './firebase'
import demo from './images/istockphoto-1291418648-2048x2048 (2).jpg'


 



function ImageSlider () {
 const [imageurls,setImageUrls] = useState([])


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
   const [mobilediv1 , mobilesetdiv1] = useState(false)
   const [mobilediv2 , mobilesetdiv2] = useState(false)
   const [mobilediv3 , mobilesetdiv3] = useState(false)
   const [mobilediv4 , mobilesetdiv4] = useState(false)
   const [mobilediv5 , mobilesetdiv5] = useState(false)
   const [mobilediv6 , mobilesetdiv6] = useState(false)
   const [mobilediv7 , mobilesetdiv7] = useState(false)
   const [mobilediv8 , mobilesetdiv8] = useState(false)
   const [isloading, setloading] = useState(false)
   const [showArrow,setShowArrow] = useState(false)
   
 const [dataList, setDataList] = useState([]);
 const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app)










/*useEffect(() => {
  const fetchImages = async () => {
    
    try {
      const urls = await getImageUrls("images/"); // Adjust the path as needed
      console.log(urls)
      setImageUrls(urls);
       
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };
  
  

  fetchImages();
}, []);
*/



useEffect(() => {
  const fetchData = async () => {
    try {
      // Use Firestore collection
      const myDocumentRef = doc(firestore, 'mysecondcollection', 'SZgTb8YwJ1PpAvPCXpQI');
    
      // Fetch the specific document
      const docSnapshot = await getDoc(myDocumentRef);
      console.log(docSnapshot)
      
      if (docSnapshot.exists()) {
          const data = docSnapshot.data()
         setImageUrls(data.arrayOfObjects)
        
       /* setDataList(arrayOfObjects.map((item) => item.mapValue.fields));*/

      
      } else {
        console.log('');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  fetchData(); // Invoke the function to fetch data when the component mounts
}, []); // Empty dependency array means the effect runs once after the initial render







 


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageurls.length );
      
      if(currentIndex === 0){
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

  



       
        
    },4000);

    return () => clearInterval(interval)

},[currentIndex,imageurls.length])



const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1 ) % imageurls.length)

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





}



const handlePrev = () => {
   
    

  setCurrentIndex((prevIndex) => (prevIndex - 1 + imageurls.length) % imageurls.length);
 

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


}



useEffect(() => {
const intervalid = setInterval(() => {
  mobilesetCurrentIndex((prevIndex) => (prevIndex + 1) % imageurls.length)


 

if (mobilecurrentIndex === 7){
  mobilesetdiv1(true)
}

else{
  mobilesetdiv1(false)
}


if (mobilecurrentIndex === 0){
  mobilesetdiv2(true)
}

else{
  mobilesetdiv2(false)
}


if (mobilecurrentIndex === 1){
  mobilesetdiv3(true)
}

else{
  mobilesetdiv3(false)
}



if (mobilecurrentIndex === 2){
  mobilesetdiv4(true)
}

else{
  mobilesetdiv4(false)
}



if (mobilecurrentIndex === 3){
  mobilesetdiv5(true)
}

else{
  mobilesetdiv5(false)
}


if (mobilecurrentIndex === 4){
  mobilesetdiv6(true)
}

else{
  mobilesetdiv6(false)
}


if (mobilecurrentIndex === 5){
  mobilesetdiv7(true)
}

else{
  mobilesetdiv7(false)
}


if (mobilecurrentIndex === 6){
  mobilesetdiv8(true)
}

else{
  mobilesetdiv8(false)
}


},3000)

 
return () => clearInterval(intervalid)

},[mobilecurrentIndex,imageurls.length])





 

/*
*/


/*
 */

const handleArrow = () => {
  setShowArrow(true)
}
 
     

 const allDemo = [
  <img index={0} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={1} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={2} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={3} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={4} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={5} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={6} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
  <img index={7} src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />,
 
]







return(
<div>







    <div className="hidden md:grid place-items-center ">

     {imageurls.length > 0 ? (
   imageurls.map((url,id) => {
 
    return(
        
        <div key={url.id}  className="relative " style={{display:id === currentIndex ? 'block' : 'none'}}  onMouseOver={handleArrow}   >
              <img src={url.pictureURL}  className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" alt="image"/> 
  
        </div>   

    )
    })

   ) : 
   
   <div className="relative">
  <img src={demo} className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" />

   </div>
   }

 







{ showArrow && <div className=" hidden md:flex absolute md:w-270 xl:w-350 pl-4 pr-4 top-96 mt-6 lg:w-280 sm:w-200 justify-between ">
  <div className="w-10 h-10 bg-gray-300 grid place-content-center rounded-full " onClick={handlePrev} ><FaChevronLeft className="text-lg"  /></div>
  <div  className="w-10 h-10 bg-gray-300 grid place-content-center rounded-full " onClick={handleNext}><FaChevronRight className="text-lg" /> </div>
</div>}


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



  




  <div className=" md:hidden   overflow-x-hidden pl-2 pr-2  gap-3  flex   w-full  bg-white sm:h-80   h-48 pt-4 custom-scrollbar ">

{imageurls.length > 0 ? (

 imageurls.map((url, index) => {

return(
    

   

  <div key={url.id} className="w-80 flex-grow-0  flex-shrink-0 transition-transform duration-500 ease-in-out  relative    sm:w-200 sm:h-64 " ref={containerRef}  style={{ transform: `translateX(-${mobilecurrentIndex * 100}%)` }}>
   <img src={url.pictureURL}  className="md:h-98 md:w-270 xl:w-350 lg:w-280 sm:w-200 sm:h-64 w-80 h-40  rounded-lg" alt="image"/> 
</div> 

 

    
)
  
})


) : 
  
   <div className="md:hidden   overflow-x-hidden pl-2 pr-2  gap-3  flex   w-full  bg-white sm:h-80   h-48 pt-4">
      {allDemo.map((item, index) => (
        <div className="w-80 flex-grow-0 relative flex-shrink-0" key={index}>{item}</div>
      ))}
    
   </div>


  }


</div>


 







<div className="grid place-items-center relative md:hidden">
<div className="absolute   gap-1  flex sm:bottom-4 bottom-1 ">
        <div className={`${ mobilediv1 ? 'w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div className={`${ mobilediv2 ? ' w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ mobilediv3 ? ' w-1.5 h-1.5  bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div className={`${ mobilediv4 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ mobilediv5 ? ' w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`} ></div>
        <div  className={`${ mobilediv6 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ mobilediv7 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
        <div   className={`${ mobilediv8 ? '  w-1.5 h-1.5 bg-orange-400 rounded-full'  : ' w-1.5 h-1.5 bg-gray-400 rounded-full' }`}></div>
       

  </div>

  </div>







  </div>



)

}

export default ImageSlider;


/*<div>
      {imageurls.map((url) => (
        <img key={url} src={url} alt="Image" />
      ))}
    </div>*/