import styled from "styled-components";

const S = {};
S.Main = styled.div`
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #black;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

S.Form = styled.form`
    width: 100%;
    max-width: 600px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    label{
     color: black;
    }
`;

S.Input = styled.div`
    width: 100%;
    margin: 10px 0; /* 마진 추가 */
    
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        color: black; /* 글씨 색깔 검정색 */
    }
`;

S.Select = styled.div`
    width: 100%;
    margin: 10px 0; /* 마진 추가 */
    
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        color: black; /* 글씨 색깔 검정색 */
    },
    option {
         color: black;
    }
    
`;

S.Textarea = styled.div`
    width: 100%;
    margin: 10px 0; /* 마진 추가 */
    color: black;
    
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        height: 100px; /* 높이 설정 */
        color: black; /* 글씨 색깔 검정색 */
    }
`;

S.Button = styled.button`
    background-color: #007bff;
    color: white; /* 버튼 글씨 색깔을 흰색으로 유지 */
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3; /* 호버 색상 */
    }
`;

S.Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
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
    a {
      margin-left: 20px;
      color: #007bff;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;
S.PostItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
S.PostTitle = styled.h2`
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
S.PostContent = styled.p`
    color: #666;
`;

S.CreatePostButton = styled.div`
    display: block;
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
`;

export default S;