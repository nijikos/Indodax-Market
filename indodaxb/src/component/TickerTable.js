import React, { Component } from "react";
import axios from "axios";
import "./../App.css";
import "./../style/TickerTable.css";

class TickerTable extends Component {
  render() {
    return (
      <div className="ticker-table">
        <div className="ticker-card card-terakhir">
          <p className="ticker-card-text">Harga Terakhir</p>
          <p id="numbers" className="ticker-card-number">
            444375000
          </p>
          <p></p>
        </div>
        <div className="ticker-card card-low">
          <p className="ticker-card-text">Harga Terendah</p>
          <p id="numbers" className="ticker-card-number">
            444375000
          </p>
        </div>
        <div className="ticker-card card-high">
          <p className="ticker-card-text">Harga Tertinggi</p>
          <p id="numbers" className="ticker-card-number">
            444375000
          </p>
        </div>
      </div>
    );
  }
}

export default TickerTable;
