import React from "react";
import "./index.css";
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/layouts/header";
function App() {
  
  return (
<div className="app">
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
 </div>
 
 );
}

export default App
