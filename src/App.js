import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Tutor from "./Components/Tutor";
import Register from "./Components/Register";
import MyPageStudent from "./Components/MyPageStudent";
import MyPageTutor from "./Components/MyPageTutor";
import Admin from "./Components/Admin";
import Header from "./Components/Header";
import Login from "./Components/Login";
import initializeFirebase from "./firebase";

function App() {
  const navigate = useNavigate();
  const firebase = initializeFirebase();
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const authStatus = currentUser
    ? { uid: currentUser.uid, status: true }
    : { status: false };

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        const documentData = await firebase.getDocumentByUID("user", user.uid);
        setUserType(documentData ? documentData.type : null);

        if (user) {
          firebase.addData(
            "user",
            {
              uid: user.uid,
              email: user.email,
              type: "student",
            },
            true
          );
        }

        navigate("/");
      } else {
        setCurrentUser(null);
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [firebase.auth]);

  return (
    <>
      <Header
        authStatus={authStatus}
        signOut={firebase.logOut}
        userType={userType}
      />
      <Routes>
        <Route path="/" element={<Home addFeedback={firebase.addData} />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route
          path="/register"
          element={<Register addData={firebase.addData} />}
        />
        <Route path="/mypage/student" element={<MyPageStudent />} />
        <Route path="/mypage/tutor" element={<MyPageTutor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login firebase={firebase} />} />
      </Routes>
    </>
  );
}

export default App;
