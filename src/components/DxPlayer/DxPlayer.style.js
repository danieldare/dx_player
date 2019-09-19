import styled, { createGlobalStyle } from "styled-components";

export const StyledDxPlayer = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    max-height: 544px;
    transition: all 1.62s ease;
`;

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
