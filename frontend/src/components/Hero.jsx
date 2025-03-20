import React from 'react'
console.log("✅ Hero component rendered!");

const Hero = ({title, imageUrl}) => {
    return (
        <div className='hero container'>
            <div className='banner'>
                <h1>{title}</h1>
                <p>
                    Welcome to VIT Medical Center

                    VIT Medical Center is a state-of-the-art healthcare facility dedicated to providing world-class medical services with advanced technology and compassionate care. Our hospital is equipped with cutting-edge diagnostic tools, modern surgical equipment, and specialized treatment units to ensure accurate diagnoses and effective treatments. With a team of highly skilled doctors, surgeons, and healthcare professionals, we are committed to delivering exceptional care across various medical specialties. At VIT Medical Center, patient well-being is our top priority, and we strive to offer personalized treatment plans, ensuring comfort and recovery. Whether for routine check-ups, emergency care, or complex surgeries, we combine innovation with expertise to meet your healthcare needs. Trust VIT Medical Center — where technology meets care.
                </p>
            </div>
            <div className="banner">

                <img src={imageUrl} alt='hero' className='animated-image' />
                <span>
                    <img src='/Vector.png' alt='vector'/>
                </span>
            </div>

        </div>
    )
}
console.log("✅ Hero component rendered!");

export default Hero;