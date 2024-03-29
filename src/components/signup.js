import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

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

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className='d-flex flex-column text-start'>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='d-flex flex-column justify-content-center text-start my-2'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Signup!</h1>
        <Container>
          <Row className='d-flex justify-content-center'>
            <Col  sm={12} md={5}>
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
                    firstName: Yup.string()
                      .max(15, 'Must be 15 characters or less')
                      .required('Required'),
                    lastName: Yup.string()
                      .max(20, 'Must be 20 characters or less')
                      .required('Required'),
                    email: Yup.string()
                      .email('Invalid email address')
                      .required('Required'),
                    password: Yup.string()
                      .max(9, 'Must be 9 characters or less')
                      .required('Required'),
                    acceptedTerms: Yup.boolean()
                      .required('Required')
                      .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                      .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                      )
                      .required('Required'),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 1000);
                  }}
          >
            <Form  className='border shadow p-5 rounded m-4 d-flex flex-column justify-content-center'>
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />

          <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="password"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </MySelect>

              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions 
              </MyCheckbox>
              <small className='d-block text-start'><Link to='/signup'>signin here</Link></small>
              <Button  className='my-2' type="submit"  color='primary'>Submit</Button>
            </Form>
          </Formik>
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default SignupForm