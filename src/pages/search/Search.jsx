import React, { useState } from 'react';
import S from './style';

const Search = ({ searchQuery }) => {

    return(
        <S.Container>
          <h1>검색 결과</h1>
          {searchQuery ? (
            <p>검색어: <strong>{searchQuery}</strong></p>
          ) : (
            <p>검색어가 입력되지 않았습니다.</p>
          )}

      </S.Container>
    );
}

export default Search;