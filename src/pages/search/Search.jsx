import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Search = ({ searchQuery, movies }) => {
  return (
    <S.Container>
      <h1>검색 결과</h1>
      {searchQuery ? (
        <>
          <p>
            검색어: <strong>{searchQuery}</strong>
          </p>
          {movies.length > 0 ? (
            <S.Grid>
              {movies.map((movie) => (
                <S.Card key={movie.id}>
                  {/* 이미지와 제목을 클릭하면 MOVIE_ID를 포함한 URL로 이동 */}
                  <Link to={`/movie/moviereview/${movie.id}`}>
                    <div className="image-container">
                      <img
                        src={movie.posterPath}
                        alt={movie.title || '영화 제목 없음'}
                        onError={(e) => {
                          e.target.src = '/image/default.jpg'; // 기본 이미지 처리
                        }}
                      />
                    </div>
                    <p className="movie-title">{movie.title}</p>
                  </Link>
                </S.Card>
              ))}
            </S.Grid>
          ) : (
            <p>검색된 영화가 없습니다.</p>
          )}
        </>
      ) : (
        <p>검색어가 입력되지 않았습니다.</p>
      )}
    </S.Container>
  );
};

export default Search;
