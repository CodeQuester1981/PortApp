import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            <h1 style={{ fontFamily: "Rohn" }} className="section-title text-center">{this.props.title}</h1>
            <div className="section-title-border mt-3"></div>
            <p style={{ fontFamily: "Roboto" }} className="section-subtitle text-muted text-center pt-4 font-secondary">
              {this.props.desc}
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
