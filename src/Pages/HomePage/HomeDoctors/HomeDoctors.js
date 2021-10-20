import React, { useEffect, useState } from 'react';
import Doctor from '../../DoctorPage/Doctor/Doctor';

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    } ,[]);
    return (
        <div className="container">
            <h2>Our Expert Doctors</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
                {
                    doctors.slice(0, 3).map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
        
    );
};

export default HomeDoctors;