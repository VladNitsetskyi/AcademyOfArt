import React, { Component } from "react";
import "./About.scss";
import { withRouter } from "react-router-dom";
import Text from "./text";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-wrapper">
        <div className="about-text">
          <Text />
        </div>
      </div>
    );
  }
}

export default withRouter(About);
