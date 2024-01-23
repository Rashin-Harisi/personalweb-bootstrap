import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'



const NavBar = () => {
    return (
        <div className='container'>
            <Breadcrumb>
                <Breadcrumb.Item href='#' active>About Me</Breadcrumb.Item>
                <Breadcrumb.Item>My Project</Breadcrumb.Item>
                <Breadcrumb.Item>Contact Me</Breadcrumb.Item>
            </Breadcrumb>
        </div>

    )
}

export default NavBar