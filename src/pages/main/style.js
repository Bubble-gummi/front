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
    justify-content: space-between;
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
    align-items: center;
    min-width: 300px;
    max-width: 300px;
    height: 300px;
    flex-shrink: 0;
    background-color: #222;
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
