import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { Context } from "../main";



const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const handleLogout = async () => {

        await axios.get("http://localhost:4000/api/v1/user/patient/logout", { withCredentials: true }).then(res => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
        }).catch(err => {
            toast.error(err.response.data.message);
        })

    };

    const navigate = useNavigate();


    const gotoLogin = async () => {
        navigate("/login");
     };


    return (
        <nav className='container'>
            <div className='logo'>VITCARE</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/appointment">APPOINTMENT</Link>
                    <Link to="/about">ABOUT US</Link>
                </div>
                {isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button>) : (<button className='logoutBtn btn' onClick={gotoLogin}>LOGIN</button>)}
            </div>
        </nav>
    )
}

export default Navbar