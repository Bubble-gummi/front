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

  .post-item {
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
      color: #fff; 
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
S.reviewitem =styled.div`
border-bottom: 1px solid gray;
margin-top: 10px;
border-bottom: 2px solid black;
&:hover {
    cursor: pointer; /* 클릭 가능한 커서 표시 */
  }

`




export default S;
