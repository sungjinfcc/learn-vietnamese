import React from "react";
import { Link } from "react-router-dom";

function Header({ authStatus, signOut, userType }) {
  const isAuthenticated = authStatus && authStatus.status;
  let myPageLink;
  if (userType === "student") {
    myPageLink = <Link to="/mypage/student">마이 페이지(학생)</Link>;
  } else if (userType === "tutor") {
    myPageLink = <Link to="/mypage/tutor">마이 페이지(강사)</Link>;
  } else if (userType === "admin") {
    myPageLink = <Link to="/admin">관리자 페이지</Link>;
  } else {
    myPageLink = null;
  }

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <div className="header">
      <Link to="/">홈</Link>
      <Link to="/tutor">강사 소개</Link>
      <Link to="/register">수강 신청</Link>
      {myPageLink}

      {isAuthenticated ? (
        <button type="button" className="logout" onClick={handleSignOut}>
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
