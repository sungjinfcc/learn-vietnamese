import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">홈</Link>
      <Link to="/tutor">강사 소개</Link>
      <Link to="/register">수강 신청</Link>
      <Link to="/mypage/student">마이 페이지(학생)</Link>
      <Link to="/mypage/tutor">마이 페이지(강사)</Link>
      <Link to="/admin">관리자 페이지</Link>
    </div>
  );
}

export default Header;
