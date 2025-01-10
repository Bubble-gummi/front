import styled from "styled-components";

const S = {};

S.MainContent = styled.div`
width: 1240px;
height: 100%;
position: relative;
align-items: center;
justify-content: center;
padding: 2rem;
margin: auto;

  .movie-container,
  .post-container {
    margin-bottom: 2rem;

    h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }

  .movie-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .post-list{
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;

  }

  .movie-item{
  min-width: 200px;
  max-width: 200px;
  height: 300px;
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

    p,
    h3 {
      margin-top: 0.5rem;
    }

  }
  .post-item{
    flex-direction: column;
    align-items: center;
    background-color: black;
    min-width: 318px;
    max-width: 318px;
    height: 325px;
    flex-shrink: 0;
    border-radius: 10px;
    position: relative;
    margin: 10px;
    border: 1px solid gray;
    img {
    width: 318px;
    height: 168px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

    p{
      display: -webkit-box;
      font-size: 15px;
      margin-top: 0.5rem;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
    }
    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      font-size: 18px;
      margin-top: 0.5rem;
      overflow: hidden;
    }

    .bottom{
      color: #888888;
     width: 100%;
     position: absolute;
     bottom: 0;
     text-align: right;
     padding: 10px;
    }
  }
`;
S.title=styled.div`
display: flex;
gap: 10px;
.back{
  color: red !important;
}

`
S.wrapper = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding-top: 43px;
`;

S.Card = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 300px; 
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column; 


  .image-container {
    width: 100%;
    height: 310px; 
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
  `
export default S;
