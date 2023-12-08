import React,{useState,useEffect} from "react";
import Header from './Header'
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";


function    ScrollToTop (){

    const [showForm,setShowForm] = useState(true)
    const [isFixed,setIsFixed] = useState(false)
    const location = useLocation();
    const [mobileFixed,mobileSetIsFixed] = useState(false)
    
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
    <Outlet context={{isFixed,setIsFixed,mobileFixed}}  />
    <Footer />

    </div>
)


}



export default ScrollToTop;