import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Alt from "./pages/Alt";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alt" element={<Alt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
