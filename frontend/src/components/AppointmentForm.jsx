import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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


    const navigateTo = useNavigate();



    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true })
            setDoctors(data.doctors);
        };
        fetchDoctors();
    })

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisted);
            const response = await axios.post("http://localhost:4000/api/v1/appointment/post", {
                firstName,
                lastName,
                email,
                phone,
                aadhar,
                dob,
                gender,
                appointment_date: appointmentDate,
                department,
                doctor_firstName: doctorFirstName,
                doctor_lastName: doctorLastName,
                address,
                hasVisted: hasVisitedBool
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            toast.success(response.data.message);
            navigateTo("/");
        } catch (error) {
            console.error("Full Error:", error);
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response from server. Please try again later.");
            } else {
                toast.error("Something went wrong.");
            }
        }
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
                        <input type='date' placeholder='Appointment Date' value={appointmentDate} onChange={(e) => { setappointmentDate(e.target.value) }} />


                    </div>
                    <div>
                        <select value={department} onChange={(e) => {
                            setDepartment(e.target.value);
                            setDoctorFirstName("");
                            setDoctorLastName("");
                        }} >
                            {
                                departmentsArray.map((depart, index) => {
                                    return (
                                        <option value={depart} key={index}>{depart}</option>
                                    )
                                })
                            }
                        </select>
                        <select value={`${doctorFirstName} ${doctorLastName}`} onChange={(e) => {
                            const [firstName, lastName] = e.target.value.split(" ");
                            setDoctorFirstName(firstName);
                            setDoctorLastName(lastName);
                        }} disabled={!department}>
                            <option value="">Select Doctor</option>
                            {
                                doctors.filter(doctor => doctor.doctorDepartment === department).map((doctor, index) => {
                                    return (
                                        <option value={`${doctor.firstName} ${doctor.lastName}`} key={index}>{doctor.firstName} {doctor.lastName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <textarea rows="10" value={address} onChange={(e) => { setAddresse(e.target.value) }} placeholder='Address' />
                    <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
                        <p style={{ marginBottom: 0 }}>Have You Visited Before?</p>
                        <input
                            type='checkbox'
                            checked={hasVisted}
                            onChange={(e) => { setHasVisited(e.target.checked) }}
                            style={{ flex: "none", width: "25px" }} />
                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type='submit'> Get Appointment</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default AppointmentForm