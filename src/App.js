import React, { Component } from "react";
import "./styles/style.scss";
import LandingPage from "./components/landing_page";
import Navbar from "./components/navbar";
import SectionGradient from "./components/section-gradient";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <SectionGradient></SectionGradient>
      </div>
    );
  }
}

export default App;
