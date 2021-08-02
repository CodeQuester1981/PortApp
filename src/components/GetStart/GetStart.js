import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class GetStart extends Component {
  render() {
    return (
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <h1
                style={{ fontFamily: "Rohn" }}
                className="get-started-title text-white"
              >
                Lorem Ipsum
              </h1>
              <div className="section-title-border mt-4 bg-white"></div>
              <p className="section-subtitle font-secondary text-white text-center pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
              <a
                target="_blank"
                href="https://www.youtube.com/"
                rel="noreferrer"
                className="btn btn-white waves-effect mt-3 mb-4"
              >
                Youtube <i className="mdi mdi-arrow-right"></i>{" "}
              </a>
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect">
          <img src="assets/images/bg-pattern-light.png" alt="pattern" />
        </div>
      </section>
    );
  }
}

export default GetStart;
