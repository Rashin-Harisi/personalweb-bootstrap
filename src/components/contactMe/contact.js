import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
    return (
        <div className='contactInformation'>
            <Row>
                <Col>
                    <img src='profile.jpg' alt='profilePicture' style={{ borderRadius: '50%', marginTop: '20px' }} />
                </Col>
                <Col>
                    <p className='personalInformation' style={{marginTop:'80px',textAlign:'left',lineHeight:'2', width: '300px'}}>
                        Email : rashin.harisi@gmail.com <br/>
                        Mobile: +43 660 1334730 <br/>
                        Github : <a href='https://github.com/Rashin-Harisi'>Click Here</a> <br/>
                        Linkedin :  <a href='https://www.linkedin.com/in/rashin-harisi/'>Click Here</a>
                    </p>

                </Col>
            </Row>
        </div>
    )
};

export default Contact;