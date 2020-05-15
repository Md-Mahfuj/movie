import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import "./pages/home/Home.css"
import Home from "./pages/home/Home";
import RecentPlaying from "./components/RecentPlaying";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
