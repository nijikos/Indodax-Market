import React, { Component } from "react";
import "./../style/Wrapper.css";
import VolBtc from "./VolBtc";
import TickerTable from "./TickerTable";
import Market from "./Market";
import Fade from "react-reveal/Fade";

class Wrapper extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="child-wrapper container-fluid">
          <VolBtc />
          <TickerTable />
          <Market />
        </div>
      </div>
    );
  }
}

export default Wrapper;
