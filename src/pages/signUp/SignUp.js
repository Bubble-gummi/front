import React, { useState } from 'react';
import axios from 'axios';
import S from './style';

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
          },
        }
      );

      if (response.status === 200) {
        setSuccess('회원가입 성공!');
        setError(''); 
        onClose(); 
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('회원가입 실패! 다시 시도해주세요.');
      } else {
        setError('서버 오류! 다시 시도해주세요.');
      }
      setSuccess(''); 
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

          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>{success}</div>}

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
