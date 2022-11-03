import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const StepTwo = (props) => {
  const handleSubmitTwo = (e) => {
    e.preventDefault();
    props.setVisible(false);
  };

  const { name, email, password } = props;
  return (
    <div className="wrapper formulaire">
      <Form onSubmit={handleSubmitTwo}>
        <p style={{ textAlign: "center", fontSize: "50px" }}>Resultat</p>
        <div className="resultat">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
        </div>
        <Button style={{ marginTop: "20px" }} variant="primary" type="submit">
          Edit your informations
        </Button>
      </Form>
    </div>
  );
};

export default StepTwo;
