import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  state = {
    links: [
      {
        title: "Company",
        child: [
          { link: "#", title: "Home" },
          { link: "#", title: "About us" },
          { link: "#", title: "Careers" },
          { link: "#", title: "Contact us" },
        ],
      },
      {
        title: "Information",
        child: [
          { link: "#", title: "Terms & Condition" },
          { link: "#", title: "About us" },
          { link: "#", title: "Jobs" },
          { link: "#", title: "Bookmarks" },
        ],
      },
      {
        title: "Support",
        child: [
          { link: "#", title: "FAQ" },
          { link: "#", title: "Contact" },
          { link: "#", title: "Disscusion" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {this.state.links.map((fLink, key) => (
                <Col key={key} lg={3} className="mt-4">
                  <h4 style={{ fontFamily: "Rohn" }}>{fLink.title}</h4>
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key}>
                          <Link to={fLinkChild.link}>{fLinkChild.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg={3} className="mt-4">
                <h4 style={{ fontFamily: "Rohn" }}>Subscribe</h4>
                <div className="text-muted mt-4">
                  <p>
                    Subscribe to our newsletter.
                  </p>
                </div>
                <Form className="subscribe">
                  <input
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  <Link to="#" className="submit">
                    <i className="pe-7s-paper-plane"></i>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>
        {/* Render footer links */}
        <FooterLinks />
      </React.Fragment>
    );
  }
}

export default Footer;
