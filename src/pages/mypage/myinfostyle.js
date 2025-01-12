import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

S.LeftSection = styled.div`
  width: 250px;
  height: 100%;
  margin-top: 120px;
  border: solid gray;
`;

S.Title = styled.ul`
  & li:first-child {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

S.Ul = styled.ul`
  margin: 40px 0;

  & li {
    margin-bottom: 20px;

    &:hover {
      color: #ff2f6e; 
      cursor: pointer; 
    }
  }

  & li:nth-child(1) {
    font-size: 16px;
    font-weight: 500;
  }

  & li:last-child() {
    font-size: 16px;
    font-weight: 500;
  }

  & hr {
    width: 230px;
    border: none;
    text-align: center;
    margin-top: 25px;
  }
`;

export default S;
