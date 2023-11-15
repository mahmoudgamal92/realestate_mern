import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import About from "./screens/About";
import Profile from './screens/Profile';
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/SignIn' element = {<SignIn />}/>
    <Route path='/SignUp' element = {<SignUp/>}/>
    <Route path='/About' element = {<About/>}/>
    <Route path='/Profile' element = {<Profile/>}/>
  </Routes>
  </BrowserRouter>
  )
}