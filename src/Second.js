import React,{useEffect,useRef, useState} from "react";
import { Outlet, useNavigate, useOutletContext} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase'


function Second (){
  
    const navigate = useNavigate()

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app)
    const [files,setFiles] = useState([])
    const [error,setError] = useState('')
    const [input,setInput] = useState('')
    const {formValues,sethandleLocation,handlelocation,setFormValues,cartDiv,setCartDiv,nameValue,updateCart,setUpdateCart} = useOutletContext()
    

    /*useEffect(() => {
        const fetchData = async () => {
          try {
            // Use Firestore collection
            const myDocumentRef = doc(firestore, 'mysecondcollection', 'CpLX4u9MIavFb5Mq4QsS');
          
            // Fetch the specific document
            const docSnapshot = await getDoc(myDocumentRef);
          
            
            if (docSnapshot.exists()) {
                const data = docSnapshot.data()
                setFiles(data.SearchObjects)
       
                
             /* setData.List(arrayOfObjects.map((item) => item.mapValue.fields));*/
      
            
            /* } else {
              console.log('');
            }
          } catch (error) {
            setError('Error fetching data:', error);
          }
        };
      
        fetchData(); // Invoke the function to fetch data when the component mounts
      }, []); // Empty dependency array means the effect runs once after the initial render
      */







        return(
            <div>
            <Outlet context={{input,handlelocation,setInput,formValues,sethandleLocation,handlelocation,setFormValues,cartDiv,setCartDiv,nameValue,updateCart,setUpdateCart}} />
            </div>
        )



    }


    export default Second;