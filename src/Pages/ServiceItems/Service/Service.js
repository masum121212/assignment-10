import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
            
        <div className="col">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded border-info h-100">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/serviceDetails/${id}`}>
                    <button className="btn btn-outline-info ">Read more <i className="fas fa-plus"></i></button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Service;