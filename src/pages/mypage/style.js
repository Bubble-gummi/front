import styled from 'styled-components'

const S = {};

  S.RightSection = styled.div`
    width: 735px;
    height: 100%;
    background-color: gray;

    & .infoTitle {
      font-size: 30px;
      text-align: center;
      margin: 120px 0 10px 0;
    }
  `
  S.changepassword=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;

  
  `
  
  S.Form = styled.form`
    display: flex;
    flex-direction: column;

    & label {
      display: grid;
      grid-template-columns: 400px 400px;
      align-items: center;
      border-top: 0.5px solid #444444;
      padding: 15px 0;

      & span{
        font-size: 17px;
        font-weight: 400;
      }
    }

    & li:nth-child(2) {
      justify-content: flex-start;
    }

    & svg.pen {
      cursor: pointer;
    }
  `

  S.Input = styled.input`
    width: 503px;
    height: 69px;
    margin-left: auto;
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    font-size: 17px;
    text-align: right;
    padding: 15px;
    text-align: center;
    margin-top: 100px;

    &::placeholder{
      color: #fff;
      font-size: 17px;
      text-align: right;

    }

    
  `

  S.Button = styled.button`
      width: 150px;
      height: 55px;
      border-radius: 50px;
      border: none;
      padding: 10px;
      text-align: center;
      line-height: 2.2;
      background-color: white;
      font-size: 17px;
      color: #000;
      cursor: pointer;

      &:hover{
        background-color: #ff2f6e !important;
        color: #000;
      }
  `
  S.ButtonBox = styled.div`
    margin-top: 50px;
    position: relative;
  `

  S.ChangeButton = styled.button`
    border: none;
    width: 150px;
    height: 55px;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    line-height: 2.2;
    background-color: white;
    font-size: 17px;
    color: #000;
    cursor: pointer;

    position: absolute;
    right: 0;

    &:hover{
        background-color: #ff2f6e;
        color: #000;
      }
  `




export default S;