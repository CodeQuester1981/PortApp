import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Banner from "../assets/Icons/banner.svg"
import Mailer from "../assets/Icons/Emailer.svg"
import Social from "../assets/Icons/Social-Media.svg"

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: Banner,
          title: "Website banners",
          desc: "Extend your online reach.",
        },
        {
          icon: Social,
          title: "Social media",
          desc: "Engage with our audience.",
        },
        {
          icon: Mailer,
          title: "Emailers",
          desc: "Drive consideration and action.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Website Banners and More"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right"></i>
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right"></i>
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
              <div className="text-center mx-auto">
                <a
                  href="#contact"
                  className="btn btn-white mt-4 waves-effect waves-light mb-5"
                  style={{backgroundColor: "rgb(180, 67, 53)", color: "white"}}
                >
                  Find Out More
                </a>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
