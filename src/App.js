import React from 'react';
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import './App.css';
import index from './index'
import ScrollToTop from './ScrollToTop';
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';
import Error from './Error';
import Info from './Info';
import CreateInfo from './CreateInfo';
import Products from './Products';
import MiddlePage from './MiddlePage';
import Cart from './Cart';
import Account from './Account';
import Search from './Search';
import ResultFromSearch from './ResultFromSearch';
import Second from './Second';
import OverAll from './OverAll';


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<OverAll />}>
    
  <Route  element={<ScrollToTop/>} >
    <Route path='/' element={<HomePage/>} />
  <Route path='Products' element={<Products/>} />
  <Route path='MiddlePage' element={<MiddlePage/>} />

  <Route path='Cart' element={<Cart/>} />
  <Route path='Account' element={<Account/>} />
  </Route>

  
   <Route path='Second' element={<Second/>}>
  <Route path='CreateInfo' element={<CreateInfo/>} />
  <Route path='Login' element={<Login/>} />
  <Route path='*' element={<Error/>} /> 
  <Route path='ResultFromSearch' element={<ResultFromSearch/>} />
  <Route path='Info' element={<Info/>} />
  <Route path='Signup' element={<Signup/>} />
<Route path='Search' element={<Search/>} />

</Route>


</Route>
  
))
function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;




