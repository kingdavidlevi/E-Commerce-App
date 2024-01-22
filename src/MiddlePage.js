import React, { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { FaPhone,FaGamepad,FaLaptop, FaCheck,FaTimes } from "react-icons/fa";
import Advert from './images/BINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS (1).jpg'
import ImageSlider from "./ImagesSlider";
import vectorSide from './images/Vector (5).png'
import sideImages from './images/Side Image.png'
import page1 from './images/Frame 870.png'
import page2 from './images/Frame 871.png'
import page3 from './images/Frame 872.png'
import page4 from './images/Frame 873.png'
import vector from './images/Vector.png'
import getImageUrls from "./getImageUrls";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'
import { db } from "./firebase";
import demo from './images/istockphoto-1291418648-2048x2048 (2).jpg'
import star from './images/Four Star.png'
import images from '../src/images/Side Image (1).png'
import ScrollToDivLink from "./ScrollToDivLink";

 function MiddlePage ({targetId}) {
const [timeDifference,setTimeDiffernce] = useState(0)
const [currentDate, setCurrentDate] = useState(new Date())
const [hours,setHours] = useState('')
const [minutes,setMinutes] = useState('')
const [seconds,setSeconds] = useState('')
const [Hover1, setHover1] = useState(false)
const [Hover2, setHover2] = useState(false)
const {isFixed,cartDiv,setCartDiv,setHamburger,setIdentify,identify,mobileFixed,hamburger,setUpdateCart,updateCart} = useOutletContext()
const {imageUrls,setImageUrls} =useState([])
const [dataList, setDataList] = useState([]);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const [firstData,setFirstData] = useState([])
const [error,setError] = useState('')

/*useEffect(() => {
    const fetchImages = async () => {
      
      try {
        const urls = await getImageUrls("ImagesGif/"); // Adjust the path as needed
        console.log(urls)
         
         
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };
    
    
  
    fetchImages();
  }, []);
  
*/
 


const allDemo = [
  <img index={0} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={1} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={2} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={3} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={4} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={5} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={6} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={7} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
 
]
const allsecondDemo = [
  <img index={0} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={1} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={2} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={3} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={4} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={5} src={demo} className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 "  />,
  <img index={6} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={7} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={8} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={9} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={10} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={11} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={12} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={13} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  <img index={14} src={demo}  className="lg:w-full rounded-lg lg:h-52 md:w-40 md:h-44 h-36 w-34 " />,
  
]


 





 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Firestore collection
        const myDocumentRef = doc(firestore, 'mycollection', '02QnSR7o1X1OojLvR8iQ');
      
        // Fetch the specific document
        const docSnapshot = await getDoc(myDocumentRef);
      
        
        if (docSnapshot.exists()) {
            const data = docSnapshot.data()
           setDataList(data.arrayOfObjects)
         
         /* setDataList(arrayOfObjects.map((item) => item.mapValue.fields));*/

        
        } else {
          setError('Document does not exist.');
        }
      } catch (error) {
        setError('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the function to fetch data when the component mounts
  }, []);
  


  // Empty dependency array means the effect runs once after the initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Firestore collection
        const myDocumentRef = doc(firestore, 'mysecondcollection', 'LOf5FHDZhGSuixJ7Ihmm');
      
        // Fetch the specific document
        const docSnapshot = await getDoc(myDocumentRef);
        
        
        if (docSnapshot.exists()) {
            const data = docSnapshot.data()
           setFirstData(data.SearchObjects)
           
         /* setDataList(arrayOfObjects.map((item) => item.mapValue.fields));*/

        
        } else {
          setError('Document does not exist.');
        }
      } catch (error) {
        setError('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the function to fetch data when the component mounts
  }, []); // Empty dependency array means the effect runs once after the initial render




 /* function getAllProducts() {
    return db.collection('mysecondcollection').get()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          // Include the document ID in the data for reference
          const productData = {
            id: doc.id,
            ...doc.data()
          };
          products.push(productData);
        });
        return products;
      })
      .catch((error) => {
        console.error('Error getting products:', error);
        return [];
      });
  }
getAllProducts()
*/
/*
function addProductsToCart(identify, mycollection) {
  const userCartRef = db.mycollection('carts').doc(identify);

  // Use Firestore transaction to ensure consistency
  return db.runTransaction((transaction) => {
    return transaction.get(userCartRef).then((doc) => {
      if (!doc.exists) {
        // If the user's cart document doesn't exist, create a new one
        transaction.set(userCartRef, { items: mycollection });
      } else {
        // If the user's cart document exists, update the items array
        const updatedItems = [...doc.data().items, ...mycollection];
        transaction.update(userCartRef, { items: updatedItems });
      }
    });
  })
  .then(() => {
    console.log('Products added to the cart successfully');
  })
  .catch((error) => {
    console.error('Error adding products to the cart:', error);
  });
}


*/


   const addCart = (unique) =>{


    for (const data of firstData){
      const dataId = data.id;
    
      console.log(dataId);
     if (dataId  == unique){
      setUpdateCart(prevstate => prevstate + 1)
      setCartDiv(true)
      
     /* const userId = identify; // Replace with the actual user ID

      // Get all products from the "products" collection
      getAllProducts().then((mysecondcollection) => {
        // Add products to the user's cart
        addProductsToCart(userId, mysecondcollection);
      });*/
     console.log('active')
    } 
   }

  }


  const clickHumburger = () => {
 
    setHamburger(prevstate => !prevstate)
   
  }
  


    return(

        <div className={`${ isFixed ? "lg:pt-30 md:pb-10   lg:pb-10 " : "lg:pt-8 md:pb-10  lg:pb-10 " }`}>


        <div className="lg:flex block  lg:justify-center  ">

     <div className="border-r-r  rounded-md h-98 shadow-lg bg-white pl-4 pr-6 lg:w-56 md:w-48 mr-2 border-gray-300 lg:block hidden ">
 <div className="flex hover:text-orange-400 justify-between mt-4  "   >  < ScrollToDivLink  targetId="div1"  className='text-sm font-medium block w-full'>Appliances </ScrollToDivLink>   <img src={vectorSide} className="h-3 w-2 mt-1  " /> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5 cursor-pointer">  <ScrollToDivLink targetId="div1" className='text-sm font-medium  block w-full'>Phones & Tablets</ScrollToDivLink>  <img src={vectorSide} className="h-3 w-2 mt-1" /> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div2"  className='text-sm font-medium block w-full'>Fashion</ScrollToDivLink>   </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div3"  className='text-sm font-medium block w-full'>Gaming</ScrollToDivLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div1" className='text-sm font-medium block w-full'>Generator</ScrollToDivLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink  targetId="div4" className='text-sm font-medium block w-full'>Shoes</ScrollToDivLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div5" className='text-sm font-medium block w-full'>Glassess</ScrollToDivLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div3" className='text-sm font-medium block w-full'>Laptops</ScrollToDivLink>  </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink targetId="div3" className='text-sm font-medium block w-full'>Electronics</ScrollToDivLink> </div>
 <div className="flex hover:text-orange-400 justify-between mt-5"> <ScrollToDivLink className='text-sm font-medium block w-full'>Health & Beauty</ScrollToDivLink> </div>
 
 

     </div>
  

{hamburger &&(

     <div className=" lg:hidden block    overflow-x-hidden  " >

<div  className={`${ hamburger ? " top-0 pt-4 pl-4  h-full border-r-4 ml-0 shadow-lg fixed z-20 bg-white   block     border-gray-300   " : "sm:w-60      transition-transform delay-500 duration-500 sm:top-0   ease-in-out   border-r-r top-0 rounded-md h-98   shadow-lg fixed z-20 bg-white     border-gray-300 lg:hidden  " }`} style={{'width' : '90%'}}>

<div className="flex"><span className="text-xl mt-2 mr-3.5" onClick={clickHumburger}><FaTimes/></span> <p className="text-2xl  text-black  font-bold font-mono"> Exclusive</p></div>
 <div onClick={clickHumburger} className="grid mt-10 pb-6 bg-white border-b-r border-gray-100 h-560 place-items-center w-full "><img src={images} className="w-36 h-36 rounded-full" /> </div>
<div  className="flex hover:text-orange-400 justify-between mt-5 cursor-pointer">  <NavLink to='/Contact' className='text-sm font-medium  block w-full'>Contact</NavLink>      </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Second/Login' className='text-sm font-medium block w-full'>Cart</NavLink>   </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Gaming</NavLink> </div>
<div className="flex hover:text-orange-400 justify-between mt-5"> <NavLink to='/Games' className='text-sm font-medium block w-full'>Generator</NavLink> </div>
 
</div>

</div>

)}






<div className=    "sm:pt-34   pt-34   lg:pt-0" >
    <ImageSlider />
</div>




</div>


<div className=" mt-4 grid place-items-center ">




<div className="lg:w-340 lg:flex grid md:grid-cols-4 grid-cols-3 md:pt-10 md:pb-1 lg:px-2 px-2 lg:pt-6 xl:pt-0 flex-wrap  pt-2 sm:pt-1 pb-2 sm:h-100 md:h-100 rounded-md md:w-270  mb-4 sm:w-100 w-full  bg-white shadow-lg xl:w-400  ">
{dataList.length > 0 ? (
    dataList.map((item,index) => (
      <div key={item.id} className="lg:w-1/4 hover:cursor-pointer  p-2 md:pl-1.5">
        
        <img src={item.pictureURL} className="lg:w-full transition-transform ease-in-out transform  hover:scale-105 rounded-lg lg:h-auto md:w-40 md:h-44 h-36 w-32 " alt={`Image ${index}`}/>
      </div>
       
    ))
  ) :  (
  
  
 allDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))
 
  )
  
  
  
  }
