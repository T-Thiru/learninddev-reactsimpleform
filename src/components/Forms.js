import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import show from "../img/visibleOn.svg";
import hidden from "../img/visibleOff.svg";
import { useState } from "react";

const Forms = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  visible,
  setVisible,
}) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) alert("vos 2 mdp ne sont pas identique");
    if (password === confirmPassword) setVisible(true);
  };
  const [eye, setEye] = useState(hidden);
  const [type, setType] = useState("password");
  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setEye(show);
    } else {
      setType("password");
      setEye(hidden);
    }
  };

  return (
    <div className="wrapper formulaire">
      <p style={{ textAlign: "center", fontSize: "50px" }}>Create Account</p>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 relative" controlId="password">
            <Form.Label>Password</Form.Label>
            <img className="logo" src={eye} alt="" onClick={handleClick} />
            <Form.Control
              type={type}
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
              required
              className={password !== confirmPassword ? "red" : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3 relative" controlId="confirmPassword">
            <Form.Label>Confirm your Password</Form.Label>
            <img className="logo" src={eye} alt="" onClick={handleClick} />
            <Form.Control
              type={type}
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChange}
              required
              className={password !== confirmPassword ? "red" : ""}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Forms;
