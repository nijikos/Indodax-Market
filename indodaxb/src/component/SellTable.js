import React, { Component } from "react";
import axios from "axios";

class SellTable extends Component {
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
    const dataSell = this.state.dataDepthSell.map(
      ([hargaJual, btcJual], index) => {
        return (
          <tr key={index}>
            <td>{hargaJual}</td>
            <td>{btcJual}</td>
          </tr>
        );
      }
    );

    return (
      <div>
        <h1>SELL TABLE</h1>
        <thead>
          <tr>
            <th>HARGA</th>
            <th>BTC</th>
          </tr>
        </thead>
        <tbody>{dataSell}</tbody>
      </div>
    );
  }
}

export default SellTable;
