import React, { Component } from "react";
import InfoList from './InfoList'
import Home from './Home';
import Weather from './Weather';
import { Routes, Route } from "react-router-dom";

class Main extends Component {

  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infolist" element={<InfoList />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </main>;
  }
}

export default Main;
