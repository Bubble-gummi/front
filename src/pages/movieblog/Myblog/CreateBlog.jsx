import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const CreateBlog = () => {
  const [title, setTitle] = useState(''); // 게시판 제목
  const [movieId, setMovieId] = useState(''); // 선택된 영화 ID
  const [review, setReview] = useState(''); // 게시글 내용
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

    const newPost = {
      subject: title,        // 게시판 제목
      content: review,       // 게시글 내용
      movieTitle: movieId,   // 선택된 영화 제목
      
    };

    console.log('전송 데이터:', newPost); // 디버깅용

    try {
      // POST 요청 전송
      await axios.post('http://localhost:8080/post/create', newPost);
      console.log('게시글이 성공적으로 저장되었습니다.');
      alert('게시글이 성공적으로 저장되었습니다!');
      navigate('/movieblog'); // 성공 후 게시판 페이지로 이동
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
            <label htmlFor="title">게시판 제목:</label>
            <S.Input>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </S.Input>
          </div>

          <div>
            <label htmlFor="movie">영화 제목:</label>
            <S.Select>
              <select
                id="movie"
                value={movieId}
                onChange={(e) => setMovieId(e.target.value)}
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
            <label htmlFor="review">게시글 내용:</label>
            <S.Textarea>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
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
