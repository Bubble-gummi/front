import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const MyBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 내 게시글 가져오기
    axios
      .get('/api/my-posts') // 백엔드에서 내 게시글만 반환
      .then((response) => {
        setPosts(response.data); // 게시글 상태 업데이트
      })
      .catch((error) => {
        console.error('내 게시글 데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);

  const handleCreatePost = () => {
    navigate('/createblog'); // 글쓰기 페이지로 이동
  };

  return (
    <S.Container>
      <S.Header>
        <h1>내 게시글</h1>
      </S.Header>
      <S.PostList>
        {posts.length > 0 ? (
          posts.map((post) => (
            <S.PostItem key={post.id}>
              <S.PostTitle>
                <a href={`/movieblog/post/${post.id}`}>{post.subject}</a>
              </S.PostTitle>
              <S.PostContent>{post.content}</S.PostContent>
            </S.PostItem>
          ))
        ) : (
          <p>내 게시글이 없습니다.</p>
        )}
      </S.PostList>
      <S.CreatePostButton onClick={handleCreatePost}>글쓰기</S.CreatePostButton>
    </S.Container>
  );
};

export default MyBlog;
