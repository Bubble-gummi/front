import styled from "styled-components";

const S = {};

S.Container = styled.div`
  padding: 2rem;
  background-color: black;
  color: #f8f9fa; /* 텍스트 색상 변경 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #f8f9fa;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #adb5bd;
  }
`;

S.Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

S.Card = styled.div`
  width: 200px;
  background-color: #212529;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  .image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: #343a40; /* 이미지 없는 경우 대비 */

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

  .movie-title {
    font-size: 1rem;
    font-weight: bold;
    color: #f8f9fa;
    padding: 0.5rem 0;
    background-color: #495057;
  }
`;

export default S;
