import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import "./Components/Home/Home.css"
import Home from "./Page/Home";
import RecentPlaying from "./Components/Home/RecentPlaying";

function App() {
  return (
    <div className="App">
      <Home/>

      <RecentPlaying/>
    </div>
  );
}

export default App;
