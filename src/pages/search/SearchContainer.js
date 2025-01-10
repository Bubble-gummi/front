import React from 'react';
import { useLocation } from 'react-router-dom';
import Search from './Search';

const SearchContiner = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query'); // URL에서 검색어 추출

  return (
    <div>
      <Search searchQuery={query} />
    </div>
  );
};
export default SearchContiner;