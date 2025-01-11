import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import S from './style';

const PostDetail = () => {
  const { id } = useParams();
  
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const [error, setError] = useState(null);

  useEffect(() => {
    // 전체 게시글 가져오기
    axios
      .get('http://localhost:8080/main/posts')
      .then((response) => {
        console.log('Response Data:', response.data.posts); // 디버그
        const posts = response.data.posts || []; // 게시글 배열
        const foundPost = posts.find((p) => p.id === parseInt(id)); // ID로 필터링
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

    if (error) return <p>{error}</p>
    if (!post) {
      return <p>게시글을 찾을 수 없습니다.</p>;
    }

  return (
    <S.PostDetailContainer>
      <S.PostDetailSubject>{post.subject}</S.PostDetailSubject>
      <S.PostDetailTitle>{post.movie?.title || '영화 제목 없음'}</S.PostDetailTitle>
      <S.PostDetailContent>{post.content}</S.PostDetailContent>
    </S.PostDetailContainer>
  );
};

export default PostDetail;