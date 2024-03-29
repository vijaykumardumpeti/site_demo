import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Contactus = () => {
  return (
    <div>
      <h1>Contact Form</h1>
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col sm={8} md={10} className='border rounded shadow p-5 m-2'>
                        <form className='' id="contact_form" name="contact_form" method="post">
                    <div class="mb-5 row text-start ">
                        <div class="col">
                            <label className='mb-1'>First Name</label>
                            <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name"/>
                        </div>
                        <div class="col">
                            <label>Last Name</label>
                            <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name"/>
                        </div>
                    </div>
                    <div class="mb-5 row text-start">
                        <div class="col">
                            <label className='mb-1' for="email_addr">Email address</label>
                            <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                                placeholder="name@example.com"
                            />      
                        </div>
                        <div class="col">
                            <label for="phone_input">Phone</label>
                            <input type="tel" required maxlength="50" class="form-control" id="phone_input" name="Phone"
                                placeholder="Phone"/>
                        </div>
                    </div>
                    <div class="mb-5  text-start">
                        <label className='mb-1' for="message">Message</label>
                        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary px-4 btn-lg">Post</button>
                </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contactus
