import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
const MyTextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  return (
    <div className='d-flex flex-column justify-content-center text-start my-2'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};


// And now we can use these
const Signin = () => {
  return (
    <>
      <h1>Sigin!</h1>
        <Container>
          <Row className='d-flex justify-content-center'>
            <  >
                <Formik
                
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password:'',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                  }}
                  validationSchema={Yup.object({
                    fullName: Yup.string()
                      .required('Required'),
                    password: Yup.string()
                      .max(9, 'Must be 9 characters or less')
                      .required('Required'),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 1000);
                  }}
          >
            <Col sm={12} md={5}>
                <Form className='border shadow p-5 rounded m-4 d-flex flex-column justify-content-center'>
                <MyTextInput
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="First Name"
                />

            <MyTextInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <small className='d-block text-start'><Link to='/signup'>signup here</Link></small>

                <Button  className='my-2' type="submit"  color='primary'>Login</Button>
                </Form>
            </Col>
          </Formik>
            </>
          </Row>
        </Container>
    </>
  );
};

export default Signin