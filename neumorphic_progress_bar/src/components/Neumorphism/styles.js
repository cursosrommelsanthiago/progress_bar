import styled, { keyframes } from "styled-components"

const gamut = keyframes`
    0% { background-color: #16e2f7; };
    50% { background-color: #40acf3; };
    100% { background-color: #16e2f7; };
`

export const Circle1 = styled.div`
    height: 20em;
    width: 20em;
    border-radius: 50%;
    padding: 2.5em;
    background-color: #40acf3;
    box-shadow: -3px -3px 10px #ffffff73, 
        2px 5px 5px #5e6879;
`
export const Circle2 = styled.div`
    width: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 100%;
    background-color: dimgray;
    animation: ${gamut} 2500ms infinite ease-in-out;
    box-shadow: -3px -3px 10px #ffffff73, 
        inset 1px 3px 5px #5e6879;
`

export const Paragraph = styled.p`
    color: rgba(0,0,0,0.5);
    font-size: 2em;
    font-weight: 800;
`