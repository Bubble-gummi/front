import React from 'react';
import { useParams } from 'react-router-dom';
import S from './style';

const PostDetailContainer = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.PostDetailContainer>
      <S.PostDetailSubject>{post.subject}</S.PostDetailSubject>
      <S.PostDetailTitle>{post.title}</S.PostDetailTitle>
      <S.PostDetailContent >{post.content}</S.PostDetailContent>
    </S.PostDetailContainer>
  );
};

export default PostDetailContainer;