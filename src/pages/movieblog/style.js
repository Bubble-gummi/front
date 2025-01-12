import styled from "styled-components";

const S = {};

S.Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

S.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  div {
    button {
      margin-left: 20px;
      color: blue;
      text-decoration: none;
      font-size: 16px;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;

S.PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 30px;
`;

S.PostItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.MovieThumbnail = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

S.PostSubject = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`;

S.PostTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
`;

S.PostContent = styled.p`
  color: #666;
  line-height: 1.5;
`;

S.CreatePostButton = styled.button`
  display: block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

S.PostDetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

S.PostDetailSubject = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

S.PostDetailTitle = styled.h2`
  font-size: 2rem;
  color: #555;
  margin-bottom: 15px;
`;

S.PostDetailContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

export default S;
