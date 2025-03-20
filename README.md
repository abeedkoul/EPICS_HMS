# Hospital Management System (HMS)

## 📋 Project Overview

The Hospital Management System (HMS) is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system is designed to streamline hospital operations by efficiently managing appointments, patient data, and doctor schedules.

## 🚀 Features

**✅ User Authentication** - Secure login and registration for patients and admin.\
**✅ Appointment Booking System** - Patients can book appointments with doctors across various departments.\
**✅ Doctor Management** - Admin can add, update, and delete doctor details.\
**✅ Message System** - Allows users to send messages for inquiries or feedback.\
**✅ Role-Based Access Control** - Ensures patients, doctors, and admin have appropriate permissions.\
**✅ Responsive Design** - Ensures optimal user experience across devices.

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, Axios, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB (with Mongoose ODM)

**Authentication:** JSON Web Tokens (JWT), bcrypt.js

**File Uploads:** Express-FileUpload, Cloudinary (for secure image storage)

**Other Libraries:** React Toastify, dotenv, cookie-parser

## 🔄 Usage

**Admin Login:** Access admin dashboard for doctor and appointment management.

**Patient Registration/Login:** Register as a new patient or log in to book appointments.

**Appointment Management:** Book, modify, or cancel appointments.

## 🧪 Testing the API

Use Postman to test endpoints:

POST /api/v1/message/send — Send messages

POST /api/v1/appointment/post — Book an appointment

GET /api/v1/appointment/getall — View all appointments
