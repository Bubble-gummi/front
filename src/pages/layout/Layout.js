import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
import S from './style';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';

const Layout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData)); // 로그인 상태가 유지된다면 사용자 정보 세팅
    }
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      alert('로그아웃 성공');
      navigate('/');
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleLoginModal = () => {
    setIsLoginOpen(false);
  };

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUpClick = () => {
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

  const handleMyPageClick = (e) => {
    if (!user) {
      e.preventDefault(); // 기본 링크 이동 방지
      alert('로그인이 필요한 페이지입니다.');
      setIsLoginOpen(true); // 로그인 모달 열기
    }
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
          <NavLink 
            to={"/mypage"} 
            onClick={handleMyPageClick}
            user={user} // 마이 페이지 클릭 시 로그인 확인
          >
            <p>마이 페이지</p>
          </NavLink>
          <div className="search-bar">
            <S.Serch>
              <input 
                type="text"
                placeholder="Search contents, people, collections, ..."
                value={searchQuery}
                onChange={handleSearchChange}  
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchClick(); // Enter 키가 눌리면 검색 실행
                  }
                }}
              />
            </S.Serch>
            <button onClick={handleSearchClick}>Search</button>
            {user ? (
              <button onClick={handleLogout}  id="logout-button" >Logout</button> // 로그아웃 버튼
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
