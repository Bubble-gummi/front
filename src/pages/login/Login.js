import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const Login = ({ onClose, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // 로그인 요청 함수
  const login = async () => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8080/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 폼 데이터 전송 시 설정
        },
        withCredentials: true, // 쿠키 포함
      });

      console.log('로그인 성공', response.data);
      setSuccess('로그인에 성공했습니다!');
      setError('');
      
      // 로그인 성공 시 세션 정보 저장
      localStorage.setItem('user', JSON.stringify(response.data)); // 로그인 정보 로컬 git 
      onClose(); // 로그인 모달 닫기
      navigate('/', { state: { userDetailData: response.data } }); // 메인 페이지로 이동
      window.location.reload(); // 페이지 새로고침

    } catch (error) {
      console.error('로그인 실패:', error);
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      setSuccess('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(); // 로그인 시도
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
