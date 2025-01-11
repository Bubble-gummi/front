import React, { useState } from 'react';
import axios from 'axios';
import S from './style';

const Login = ({ onClose, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  axios.defaults.withCredentials = true;  // 쿠키 포함 설정
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);


  // 로그인 요청 함수
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // 폼 데이터 전송 시 설정
        },
        withCredentials: true, // 쿠키 포함
      });
    
    console.log('로그인 성공', response.data);
    } catch (error) {
    console.error('로그인 실패:', error);
    }
    };
    

  const handleSubmit = async (e) => {
    e.preventDefault();  // 폼 제출 시 새로고침 방지

    await login();  // 로그인 시도
  };

  return (
    <S.ModalBackground className="Modal-back">
      <S.ModalContainer className="Modal-con">
        <div>로그인</div>
        <S.close className="close">
          <button onClick={onClose}>닫기</button>
        </S.close>
        <form onSubmit={handleSubmit}>
          <S.email>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.email>
          <S.password>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.password>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>{success}</div>}
          <S.login>
            <button type="submit">로그인하기</button>
          </S.login>
        </form>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Login;
