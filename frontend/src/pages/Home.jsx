import React from 'react'
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import Departments from "../components/Departments.jsx";
import MessageForm from "../components/MessageForm.jsx";

const Home = () => {
  return(
    <>
    <br></br>
    <br></br>
    <Hero title={"Welcome to VIT MEDICAL CENTER | Your TRUSTED Medical Provider"} imageUrl={"/hero.png"} />
    <Biography imageUrl={"/about.png"}/>
    <Departments />
    <MessageForm />


  </>)

}

export default Home