import React, { Component } from "react";
import "./styles/style.scss";
import LandingPage from "./components/landing_page";
import IntroductionSection from "./components/introduction";
import Navbar from "./components/navbar";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <IntroductionSection></IntroductionSection>
      </div>
    );
  }
}

export default App;
