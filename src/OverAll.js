import React,{useState,useEffect} from "react";
import Header from './Header'
import { Outlet, useLocation } from "react-router-dom";



function OverAll() {
 const [updateCart,setUpdateCart] = useState(0)
 const [cartDiv,setCartDiv]  = useState(false)
 const location = useLocation(); 
 const [handlelocation, sethandleLocation] = useState(true)
 const [identify,setIdentify] = useState([])
useEffect(() =>{
    window.scrollTo(0,0);
  
   },[location]);





   return(
    <div>
        <Outlet context={{cartDiv,setIdentify,identify,sethandleLocation,setCartDiv,handlelocation,sethandleLocation,setUpdateCart,updateCart}}/>
    </div>

   )

}

export default OverAll;