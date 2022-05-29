import styled, { keyframes } from "styled-components"

const gamut = keyframes`
    0% { background-color: #16e2f7; };
    50% { background-color: #40acf3; };
    100% { background-color: #16e2f7; };
`

const rotate = keyframes`
    0% { transform: rotate(360deg); };
    50% { transform: rotate(180deg); }
    100% { transform: rotate(0deg); };
` 

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      color: #40acf3;
      font-weight: 800;
      padding: 0 0.5em 1em;
    };
` 
export const ProgressbarContainer = styled.div`
    position: relative;
    width: 80%;
    height: 50px;
    border: 1px solid #40acf3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const ProgressBarComplete = styled.div`
    position: absolute;
    left: 0;
    top: 0px;
    height: 100%;
    background-color: #5225bd;
    border-radius: 10px;
    animation: ${gamut} 2500ms infinite ease-in-out;
    z-index: 2;
`
export const ProgressBarLiquid = styled.div`
    z-index: 1;
    width: 70px;
    height: 70px;
    animation: ${gamut} 2500ms infinite ease-in-out, 
    ${rotate} 3500ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
    position: absolute;
    right: -5px;
    top: -10px;
    background-color: #5225bd;
    border-radius: 40%;
` 
export const Progress = styled.span`
    z-index: 2;
    background: none;
    font-size: 2em;
    font-weight: 400;
    color: ${props => props.color};
    text-shadow: -1px -1px 0px #40acf3, 
                -1px 1px 0px #40acf3,      
                1px -1px 0px #40acf3,    
                1px 0px 0px #40acf3;
`

