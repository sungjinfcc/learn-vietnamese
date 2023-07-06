import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Tutor from "./Components/Tutor";
import Register from "./Components/Register";
import MyPageStudent from "./Components/MyPageStudent";
import MyPageTutor from "./Components/MyPageTutor";
import Admin from "./Components/Admin";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage/student" element={<MyPageStudent />} />
        <Route path="/mypage/tutor" element={<MyPageTutor />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
