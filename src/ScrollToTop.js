import React,{useState,useEffect} from "react";
import Header from './Header'
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import Footer from "./Footer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'

function    ScrollToTop (){

    const [showForm,setShowForm] = useState(true)
    const [isFixed,setIsFixed] = useState(false)
    const location = useLocation();
    const [mobileFixed,mobileSetIsFixed] = useState(false)
    const [hamburger,setHamburger] = useState(false)
    const [input,setInput] = useState('')

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const {formValues,setFormValues,cartDiv,setCartDiv,updateCart,setUpdateCart} = useOutletContext()




 useEffect(() =>{
  window.scrollTo(0,0);

 },[location]);


 useEffect(() => {
    const handleScroll = () => {
  setIsFixed (window.scrollY > 106)
    }

    window.addEventListener('scroll', handleScroll )

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


 useEffect(() => {
    const handleScroll = () => {
  mobileSetIsFixed (window.scrollY > 48)
    }

    window.addEventListener('scroll', handleScroll )

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


    
return (
    <div>
    <Header />
    <Outlet context={{isFixed,setIsFixed,input,mobileFixed,hamburger,setHamburger,formValues,setFormValues,cartDiv,setCartDiv,updateCart,setUpdateCart}}  />
    <Footer />

    </div>
)


}



export default ScrollToTop;