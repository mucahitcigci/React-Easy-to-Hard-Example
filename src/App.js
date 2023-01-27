import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DataApi from "./pages/DataApi";
import QuizApp from "./pages/QuizApp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

//         <Route path="/dataApi" element={<DataApi />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
