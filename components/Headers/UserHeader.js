import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function UserHeader() {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("assets/img/theme/laptop.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}

        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h2 className="display-2 text-white">Software de facturación Fácil y Económico</h2>
              <p className="text-white mt-0 mb-5">
                Concéntrese en su trabajo y permítanos ayudarlo a asegurarnos de que su arduo trabajo sea potenciado y recompensado
              </p>
              <Button
                color="warning"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Empiece Ahora
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserHeader;
