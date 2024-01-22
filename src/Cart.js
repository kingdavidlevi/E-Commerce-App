import React, { useState,useEffect,useRef } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import generator from './images/1 (6).jpg'
import up from './images/Drop-Up-Small.png'
import down from './images/Drop-Down-Small (1).png'
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc,setDoc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'



function Cart() {
const [addCart, setAddCart] = useState(1)
const [zero,setZero] = useState(0)
const navigate = useNavigate()
const {handlelocation,sethandleLocation} =useOutletContext()
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const [files,setFiles] = useState([])
const [error,setError] = useState('')
const [subtotal,setSubtotal] = useState([])
const [checkSubtotal,setcheckSubtotal] = useState(false)
const reference = useRef()


/*const Add = (id, reference) =>{
  

if( reference.current){



  setAddCart((prevCounts) => ({
    ...prevCounts,
    [id]: (prevCounts[id] || 0) + 1,
  }));
 

 


  const isCountGreaterThanEqual9 = (addCart[id] || 0) + 1 >= 9;

      // Update the zero state for the specific ID
      setZero((prevZeros) => ({
        ...prevZeros,
        [id]: !isCountGreaterThanEqual9,
      }));


}




}

*/




const Add = (id) => {
  setFiles((prevFiles) => {
    // Create a new array with updated counts
    const updatedFiles = prevFiles.map((data) => {
      if (data.id === id) {
        // Increment the count for the specific id
        const updatedCount = (data.count || 0) + 1;
 



        let updatedValue;

        // Check if the count is greater than or equal to 9
        if (updatedCount >= 1) {
          updatedValue = (data.value || 0) + updatedCount * 2;
          setcheckSubtotal(true)
        } else {
          updatedValue = (data.value || 0) + updatedCount;
        }
      
        // Check if the count is greater than or equal to 9
 
          setSubtotal(updatedValue)
        // Update the state for the specific id
        setAddCart((prevState) => ({
          ...prevState,
          [id]: updatedCount,
        }));

         
        // Update the state for the specific id for zero check
        const isCountGreaterThanOrEqual9 = (data.count || 0) >= 9;
            

        

        // Update the count property for the specific id
        return {
          ...data,
          count : updatedCount,
          value:updatedValue
      };
      }

      return data;
    });

    return updatedFiles;
  });
};

const Subtract = (id) => {
  setFiles((prevFiles) => {
    // Create a new array with updated counts
    const updatedFiles = prevFiles.map((data) => {
      if (data.id === id) {
        // Increment the count for the specific id
        const updatedCount = (data.count || 0) > 1 ? (data.count || 0) - 1 : 1;

        // Check if the count is greater than or equal to 9
 

        // Update the state for the specific id
        setAddCart((prevState) => ({
          ...prevState,
          [id]: updatedCount,
        }));

        // Update the state for the specific id for zero check
        const isCountGreaterThanOrEqual9 = (data.count || 0) >= 9;


        

        // Update the count property for the specific id
        return {
          ...data,
          count : updatedCount,
      };
      }

      return data;
    });

    return updatedFiles;
  });
};



 




 




useEffect(() => {
  const fetchData = async () => {
    try {
      // Use Firestore collection
      const myDocumentRef = doc(firestore, 'mysecondcollection', 'LOf5FHDZhGSuixJ7Ihmm');
    
      // Fetch the specific document
      const docSnapshot = await getDoc(myDocumentRef);
    
      
      if (docSnapshot.exists()) {
          const data = docSnapshot.data()
         setFiles(data.SearchObjects)
          
          
       /* setDataList(arrayOfObjects.map((item) => item.mapValue.fields));*/

      
      } else {
        console.log('');
      }
    } catch (error) {
      setError('Error fetching data:', error);
    }
  };

  fetchData(); // Invoke the function to fetch data when the component mounts
}, []);






const Back = () => {
   navigate('/')
}



window.addEventListener('popstate', function (event) {
  if (document.location.pathname === '/Second/Login') {
     
    window.location.replace('/')
    sethandleLocation(false)
    
  }
})

window.addEventListener('popstate', function (event) {
  if (document.location.pathname === '/Second/SignUp') {
     
    window.location.replace('/')
    sethandleLocation(false)
  }
})


return(
   <div  className="pb-14 md:pb-0">


    
  <header className="h-12 grid place-items-center md:hidden bg-black"> <p className="text-white text-center text-sm  ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p></header>

    <div className="ml-6 md:ml-10 lg:ml-12 w-10   mt-4 mb-10">
    <div onClick={Back} className="text-lg hover:cursor-pointer mt-1"><FaArrowLeft /></div> 
 
    </div>





      {files.length > 0 ? (
 
      <div>
     
     

     
    <div className="flex px-4 md:pl-8 md:pr-10 lg:ml-24  mb-6 justify-between items-center md:ml-14 lg:w-310 h-18 shadow-2xl  xl:w-370 bg-white md:w-265 xl:ml-36">

      <div><p className="text-lg font-medium " >Products</p></div> 
      <div><p className="text-lg font-medium">Price</p></div> 
      <div><p className="text-lg font-medium">Quantity</p></div> 
      <div><p className="text-lg font-medium">Subtotal</p></div> 

    </div>


    { files.slice(0, 15).map((item,index) => (

      

<div key={item.id}  className="flex md:pl-4 lg:ml-24 md:pr-10  mb-6 justify-between items-center md:ml-14   lg:w-310 md:h-26 h-28 shadow-xl xl:w-370 xl:ml-36 bg-white w-full pl-1 pr-4 md:w-265">

<div className="md:flex  block ">
  <img src={item.pictureURL} className="h-18 w-18" />
  <p className="font-medium md:mt-6 ml-1 hidden md:block">{item.name}</p>  
   
</div>


<div className="md:mr-28  ml-4">
<p className="font-medium">{item.Price}</p>
</div>



<div className="border-gray-300 mr-8 md:mr-36 justify-around items-center flex border-2 h-11 w-18 rounded-md  ">

<div><p>{item.count}</p></div>

<div className="md:w-4 w-5 h-10 md:h-8 ">
  <div onClick={ () => Add (item.id )} className="md:mb-0 mb-1" ><img src={up} /> </div>
  <div onClick={() => Subtract (item.id ,reference)}><img src={down} /> </div>


</div>

</div>


<div>
  {checkSubtotal ? ( <p className="font-medium">{subtotal}</p>) :<p className="font-medium">{item.Price}</p>}

</div>


</div>



)

)}



<div className="flex  lg:ml-24  md:ml-14  justify-around md:justify-between items-center    lg:w-310 h-14   xl:w-370 xl:ml-36  md:w-265">
<div onClick={Back}  className="md:h-14 h-10 w-40 md:w-53 cursor-pointer border-2 text-center grid place-content-center  border-gray-300 rounded-md "><p className="font-medium">Return To Shop</p></div>
<div className="md:h-14 h-10 w-40 md:w-53 border-2  cursor-pointer text-center grid place-content-center  border-gray-300 rounded-md"><p className="font-medium">Update Cart</p></div>


</div>







<div className="md:flex block  md:ml-14 md:mt-20 mt-24  lg:w-310 xl:w-370 md:mb-36 mb-20 justify-between md:w-265 h-80 lg:ml-24 xl:ml-36">
<div className="flex justify-around md:justify-normal h-14 w-full  md:gap-4 md:w-100">
  <div className="md:h-14 w-40 h-10 md:w-48 lg:w-60 grid items-center pl-4 border-2 rounded-md border-gray-400 bg-white "><p className="text-md font-medium  text-gray-300">Coupon Code</p></div>
  <div className="md:h-14 w-40 h-10 lg:w-52 md:w-38 grid place-content-center rounded-md bg-red-600"><p className="text-white text-lg font-medium  ">Apply Coupon</p></div>
</div>




<div  className="md:block  grid place-content-center ">

<div className=" pl-4  pt-4 mt-4 md:mt-0 pt pr-3 border-2 mb-6 rounded-md border-gray-400 xl:h-77 lg:h-72 lg:w-90 w-90 h-80 md:w-80 md:h-80  xl:w-99">
<div className="mb-4"><p className="text-lg font-medium">Cart Total</p></div>


<div className="flex justify-between h-6  lg:w-86 xl:w-101 mb-4">
<p className="font-medium">Subtotal:</p>
<p className="font-medium">${subtotal}</p>

</div>      
<hr className="border border-gray-300 lg:w-86 xl:w-101"/>

<div className="flex justify-between h-6 mt-4 lg:w-86 xl:w-101 mb-4">
<p className="font-medium">Shipping:</p>
<p className="font-medium">Free</p>

</div>
<hr className="border border-gray-300 lg:w-86 xl:w-101"/>


<div className="flex justify-between h-6 mt-4 lg:w-86 xl:w-101 ">
<p className="font-medium">Total:</p>
<p className="font-medium">$1250</p>

</div>


<div className="grid place-items-center">

<button className="text-white bg-red-600  rounded-md xl:w-70 h-14 lg:mt-4 md:mt-10 md:w-48 lg:w-60 xl:mt-10 w-44 mt-8   ">Process to checkout</button>
</div>





</div>

 
</div>





</div>

 
        
    

 </div>

 

      ):
      
      <div></div>
      
      
      
      }







    </div>

)
    
}



export default Cart;