import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style';
import axios from 'axios';

const Movie = () => {
  useEffect(()=>{
    axios.get('http://localhost:8080/main').then((response)=>{
      setData(response.data.movies);
      console.log(response.data.movies)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  },[])
  const [data,setData]=useState([])
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
 <S.wrapper className="wrapper">
  {data.map((movie, id) => (
    <S.Card key={id}>
      <Link to={`/movie/moviereview/${movie.id}`} role="button" onClick={() => window.scrollTo(0, 0)}>
        <div className="image-container">
          <img src={`/image/${movie.id}.jpg`} alt={`Video ${movie.title}`} />
        </div>
        <p className="movie-title">{movie.title}</p>
      </Link>
    </S.Card>
  ))}
</S.wrapper>

    </div>
  );
};

export default Movie;