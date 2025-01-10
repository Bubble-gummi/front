import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Login from '../login/Login';
import S from './style';

const IsNotLogin = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/movieblog'; // 기본적으로 /movieblog로 설정

    const handleGoBack = () => {
        navigate(from); // 이전 페이지로 이동
    };

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const handleLoginClick = () => {
        console.log('Login 버튼 클릭됨');
        setIsLoginOpen(true);
    };
    
    const handleLoginModal = () => {
        setIsLoginOpen(false);
    };

    return (
        <div>
            <S.Container>
                <S.header>
                    <div>로그인이 되어있지 않습니다.</div>
                </S.header>
                <button className='back-button' onClick={handleGoBack}>이전 페이지로 돌아가기</button>
                <button className='login-button' onClick={handleLoginClick}>Login</button>
            
                {isLoginOpen && <Login onClose={handleLoginModal} />}
            </S.Container>
        </div>
    );
}

export default IsNotLogin;