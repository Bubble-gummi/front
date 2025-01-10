import React, { useEffect, useState } from 'react';
import S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
  
  const posts = [
    {
      id: 1,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 2,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 3,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/main').then((response)=>{
      setData(response.data.movies);
      console.log(response.data.movies)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  },[])
  return (
    <div>
      <S.MainContent className="main-content">
        <div className="movie-container">
          <S.title className='title'>
            <h2>상영</h2><h2 className='back'>무비</h2>
          </S.title>
          <S.wrapper className="wrapper">
        {data.map((movie, id) => (
          <S.Card key={id}>
            <Link to={`/movie/moviereview/${movie.id}`} role="button" onClick={() => window.scrollTo(0, 0)}>
              <div className="image-container">
              <img src={`/image/${movie.id}.jpg`} alt={`Video ${movie.title}`} />
             </div>
              </Link>
             </S.Card>
            ))}
          </S.wrapper>
        </div>
        <div className="post-container">
        <S.title className='title'>
            <h2>영화</h2><h2 className='back'>게시판</h2>
          </S.title>
          <div className="post-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <img src={post.img} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </S.MainContent>
    </div>
  );
};

export default Main;