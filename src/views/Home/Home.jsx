import React, { Component } from "react";
import SelloutCards from "./components/SelloutCards";
import ItemBanners from "./components/ItemBanners";
import Deal from "./components/Deal";
import Banner from "./components/Banner";
import HomeSale from "./components/HomeSale";
import Loader from "../../components/Loader/Index";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
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

export default Home;
