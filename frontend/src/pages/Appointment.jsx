import React from 'react'
import AppointmentForm from '../components/AppointmentForm';
import Hero from '../components/Hero';

const Appointment = () => {
  return <>
  <br></br>
  <br/>
  <Hero title={"Schedule Your Appointment | VITCARE"} imageUrl={"/signin.png"} />
  <AppointmentForm/>
  
  
  </>
}

export default Appointment