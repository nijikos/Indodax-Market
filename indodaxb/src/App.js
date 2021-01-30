import React, { Component } from "react";

import Ticker from "./component/Ticker";
import BuySell from "./component/BuySell";
import TickerTable from "./component/TickerTable";
import Balls from "./component/Balls";
import Wrapper from "./component/Wrapper";
import Watermark from "./component/Watermark";
import BuyTable from "./component/BuyTable";
import SellTable from "./component/SellTable";
import Fade from "react-reveal/Fade";

class App extends Component {
  render() {
    return (
      <div>
        <Balls />
        <Watermark />
        <Wrapper />
        <Fade top cascade>
          <div>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
          </div>
        </Fade>

        {/* <BuySell />
        {/* <BuyTable />
        <SellTable /> */}
      </div>
    );
  }
}

export default App;
