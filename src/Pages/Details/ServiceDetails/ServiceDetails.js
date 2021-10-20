import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams([]);
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    } , [serviceId])
    // console.log(services)
        const service= services.find( s => s.id == serviceId);
        const {img,name,description} =service || {};
    return (
        <div className="container">
            <h2>Service No : {serviceId}</h2>
            <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="/home">
                    <button className="btn btn-outline-info "><i className="fas fa-home"></i> Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;