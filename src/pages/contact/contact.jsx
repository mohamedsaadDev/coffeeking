import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./contact.css"
const Contact = () => {
    return (
        <div id='contact' className='container-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="phone" placeholder="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Select size="lg">
                    <option>select services</option>
                    <option>the second option</option>
                    <option>the third option</option>
                    <option>the second option</option>
                    <option>the third option</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button onClick={(e)=>e.preventDefault()} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact