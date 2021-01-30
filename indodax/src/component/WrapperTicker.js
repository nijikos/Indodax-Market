import React, { Component } from "react";
import axios from "axios";
import "./../style/WrapperTicker.css";

class WrapperTicker extends Component {
  constructor() {
    super();
    this.state = {
      dataTicker: [],
    };
  }
  componentDidMount() {
    axios.get("https://indodax.com/api/ticker/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        dataTicker: ambilData.data.ticker,
      });
    });
  }
  render() {
    const numberWithCommas = function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const dataHigh = this.state.dataTicker.high;
    const dataHighFunc = numberWithCommas(`${dataHigh}`);

    const dataLow = this.state.dataTicker.low;
    const dataLowFunc = numberWithCommas(`${dataLow}`);
    const dataLast = this.state.dataTicker.last;
    const dataLastFunc = numberWithCommas(`${dataLast}`);
    return (
      <div className="ticker-wrapper">
        <div className="ticker-last ticker-item">
          <p className="ticker-title">Harga terakhir</p>
          <p className="ticker-number">{dataLastFunc}</p>
        </div>
        <div className="ticker-low ticker-item">
          <p className="ticker-title">Harga terendah</p>
          <p className="ticker-number">{dataLowFunc}</p>
        </div>
        <div className="ticker-high ticker-item">
          <p className="ticker-title">Harga tertinggi</p>
          <p className="ticker-number">{dataHighFunc}</p>
        </div>
      </div>
    );
  }
}

export default WrapperTicker;