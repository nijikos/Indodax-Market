import React, { Component } from "react";
import "./../style/Watermark.css";

class Watermark extends Component {
  render() {
    return (
      <div className="watermark-wrapper">
        <p className="watermark">
          API from
          <a href="https://indodax.com/market/BTCIDR" target="blank">
            Indodax.com/market
          </a>
        </p>
        <p className="watermark">layout by Nijiko Suryadikara</p>
      </div>
    );
  }
}

export default Watermark;
