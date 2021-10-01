/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function Login() {
  return (
    <>

      <footer className="py-5">
        <Container>

          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">


              <img
                alt="..."
                width="200"
                src={require("assets/img/logo_divisoft.svg")}
              />

            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    Planes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    Demostraciones
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    Soporte
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Login;
