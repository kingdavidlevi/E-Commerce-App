import React,{useEffect,useRef, useState} from "react";
import search from './images/Component 2.png'
import {FaBars,FaCog, FaHeartbeat,FaTimes} from 'react-icons/fa'
import { NavLink,useLocation,useNavigate, useOutletContext } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'
import cart from './images/Cart1.png'
import user from './images/user.png'
 import './ScrollableComponent.css'
 import star from './images/Four Star.png'

function ResultFromSearch (){
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const [files,setFiles] = useState([])
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const [isFixed]  = useState(false)
    const [hamburger,setHamburger] = useState(false)
    const [finalFiles,setFinalFiles] = useState([])
    const {input} = useOutletContext()


    const clickHumburger = () => {
      setHamburger(prevstate => !prevstate)
     
    }
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Use Firestore collection
            const myDocumentRef = doc(firestore, 'mysecondcollection', 'CpLX4u9MIavFb5Mq4QsS');
          
            // Fetch the specific document
            const docSnapshot = await getDoc(myDocumentRef);
          
            
            if (docSnapshot.exists()) {
                const data = docSnapshot.data()
                
               const Result = data.SearchObjects
               const matchResult = Result.filter((users) => users.name.toLowerCase().includes(input.toLocaleLowerCase()))
               setFiles(matchResult)
             /* setData.List(arrayOfObjects.map((item) => item.mapValue.fields));*/
      
            
            } else {
              console.log('');
            }
          } catch (error) {
            setError('Error fetching data:', error);
          }
        };
      
        fetchData(); // Invoke the function to fetch data when the component mounts
      }, [input,files]); // Empty dependency array means the effect runs once after the initial render
      

      
    



      const NavigateCart = () =>{
        navigate('/Cart')
     }

     const navigateAccount = () =>{
        navigate('/Account')
     }
   

     const navigateSearch = () =>{
       navigate('/Second/Search')
     }



   return(
    <div className="bg-gray-300   ">




<div className=" hidden  lg:block">

      <div className= 'w-full bg-white grid h-18 top-0 z-10   text-black place-items-center fixed'>

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


<div className="mb-4 pt-32   md:pt-32 md:pl-10 lg:mb-14 pl-4"><h3 className="text-sm font-mono text-gray-700">SHOP ONLINE IN NIGERIA</h3></div>


<div className= "grid xl:mx-20 lg:mx-16 sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 mx-4   place-items-center" >
 
   { files.map((item,index) => (
    
      <div key={item.id} className="mb-3  pl-1 md:mb-6  h-98 sm:w-48 lg:w-56 w-40 bg-white md:transition-transform ease-in-out md:transform  md:hover:scale-105 ">
         <p className="text-sm font-bold mb-1">{item.name}</p>
        <button className="bg-red-600 hover:cursor-default rounded-sm text-white text-xs px-1 py-1 mb-1 mt-1 "> Pay on Delivery </button>
       <div > <img src={item.pictureURL} className=" mb-10   lg:h-auto md:w-40  h-36 w-40 " alt={`Image ${index}`}/> </div>
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
    <div className="w-full"> <p className="text-sm font-mono max-words-20  mb-1">{item.description}</p></div>
     <p className="text-sm font-bold mb-1">{item.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button className="bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>




     </div>
    )

  )}



  </div>





    </div>
    

   )


}

export default ResultFromSearch;