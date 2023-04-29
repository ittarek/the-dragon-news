import React from "react";
import { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
const [accepted ,setAccepted] = useState(false)


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,photo,email,password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAccept = event =>{
    setAccepted(event.target.checked)
  }
  return (
    <Container className="w-25 mx-auto">
      <h4>Register your Account</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter Name" />
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo Url"
          />

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccept}
            type="checkbox"
            label={
              <>
                Accept <Link to="/trams">Term & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button className="w-100" variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Link to="/login">
          Already Have An Account ? <span className="text-danger">Login</span>{" "}
        </Link>
      </Form>
    </Container>
  );
};

export default Register;
