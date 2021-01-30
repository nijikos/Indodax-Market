import React, { Component } from "react";
import axios from "axios";

class BuyTable extends Component {
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
          <tr key={index}>
            <td>{hargaBeli}</td>
            <td>{btcBeli}</td>
          </tr>
        );
      }
    );
    return (
      <div>
        <h1>BUY TABLE</h1>
        <thead>
          <tr>
            <th>HARGA</th>
            <th>BTC</th>
          </tr>
        </thead>
        <tbody>{dataBuy}</tbody>
      </div>
    );
  }
}

export default BuyTable;
