import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import Card from "./components/Card";
import Chart from "./components/Chart";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      {/* <Chart /> */}
     
    
    </div>
  );

}

export default App;
