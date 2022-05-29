import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 25em;
    height: 25;
`
const progress = keyframes`
    100% {
        stroke-dashoffset: 0;
    }
`
export const SvgCircle = styled.svg`
    height: 25.5em;
    width: 26em;
    transform: rotate(270deg);
    stroke-width: 1.5em;
    fill: none;
    stroke: rgba(0, 0, 0, 0.5);
    stroke-dasharray: 71em;
    stroke-dashoffset: 71em;
    animation: ${progress} 10s linear forwards;
`