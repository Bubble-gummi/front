import React, { useState } from 'react';
import axios from 'axios';
import S from './style';

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/user/signup_process',
        new URLSearchParams({
          userId: email,
          password: password,
          email: email,
          phoneNumber: phoneNumber,
        })
      );

      if (response.status === 200) {
        alert('회원가입에 성공했습니다!'); // 성공 메시지 알림
        setError(''); // 에러 메시지 초기화
        onClose(); // 모달 닫기
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('회원가입 실패! 다시 시도해주세요.');
      } else {
        setError('서버 오류! 다시 시도해주세요.');
      }
    }
  };

  return (
    <S.ModalBackground className='Modal-back'>
      <S.ModalContainer className='Modal-con'>
        <div>회원가입</div>
        <S.close className='close'>
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

          <S.password>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </S.password>

          {/* 에러 메시지 */}
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <S.PhoneNumber>
            <input
              type="text"
              placeholder="전화번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </S.PhoneNumber>

          <S.signUp>
            <button type="submit">가입하기</button>
          </S.signUp>
        </form>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default SignUp;
