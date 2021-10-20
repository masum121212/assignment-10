import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/NotFound/not-found.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={notFound} alt="" />
            <Link to="/"><button>Go To Home</button></Link>
        </div>
    );
};

export default NotFound;