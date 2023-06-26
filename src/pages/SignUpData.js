import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const SignUpData = () => {
  // const [entervalue,setEntervalue]= useState({});
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [city, setcity] = useState();
  const [password, setpassword] = useState();
  // const [error,setError]= useState();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:8000/signup/signup", {
        name,
        email,
        contact,
        city,
        password,
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        // setError(response.data.message)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container">
        <form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="">
            <Form.Group as={Col} sm="4" controlId="validationCustom01">
              <Form.Label className="fw-bold mb-0 ms-1">First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                className="mb-2 "
                name="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="4" controlId="validationCustom02">
              <Form.Label className="fw-bold mb-0 ms-1">Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Email"
                className="mb-2 "
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                // defaultValue="Otto"
              />
              {/* {error} */}
              <Form.Control.Feedback type="invalid">
                Enter PhoneNumber
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="4" controlId="validationCustomUsername">
              <Form.Label className="fw-bold mb-0 ms-1">phone</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="contact"
                  className="mb-2 "
                  onChange={(e) => {
                    setcontact(e.target.value);
                  }}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter PhoneNumber
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label className="fw-bold mb-0 ms-1">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                className="mb-2 "
                placeholder="City"
                onChange={(e) => {
                  setcity(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4 " controlId="validationCustom04">
              <Form.Label className="fw-bold mb-0 ms-1">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="mb-2  "
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <button type="submit" className="btn btn-warning px-4 fw-bold">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpData;
