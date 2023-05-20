import styled from "styled-components";

export const Container = styled.div<{ size: number, left: number, top: number, sidePos: number, appear: boolean}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;

    @media (max-width: 980px) {
        display: ${props => props.appear ? 'inherit' : 'none'};
    }
`;
