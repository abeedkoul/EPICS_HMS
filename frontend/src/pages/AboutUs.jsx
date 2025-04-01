import React from 'react'
import Hero from '../components/Hero'
import Biography from "../components/Biography"

const AboutUs = () => {
  return (
    <>
    <br/>
    <br/>
    <Hero title="Learn More About Us | VITCARE" imageUrl={"/about.png"}/>
    <Biography imageUrl={"/whoweare.png"} />
    </>
  )
}

export default AboutUs