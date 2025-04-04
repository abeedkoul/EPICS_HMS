import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { TiHome } from "react-icons/ti"
import { RiLogoutBoxFill } from "react-icons/ri"
import { AiFillMessage } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaUserDoctor } from "react-icons/fa6"
import { MdAddModerator } from "react-icons/md"
import { IoPersonAddSharp } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';





const Sidebar = () => {

  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const goToHome = () => {
    navigateTo("/");
    setShow(!show);
  }
  const goToDoctorPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  }
  const goToMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  }
  const goToAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  }
  const goToAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  }
  const handleLogout = async () => {

    await axios.get("http://localhost:4000/api/v1/user/admin/logout", { withCredentials: true }).then(res => {
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    }).catch(err => {
      toast.error(err.response.data.message);
    })

  };





  return (
    <>
      <nav style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}>
        <div className='links'>
          <TiHome onClick={goToHome} />
          <FaUserDoctor onClick={goToDoctorPage} />
          <MdAddModerator onClick={goToAddNewAdmin} />
          <IoPersonAddSharp onClick={goToAddNewDoctor} />
          <AiFillMessage onClick={goToMessagesPage} />
          <RiLogoutBoxFill onClick={handleLogout} />

        </div>

      </nav>
      <div style={!isAuthenticated ? {display: "none"}:{display: "flex"}} className='wrapper' >
        <GiHamburgerMenu className='hamburger' onClick={()=>setShow(!show)}/>
      </div>
    </>
  )
}

export default Sidebar
