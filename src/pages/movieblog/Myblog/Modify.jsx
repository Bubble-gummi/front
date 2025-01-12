import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const Modify = () => {
  const { id } = useParams(); // URL에서 postId를 추출
  const navigate = useNavigate();
  const [post, setPost] = useState({
    subject: '',
    content: '',
    movieTitle: '', // 기본값 설정
  });

  const [movietitle,setMovieTitle]=useState(null)

  useEffect(() => {
    // 서버에서 게시글 정보 가져오기
    axios
      .get(`http://localhost:8080/main/posts/detail/${id}`)
      .then((response) => {
        setPost(response.data.post); // 서버에서 받아온 데이터로 초기화
        console.log(response.data.post.movie.title);
        setMovieTitle(response.data.post.movie.title)
      })
      .catch((error) => {
        console.error('Error fetching post data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject', post.subject);
    formData.append('content', post.content);
    formData.append('movieTitle', movietitle); // 고정된 값 전송

    // PUT 요청 보내기
    axios
      .put(`http://localhost:8080/posts/modify/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      .then((response) => {
        alert('게시글이 수정되었습니다.');
        navigate(`/movieblog/post/${id}`); // 수정 완료 후 해당 게시글 페이지로 이동
      })
      .catch((error) => {
        console.error('Error updating post:', error);
        alert('게시글 수정에 실패했습니다.');
      });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <h1>게시글 수정</h1>
        <S.Input>
          <label htmlFor="subject">제목</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={post.subject}
            onChange={handleInputChange}
            required
          />
        </S.Input>
        <S.Textarea>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
            required
          />
        </S.Textarea>
        <S.Input>
          <label htmlFor="movieTitle">영화 제목</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            value={movietitle}
            readOnly // 읽기 전용으로 설정
          />
        </S.Input>
        <S.Button type="submit">수정 완료</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Modify;
