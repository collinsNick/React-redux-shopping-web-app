import React, { Component } from "react";
import SelloutCards from "./components/SelloutCards";
import ItemBanners from "./components/ItemBanners";
import Deal from "./components/Deal";
import Banner from "./components/Banner";
import HomeSale from "./components/HomeSale";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <SelloutCards />
        <ItemBanners />
        <HomeSale />
        <Deal />
      </React.Fragment>
    );
  }
}
