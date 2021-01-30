import React, { Component } from "react";
import axios from "axios";

class BuySell extends Component {
  constructor() {
    super();
    this.state = {
      dataDepth: [],
    };
  }

  //   componentDidMount() {
  //     axios.get("https://indodax.com/api/depth/btcidr").then((ambilData) => {
  //       console.log(ambilData);
  //       this.setState({
  //         dataDepth: ambilData.data,
  //       });
  //     });
  //   }

  componentDidMount() {
    axios.get("https://indodax.com/api/depth/btcidr").then((getData) => {
      console.log(getData);
      this.setState({
        dataDepth: getData.data,
      });
    });
  }

  render() {
    // const dataBuy = [this.state.dataDepth.buy];
    // const dataBuy = this.state.dataDepth.map((item, index) => {
    //   var listBuy = [item.buy];
    //   return <li key={index}>{listBuy}</li>;
    // });

    // const dataBuy = this.state.dataDepth.map((item, index) => {
    //   var listBuy = [item.buy];
    //   return <li key={index}>{listBuy}</li>;
    // });
    // ===================   NOTE :
    const dataOfBuy = this.state.dataDepth.buy;

    const dataBuy = dataOfBuy.map((item, index) => {
      <li key={index}>{item[0]}</li>;
    });

    return (
      <div>
        <h1>Coba get data</h1>
        <ul>{dataBuy}</ul>
      </div>
    );

    // ===================   NOTE :
//     const dataBuy = this.state.dataDepth.buy.map(([item], index) => {
//       return <li key={index}>{item}</li>;
//     });

//     return (
//       <div>
//         <h1>Coba get data</h1>
//         <ul>{dataBuy}</ul>
//       </div>
//     );
//   }


export default BuySell;