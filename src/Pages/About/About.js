import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="container m-5 mx-auto  shadow-sm p-3 mb-5 bg-body rounded">
            <h1 className="fw-bold fs-1 my-5 text-dark"><i className="fas fa-address-card text-info"></i> About Us
            </h1>
            <hr />
            <h3 className="mt-5">What We Do for Our Users</h3>
            <code className="text-dark mb-5">Corf Medical was designed to put medical and life sciences information in reach of people that can make a difference.</code>
            <br />
            <br />
            <code className="text-dark mb-5">Healthcare professionals, researchers, and engaged consumers can access a wealth of open-access content from thought leaders across the world.</code>
            <br />
            <br />
            <code className="text-dark mt-5">Exclusive interviews with Nobel Prize-winning laureates. Insightful articles written by experts in an enormous range of fields. Along with our encyclopedic library of health and life sciences articles written by our in house team of biomedical professionals. Our mission is to share science with you.</code>

            <h3 className="mt-5">Our Content</h3>
            <code className="text-dark mb-5">It’s important to tell the right story in the right way. At News Medical, we’re well versed in translating complex, scientific information into easily readable, shareable content.</code>
            <br />
            <br />
            <code className="text-dark mb-5">We share frequent updates via an ever-expanding news feed. We develop detailed health articles that delve into medical and life sciences topics. Our interviews explore the unique vantage points of industry experts by asking the questions that you want answered.</code>

            <h3 className="mt-5">Disclaimer</h3>
            <code className="text-dark mb-5">News-Medical provides articles on many medical and life sciences topics, all of which are based on current evidence and have been written and reviewed by professionals from across the medical and life science industry. We take the upmost care to provide highly accurate and up-to-date information, but if you spot anything that is out of date, please let us know.</code>
            <br />
            <br />
            <code className="text-dark mb-5">The medical information found on the News-Medical website is designed to support, not to replace the relationship between patient and physician/doctor and the medical advice they may provide. At all times seek professional medical advice before acting on any information you read on News-Medical.Net. Even if a statement made about medicine is accurate, it may not apply to you or your symptoms.</code>

            <h3 className="mt-5">Corrections Policy</h3>
            <code className="text-dark mb-5">News-Medical.Net strives for accurate and complete news reporting. News-Medical.Net is committed to telling readers when an error has been made, the magnitude of the error and the correct information, as quickly as possible. This commitment and transparency are applicable to small errors as well as large. We endeavor to be promptly responsive in correcting errors in material published on our platform.</code>
            
        </div>
        </div>
    );
};

export default About;