</div>









<div id="div2"  className=" md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Fashion Deals</p>

</div>


<div id="div2" className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68  overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(16, 26).map((currentObject, index) => (
    <div key={currentObject.id} className=" flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl transition-transform ease-in-out transform  hover:scale-105 bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className="bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 

<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>



}

</div>









<div id="div4" className=" mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Shoe Deals</p>

</div>


<div id="div4" className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68 overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(27, 37).map((currentObject, index) => (
    <div  key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl overflow-y-auto bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className=" bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 
  
<div className="flex overflow-x-auto ">
{allsecondDemo.map((item, index) => (
   <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
 ))}

 </div>

}

</div>










<div id="div5" className="  mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Shoes / Glasses Deals</p>

</div>


<div id="div5" className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68  overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(43, 58).map((currentObject, index) => (
    <div key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className=" bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 

<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>



}

</div>





<div className=" mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Glasses / Laptops /  Deals</p>

</div>


<div className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68  overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(59, 74).map((currentObject, index) => (
    <div key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className=" bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 

<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>



}

</div>





<div id="div3" className=" mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Games / Laptop Collection</p>

</div>


<div id="div3" className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68  overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(75, 90).map((currentObject, index) => (
    <div key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className=" bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 

<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>



}

</div>














<div className="  mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Italian Shoes Deals</p>

</div>


<div className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68  overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(27, 42).map((currentObject, index) => (
    <div key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button  onClick={() => addCart (currentObject.id)} className="bg-orange-500 hover:bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 

<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>



}

</div>













<div  id="div1" className=" mt-4 md:rounded-tr-md md:rounded-tl-md h-12  items-center grid sm:w-100 place-items-center lg:w-340 md:w-270 w-full bg-orange-400 xl:w-400 ">

<p className="text-white font-medium text-xl">Phones / Clothes Deals</p>

</div>


<div  id="div1" className="lg:w-340 px-4 md:pt-3 pt-3 rounded-br-md gap-3 flex h-68 overflow-x-auto shadow-lg xl:w-400 bg-white rounded-bl-md sm:w-100 md:w-270  md:h-82 w-full">

{dataList.length > 0 ? (
  firstData.slice(0, 15).map((currentObject, index) => (
    <div key={currentObject.id} className=" transition-transform ease-in-out transform  hover:scale-105 flex-shrink-0 pl-2 h-62 md:hover:shadow-2xl bg-white md:hover:border-2 md:border-none md:hover:border-gray-300  border-gray-300 border-2 md:h-68 w-44 ">
        
        <p className="text-sm font-bold mb-1">{currentObject.name}</p>
     <img className="md:w-40 mb-2 h-32 md:h-36 w-40" src={currentObject.pictureURL} alt={`Image ${index}`} />
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{currentObject.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button onClick={() => addCart (currentObject.id)} className=" bg-orange-500 hover:bg-orange-600 items-center mt-2  rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>


    </div>
  ))
) : 
  
<div className="flex overflow-x-auto ">
 {allsecondDemo.map((item, index) => (
    <div className="lg:w-1/4 flex-shrink-0  p-2 md:pl-1.5   " key={index}>{item}</div>
  ))}
 
  </div>
}

</div>


 




<section className="mt-24  ">
    <h2 className="lg:text-4xl ml-2 md:ml-0 lg:font-bold md:text-3xl text-2xl font-medium  md:font-bold"> About Us</h2>

<div className="lg:flex lg:mt-32 md:mt-24 grid place-items-center md:justify-center  mt-12">
    <p className="text-lg ml-2 md:ml-0 lg:mr-12 xl:mr-16 lg:mt-24 md:mb-0 mb-10 "><span className="lg:text-3xl md:text-2xl   font-medium">Our Story</span> <br/><br/>Launched in 2015,Exclusive is south Asia's premier online shopping<br/> marketplace with an active presence in Bangladesh. Supported <br/>by wide range of tailored marketing, data and service solutions.<br/>Exclusive has 10,500 sellers and 300 brands and serves 3 <br/> millons customers across the region.<br/><br/>Exclusive has more than 1 Million products to offer,growind at a <br/>very fast pace.Exclusive offers a diverse assotment in categories<br/> ranging from consumer.</p>
    <img src={sideImages} className="md:w-100  md:h-100 w-90 h-80 lg:mt-0 lg:w-97 lg:h-97  md:mt-10 xl:h-100 xl:w-100"/>
</div>

</section>



<section className=" lg:gap-8 md:gap-6 mt-20  md:flex pb-20 md:pb-0 grid grid-cols-2 gap-10 place-items-center">
    <div >
    <img src={page1} className="md:w-36 md:h-32  h-26 w-32  mb-5 md:mb-0   bg-white " />
    </div>

    <div className="  ">
    <img src={page3} className="  md:w-36 md:h-32 bg-white  mb-5 md:mb-0    h-26 w-32 " />
    </div>

    <div> 
    <img src={page3} className="md:w-36 md:h-32 bg-white  mb-5 md:mb-0    h-26 w-32  " />
    </div>

    <div>
    <img src={page4} className="md:w-36 md:h-32 bg-white md:mb-0  mb-5 h-26 w-32 "  />
    </div>

</section>



</div>




</div>
        
    )
}


export default MiddlePage;