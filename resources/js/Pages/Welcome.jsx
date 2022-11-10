import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Welcome(props) {
    return (
        <>
        <Head title="Welcome" />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Course Registration System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        {/* <Nav.Link href={route('dashboard')}>Dashboard</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href={route('login')}>Login</Nav.Link>
                        <Nav.Link href={route('register')}>Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">

                    </div>

                </div>
            </div>
        </>
    );
}
