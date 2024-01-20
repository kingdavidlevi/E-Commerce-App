import React,{useLayoutEffect, useEffect,useRef, useState} from "react";
import search from './images/Component 2.png'
import {FaBars,FaCog, FaHeartbeat,FaTimes} from 'react-icons/fa'
import { NavLink,useLocation,useNavigate, useOutletContext } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc,setDoc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'
import { auth } from "./firebase";
 import scope from "./images/binoculars.389fc56a.svg"
 
import cart from './images/Cart1.png'
import user from './images/user.png'
 import './ScrollableComponent.css'
 import star from './images/Four Star.png'
import { cleanup } from "@testing-library/react";

function ResultFromSearch (){
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const [files,setFiles] = useState([])
    const navigate = useNavigate()
    const [isFixed]  = useState(false)
    const [hamburger,setHamburger] = useState(false)
    const [finalFiles,setFinalFiles] = useState([])
    const {input} = useOutletContext()
    const [unsubscribe,setUnsubscribe] = useState('')
    const [mounted, setMounted] = useState(true);
    const [userSavedData, setUserSavedData] = useState([]);
    const [error, setError] = useState(null);
    const {formValues,sethandleLocation,handlelocation,setFormValues,cartDiv,setCartDiv,nameValue,updateCart,setUpdateCart} = useOutletContext()


    const clickHumburger = () => {
      setHamburger(prevstate => !prevstate)
     
    }
    



    /*useEffect(() => {
 
    


      const collectionRef = firestore().collection('mysecondcollection');
  
      // Create a query to filter by the 'name' proper
      const query = collectionRef.where('name', '==', input);
  
      // Execute the query
      query.get()
        .then((querySnapshot) => {
          // Map the results to an array and update the state
          const results = querySnapshot.docs.map(doc => doc.data());
          setFiles(results)
        })
        .catch((error) => {
          console.error('Error getting documents: ', error);
        });
    }, [input]); // Run the effect whenever searchInput changes
  
*/









    /*useEffect(() => {

     
      
        const fetchData = async () => {
        
          try {
            // Use Firestore collection


            const cachedData = localStorage.getItem('cachedData');


            const myDocumentRef = doc(firestore, 'mysecondcollection', 'CpLX4u9MIavFb5Mq4QsS');
          
            // Fetch the specific document
            const docSnapshot = await getDoc(myDocumentRef);
          
            
            if (docSnapshot.exists()) {
                const data = docSnapshot.data()
                console.log(data)
               const result = data.SearchObjects || []
               
               const matchResult = result.filter((users) => users.unique.toLowerCase().includes(input.toLocaleLowerCase()))
               
                if(matchResult.length > 0){
               setFiles(matchResult)
               console.log(matchResult)
              }

             else{
              setFiles([])
             }

            
               
               
               
            
            } else {
              setFiles([])
            }
          } catch (error) {
            
            setError('Error fetching data:', error);
          }
        
        };
      
        

        fetchData();

     
 
   
      }, [input]); // Empty dependency array means the effect runs once after the initial render
      */



      useEffect(() => {
        const fetchData = async () => {
          try {
            const cachedData = localStorage.getItem('cachedData');
    
            if (cachedData) {
              const cachedResult = JSON.parse(cachedData);
              const matchResult = cachedResult.filter((item) =>
                item.unique.toLowerCase().includes(input.toLowerCase())
              );
    
              setFiles(matchResult);
            } else {
              const myDocumentRef = doc(firestore, 'mysecondcollection', 'CpLX4u9MIavFb5Mq4QsS');
              const docSnapshot = await getDoc(myDocumentRef);
    
              if (docSnapshot.exists()) {
                const result = docSnapshot.data().SearchObjects || [];
    
                localStorage.setItem('cachedData', JSON.stringify(result));
    
                const matchResult = result.filter((item) =>
                  item.unique.toLowerCase().includes(input.toLowerCase())
                );
    
                setFiles(matchResult);
              } else {
                setFiles([]);
              }
            }
          } catch (error) {
            setError('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [input]);
    

/*
      useEffect(() => {
        const fetchUserSavedData = async () => {
          try {
            const currentUser = auth.currentUser;
            
            if (currentUser) {
              const uid = currentUser.uid;
              const userDocRef = doc(firestore, 'usersCollection', uid);
              const userDocSnapshot = await getDoc(userDocRef);
    
              if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data().userData;
                setUserSavedData(userData || []);
                console.log(userData)
              } else {
                setUserSavedData([]);
              }
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserSavedData();
      }, []);


      useEffect(() => {
    
      const handleSearch = async () => {
        try {
          const myDocumentRef = doc(firestore, 'mysecondcollection', 'CpLX4u9MIavFb5Mq4QsS');
          const docSnapshot = await getDoc(myDocumentRef);
    
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const result = data.SearchObjects || [];
             
            const matchResult = result.filter((item) =>
              item.unique.toLowerCase().includes(input.toLowerCase())
            );
            
            setFiles(matchResult);
          } else {
            setFiles([]);
          }
        } catch (error) {
          setError('Error fetching data:', error);
        }
      };
    
    handleSearch()
    },[input])


    useEffect(() => {

      const handleSave = async (item) => {
        try {
          const currentUser = auth.currentUser;
          
          if (currentUser) {
            const uid = currentUser.uid;
            const userDocRef = doc(firestore, 'usersCollection', uid);
            const userDocSnapshot = await getDoc(userDocRef);
    
            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data().userData || [];
    
              // Check if the item is not already saved
              if (!userData.some((savedItem) => savedItem.unique === item.unique)) {
                const updatedUserData = [...userData, item];
                if(updatedUserData){
                await setDoc(userDocRef, { userData: updatedUserData });
                setUserSavedData(updatedUserData);
              }
              else {
                console.error('Attempted to save undefined data:', updatedUserData);
              }

              }
            } else {
              const initialUserData = [item];
              if(initialUserData){
              await setDoc(userDocRef, { userData: initialUserData });
              setUserSavedData(initialUserData);
            }
            }
          }
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
      handleSave()
    
    },[input])
      */
    



      const NavigateCart = () =>{
        navigate('/Second/Login')

        setCartDiv(false)
        setUpdateCart(0)
     }

     const navigateAccount = () =>{
        navigate('/Account')
     }
   

     const navigateSearch = () =>{
       navigate('/Second/Search')
     }

     const handleChange = () => {
      navigate('/')
    }
    


   return(
    <div className={`${files.length > 0 ?  "bg-gray-200  h-full w-full " : "bg-gray-200 w-full h-screen "  }`}>




<div className=" hidden  lg:block">

      <div className= 'w-full bg-white grid h-18 top-0 z-10   text-black place-items-center fixed'>

        <div className=" lg:flex md:flex  xl:w-400  lg:w-340   md:w-270 ">    

         <div className=" lg:mr-3 md:mr-3 xl:mr-16"><p className='md:text-3xl lg:text-4xl text-black  md:font-bold font-mono' >Exclusive</p></div>


       



       <div className="relative flex xl:gap-4 lg:gap-3 md:gap-2" >
        <form>
        <div onClick={navigateSearch} className={`${isFixed ? " text-lg rounded-md  text-gray-400  bg-white border-r  border-black pl-12 lg:pt-2 lg:pb-2 lg:w-150 xl:w-260 md:w-98 md:pt-1 md:pb-1 outline-none pr-8    mt-1" : " xl:w-260 text-lg rounded-md  text-gray-400 bg-white border-r  border-black pl-12 lg:pt-2 lg:pb-2 lg:w-150 md:w-98 md:pt-1 md:pb-1 outline-none pr-8     mt-1" }`} ><p>Search Products, brands and categories</p></div>
        </form>
        <button   className="bg-orange-400 hover:bg-orange-600 lg:px-3 xl:px-4 md:px-1 h-10 xl:ml-1 mt-1 text-white  font-medium shadow-lg rounded-md">SEARCH</button>
        <img src={search} className={`${isFixed ? "absolute text-xl bottom-3 text-gray-900 ml-4   " : "absolute text-xl bottom-3 text-gray-900 ml-4   "}`} />
       
       </div>
       
     <div className="flex relative cursor-pointer hover:text-orange-400 lg:ml-2 xl:ml-8 md:ml-1  " onClick={NavigateCart}>
     <img src={cart}  className="mt-4  h-7 w-7 " />
        <p className= "font-medium mt-4 lg:ml-2 md:ml-1 text-lg" >Cart</p>
      {cartDiv && ( <div className="absolute w-5 h-5 grid place-items-center rounded-full bottom-6 bg-red-500" style={{'right' : '75%'}}><p className="text-white text-xs mb-0.5">{updateCart}</p></div> )} 
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

         <div className="flex relative" ><div onClick={navigateAccount} className="cursor-pointer"><img src={user} alt="user"  /></div> {cartDiv && ( <div className="absolute w-5 h-5 grid place-items-center rounded-full bottom-5 bg-red-500" style={{'right' : '20%'}}><p className="text-white text-xs mb-0.5">{updateCart}</p></div> )}   <div className="ml-4 cursor-pointer" onClick={NavigateCart}><img src={cart} /></div> </div>
       
         </div>
       
         <div className="grid place-items-center relative ">
      <img src={search} className="absolute mr-64 sm:mr-100 mt-5 z-10"/>
      <div onClick={navigateSearch} className="w-86 sm:w-100 sm:mt-4 mt-5 sm:text-lg text-sm rounded-full py-1   bg-white text-gray-400   border-r  border-black pl-11  sm:pl-12  outline-none   placeholder-gray-900  "><p>Search Products, brands and categories</p></div>
     </div>

        </div>


<div className="mb-4 pt-32   md:pt-28 md:pl-10 lg:mb-14 pl-4"><h3 className="text-sm font-mono text-gray-700">SHOP ONLINE IN NIGERIA</h3></div>

{files.length > 0 ? (
<div className= "grid w-full   sm:grid-cols-3 lg:grid-cols-4 grid-cols-2   place-items-center" >
 


 { files.map((item,index) => (
      <div key={item.id} className="mb-3  pl-1 md:mb-6 lg:h-82  h-78 sm:w-48 lg:w-56  w-40 bg-white md:transition-transform ease-in-out md:transform  md:hover:scale-105 ">
        
         <p className="text-sm font-bold mb-1">{item.name}</p>
        <button className="bg-red-600 hover:cursor-default rounded-sm text-white text-xs px-1 py-1 mb-1 mt-1 "> Pay on Delivery </button>
       <div > <img src={item.pictureURL} className=" mb-2   lg:h-auto md:w-40  h-36 w-40 " alt={`Image ${index}`}/> </div>
     <button className="bg-custom-color mb-2 hover:cursor-default rounded-sm text-white text-xs px-1 py-1">Official Store</button>
     <p className="text-sm font-bold mb-1">{item.Price}</p>
     <img src={star} />
     <p className="font-mono text-sm font-bold mt-1">Exclusive</p>

     <button className="bg-orange-600 items-center mt-2 rounded-sm px-4 py-2 text-white text-sm font-bold">ADD TO CART</button>

 
    </div>

   )


      
   
  
  )}

  s
 </div>

  
  ) : 
  


 

  <div className="  h-100 pt-4 grid place-items-center " style={{'right' : '30%'}}>
    <div className="bg-gray-100  w-40 h-40 mb-2 rounded-full grid place-items-center "><img src={scope} /> </div>
    <h4 className="font-medium text-center mb-1 items-center text-black">There are no results for "<span>{input}</span>"</h4>
    <p className="text-center">-Check your spelling for typing errors <br/> -Try searching with short and simple keywords <br/> -Try searching more general terms -you can then <br/> filter the search results </p>
    <button onClick={handleChange}   className=" font-medium pt-1 pb-1 px-3 md:px-8 bg-orange-600  ml-10 rounded text-white mt-3">GO TO HOMEPAGE</button>
  </div>

  
 
  }
   


  


</div>
 
 
    
    

   )


}

export default ResultFromSearch;