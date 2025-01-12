import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const MyBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDetail')));

  useEffect(() => {
    axios
      .get('http://localhost:8080/main/posts') // 전체 게시글을 가져옵니다.
      .then((response) => {
        console.log('Response Data:', response.data.posts); // 데이터 구조 확인

        // user.id와 post.user.id가 같은 것만 필터링
        const filteredPosts = response.data.posts.filter(post => post.user.id === user.id);
        setPosts(filteredPosts); // 필터링된 게시글만 상태에 저장
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [user.id]); // user.id가 변경될 때마다 요청이 실행됩니다.

  const handleCreatePost = () => {
    navigate('/createblog'); // 글쓰기 페이지로 이동
  };

  const handleDeletePost = async (postId) => {
      try {
        // 게시글 삭제 요청
        await axios.delete(`http://localhost:8080/posts/delete/${postId}`, {
          withCredentials: true, // 쿠키 포함
        });
  
        // 삭제 후 게시글 목록 갱신
        setPosts(posts.filter((post) => post.id !== postId)); // 삭제된 게시글을 리스트에서 제거
        alert('게시글이 삭제되었습니다.');
      } catch (error) {
        console.error('게시글 삭제 중 오류 발생:', error);
        alert('게시글 삭제에 실패했습니다.');
      }
  };
  
  // 게시글 수정 페이지로 이동
  const handleEditPost = (postId) => {
    navigate(`/modify/${postId}`); // 수정 페이지로 이동
  };

  return (
    <S.Container>
      <S.Header>
        <h1>내 게시글</h1>
        <S.CreatePostButton onClick={handleCreatePost}>글쓰기</S.CreatePostButton>
      </S.Header>
      <S.PostList>
        {posts.length > 0 ? (
          posts.map((post) => (
            <S.PostItem key={post.id}>
              <S.PostTitle>
                <Link to={`/movieblog/post/${post.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <img src={`/image/${post.movie.id}.jpg`} alt={post.subject} />
                  <h3>{post.subject}</h3>
                  <p>{post.content}</p>
                  <p className='bottom'>{post.createDate.split("T")[0]}</p>
                </Link>
              </S.PostTitle>
              {/* 수정 및 삭제 버튼 추가 */}
              <S.ButtonContainer>
                <S.Button onClick={() => handleEditPost(post.id)}>수정</S.Button>
                <S.Button onClick={() => handleDeletePost(post.id)}>삭제</S.Button>
              </S.ButtonContainer>
            </S.PostItem>
          ))
        ) : (
          <p>내 게시글이 없습니다.</p>
        )}
      </S.PostList>
    </S.Container>
  );
};

export default MyBlog;
