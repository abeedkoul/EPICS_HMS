import React, { useContext, useState } from 'react'
import { Context } from '../main'

const Doctors = () => {

  const [doctors, setDoctors] = useState([]);
  const {isAuthenticated}= useContext(Context);


  


  return (
    <div>

    </div>
  )
}

export default Doctors