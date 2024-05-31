import React, { useEffect } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
function Main() {
  const backgroundImageUrl = './img/background.png';

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={backgroundStyle}></div>

      <div>
        <div className="Title-Your">너의</div>
        <div className="Title-Schedule">일정은</div>
      </div>
      <Link to="/login">
      <div className="Login-Button">로그인</div>
      </Link>
      <Link to="/membership">
      <div className="Membership">회원가입</div>
      </Link>
    </div>
  );
}

export default Main;



