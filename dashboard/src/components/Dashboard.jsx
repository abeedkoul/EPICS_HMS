import React, { useContext } from 'react'
import {Context} from "../main"

const Dashboard = () => {

  const {isAuthenticated} = useContext(Context)





  

  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard