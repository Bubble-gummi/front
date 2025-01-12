import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
import S from './style';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';
import axios from 'axios';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData)); // 로그인 상태가 유지된다면 사용자 정보 세팅
    }
  }, []);

  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청을 보내는 코드
      // await axios.post('/logout'); // 서버에서 세션 종료 처리

      // 세션을 클라이언트에서 종료
      localStorage.removeItem('user');
      alert('로그아웃 성공');
      
      // 로그아웃 후 메인 페이지로 이동
      navigate('/');
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClick = () => {
    console.log('Login 버튼 클릭됨');
    setIsLoginOpen(true);
  };

  const handleLoginModal = () => {
    setIsLoginOpen(false);
  };

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUpClick = () => {
    console.log('Sign Up 버튼 클릭됨');
    setIsSignUpOpen(true);
  };

  const handleSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div>
      <S.Background className="background">
        <S.Header className="header">
          <NavLink to={"/"}>
            <h1>Nouvelle Vague</h1>
          </NavLink>
          <NavLink to={"/movie"}>
            <p>영화</p>
          </NavLink>
          <NavLink to={"/weekmovie"}>
            <p>이달의 영화</p>
          </NavLink>
          <NavLink to={"/movieblog"}>
            <p>영화 게시판</p>
          </NavLink>
          <NavLink to={"/mypage"}>
            <p>마이 페이지</p>
          </NavLink>
          <div className="search-bar">
            <S.Serch>
              <input 
                type="text"
                placeholder="Search contents, people, collections, ..."
                value={searchQuery}
                onChange={handleSearchChange}  
              />
            </S.Serch>
            <button onClick={handleSearchClick}>Search</button>
            {user ? (
              <button onClick={handleLogout}>Logout</button> // 로그아웃 버튼
            ) : (
              <>
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleSignUpClick}>Sign Up</button>
              </>
            )}
          </div>
        </S.Header>
        <S.Main className="main">
          <Outlet />
        </S.Main>
      </S.Background>
      {isLoginOpen && <Login onClose={handleLoginModal} />}
      {isSignUpOpen && <SignUp onClose={handleSignUpModal} />}
      {/* 푸터 */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
