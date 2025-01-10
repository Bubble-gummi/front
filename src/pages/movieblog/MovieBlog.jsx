import React, { useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import PostDetailContainer from './PostDetailContainer';
import S from './style';

const MovieBlog = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      subject: '파이트클럽 영화 리뷰(게시글 제목)',
      title:'파이트클럽',
      content: '기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 2,
      subject: '기생충 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 3,
      subject: '3 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 4,
      subject: '4 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 5,
      subject: '5 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 6,
      subject: '6 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 7,
      subject: '7 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 8,
      subject: '8 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
  ]);

  const handleMyBlogClick = () =>{
    if(!isLoggedIn){
      navigate("/is-not-login");
    }else{
      navigate("/myblog");
    }
  }

  const truncateContent = (content) => {
    return content.length > 40 ? content.substring(0, 40) + '...' : content;
  }

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
            <S.PostSubject>
            <Link to={`/movieblog/post/${post.id}`} role="button" onClick={() => window.scrollTo(0, 0)}>
              {post.subject}
            </Link>
            </S.PostSubject>
            <S.PostTitle>{post.title}</S.PostTitle>
            <S.PostContent>{truncateContent(post.content)}</S.PostContent>
          </S.PostItem>
        ))}
      </S.PostList>
    </S.Container>
    
  );
};

export default MovieBlog;