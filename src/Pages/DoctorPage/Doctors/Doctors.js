import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';



const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    } ,[]);
    return (
        <div className="container mt-5">
            <h1 className="text-info">Our Team</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
        
    );
};

export default Doctors;