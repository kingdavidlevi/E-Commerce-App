import React,{useState} from "react";
import imgages from '../src/images/Side Image (1).png'
import { NavLink, Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { initializeApp } from "firebase/app";
 import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
 import {firebaseConfig} from './firebase'
 import { FaEye,FaEyeSlash,FaSpinner } from "react-icons/fa";
  
 
 import {getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


function Signup (){
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const {cartDiv,handlelocation,setCartDiv,updateCart,nameValue,setUpdateCart} = useOutletContext()
    const [formValues, setFormValues] = useState({ email: '', password: '', nameValue: '' }) 
   const [visibility,setVisibility] = useState(false)
   const navigate = useNavigate()
   const firebaseApp = initializeApp(firebaseConfig);
   const auth = getAuth(firebaseApp);
   const [error,setError] = useState('')
   const [loading,setLoading] = useState(false)
   const [user,setUser] = useState([])
   const [isButtonDisabled, setButtonDisabled] = useState(false);
   
   /*updateProfile(userCredential.user, {
    displayName: formValues.nameValue
  });
*/

    const handleSignUp = (e) => {
      e.preventDefault()
      setLoading(true)
   
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password )
      .then((userCredential) => {
        // Set display name
        const user = userCredential.user
        console.log("User signed up successfully");
        if(user.uid){
           
        navigate('/Cart')
      }
      })
      .catch((error) => {
        console.error(" Firebase Sign-up error", error);
      });



    }




    /*const handleSignUp = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError("")
  
  
      const option = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: formValues.email, password: formValues.password })
      }
      try {
  
        const response = await fetch('https://weblify.onrender.com/v1/auth/register', option);
        const data = await response.json()
    
        setUser(data.data)
         if(user){
          navigate('/Cart')
         }
     
  
      }
  
      catch (err) {
        setError(err)
        console.log(err)
  
      }
      setLoading(false)
      setFormValues('')
  
    };*/
  


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
 
 {handlelocation && (

<div className="block " >

 
            
<div className=" lg:flex md:flex    md:justify-around border-b-r bor pt-6 h-20 border-gray-300 hidden ">    

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





        <div className="md:flex   grid place-items-center  h-screen md:h-full  lg:justify-center md:mt-20 lg:mt-20   ">

            <div className=" lg:mr-20 md:mr-6 hidden md:block ">
            <img src={imgages} className="lg:w-200 lg:h-1200 md:ml-4  md:h-100 md:w-90 sm:h-100" />

            
            </div>

            <div className="md:mt-16 md:block relative grid place-content-center items-center  shadow-xl md:shadow-none bg-white  w-90  md:h-full">
            <img src={imgages} className="md:hidden h-56 w-full mt-4 "  />

            {loading ? (


<div className="  z-10   " ><FaSpinner className="md:h-11 absolute h-11 w-11 md:w-11 bottom-56    grid place-items-center rotate-180 animate-spin " style={{'right' : '45%'}}/></div>
) : null}

                <h3 className=" lg:text-2xl mt-4 md:mt-0 lg:font-semibold text-start md:text-start text-lg font-semibold md:text-2xl md:font-semibold">Create an account</h3>
                <p className="md:mt-6 mt-4 text-sm">Enter your details below</p>
                <form>
 
                    <input onChange={handleFormChanges}   name="email" value={formValues.email} type="email" className='mt-10 border-2 border-r-0 border-l-0 pb-1  border-t-0 border-gray-300 lg:w-96 md:w-90 w-80 pl-2 md:pl-0 outline-none mb-6' placeholder="Email Address" required autoCapitalize="" /><br/>
                    <input onChange={handleFormChanges}  name="password" value={formValues.password}  type={visibility ? 'password' : 'text'} className='border-2   relative  border-r-0 border-l-0 pb-1 border-t-0 pl-2 md:pl-0 border-gray-300 lg:w-96 md:w-90 w-80 outline-none mb-6' max={25} placeholder="Password must have 8 characters" required/><br/>
                    {!visibility ? <div className="absolute md:bottom-32 md:ml-10 bottom-36 mb-3" onClick={handleEye} style={{'right' : '10%'}}> <FaEye className="text-lg"/> </div> : <div className="absolute md:bottom-32 bottom-36 mb-3" onClick={handleEye} style={{'right' : '10%'}}> <FaEyeSlash className="text-lg"/> </div>}
                {formValues.email.length <= 0 || formValues.password.length <= 0 ? (     <button type="submit"     disabled={isButtonDisabled}  className="rounded-lg pt-1 pb-1  md:w-90 bg-red-400 lg:w-96 text-white w-80 mt-4">Create Account</button>) : <button type="submit" onClick={handleSignUp}  className="rounded-lg pt-1 pb-1  md:w-90 bg-red-400 lg:w-96 text-white w-80 mt-4">Create Account</button> }
                     <p className="text-center mt-8 mb-4 md:mb-0 text-lg">Already have an account? <span><NavLink to='/Second/Login' className='underline'>Log in</NavLink></span></p>
                </form>
            </div>
        </div>

        </div>


        )}



        </div>
    )
}

 

export default Signup;