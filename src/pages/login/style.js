import styled from "styled-components";

const S = {};

S.close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;

  button {
    color: #000;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  &:hover {
    color: #007bff;
  }
`;

S.email = styled.div`
  margin-bottom: 15px;
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
  }
`;

S.password = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
  }
`;

S.login = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    width: 100%;
    padding: 10px;
    color: #000;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ccc;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;

S.ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.ModalContainer = styled.div`
  position: relative;
  background: gray;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 200px;
`;

// 추가된 스타일들
S.input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

S.errorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

S.successText = styled.div`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;

export default S;
