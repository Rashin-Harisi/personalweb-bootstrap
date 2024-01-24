import React from 'react';
import { Form, Button } from 'react-bootstrap'

const divStyle = {
    width: ' 700px',
    margin: 'auto',
}

const FormHelp = () => {
    return (
        <div className='form' style={{ ...divStyle }}>
            <Form style={{fontFamily: 'Apple Chancery , cursive',}}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="Text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTextarea">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Please write here...'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};


export default FormHelp;