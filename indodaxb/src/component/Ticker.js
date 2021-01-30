import React, { Component } from "react";
import axios from "axios";

class Ticker extends Component {
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
    const dataHigh = this.state.dataTicker.high;
    const dataLow = this.state.dataTicker.low;
    const dataVolBTC = this.state.dataTicker.vol_btc;
    const dataLast = this.state.dataTicker.last;
    return (
      <div>
        <h1>Coba get data</h1>
        <p>High : {dataHigh}</p>
        <p>Low : {dataLow}</p>
        <p>Vol BTC : {dataVolBTC}</p>
        <p>Last : {dataLast}</p>
      </div>
    );
  }
}

export default Ticker;
