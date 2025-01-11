import styled from "styled-components";

const S = {};

S.Background = styled.div`
    width: 100%;
    min-width: 1240px;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 550px;
    background-color: black;
    overflow: hidden;
    margin: auto;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
  color: white;

  h1 {
    font-size: 1.8rem;
    color: red;
  }

  .search-bar {
    display: flex;
    align-items: center;

    input {
      padding: 0.5rem;
      margin-right: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      outline: none;
    }

    button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;

      &:nth-of-type(1) {
        background-color: red;
        color: white;
      }

      &:nth-of-type(2) {
        background-color: #2980b9;
        color: white;
      }

      &:nth-of-type(3) {
        background-color: #27ae60;
        color: white;
      }
    }
  }
`;

S.Serch = styled.div`

  input{
    color:black;
  }
`

S.MainContent = styled.div`
  padding: 2rem;

  .movie-container,
  .post-container {
    margin-bottom: 2rem;

    h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }

  .movie-list,
  .post-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .movie-item,
  .post-item {
    background-color: #222;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    width: 200px;

    img {
      width: 100%;
      border-radius: 8px;
    }

    p,
    h3 {
      margin-top: 0.5rem;
    }

  }
`;

S.Main = styled.div`
  width: 100%;
    z-index: 10;
    margin: 0 auto;
    padding-bottom: 50px;
    height: 100%;
    min-height: 1080px;
    overflow: hidden;
    min-width: 1240px;
    background-color: black;
`;

S.Footer = styled.footer`
  padding: 1rem;
  background-color: #111;
  text-align: center;
  color: white;
`;
S.title=styled.div`
display: flex;
gap: 10px;
.back{
  color: red !important;
}

`
export default S;
