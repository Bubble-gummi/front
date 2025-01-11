import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

const SearchContainer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query')?.trim().toLowerCase() || ''; // URL에서 검색어 추출 (대소문자 무시)

  const [movies, setMovies] = useState([]); // 전체 영화 데이터
  const [filteredMovies, setFilteredMovies] = useState([]); // 검색된 영화 데이터

  useEffect(() => {
    // 영화 데이터 가져오기
    axios
      .get('http://localhost:8080/main/movies') // API URL
      .then((response) => {
        const allMovies = response.data.month || []; // month 배열 데이터 가져오기
        const moviesWithPoster = allMovies.map((movie) => ({
          ...movie,
          posterPath: movie.posterPath || `/image/${movie.id}.jpg`, // 이미지 경로 생성
        }));
        setMovies(moviesWithPoster); // 영화 데이터를 상태에 저장
      })
      .catch((error) => console.error('영화 데이터 로드 오류:', error));
  }, []);

  useEffect(() => {
    if (query && movies.length > 0) {
      const results = movies.filter((movie) =>
        movie.title?.toLowerCase().includes(query) // 대소문자 무시 비교
      );
      setFilteredMovies(results); // 필터링된 결과 저장
    } else {
      setFilteredMovies([]);
    }
  }, [query, movies]);

  return (
    <div>
      {/* Search 컴포넌트에 검색어와 필터링된 영화 목록 전달 */}
      <Search searchQuery={query} movies={filteredMovies} />
    </div>
  );
};

export default SearchContainer;
