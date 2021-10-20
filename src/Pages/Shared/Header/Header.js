import React from 'react';
import { ButtonGroup, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top"   collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><h1><i className="fas fa-clinic-medical text-info"> Corf</i></h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home"><h4 className="btn btn-outline-info ">Home</h4></Nav.Link>
                        <Nav.Link as={Link} to="/services"><h4 className="btn btn-outline-info ">Services</h4></Nav.Link>
                        <Nav.Link as={Link} to="/doctors"><h4 className="btn btn-outline-info ">Doctors</h4></Nav.Link>
                        <Nav.Link as={Link} to="/about"><h4 className="btn btn-outline-info ">About</h4></Nav.Link>
                        <Nav.Link as={Link} to="/contact"><h4 className="btn btn-outline-info ">Contact</h4></Nav.Link>
                        {
                            user?.email ?
                            <Button onClick={logOut}><h4 className="btn btn-outline-info ">Logout</h4></Button>
                             
                            :
                            <Nav.Link as={Link} to="/login"><h4 className="btn btn-outline-info ">Login</h4></Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
            
                    </Nav>
                </Container>
            </Navbar>
</>
    );
};

export default Header;