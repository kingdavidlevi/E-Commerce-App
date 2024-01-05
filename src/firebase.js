import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,addDoc,doc,getDoc, updateDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {v4 as uuidv4} from 'uuid'
  

const firebaseConfig = {
  apiKey: "AIzaSyBjduQ3e2mMdN7Q1oPjY0KN6WdYa3yRpaE",
  authDomain: "my-e-commerce-4b729.firebaseapp.com",
  projectId: "my-e-commerce-4b729",
  storageBucket: "my-e-commerce-4b729.appspot.com",
  messagingSenderId: "18246698018",
  appId: "1:18246698018:web:de16d79ffff1c7f36d767b",
  measurementId: "G-Y57HMH7R8J"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get analytics
const analytics = getAnalytics(app);

// Get Firestore and Storage instances
const firestore = getFirestore(app);
const storage = getStorage(app);
const myCollectionRef = collection(firestore, 'mycollection')

const db = getFirestore(app);

const arrayOfObjects = [
  {
    id: uuidv4(),
    pictureURL:  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2F1168x384red-copy-11-11.jpg?alt=media&token=65d95b4c-437e-467d-b1a4-1c9d699220da",
   },
  {
    id: uuidv4(),
    pictureURL: 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FAdis_BLF231168X384copy.jpg?alt=media&token=bc03bcd9-013e-4232-8141-32d7b907de37",
   },
  {
    id: uuidv4(),
    pictureURL:
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FBINATONE_BLACK_FRIDAY_BRAND_DAY_Slider_copy.jpg?alt=media&token=b53feb08-1b6b-4e36-8b6a-a0d8a3b8d32b",
   },
  {
    id: uuidv4(),
    pictureURL:  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FBINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS%20(1).jpg?alt=media&token=88907fcd-291c-449a-b221-bf44d0b3db57",
   },
  {
    id: uuidv4(),
    pictureURL: 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FBINATONE_BLACK_FRIDAY_BRAND_DAY_slider_FS.jpg?alt=media&token=e1e28d09-a8d9-463e-b72d-a8336a5a7ce8",
   },
  {
    id: uuidv4(),
    pictureURL:  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FDesktop_MLP_Slider__1168x384.jpg?alt=media&token=9fc2afa7-c30f-4403-a7d8-49182a7bf2cb",
   },
  {
    id: uuidv4(),
    pictureURL: "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2FFrame%20600.png?alt=media&token=9cd107bc-2fdb-40b4-b9d7-9076aa087722",
   },
  {
    id: uuidv4(),
    pictureURL: "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/images%2Fslider.jpg?alt=media&token=729884e2-8b73-42e5-8c6c-5db7bfda202e",
   },
 
  
];

//this is to create a new array of object and create the document also inside firebase(collection)

/*const addArrayToFirestore = async () => {
  try {
    // Get a reference to the 'mycollection' collection
    const myCollectionRef = collection(firestore, "mysecondcollection");

    // Add a new document with the array of objects
    const docRef = await addDoc(myCollectionRef, {
      arrayOfObjects: arrayOfObjects,
    });

    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
};

// Call the function to add the array to Firestore
addArrayToFirestore();

*/






/*const arrayOfObjects = [
  {
    id: uuidv4(),
    pictureURL: 
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2FClearance-sales.gif?alt=media&token=cc0",
  },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2F5k-store%20(1).gif?alt=media&token=01aee6b3-9132-4", 

    
  },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2FGlobal-best-seller.gif?alt=media&token="
    
  },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2Fgroceries.jpg?alt=media&token=35ad2946-",
    
  },
  {
    id: uuidv4(),
    pictureURL: 
      
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2Frefrigerator-12.gif?alt=media&token=5291b66d-f8e3-468a-a098-85c9288b7760" ,
    
  },
  {
    id: uuidv4(),
    pictureURL: 
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2Fgroceries.jpg?alt=media&token=35ad2946-",
    
  },
  {
    id: uuidv4(),
    pictureURL:  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2Frefrigerator-12.gif?alt=media&token=5291b66d-f8e3-468a-a098-85c9288b7760",
    
  },
  {
    id: uuidv4(),
    pictureURL: "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/ImagesGif%2Ftelevision.jpg?alt=media&token=db06c722-559c-41d5-b8d4-637200e0b6fa",
    
  },




]
*/

//this code add to an already existing array of object in firebase
/*
addDoc(myCollectionRef, { arrayOfObjects })
.then((docRef) => {
  console.log('Document written with ID: ', docRef.id);
})
.catch((error) => {
  console.error('Error adding document: ', error);
});
*/
export { app, analytics, firestore, storage,firebaseConfig };
