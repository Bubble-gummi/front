import React, { useState } from 'react';
import axios from 'axios';
import S from './style';

const Login = ({ onClose, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        'http://localhost:8080/user/login', 
        `email=${email}&password=${password}`, 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
          },
        }
      );

      if (response.status === 200) {
        setSuccess('로그인 성공!');
        setError('');
        setLoggedIn(true); 
        onClose(); 
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');
      } else {
        setError('서버 오류! 다시 시도해주세요.');
      }
      setSuccess('');
    }
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
