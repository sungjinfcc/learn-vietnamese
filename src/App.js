import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Tutor from "./Components/Tutor";
import Register from "./Components/Register";
import MyPageStudent from "./Components/MyPageStudent";
import MyPageTutor from "./Components/MyPageTutor";
import Admin from "./Components/Admin";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage/student" element={<MyPageStudent />} />
        <Route path="/mypage/tutor" element={<MyPageTutor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
