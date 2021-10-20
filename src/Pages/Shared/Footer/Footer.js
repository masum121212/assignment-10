import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark mx-auto">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto text-light p-5">
                <div className="col">
                    <h5 className="fw-bold text-info"><i className="fas fa-clinic-medical "></i> Corf</h5>
                    <hr />
                    <p className="text-light">A medical clinic is a type of facility that's focused on outpatient services. Being an outpatient means that you can go home after you receive care. Medical clinics can be operated publicly, privately, or by the government.</p>
               
                </div>
                <div className="col">
                    <h5 className="fw-bold text-info"><i className="fas fa-puzzle-piece text-info"></i> Departments</h5>
                    <hr />
                    <a className="text-decoration-none" href="">Surgery & Radiology</a><br />
                    <a  className="text-decoration-none" href="">Children Care</a><br />
                    <a className="text-decoration-none" href="">Orthopedics</a><br />
                    <a className="text-decoration-none" href="">Nuclear Magnetic</a><br />
                    <a className="text-decoration-none" href="">Eye Treatment</a><br />  
                    <a className="text-decoration-none" href="">X-Ray</a> 
                </div>
                <div className="col">
                    <h5 className="fw-bold text-info"><i className="fas fa-lock-open text-info"></i> Opening Hour</h5>
                    <hr />
                       <p>Mon-Tue:  6:00AM-10:00PM</p>
                       <p>Wed-Thu:  6:00AM-10:00PM</p>
                       <p>Fry:  6:00AM-04:00PM</p>
                       <p>Sun: Closed</p>
                </div>
                <div className="col">
                    <h5 className="fw-bold text-info"><i className="fas fa-network-wired text-info"></i> Connect Us </h5>
                    <hr />
                    <a href="https://www.facebook.com/masum.evan.96"><i className="fab fa-facebook-square text-info fs-3"></i></a><br />
                    <a href="https://www.instagram.com/masum_evan12/"><i className="fab fa-instagram-square text-info fs-3"></i></a><br />
                    <a href="https://www.linkedin.com/in/masum-evan-95a84a216/"><i className="fab fa-linkedin text-info fs-3"></i></a><br />
                    <a href="https://github.com/masum121212"><i className="fab fa-github-square text-info fs-3"></i></a>   
                </div>
            </div>
            <small className="text-light">copyright ©2021 Corf</small>
        </div>
    );
};

export default Footer;