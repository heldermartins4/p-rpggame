import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: #141237;
    color: #fff;
`;

export const Map = styled.div`
    max-width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
`;

export const Controls = styled.div`
    width: 300px;
    padding: 30px;
    transition: all ease 0.3s;
    button:hover { background: #fff;
                   transition: all ease 0.3s;
    }
`;

export const ControllersX = styled.div`
    .C--X {
        width: 50px;
        height: 50px;
        position: absolute;
        display: inline-block;
        padding: 10px;
        background-color: transparent;
        color: tomato;
        border: 2px solid tomato;
        margin-top: 40px; 
        font-size: 20px;
        cursor: pointer;
    }.C--X:not(:first-child) { margin-left: 80px;}
    .x1 { border-radius: 15px 50px 50px 15px; }
    .x2 { border-radius: 50px 15px 15px 50px ; }

`;

export const ControllersY = styled.div`
    .C--Y {
        width: 50px;
        height: 50px;
        position: absolute;
        padding: 10px;
        background-color: transparent;
        color: tomato;
        border: 2px solid tomato;
        display: block;
        margin-left: 40px; 
        font-size: 20px;
        cursor: pointer;
    }.C--Y:not(:first-child) { margin-top: 80px;}
    .y1 { border-radius: 15px 15px 50px 50px; }
    .y2 { border-radius: 50px 50px 15px 15px ; }
`;
