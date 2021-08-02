import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <h3 style={{ fontFamily: "Rohn" }}>Lorem Ipsum</h3>
                  <p
                    style={{ fontFamily: "Roboto" }}
                    className="text-muted web-desc"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">Lorem ipsum dolor sit amet</li>
                    <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="">Lorem ipsum dolor sit amet</li>
                    <li className="">Lorem ipsum dolor sit amet</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-white mt-4 waves-effect waves-light mb-5"
                    style={{
                      backgroundColor: "rgb(180, 67, 53)",
                      color: "white",
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-right">
                  <img
                    src="assets/images/tour2.jpg"
                    alt="macbook"
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

export default AboutUs;
