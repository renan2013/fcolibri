import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function Example() {
  return (
    <>
      <Row>
        <Col md="4">
          <Card className="card-pricing bg-gradient-success border-0 text-center mb-4">
            <CardHeader className="bg-transparent">
              <h1 className="text-uppercase ls-1 text-white py-3 mb-0">
                Plan Básico
              </h1>
            </CardHeader>
            <CardBody className="px-lg-10">
              <div className="display-2 text-white">$4</div>
              <span className="text-white">por mes</span>
              <ul className="list-unstyled my-4">
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Complete documentation
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Working materials in Sketch
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        2GB cloud storage
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <Button className="mb-3" color="primary" type="button">
                Comprar
              </Button>
            </CardBody>
            <CardFooter className="bg-transparent">
              <a className="text-white" href="javascript:;">
                Ver Demostración
              </a>
            </CardFooter>
          </Card>
        </Col>

        <Col md="4">
          <Card className="card-pricing bg-gradient-warning border-0 text-center mb-4">
            <CardHeader className="bg-transparent">
              <h1 className="text-uppercase ls-1 text-white py-3 mb-0">
                Plan PYMES
              </h1>
            </CardHeader>
            <CardBody className="px-lg-10">
              <div className="display-2 text-white">$7</div>
              <span className="text-white">por mes</span>
              <ul className="list-unstyled my-4">
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Complete documentation
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Working materials in Sketch
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        2GB cloud storage
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <Button className="mb-3" color="primary" type="button">
                Comprar
              </Button>
            </CardBody>
            <CardFooter className="bg-transparent">
              <a className="text-white" href="javascript:;">
                Ver Demostración
              </a>
            </CardFooter>
          </Card>
        </Col>

        <Col md="4">
          <Card className="card-pricing bg-gradient-default border-0 text-center mb-4">
            <CardHeader className="bg-transparent">
              <h1 className="text-uppercase ls-1 text-white py-3 mb-0">
                Plan Empresarial
              </h1>
            </CardHeader>
            <CardBody className="px-lg-10">
              <div className="display-2 text-white">$</div>
              <span className="text-white">Personalizado</span>
              <ul className="list-unstyled my-4">
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Complete documentation
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        Working materials in Sketch
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white">
                        2GB cloud storage
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <Button className="mb-3" color="primary" type="button">
                Comprar
              </Button>
            </CardBody>
            <CardFooter className="bg-transparent">
              <a className="text-white" href="javascript:;">
                Ver Demostración
              </a>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Example;