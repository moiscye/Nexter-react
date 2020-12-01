import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "../../components/Header";
import Realtors from "../../components/Realtors";
import Sidebar from "../../components/Sidebar";
import Features from "../../components/Features";
import Story from "../../components/Story";
import Homes from "../../components/Homes";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

class App extends Component {
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

export default App;
