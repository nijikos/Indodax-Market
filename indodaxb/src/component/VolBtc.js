import React, { Component } from "react";
import "./../style/VolBtc.css";
import { Fade } from "react-awesome-reveal";

export class VolBtc extends Component {
  render() {
    return (
      <div>
        <div className="vol-wrapper">
          <Fade>
            <div className="vol-item vol-text">Volume last 24 hours</div>
          </Fade>
          <div className="vol-item vol-number">282,5</div>
          <div className="vol-item vol-btc">BTC</div>
        </div>
      </div>
    );
  }
}

export default VolBtc;
