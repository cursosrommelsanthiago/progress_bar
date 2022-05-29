import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    h1{
        text-align: center;
        color: #40acf3;
        font-weight: 800;
        padding: 0 0.5em 1em;
    }
`

export const OutsideProgressBar = styled.div`
    position: relative;
`

export const InsideProgressBar = styled.div`
    position: absolute;
    top: 2px;
    right: 2px;
`