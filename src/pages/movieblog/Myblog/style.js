import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.Main = styled.div`
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
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
    label {
        color: black;
    }
`;

S.Input = styled.div`
    width: 100%;
    margin: 10px 0;
    
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        color: black;
    }
`;

S.Select = styled.div`
    width: 100%;
    margin: 10px 0;
    
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        color: black;
    }
    option {
        color: black;
    }
`;

S.Textarea = styled.div`
    width: 100%;
    margin: 10px 0;
    color: black;
    
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        height: 100px;
        color: black;
    }
`;

S.Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

S.Container = styled.div`
    width: 1240px;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: auto;
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
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`;
S.ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px; /* 버튼 간의 간격을 조정 */
  position: relative;
  bottom: 10px; /* 버튼을 아래쪽으로 밀어서 겹치지 않게 */
`;


const PostCommon = styled.div`
    display: flex;
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

    p {
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

    .bottom {
        color: #888888;
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: right;
        padding: 10px;
    }
`;

S.PostItem = styled(PostCommon)`
    /* PostItem-specific styles can go here if needed */
`;

S.PostLink = styled(PostCommon)`
    &:hover {
        color: #0056b3;
    }
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

S.PostMovieTitle = styled.p`
    font-size: 14px;
    color: #888;
    margin-top: 10px;
`;

S.CreatePostButton = styled.div`
    text-align: center;
    min-width: 200px;
    max-width: 200px;
    display: block;
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

S.TextLink = styled.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default S;
