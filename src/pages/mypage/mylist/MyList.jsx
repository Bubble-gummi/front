import React, { useEffect, useState } from 'react';
import axios from 'axios';
import S from './style';

const MyList = () => {
  const [posts, setPosts] = useState([]); // 게시글 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리
  const [user, setUser] = useState({
    userID: '',
    userEmail: '',
    role: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mypage/uid/mypost', {
          withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
        });
        if (response.status === 200) {
          setPosts(response.data.posts || []); // 게시글 데이터가 없으면 빈 배열
          setUser(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error checking user status:', error);
        setError('데이터를 가져오는 중 에러가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>로딩 중...</p>; // 로딩 상태일 때 표시
  }

  if (error) {
    return <p>{error}</p>; // 에러 발생 시 메시지 표시
  }

  if (posts.length === 0) {
    return <p>게시글이 없습니다.</p>; // 게시글이 없을 경우 메시지 표시
  }

  return (
    <S.RightSection>
      <div className="title">
        <h1>내가 쓴 게시판</h1>
        <p className="post-count">전체 글 {posts.length}</p>
      </div>
      <div className="post-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <img src={`/image/${post.movie.id}.jpg`} alt={post.title} />
                <h3>{post.subject}</h3>
                <p>{post.content}</p>
                <p className='bottom'>{post.createDate.split("T")[0]}</p>
              </div>
            ))}
          </div>
    </S.RightSection>
  );
};

export default MyList;
