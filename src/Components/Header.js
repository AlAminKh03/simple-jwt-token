import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Nav className="bg-dark w-50 mx-auto"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item className="p-2">
                <Nav.Link className="text-white" as={Link} to='/home'>home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
                <Nav.Link className="text-white" as={Link} to='/order'>Order</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
                <Nav.Link className="text-white" as={Link} to='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
                <Nav.Link className="text-white" as={Link} to='/login' >
                    Login
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Header;