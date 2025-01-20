import styled from "styled-components";

export const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    background-color: #333;

    .progressbar-container {
        width: 80%;
        background-color: #555;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 20px;
    }
`;

export const ProgressBar = styled.div`
    // tager så prop og sætter det som width
    width: ${(props) => props.$progress}%;
    height: 20px;
    background-color: #6a6a6a;
    border-radius: 10px;
`;
