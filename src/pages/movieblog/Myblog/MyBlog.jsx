import React, { useState } from 'react';
import { useNavigate , NavLink} from 'react-router-dom';

import S from './style';

const MyBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      subject: '기생충 영화 리뷰(게시글 제목)',
      title:'기생충',
      content: '기생충 영화에 대한 리뷰입니다.'
    },
    {
      id: 2, 
      subject: '올드보이 영화 리뷰(게시글 제목)',
      title:'올드보이',
      content: '올드보이 영화에 대한 리뷰입니다.'
    }
  ]);
  const handleCreatePost = () => {
    navigate('/createblog');
  };
  return (
    <S.Container>
      <S.Header>
        <h1>내 게시글</h1>
      </S.Header>
      <S.PostList>
        {posts.map((post) => (
          <S.PostItem key={post.id}>
            <S.PostTitle>
                <a href={`/movieblog/post/${post.id}`}>{post.subject}</a>
            </S.PostTitle>
            <S.PostContent>
              {post.content}
            </S.PostContent>
          </S.PostItem>
        ))}
      </S.PostList>
      <S.CreatePostButton onClick={handleCreatePost}>
        글쓰기
      </S.CreatePostButton>
    </S.Container>
  );
};

export default MyBlog;