import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

const SearchContainer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query')?.trim() || ''; // URL에서 검색어 추출 (기본값 빈 문자열)

  const [movies, setMovies] = useState([]); // 전체 영화 데이터
  const [filteredMovies, setFilteredMovies] = useState([]); // 검색된 영화 데이터

  useEffect(() => {
    // 영화 데이터 가져오기
    axios
      .get('http://localhost:8080/main/movies') // API URL
      .then((response) => {
        const allMovies = response.data || []; // 응답 데이터 가져오기
        // ID를 기준으로 이미지 경로 생성
        const moviesWithPoster = allMovies.map((movie) => ({
          ...movie,
          POSTER_PATH: `/images/${movie.ID}.jpg`, // 이미지 경로 생성
        }));
        setMovies(moviesWithPoster);
      })
      .catch((error) => console.error('영화 데이터 로드 오류:', error));
  }, []);

  useEffect(() => {
    console.log('검색어:', query); // 검색어 확인
    console.log('전체 영화 데이터:', movies); // 전체 영화 데이터 확인

    if (query && movies.length > 0) {
      const results = movies.filter((movie) =>
        movie.TITLE?.toLowerCase().includes(query.toLowerCase())
      );
      console.log('필터링 결과:', results); // 필터링 결과 확인
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  }, [query, movies]);

  return (
    <div>
      <Search searchQuery={query} movies={filteredMovies} />
    </div>
  );
};

export default SearchContainer;
