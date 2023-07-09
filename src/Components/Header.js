import React from "react";
import { Link } from "react-router-dom";

function MyPageLink({ userType }) {
  if (userType === "student") {
    return <Link to="/mypage/student">마이 페이지(학생)</Link>;
  }
  if (userType === "tutor") {
    return <Link to="/mypage/tutor">마이 페이지(강사)</Link>;
  }
  if (userType === "admin") {
    return <Link to="/admin">관리자 페이지</Link>;
  }
  return null;
}

function Header({ authStatus, signOut, userType }) {
  const isAuthenticated = authStatus && authStatus.status;
  return (
    <div className="header">
      <Link to="/">홈</Link>
      <Link to="/tutor">강사 소개</Link>
      <Link to="/register">수강 신청</Link>
      <MyPageLink userType={userType} />

      {isAuthenticated ? (
        <button type="button" className="logout" onClick={signOut}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">
          <button type="button">로그인 / 회원가입</button>
        </Link>
      )}
    </div>
  );
}

export default Header;
