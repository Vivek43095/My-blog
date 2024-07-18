import { Routes, Route, BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Blogdetail from './Component/Blogdetail';
import Login from './Component/Login';
import React from 'react';
import NotFound from './Component/Notfound';
import Unauthorized from './Component/Unauthorized';
import SomethingWentWrong from './Component/SomethingWentWrong';
import SearchResults from './Component/search/SearchResults';

//import { useEffect, useState } from "react";


 function App() {
const LoggedInStatusStorage = localStorage.getItem('USER_LOGEED_IN_STATUS')==="true"
const [isUserLoggedIn, setLoginStatus] = React.useState(LoggedInStatusStorage);

const updateLoggedInStatus = (status) => {
 setLoginStatus(status)
 }

 return (
  <BrowserRouter>
    <div className="App">
        <Navbar isUserLoggedIn={isUserLoggedIn} setLoginStatus={updateLoggedInStatus} />
        <main className={classes.MainContainer}>
          <Routes>
               <Route path={"/"} element={<Home/>} />
               <Route path={"/blog/:id"} element={<Blogdetail isUserLoggedIn={isUserLoggedIn} />} />
               <Route path={"/login"} element={<Login isUserLoggedIn={isUserLoggedIn} setLoginStatus={updateLoggedInStatus} />}/>
               <Route path='/search' element={<SearchResults/>}/>
               <Route path={"/notfound"} element={<NotFound/>}/>
               <Route path={"/unauthorized"} element={<Unauthorized/>}/>
               <Route path={"/somethingwentwrong"} element={<SomethingWentWrong/>}/>
         </Routes>
       </main>
    </div>
 </BrowserRouter>
   );
 }
 export default App;

