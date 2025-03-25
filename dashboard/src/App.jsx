import "./App.css";
import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AddNewAdmin from './components/AddNewAdmin'
import AddNewDoctor from './components/AddNewDoctor'
import Messages from './components/Messages'
import Doctors from './components/Doctors'
import Sidebar from './components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Context } from "./main"






const App = () => {

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/admin/me", { withCredentials: true });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/doctor/addnew' element={<AddNewDoctor />} />
          <Route path='/admin/addnew' element={<AddNewAdmin />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/doctors' element={<Doctors />} />

        </Routes>
        <Sidebar/>
        <ToastContainer position='top-center' />
      </Router>


    </>
  )
}

export default App