import React,{useState} from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink, Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { initializeApp } from "firebase/app";
 import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
 import {firebaseConfig} from './firebase'
 import { FaEye,FaEyeSlash } from "react-icons/fa";
  
 
 import {getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


function Signup (){
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const {cartDiv,setCartDiv,updateCart,nameValue,setUpdateCart} = useOutletContext()
    const [formValues, setFormValues] = useState({ email: '', password: '', nameValue: '' }) 
   const [visibility,setVisibility] = useState(false)
   const navigate = useNavigate()
   const firebaseApp = initializeApp(firebaseConfig);
   const auth = getAuth(firebaseApp);
   
   /*updateProfile(userCredential.user, {
    displayName: formValues.nameValue
  });
*/

    const handleSignUp = () => {

   
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password )
      .then((userCredential) => {
        // Set display name
        const user = userCredential.user
        console.log("User signed up successfully");
        if(user){
        navigate('/Cart')
      }
      })
      .catch((error) => {
        console.error("Sign-up error", error.message);
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
        <div className=" relative overflow-y-hidden h-screen md:overflow-y-visible ">
 


<div className="block " >

 
            
<div className=" lg:flex md:flex  md:justify-around border-b-r bor pt-6 h-20 border-gray-300 hidden ">    

 <div><p className='md:text-xl mt-3 md:font-bold'>Exclusive</p></div>


<div className="md:flex md:justify-between mt-3 gap-10 ">
<NavLink to='/Second/Info' className='hover:underline text-md font-semibold'>Home</NavLink>
<NavLink to='/Second/Info' className='hover:underline text-md font-semibold'>Contact</NavLink>
<NavLink to='/Second/Info' className='hover:underline text-md font-semibold'>About</NavLink>
<NavLink to='/Second/Login' className='hover:underline text-md font-semibold' >Login</NavLink>
</div>



<div  >
<form>
<input type="text" placeholder="what are you looking for"  className="border-r pl-6 pt-1 pb-1 outline-none border-black placeholder-gray-900 rounded-full mb-16"  />
</form>
</div>


</div>





        <div className="md:flex lg:justify-center md:mt-20 lg:mt-20   ">

            <div className=" lg:mr-20 md:mr-6 hidden md:block ">
            <img src={imgages} className="lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />
            </div>

            <div className="md:mt-16 md:block grid place-content-center items-center h-screen">
                <h3 className=" lg:text-2xl lg:font-semibold text-center md:text-start text-lg font-semibold md:text-2xl md:font-semibold">Create an account</h3>
                <p className="md:mt-6 mt-14 text-sm">Enter your details below</p>
                <form>
                    <input onChange={handleFormChanges} name="nameValue" value={formValues.nameValue}  type="text" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 w-80 outline-none mt-10  mb-6' placeholder="Name"required /> <br/>
                    <input onChange={handleFormChanges} name="email" value={formValues.email} type="email" className='border-2 border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 w-80 outline-none mb-6' placeholder="Email Address" required autoCapitalize="" /><br/>
                    <input onChange={handleFormChanges} name="password" value={formValues.password}  type={visibility ? 'password' : 'text'} className='border-2   relative  border-r-0 border-l-0 pb-1 border-t-0 border-gray-300 lg:w-96 md:w-90 w-80 outline-none mb-6' max={25} placeholder="Password" required/><br/>
                    {!visibility ? <div className="fixed right-40 bottom-56 mb-2" onClick={handleEye}> <FaEye/> </div> : <div className="fixed  right-40 bottom-56 mb-2" onClick={handleEye}> <FaEyeSlash/> </div>}
                     <button type="submit" onClick={handleSignUp} className="rounded-lg pt-1 pb-1 md:w-90 bg-red-400 lg:w-96 text-white w-80 mt-4">Create Account</button>
                     <p className="text-center mt-8 text-lg">Already have an account? <span><NavLink to='/Second/Login' className='underline'>Log in</NavLink></span></p>
                </form>
            </div>
        </div>

        </div>






        </div>
    )
}

 

export default Signup;