import React from 'react';
import './Header.css'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => {

    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" className="p-3">
                    <Navbar.Brand className="text-success font-weight-bold" href="#home">Hasan's Online School</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;