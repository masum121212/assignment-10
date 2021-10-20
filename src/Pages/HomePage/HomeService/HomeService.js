import React, { useEffect, useState } from 'react';
import Service from '../../ServiceItems/Service/Service';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="container my-5">
            <h1 className="text-info">Our Healthcare Service</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeService;