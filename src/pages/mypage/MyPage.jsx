import React, { useState } from 'react';
import axios from 'axios';
import S from '../mypage/style';
import { useNavigate, useOutletContext } from 'react-router-dom';

const MyPage = () => {
  const [password, setPassword] = useState('');  // 새로운 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState('');  // 비밀번호 확인 상태
  const [phoneNumber, setPhoneNumber] = useState('');  // 전화번호 상태
  const [error, setError] = useState(null);  // 에러 상태
  const [success, setSuccess] = useState(null);  // 성공 상태

  const navigate = useNavigate();

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 변경을 진행하기 전에 확인 창 띄우기
    const confirmChange = window.confirm('변경 사항을 저장하시겠습니까?');

    if (!confirmChange) {
      return;  // 변경하지 않으면 아무 일도 일어나지 않음
    }

    // 비밀번호 확인이 일치하지 않으면 에러 표시
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:8080/user/modify',
        new URLSearchParams({
          password: password,
          phoneNumber: phoneNumber,
        }),
        {
          withCredentials: true, // 자격 증명 포함
        }
      );

      if (response.status === 200) {
        setSuccess('개인정보 변경이 완료되었습니다.');
        setError(null);  // 에러 메시지 초기화
      }
    } catch (error) {
      setError('개인정보 변경에 실패했습니다.');
      setSuccess(null);  // 성공 메시지 초기화
    }
  };

  // 회원 탈퇴 핸들러
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('정말로 회원 탈퇴를 하시겠습니까?');

    if (!confirmDelete) {
      return;  // 탈퇴하지 않으면 아무 일도 일어나지 않음
    }

    try {
      // 회원 정보 삭제
      const deleteResponse = await axios.delete('http://localhost:8080/user/delete', {
        withCredentials: true, // 자격 증명 포함
      });
  
      if (deleteResponse.status === 200) {
        setSuccess('회원 탈퇴가 완료되었습니다.');
        setError(null); // 에러 메시지 초기화
  
        // 로그아웃 버튼 클릭 트리거
        const logoutButton = document.getElementById('logout-button'); // 로그아웃 버튼의 ID로 찾기
        if (logoutButton) {
          logoutButton.click(); // 클릭 이벤트 트리거
        }
      }
    } catch (error) {
      setError('회원 탈퇴에 실패했습니다.');
      setSuccess(null); // 성공 메시지 초기화
    }
  };

  return (
    <S.RightSection>
      <p className='infoTitle'>개인정보 변경</p>
      <form onSubmit={handleSubmit}>
        {/* 새로운 비밀번호 입력 */}
        <S.changepassword className='changepassword'>
          <label>
            <S.Input
              type="password"
              name='password'
              placeholder='새로운 비밀번호'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </S.changepassword>

        {/* 비밀번호 확인 입력 */}
        <S.changepassword>
          <label>
            <S.Input
              type="password"
              name='confirmPassword'
              placeholder='새로운 비밀번호 확인'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </S.changepassword>

        {/* 전화번호 입력 */}
        <S.changepassword>
          <label>
            <S.Input
              type="text"
              name='phoneNumber'
              placeholder='전화번호 변경'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </S.changepassword>

        {/* 변경 완료 버튼 */}
        <S.ButtonBox className='buttonBox'>
          <S.ChangeButton type="submit">
            변경 완료
          </S.ChangeButton>
        </S.ButtonBox>

        {/* 에러 메시지 */}
        {error && <div style={{ color: 'red' }}>{error}</div>}

        {/* 성공 메시지 */}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </form>

      {/* 회원 탈퇴 버튼 */}
      <S.Button onClick={handleDeleteAccount}>
        회원 탈퇴
      </S.Button>
    </S.RightSection>
  );
};

export default MyPage;
