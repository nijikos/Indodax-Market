import React, { Component } from "react";
import "./../style/Market.css";

class Market extends Component {
  render() {
    return (
      <div className="market-wrapper">
        <div className="sell-wrapper">
          <p>Market Jual</p>
          <div className="table-wrapper">
            <table className="table-sell table">
              <tbody>
                <tr>
                  <th>HARGA</th>
                  <th>BTC</th>
                </tr>
                {/* {data} */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="buy-wrapper">
          <p>Market Beli</p>
          <div className="table-wrapper">
            {" "}
            <table className="table-buy table">
              <tbody>
                <tr>
                  <th>HARGA</th>
                  <th>BTC</th>
                </tr>
                {/* {data} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
