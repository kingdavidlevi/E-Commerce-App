import React,{useState} from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink,useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
 import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
 import {firebaseConfig} from './firebase'
 import { FaEye,FaEyeSlash } from "react-icons/fa";
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 


function Login (){
    const [formValues, setFormValues] = useState({ email: '', password: '', nameValue: '' })
    const [visibility,setVisibility] = useState(false)
    const navigate = useNavigate()
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
 


    
    const handleSignIn = () => {

   
         signInWithEmailAndPassword(auth, formValues.email, formValues.password )
          .then((userCredential) => {
            // Set display name
            const user = userCredential.user
            console.log(user)
            
            console.log("User signed up successfully");
            if(user){
            navigate('/Cart')
          }
          })
          .catch((error) => {
            console.error("Sign-up error", error);
            console.log('after')
          });
    
    
    
        }


        const handleFormChanges = (e) =>{
            const {name, value} = e.target
    
            setFormValues((prevdata) => ({
              ...prevdata,
              [name]:value
    
              
            }))
     
         }




         const handleEye = () => {
          setVisibility(prevstate => !prevstate)
         }


    return(
        <div className="  relative overflow-y-hidden h-screen md:overflow-y-visible">
 



  <div className="block">  

<div className=" lg:flex md:flex md:justify-around border-b-r bor pt-6 h-20 border-gray-300 hidden ">    

 <div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>Home</NavLink>
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>Contact</NavLink>
<NavLink to='/Second/CreateInfo' className='text-md font-semibold hover:underline'>About</NavLink>
<NavLink to='/Second/SignUp' className='hover:underline text-md font-semibold' >Sign Up</NavLink>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>





        <div className="md:flex lg:justify-center  items-center  grid place-items-center h-screen md:h-full md:mt-20 lg:mt-20    ">

            <div className=" lg:mr-24 md:mr-6  hidden md:block">
            <img src={imgages} className=" lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />
            </div>

            <div className="md:mt-16 md:block items-center grid place-content-center shadow-xl md:shadow-none bg-white  w-90  md:h-full">
                <h3 className=" lg:text-2xl text-center md:text-start lg:font-semibold mt-4 md:mt-0  md:text-2xl font-semibold md:font-semibold">Log in to Exclusive </h3>
                <p className="md:mt-6 mt-14  text-sm">Enter your details below</p>
                <form>

                    <input onChange={handleFormChanges} name="email" type="email" className='border-2 border-r-0 border-l-0 pb-1 w-80 border-t-0 border-gray-300 mt-10 pl-2 md:pl-0 lg:w-96 md:w-90 outline-none mb-6' placeholder="Email Address" required /><br/>
                    <input onChange={handleFormChanges} name="password" type="password" className='border-2 border-r-0 border-l-0 pb-1 w-80 border-t-0 border-gray-300 pl-2 md:pl-0 lg:w-96 md:w-90 outline-none mb-6' max={25} placeholder="Password" required/><br/>
                    {!visibility ? <div className="fixed  bottom-56 mb-2" onClick={handleEye}> <FaEye/> </div> : <div className="fixed  right-40 bottom-56 mb-2" onClick={handleEye}> <FaEyeSlash/> </div>}
                     <button onClick={handleSignIn} type="submit" className="rounded-lg pt-1 pb-1 md:w-90 bg-red-400 w-80 lg:w-90 text-white mt-4">Login in</button>
                     <p className="text-center mt-8 mb-4 md:mb-0 text-lg">Don't have an account? <span><NavLink to='/Second/Signup' className='underline'>Sign Up</NavLink></span></p>
                </form>
            </div>
        </div>



        </div> 





        </div>
    )
}


export default Login;