import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Press.css";

class Press extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="press">
          <Container>
            <Row className="vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <h3 style={{ fontFamily: "Rohn" }}>Press Material</h3>
                  <p
                    style={{ fontFamily: "Roboto" }}
                    className="text-muted web-desc"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <Link to="#" target="_blank" download>
                      <li className="down">Press Kits</li>
                    </Link>
                    <Link to="#" target="_blank" download>
                      <li className="down">Logos</li>
                    </Link>
                    <Link to="#" target="_blank" download>
                      <li className="down">Guidelines</li>
                    </Link>
                    <Link to="#" target="_blank" download>
                      <li className="down">Media Rights Platform</li>
                    </Link>
                  </ul>
                  <Link
                    to="#"
                    target="_blank"
                    download
                    className="btn btn-danger mt-4 waves-effect waves-light"
                  >
                    Download All <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-right">
                  <img
                    src="assets/images/Press.jpg"
                    alt="Logo-Red"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Press;
