import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class WebsiteDesc extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-lg bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 style={{ fontFamily: "Rohn" }} className="text-white">
                  Professional Production
                </h2>
                <p className="pt-3 home-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a
                  href="#contact"
                  className="btn btn-white mt-4 waves-effect waves-light mb-5"
                >
                  Find Out More
                </a>
              </Col>
            </Row>
          </Container>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="mettlestate" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDesc;
