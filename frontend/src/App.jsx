import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'


export const App = () => {

  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </Router>
    
    </>
  )
}


export default App;