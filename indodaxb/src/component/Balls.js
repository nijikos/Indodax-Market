import React, { Component } from "react";
import "./../style/Balls.css";

class Balls extends Component {
  render() {
    return (
      <div className="balls-wrapper">
        <div className="ball-one"></div>
        <div className="ball-two"></div>
        <div className="ball-three"></div>
      </div>
    );
  }
}

export default Balls;
