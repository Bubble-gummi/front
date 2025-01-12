import styled from 'styled-components';

const S = {};

S.RightSection = styled.div`
  width: 735px;
  height: 100%;
  background-color: gray;
  margin-top: 120px;
  .post-count{
    font-size: 30px;
    margin-left: 10px;
  }

  & .infoTitle {
    font-size: 30px;
    text-align: center;
    margin: 120px 0 10px 0;
  }

  h1 {
    font-size: 30px;
    text-align: center;
  }

  .post-list {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; 
    border-bottom: solid gray;
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

S.title = styled.div`
  display: flex;
  gap: 10px;

  .back {
    color: red !important;
  }
`;


export default S;
