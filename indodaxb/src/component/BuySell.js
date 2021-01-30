import React, { Component } from "react";
import axios from "axios";

class BuySell extends Component {
  constructor() {
    super();
    this.state = {
      dataDepthBuy: [],
      dataDepthSell: [],
    };
  }

  componentDidMount() {
    axios.get("https://indodax.com/api/depth/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        dataDepthBuy: ambilData.data.buy,
        dataDepthSell: ambilData.data.sell,
      });
    });
  }

  render() {
    const dataBuy = this.state.dataDepthBuy.map(
      ([hargaBeli, btcBeli], index) => {
        return (
          <li key={index}>
            {hargaBeli} and {btcBeli}
          </li>
        );
      }
    );
    const dataSell = this.state.dataDepthSell.map(
      ([hargaJual, btcJual], index) => {
        return (
          <li key={index}>
            {hargaJual} and {btcJual}
          </li>
        );
      }
    );

    return (
      <div>
        <h1>Coba get data</h1>
        {/* <ul>{dataBuy}</ul> */}
        <ul>{dataBuy}</ul>
        <hr />
        <ul>{dataSell}</ul>
      </div>
    );
  }
}

export default BuySell;
