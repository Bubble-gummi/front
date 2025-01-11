import React, { useState } from 'react';
import {NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
import S from './style';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';


const Layout = () => {
  const navigate = useNavigate();
  const movies = [
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
  ];
  
  const posts = [
    {
      id: 1,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 2,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 3,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
  ];

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSignUpModal = () => {
    setIsSignUpOpen(false);
  };
  

  const [searchQuery, setSearchQuery] = useState('');
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchClick(); // Enter 키가 눌리면 검색 실행
                  }
                }}
              />
            </S.Serch>
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleSignUpClick}>Sign Up</button>
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