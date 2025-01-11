import React from 'react';
import S from './style';

const Search = ({ searchQuery, movies }) => {
  return (
    <S.Container>
      <h1>검색 결과</h1>
      {searchQuery ? (
        <>
          <p>검색어: <strong>{searchQuery}</strong></p>
          {movies.length > 0 ? (
            <S.Grid>
              {movies.map((movie) => (
                <S.Card key={movie.ID}>
                  <div className="image-container">
                    <img
                      src={movie.POSTER_PATH} // 이미지 경로 사용
                      alt={movie.TITLE || '영화 제목 없음'}
                      onError={(e) => { e.target.src = '/images/default.jpg'; }} // 이미지 로드 오류 처리
                    />
                  </div>
                  <p className="movie-title">{movie.TITLE}</p>
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
