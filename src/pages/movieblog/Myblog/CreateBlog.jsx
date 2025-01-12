import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const CreateBlog = () => {
  const [subject, setSubject] = useState(''); // 게시판 제목
  const [movieTitle, setMovieTitle] = useState(''); // 선택된 영화 제목
  const [content, setContent] = useState(''); // 게시글 내용
  const [movies, setMovies] = useState([]); // 영화 목록
  const navigate = useNavigate();

  // 영화 목록 가져오기
  useEffect(() => {
    axios
      .get('http://localhost:8080/movies') // 영화 목록 API 호출
      .then((response) => {
        const movieList = Array.isArray(response.data) ? response.data : response.data.movies; // 배열 추출
        setMovies(movieList || []); // movies 상태에 설정
      })
      .catch((error) => {
        console.error('영화 목록 로드 오류:', error);
        setMovies([]); // 에러 발생 시 빈 배열로 초기화
      });
  }, []);

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject', subject);       // 게시판 제목
    formData.append('content', content);       // 게시글 내용
    formData.append('movieTitle', movieTitle); // 선택된 영화 제목

    console.log('전송 데이터:', formData); // 디버깅용

    try {
      // POST 요청 전송
      const response = await axios.post('http://localhost:8080/post/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 폼 데이터 전송 시 설정
        },
        withCredentials: true, // 쿠키 포함
      });

      if (response.status === 200) {
        console.log('게시글이 성공적으로 저장되었습니다.');
        alert('게시글이 성공적으로 저장되었습니다!');
        navigate('/movieblog'); // 성공 후 게시판 페이지로 이동
      }
    } catch (error) {
      console.error('게시글 저장 중 오류 발생:', error);
      alert('게시글 저장 중 문제가 발생했습니다. 서버와의 연결을 확인하세요.');
    }
  };

  return (
    <div>
      <S.Main>
        <h1>영화 게시글 작성</h1>
        <S.Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="subject">게시판 제목:</label>
            <S.Input>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </S.Input>
          </div>

          <div>
            <label htmlFor="movieTitle">영화 제목:</label>
            <S.Select>
              <select
                id="movieTitle"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                required
              >
                <option value="" disabled>
                  영화 제목을 선택하세요
                </option>
                {Array.isArray(movies) &&
                  movies.map((movie) => (
                    <option key={movie.id} value={movie.title}>
                      {movie.title}
                    </option>
                  ))}
              </select>
            </S.Select>
          </div>

          <div>
            <label htmlFor="content">게시글 내용:</label>
            <S.Textarea>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </S.Textarea>
          </div>

          <S.Button type="submit">올리기</S.Button>
        </S.Form>
      </S.Main>
    </div>
  );
};

export default CreateBlog;
