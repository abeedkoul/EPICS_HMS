import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddNewAdmin = () => {

  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/admin/addnew", { 
        firstName,
         lastName,
          email,
          phone,
          aadhar,
          dob, 
          gender, 
          password
         },
        { 
          withCredentials: true, 
          headers: { "Content-Type": "application/json" } 
        });
      toast.success(response.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }



  return (
    <>

    <section className='page'>
    <div className='container form-component add-admin-form'>
    <img src='/vlogo.png' alt='logo' className='logo'/>
    <h1 className='form-title'>ADD NEW ADMIN</h1>

    <form onSubmit={handleAddNewAdmin}>
      <div>
        <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
        <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
      </div>
      <div>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type='number' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
      </div>
      <div>
        <input type='number' placeholder='Aadhar Number' value={aadhar} onChange={(e) => setAadhar(e.target.value)}></input>
        <input type='date' placeholder='DOB' value={dob} onChange={(e) => setDob(e.target.value)}></input>
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type='password' placeholder='Set Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <button type='submit'> Add New Admin</button>
      </div>

    </form>
  </div>


    </section>



    </>
  )
}

export default AddNewAdmin