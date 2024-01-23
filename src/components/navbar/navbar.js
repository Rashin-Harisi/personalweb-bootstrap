import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Contact from '../contactMe/contact';




const NavBar = () => {
    return (
        <div className='container'>
            <Row>
                <Col>
                    <Breadcrumb style={{ width: '300px' }}>
                        <Breadcrumb.Item active><Link to='/'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/aboutMe'>About Me</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/projects'>My Project</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/contactMe'>Contact Me</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col>
                    <a href={<Contact/>}>Hi! How Can I Help You?</a>
                </Col>
            </Row>

        </div>

    )
}

export default NavBar