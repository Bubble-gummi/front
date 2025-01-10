import styled from "styled-components";

const S = {};

S.Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 200px 200px;

    button {
        &.back-button {
            background-color: red;
            color: white;
            margin-left: 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
        }

        &.login-button {
            background-color: #2980b9;
            color: white;
            margin-left: 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
        }
    }
`
S.header = styled.div`
    font-Size : 3rem;
    margin-Bottom: 20px;
`



export default S;