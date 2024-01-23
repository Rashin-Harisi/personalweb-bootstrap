import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'




const NavBar = () => {
    return (
        <div className='container'>
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/aboutMe'>About Me</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/projects'>My Project</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/contactMe'>Contact Me</Link></Breadcrumb.Item>
            </Breadcrumb>
        </div>

    )
}

export default NavBar