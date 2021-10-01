import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

function Login() {
  return (
    <>
      <Col lg="12" md="12">
        <h1>Esta es la plantilla, aqui pondria los demas componentes que carga la pagina</h1>

      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
