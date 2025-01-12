import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const WeekMovie = () => {
  useEffect(()=>{
    axios.get('http://localhost:8080/main/movies').then((response)=>{
      setAll(response.data.all);
      setMonth(response.data.month);
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  },[])
  const [all,setAll]=useState([])
  const [month,setMonth]=useState([])
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getRandomMovies = (all, count) => {
    const shuffled = [...all].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomMovies(all, 5);



  const getRandomMovies2 = (month, count) => {
    const shuffled = [...month].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies2 = getRandomMovies2(month, 5);

  return (
    <div>
      <S.MainContent className="main-content">
            <div className="movie-container">
              <S.title className='title'>
                <h2>이달의</h2><h2 className='back'>인기영화</h2>
              </S.title>
              <div className="movie-list">
              {randomMovies.map((movie) => (
          <S.Card key={movie.id}>
            <Link
              to={`/movie/moviereview/${movie.id}`}
              role="button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="image-container">
                <img src={`/image/${movie.id}.jpg`} alt={`Video ${movie.title}`} />
              </div>
              <p className="movie-title">{movie.title}</p>
            </Link>
          </S.Card>
        ))}
              </div>
            </div>
            <div className="movie-container">
              <S.title className='title'>
                <h2>이달의</h2><h2 className='back'>추천</h2>
              </S.title>
              <div className="movie-list">
              {randomMovies2.map((movie) => (
          <S.Card key={movie.id}>
            <Link
              to={`/movie/moviereview/${movie.id}`}
              role="button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="image-container">
                <img src={`/image/${movie.id}.jpg`} alt={`Video ${movie.title}`} />
              </div>
              <p className="movie-title">{movie.title}</p>
            </Link>
          </S.Card>
        ))}
              </div>
            </div>
          </S.MainContent>
    </div>
  );
};

export default WeekMovie;
