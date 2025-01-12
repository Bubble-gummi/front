import React, { useEffect, useState } from 'react';
import S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
  const [data, setData] = useState([]);
  const [postdata,setPostData]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/main').then((response)=>{
      setData(response.data.movies);
      console.log(response.data.movies)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  },[])
  useEffect(()=>{
    axios.get('http://localhost:8080/main').then((response)=>{
      setPostData(response.data.posts);
      console.log(response.data.posts)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  },[])
  const dateTime=postdata.createDate
  return (
    <div>
      <S.MainContent className="main-content">
        <div className="movie-container">
          <S.title className='title'>
            <h2>상영</h2><h2 className='back'>무비</h2>
          </S.title>
          <S.wrapper className="wrapper">
        {data.slice(0,5).map((movie, id) => (
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
            {postdata.slice(0,3).map((post) => (
              <div key={post.id} className="post-item">
                <Link to={`/movieblog/post/${post.id}`} role='button'  onClick={() => window.scrollTo(0, 0)}>
                  <img src={`/image/${post.movie.id}.jpg`} alt={post.title} />
                  <h3>{post.subject}</h3>
                  <p>{post.content}</p>
                  <p className='bottom'>{post.createDate.split("T")[0]}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </S.MainContent>
    </div>
  );
};

export default Main;