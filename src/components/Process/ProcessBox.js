import React, { Component } from "react";
import { Col } from "reactstrap";

class ProcessBox extends Component {
  render() {
    const len = this.props.processes.length;
    return (
      <React.Fragment>
        {this.props.processes.map((process, key) => (
          <Col key={key} lg={4} className={key + 1 === len ? "" : "plan-line"}>
            <div className="text-center process-box">
            <img
                src={process.icon}
                alt="icon"
                style={{ fill: "#b44335", width: "15%" }}
              />
              <h4 className="pt-3">{process.title}</h4>
              <p className="text-muted">{process.desc}</p>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ProcessBox;
