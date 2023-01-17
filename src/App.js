import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataApi from "./pages/DataApi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dataApi" element={<DataApi />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
