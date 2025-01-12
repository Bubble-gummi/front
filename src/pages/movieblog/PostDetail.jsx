import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import S from './style';

const PostDetail = () => {
  const { id } = useParams(); // URL에서 게시글 ID 추출
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const [error, setError] = useState(null);

  useEffect(() => {
    // 게시글 데이터 가져오기
    axios
      .get('http://localhost:8080/main/posts') // API URL
      .then((response) => {
        console.log('Response Data:', response.data.posts); // 디버깅용 로그
        const posts = response.data.posts || []; // 게시글 배열
        const foundPost = posts.find((p) => p.id === parseInt(id)); // 게시글 ID로 필터링
        if (foundPost) {
          setPost(foundPost); // 게시글 데이터 설정
        } else {
          setError('게시글을 찾을 수 없습니다.');
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error); // 에러 로그
        setError('게시글을 불러오는 중 문제가 발생했습니다.');
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>게시글을 불러오는 중입니다...</p>;

  // MOVIE_ID에 해당하는 이미지 경로 생성
  const movieImageSrc = `/image/${post.movie?.id || 'default'}.jpg`;

  return (
    <S.PostDetailContainer>
      {/* 영화 썸네일 이미지 */}
      <S.MovieThumbnail>
        <img
          src={movieImageSrc}
          alt={post.movie?.title || '영화 썸네일 없음'}
          onError={(e) => (e.target.src = '/image/default.jpg')} // 이미지 없을 때 기본 이미지 표시
        />
      </S.MovieThumbnail>

      {/* 게시글 제목, 영화 제목, 내용 */}
      <S.PostDetailSubject>{post.subject}</S.PostDetailSubject>
      <S.PostDetailTitle>{post.movie?.title || '영화 제목 없음'}</S.PostDetailTitle>
      <S.PostDetailContent>{post.content}</S.PostDetailContent>
    </S.PostDetailContainer>
  );
};

export default PostDetail;
