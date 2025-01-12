import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import S from './style';

const MovieBlog = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null); // 에러 상태

  // 로그인 상태 확인
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setIsLoggedIn(true); // 로그인 상태 설정
    }
  }, []);

  const handleMyBlogClick = () => {
    if (!isLoggedIn) {
      navigate("/is-not-login");
    } else {
      navigate("/myblog");
    }
  };

  const truncateContent = (content) => {
    return content.length > 40 ? content.substring(0, 40) + '...' : content;
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/main/posts')
      .then((response) => {
        console.log('Response Data:', response.data.posts); // 데이터 구조 확인
        setPosts(response.data.posts); // posts를 추출
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('데이터를 가져오는 중 문제가 발생했습니다.'); // 에러 상태 설정
      });
  }, []);

  // 에러가 있을 때 표시
  if (error) return <p>{error}</p>;

  return (
    <S.Container>
      <S.Header>
        <h1>영화 리뷰 게시판</h1>
        <div>
          <button onClick={handleMyBlogClick}>내 게시판</button>
        </div>
      </S.Header>
      <S.PostList>
        {posts.map((post) => (
          <S.PostItem key={post.id}>
            {/* 영화 썸네일 이미지 */}
            <S.MovieThumbnail>
              <img
                src={`/image/${post.movie.id}.jpg`} // MOVIE_ID에 해당하는 이미지
                alt={`${post.movie.title} 썸네일`}
                onError={(e) => (e.target.src = '/image/default.jpg')} // 이미지 없을 때 기본 이미지
              />
            </S.MovieThumbnail>

            <S.PostSubject>
              <Link to={`/movieblog/post/${post.id}`} role="button">
                {post.subject} {/* 게시글 제목 */}
              </Link>
            </S.PostSubject>
            <S.PostTitle>{post.movie.title}</S.PostTitle>
            <S.PostContent>{truncateContent(post.content)}</S.PostContent>
          </S.PostItem>
        ))}
      </S.PostList>
    </S.Container>
  );
};

export default MovieBlog;
