import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,addDoc,doc,getDoc, updateDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {v4 as uuidv4} from 'uuid'
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/app';  

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
const auth = getAuth(app);
// Get analytics
const analytics = getAnalytics(app);

// Get Firestore and Storage instances
const firestore = getFirestore(app);
const storage = getStorage(app);
const myCollectionRef = collection(firestore, 'mycollection')

const db = getFirestore(app);

/*const arrayOfObjects = [
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
 
  
];*/



const SearchObjects = [
  {
    id: uuidv4(),
    pictureURL: "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(1).jpg?alt=media&token=3a9cbb4a-4bf6-42e9-bc44-032c75da7552",
    name : "Generator",
    description : "Sumec 30000 Mah",
    Price: "$100",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL: 
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(10).jpg?alt=media&token=fa5cce2f-466f-4536-9b7a-aa73ca80ba50" ,
    name : "Infinix",
    description : "30i 8.56 8GB RAM/128GB ROM Andriod",
    Price: "$70",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(11).jpg?alt=media&token=38bedb5a-2795-48ab-8379-854ad8aea383" ,
    name : "Tecno",
    description : "30i 7.56 5GB RAM/128GB ROM Andriod",
    Price: "$140",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL: 
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(12).jpg?alt=media&token=fe8c58db-0b8c-45c4-a609-a0f6f2d7c520" ,
    name : "Samsung",
    description : `30i 6.56 10GB" RAM/128GB ROM Andriod`,
    Price: "$100",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(13).jpg?alt=media&token=3542e140-3bd7-467c-a58b-0de31bead2a5",
    name : "Redmi",
    description : `A04s 6.5 5GB RAM/64GB ROM`,
    Price: "$1200",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL: "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(15).jpg?alt=media&token=97f1f2db-984e-4664-8455-f19856f10c5b" ,
    name : "Redmi",
    description : "A04s 6.5 5GB RAM/64GB ROM",
    Price: "$500",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(14).jpg?alt=media&token=50ede5c4-082e-46c6-83de-4298245e2968" ,
    name : "Tecno",
    description : "Spark 10",
    Price: "$100",
    unique: "phones",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(16).jpg?alt=media&token=e51e4860-ba94-4951-94d0-58f79e90ac67" ,
    name : "Gucci Wears",
    description : "Top and short",
    Price: "$100",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(17).jpg?alt=media&token=488c7a91-df45-4e56-82b7-1f352e3a8534" ,
    name : "Gucci Wears",
    description : "Top and short",
    Price: "$200",
    unique: 'Clothes',
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(18).jpg?alt=media&token=be2e9296-0458-4f66-a085-13b330aa9701" ,
    name : "Gucci Wears",
    description : "Top and short",
    Price: "$40",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(19).jpg?alt=media&token=8b61c3d0-1215-4f88-931e-a7857780048f" ,
    name : "Gucci Wears",
    description : "Top and short",
    Price: "$70",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(20).jpg?alt=media&token=27a2cb5b-14c3-44da-b1cc-8762ac3a818e" ,
    name : "Gucci Wears",
    description : "Grey top and a blue top",
    Price: "$750",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
      
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(21).jpg?alt=media&token=022e1f02-e27f-456d-83f7-cefcb3b63584" ,
    name : "LOUIS",
    description : "JEANS",
    Price: "$30",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
      
 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(22).jpg?alt=media&token=7119a717-5817-42bc-857f-154fc4e2e310" ,
    name : "LOUIS",
    description : "Nice Shorts",
    Price: "$30",
    unique: "Clothes",
    count: 1
   },

  {
    id: uuidv4(),
    pictureURL:  

"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(23).jpg?alt=media&token=fc7f000f-1ff8-466d-9db9-5fdcc58a0f7f" ,
    name : "Bottega",
    description : "Black polo and Shorts",
    Price: "$30",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  

 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(24).jpg?alt=media&token=45e12a3b-1750-4be6-b750-6d405db1aecf" ,
    name : "Bottega",
    description : "Navy blue and White polo",
    Price: "$70",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(25).jpg?alt=media&token=1cc6d92a-da29-46ed-ad02-ba5863fca401"
  ,
    name : "Bottega",
    description : "Big Boyfriend Jeans",
    Price: "$300",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(26).jpg?alt=media&token=55632afe-6b03-450c-9059-145ee3e2b3b5"
  ,
    name : "Bottega",
    description : "High Five Quality Up and down wears",
    Price: "$250",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(27).jpg?alt=media&token=127d72d7-b939-4ea8-90ff-9a63bf423719"
  ,
    name : "Gucci",
    description : "Joggers",
    Price: "$200",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(28).jpg?alt=media&token=12c6ed59-57bf-49a4-92eb-7f555abdaae0"
 
  ,
    name : "Gucci",
    description : "Shorts",
    Price: "$200",
    unique: "Clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
   
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(3).jpg?alt=media&token=e685d0ae-38c2-4ac1-b874-3a8bb2f921b7"
 
  ,
    name : "Generator",
    description : "Sumec firman 30000 Mah",
    Price: "$2000",
    unique: "Generator",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(30).jpg?alt=media&token=ebff9ccb-d49c-413c-8c5e-21321b22e7f0"
 
  ,
    name : "Jordan Polo",
    description : "Jordan 8 Polo",
    Price: "$2000",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(31).jpg?alt=media&token=76004ec3-b24d-4895-a9ab-e75487442673"
 
  ,
    name : "Jordan Polo",
    description : "Joggers",
    Price: "$200",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
   
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(32).jpg?alt=media&token=83593885-2bad-475c-b91e-b8f921760869"
 
  ,
    name : "Collar Shirt",
    description : "Collar Shirt of different colors and sizes",
    Price: "$200",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
   
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(33).jpg?alt=media&token=f8a5a58e-6651-4fb9-b0db-f00b2542def0" 
 
 
  ,
    name : "Collar Shirt",
    description : "Collar Shirt of different colors and sizes",
    Price: "$200",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(34).jpg?alt=media&token=4c22c106-e5fd-47b5-83b3-0fdaa221f10e"
  ,
    name : "Sexy White Top",
    description : "Round neck Polo with Short",
    Price: "$150",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(35).jpg?alt=media&token=f7cb6ba3-02b3-403b-a7a6-65b7a1675e12"
  ,
    name : "Short",
    description : "Puma Short",
    Price: "$150",
    unique: "clothes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(36).jpg?alt=media&token=6f6a93a4-7c4c-4d2b-9298-74557da2afc6"
  ,
    name : "Sneakers",
    description : "Puma Shoe",
    Price: "$150",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(37).jpg?alt=media&token=b876b20d-4244-4ec9-a128-7583bd4cc00a"
  ,
    name : "Sneakers",
    description : " White Puma Shoe",
    Price: "$10",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(38).jpg?alt=media&token=f76cf02b-5501-4b63-98f0-d8b881c0bf34"
  ,
    name : "Sneakers",
    description : "Sports Shoe",
    Price: "$10",
    unique: "shoes",
    count: 1
   },

  {
    id: uuidv4(),
    pictureURL:  
     
 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(39).jpg?alt=media&token=5f121e2a-b61a-457c-9c3f-0cd24027c67d"
  ,
    name : "Makasine",
    description : "Customized leather shoe",
    Price: "$100",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(40).jpg?alt=media&token=0d7ee3ae-b3dc-4196-a57d-9553d0fb7f29"

  ,
    name : "Canvas",
    description : "Customized Canvas",
    Price: "$100",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
     
 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(41).jpg?alt=media&token=013bc437-d2a7-47b1-9045-aa16b0d857a0"

  ,
    name : "Black Shoe",
    description : "Customized Black Shoe",
    Price: "$100",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
      
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(42).jpg?alt=media&token=aee1ef40-d7b0-495f-a490-b07164a6a2ec"
  ,
    name : "Brown Shoe",
    description : "Customized Brown Shoe",
    Price: "$100",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
     
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(44).jpg?alt=media&token=add0e9d1-5196-4d46-9ac3-576076b4e6c2" 
  ,
    name : "Brown Shoe",
    description : "Customized Brown Dotted Shoe",
    Price: "$100",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(45).jpg?alt=media&token=e0fa3023-eaed-4920-b52b-a14b91ec07df" 
  ,
    name : " Dark Brown Shoe",
    description : "Customized Dark Brown  Shoe",
    Price: "$900",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(46).jpg?alt=media&token=1a22bbc0-57bd-4255-b048-86ac34cf9918"
  ,
    name : " Dark Brown Shoe",
    description : "Customized Dark Brown  Shoe",
    Price: "$130",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
 
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(46).jpg?alt=media&token=1a22bbc0-57bd-4255-b048-86ac34cf9918"
  ,
    name : " Dark Brown Shoe",
    description : "Customized Dark Brown  Shoe",
    Price: "$140",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(47).jpg?alt=media&token=aa7ec310-291a-41ec-aefe-f4a196cb9ed4"
  ,
    name : " Black Shoe",
    description : "Customized Black Shoe",
    Price: "$140",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(48).jpg?alt=media&token=adfbbb76-7f3b-4e9c-9290-168e0b7bde8a"
  ,
    name : " Mirror Shoe",
    description : "Customized Black Shoe",
    Price: "$1400",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(49).jpg?alt=media&token=8e8587ce-6acf-43d2-b32c-30518ba31e0d"
  ,
    name : "turkey",
    description : "Made in turkey",
    Price: "$140",
    unique: "shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(5).jpg?alt=media&token=4e0d4158-2d03-401c-9ea9-d7c8bcd0ea21"
  ,
    name : "Generator",
    description : "Portable Generator",
    Price: "$140",
    unique: "Generator",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(50).jpg?alt=media&token=845f999d-cab0-404a-a655-31fe39bac6f6"
  ,
    name : "Italian Shoe",
    description : "Made in italy",
    Price: "$1300",
    unique: "Shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(51).jpg?alt=media&token=6d4eba02-1e24-4d4a-8335-d6a86c37eff2"
  ,
    name : "Italian Checked Shoe",
    description : "Made in italy",
    Price: "$1300",
    unique: "Shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(52).jpg?alt=media&token=bb7d4d38-3888-4b64-8652-101815e00b44"
  ,
    name : "Italian Brown Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(52).jpg?alt=media&token=bb7d4d38-3888-4b64-8652-101815e00b44"
  ,
    name : "Italian Brown Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },
  {
    id: uuidv4(),
    pictureURL:  
  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(54).jpg?alt=media&token=787821ad-f329-4007-b9d5-0a5dd1a06168"
  ,
    name : "Italian Black Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
  
     
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(55).jpg?alt=media&token=630d3d8c-a137-49dc-b167-a96cfc6097e7"
  ,
    name : "Italian Black Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(56).jpg?alt=media&token=cca79ddf-353e-4a7a-bca2-87385f2efa48"
 
  ,
    name : "italian Black Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },

   {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(57).jpg?alt=media&token=2c20e87c-2a7b-4217-bfcf-f5501c6b1ac3"
 
  ,
    name : "italian Mirror Shoe",
    description : "Made in italy",
    Price: "$1800",
    unique: "Shoes",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(58).jpg?alt=media&token=8d75c801-6dd0-474b-a4af-90f5086e3e0c"
 
  ,
    name : "Glasses",
    description : "Made in italy",
    Price: "$1800",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
      
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(59).jpg?alt=media&token=6e874da6-0fc2-433a-bae5-a7fa3deceefd"
 
  ,
    name : "Anti Blue Ray",
    description : "Anti Blue Rays Radiation",
    Price: "$1800",
    unique: "Glasses",
    count: 1
   },

   {
    id: uuidv4(),
    pictureURL:  
    
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(6).jpg?alt=media&token=c07c82bc-ce97-466b-a826-8455c6a026a3"
 
  ,
    name : "SENWEI",
    description : "3000Mah SEIWEI Generator ",
    Price: "$1000",
    unique: "Generator",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(60).jpg?alt=media&token=767c445e-a4d8-480c-b762-a9d28a5bbc3b"
 
  ,
    name : "SENWEI",
    description : "3000Mah SEIWEI Generator ",
    Price: "$1000",
    unique: "Generator",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(62).jpg?alt=media&token=3ba90000-e60c-49b7-b044-905d5e074efb"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$100",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(63).jpg?alt=media&token=70413953-7533-405e-958b-356d6cb10d05"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$100",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(64).jpg?alt=media&token=a0200bbb-0f54-4f5e-a12f-fe4ad79a938b"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$100",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
   
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(65).jpg?alt=media&token=9a30e2e4-aa55-4a5b-8b45-00ee66cc060a"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$100",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(66).jpg?alt=media&token=3a356037-0450-46c7-8989-44c3c94c6cf0"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$100",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(67).jpg?alt=media&token=ec9ddab6-0df2-4d75-be2c-62780324d00d"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$70",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(68).jpg?alt=media&token=f117e815-75b7-4aef-a2ff-9e53fd41d433"
 
  ,
    name : "Glasses",
    description : "Anti Blue Rays Radiation",
    Price: "$70",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
      
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(69).jpg?alt=media&token=b9b23df8-dfba-4420-8d58-31fe1d16d856"
 
  ,
    name : "Designers ",
    description : "Unique Shiny Gold glasses",
    Price: "$70",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
  
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(7).jpg?alt=media&token=ce263ae8-043e-4cd6-9f20-f94705ad95d6"

  ,
    name : "ELEPAQ Generator ",
    description : "Unique Shiny Gold glasses",
    Price: "$70",
    unique: "Generator",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
   
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(70).jpg?alt=media&token=945e44ff-d421-45a6-8e2a-fdca8add4b58"

  ,
    name : "Designers ",
    description : "Unique Shiny Gold glasses",
    Price: "$70",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(72).jpg?alt=media&token=7cc46ac8-2435-4d37-a46c-437c864117ca"
    

  ,
    name : "Black Glasses ",
    description : "Unique Shiny Black glasses",
    Price: "$70",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(73).jpg?alt=media&token=f200500e-00b3-4a3b-915d-33cd4808c105"
    

  ,
    name :" Gold  Glasses ",
    description : "Unique Shiny Gold glasses",
    Price: "$90",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(74).jpg?alt=media&token=eb36b3ad-3ce7-4876-ae59-1a80da3166d3"
    

  ,
    name :" Single line Glasses ",
    description : "Unique Shiny Black glasses",
    Price: "$90",
    unique: "Glasses",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
   
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(75).jpg?alt=media&token=f82c1ad0-a8d6-425f-8fcd-32feb3c0f25e"

    

  ,
    name :" VICTUS ",
    description : "Folio 9v8 model 2.0mghaz",
    Price: "$90",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
"https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(76).jpg?alt=media&token=d842c53d-a837-4972-93e5-9b97b958a713"

  ,
    name :" Hp ",
    description : "Folio 9v8 model 2.0mghaz",
    Price: "$90",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(77).jpg?alt=media&token=67ba2a25-884f-435b-839e-42b5c9360ee7"

  ,
    name :" Hp ",
    description : "Folio 9v8 model 2.0mghaz",
    Price: "$100",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(78).jpg?alt=media&token=c43a24f7-8d22-4000-b571-e72b12654579"

  ,
    name :" Hp ",
    description : "Folio 9v8 model 2.0mghaz Screen Touch 360 Rotation",
    Price: "$100",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(79).jpg?alt=media&token=7a27bfb2-7598-4b4b-8cec-8c74de5797ab"

  ,
    name :" Hp ",
    description : "Folio 9v8 model 2.0mghaz ",
    Price: "$100",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(8).jpg?alt=media&token=5d54d2c4-f0d9-410d-b893-76306a1003ac"

  ,
    name :" Cassete Player ",
    description : "Bluetti Music Transmission ",
    Price: "$100",
    unique: "Radio",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(80).jpg?alt=media&token=84a75a5a-32fa-4257-9612-85acf4bc2418"

  ,
    name :"Hp",
    description : "Folio 9v8 model 2.0mghaz ",
    Price: "$120",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(81).jpg?alt=media&token=21c49f25-43b8-498d-9c64-869712595866"

  ,
    name :"Hp",
    description : "Folio 9v8 model 2.0mghaz ",
    Price: "$120",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(82).jpg?alt=media&token=d49ae790-81b1-46be-b2af-bdc00fe255f7"

  ,
    name :"Hp",
    description : "Folio 9v8 model 2.0mghaz Screen Touch Bendable 360 ",
    Price: "$1200",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
     
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(83).jpg?alt=media&token=c1c30f59-7da2-4815-9242-e02fb83d8335"

  ,
    name :"Hp",
    description : "Folio 9v8 model 4.0mghaz Screen  ",
    Price: "$1200",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(84).jpg?alt=media&token=8b105421-ec04-4cbf-b18a-469c4a21fd43"

  ,
    name :"Hp",
    description : "Folio 9v8 model 4.0mghaz Screen  ",
    Price: "$1200",
    unique: "Laptop",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(86).jpg?alt=media&token=be976b82-09ae-4f4b-94ac-63742f11433d"

  ,
    name :"Chess",
    description : "Board Chess game ",
    Price: "$1200",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(87).jpg?alt=media&token=ce48bfb5-fc41-4117-afaf-4937db887c14"

  ,
    name :"Count Game",
    description : "Games For Babies ",
    Price: "$10",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(88).jpg?alt=media&token=faf41614-fc43-4e12-acb6-c54269115f97"

  ,
    name :"PS4",
    description : "PlayStation ",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(89).jpg?alt=media&token=8b1fb740-f033-45b0-a199-28bb06a298db"

  ,
    name :"PS4",
    description : "Grand theft ",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(9).jpg?alt=media&token=0d8a4557-271f-4ffb-87a7-56458466d0e7"

  ,
    name :"Thermacool",
    description : "3.75KVA Watts 30000Mah ",
    Price: "$120",
    unique: "Generator",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(90).jpg?alt=media&token=8c0d63a4-e167-47e3-8992-6471cf6929ac"

  ,
    name :"XBOX",
    description : "Watch dogs game",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(91).jpg?alt=media&token=3b0cca61-bc02-4585-8aa1-d5be6c20186c"
  ,
    name :"PS5",
    description : "Spider-man",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(92).jpg?alt=media&token=3877c77a-858a-4551-b3a7-78d9eb949413"
  ,
    name :"PS4",
    description : "Uncharted",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(93).jpg?alt=media&token=5e4561d5-18c7-4daa-9638-1b962843c82e"
    ,
    name :"PS4",
    description : "Uncharted",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(94).jpg?alt=media&token=b6c9b353-9c1f-4bad-b8ed-25be0f3738d2"
    ,
    name :"PS4",
    description : "Uncharted",
    Price: "$120",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2F1%20(95).jpg?alt=media&token=d0f7a003-e1a2-44ef-8442-9f597e7b4516"
    ,
    name :"XBOXONE",
    description : "The Witcher Wild Hunt",
    Price: "$1200",
    unique: "Games",
    count: 1
   },
   {
    id: uuidv4(),
    pictureURL:  
    "https://firebasestorage.googleapis.com/v0/b/my-e-commerce-4b729.appspot.com/o/searchImages%2Fnote-phones_300x400.png?alt=media&token=2ef9fe9e-4037-47e5-9185-4a1b11d95709"
    ,
    name :"Itel",
    description : "3000 mah ",
    Price: "$120",
    unique: "Phones",
    count: 1
   },




 ]

//this is to create a new array of object and create the document also inside firebase(collection)

/*const addArrayToFirestore = async () => {
  try {
    // Get a reference to the 'mycollection' collection
    const myCollectionRef = collection(firestore, "mysecondcollection");

    // Add a new document with the array of objects
    const docRef = await addDoc(myCollectionRef, {
      SearchObjects: SearchObjects,
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
export { app, analytics,auth,db, firestore, storage,firebaseConfig };
