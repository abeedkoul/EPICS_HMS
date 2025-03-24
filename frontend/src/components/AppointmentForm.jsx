import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [department, setDepartment] = useState("");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddresse] = useState("");
    const [hasVisted, setHasVisited] = useState("");


    const departmentsArray = ["Pediatrics", "Orthopedics", "Cardiothorasic", "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT"]

    const [doctors, setDoctors] = useState("");
    useEffect(() => {
        const fetchDoctors = async () => {
            const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true })
            setDoctors(data.doctors);
        };
        fetchDoctors();
    })

    const handleAppointment = async(e)=>{
        e.preventDefault();
    }
    return (
        <>
         <div className='container form-component appointment-form'>
    <h2>Book Appointment</h2>
    <form onSubmit={handleAppointment}>
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
        <input type='date' placeholder='Appointment Date' value={appointmentDate} onChange={(e)=>{setappointmentDate(e.target.value)}} />
       

      </div>
      <div>
        <select value={department} onChange={(e)=>{
            setDepartment(e.target.value);
            setDoctorFirstName("");
            setDoctorLastName("");
        }} >
            {
                departmentsArray.map((depart,index)=>{
                    return(
                        <option value={depart} key={index}>{depart}</option>
                    )
                })
            }
        </select>
        <select value={`${doctorFirstName} ${doctorLastName}`} onChange={(e)=>{
            const [firstName, lastName] = e.target.value.split("");
            setDoctorFirstName(firstName);
            setDoctorLastName(lastName);
        }} disabled={!department}>
            <option value="">Select Doctor</option>
            {
                doctors.filter(doctor=> doctor.doctorDepartment === department)
                )
            }
        </select>
      </div>
      <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
        <p style={{ marginBottom: 0 }}>Already Registered?</p>
        <Link to={"/register"} style={{ textDecoration: "none", alignItems: "center" }}>Login Now</Link>
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <button type='submit'> Register</button>
      </div>

    </form>
  </div>

        </>
    )
}

export default AppointmentForm