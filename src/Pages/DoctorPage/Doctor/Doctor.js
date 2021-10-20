import React from 'react';

const Doctor = ({doctor}) => {
    const {name, expart, details, img} = doctor;
    
    return (
        <div className="col">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded h-100 border-info">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <h6><strong>{expart}</strong></h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere qui, est ipsa magnam eius culpa quaerat omnis debitis obcaecati alias rerum dolorum modi ullam fugiat, harum impedit? Ad, sunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;