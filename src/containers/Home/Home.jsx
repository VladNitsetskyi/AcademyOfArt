import React, { Component } from "react";
import "./Home.scss";

import { withRouter } from "react-router-dom";

class Home extends Component {
  parallaxEffect = e => {
    let x = e.clientX / 20;
    let y = e.clientY / 20;
    let x2 = e.clientX / -15;
    let y2 = e.clientY / -15;
    let x3 = e.clientX / 15;
    let y3 = e.clientY / 15;
    let box = document.querySelector("#background");
    let boxTwo = document.querySelector("#title");
    let boxThree = document.querySelector("#overlay");
    boxTwo.style.left = "calc(" + x2 + "px + 35%)";
    boxTwo.style.top = "calc(" + y2 + "px + 35%)";
    boxThree.style.left = "calc(" + x3 + "px + 30%)";
    boxThree.style.top = "calc(" + y3 + "px + 30%)";
    box.style.backgroundPosition =
      "calc(" + x + "px + 50%)" + "calc(" + y + "px + 50%)";
  };
  render() {
    return (
      <div className="home-wrapper">
        <div id="background" />
        <div id="title" />
        <div id="overlay" />
        <div className="area" onMouseMove={this.parallaxEffect} />
      </div>
    );
  }
}

export default withRouter(Home);
