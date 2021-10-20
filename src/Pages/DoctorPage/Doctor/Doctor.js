import React from 'react';

const Doctor = ({doctor}) => {
    const {name, expart, details, img} = doctor;
    
    return (
        <div className="col">
            <div className="card border-info h-100">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <h2>{expart}</h2>
                    <p className="card-text">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;