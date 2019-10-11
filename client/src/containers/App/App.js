import React, { Component } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import * as actions from "../../actions";

import Header from "../../components/Header";
import Realtors from "../../components/Realtors";
import Sidebar from "../../components/Sidebar";
import Features from "../../components/Features";
import Story from "../../components/Story";
import Homes from "../../components/Homes";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
