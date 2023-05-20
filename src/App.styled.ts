import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 720px) {
        min-height: calc(480px + 40vh);
    }
`;

export const ContainerMap = styled.div`
    position: absolute;
    
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    width: 480px;
    height: 480px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #000;

    @media (max-width: 720px) {
        top: 0; left: 0;
        transform: translate(0, 0);
        border-radius: 0px;
    }
`

export const Map = styled.div`
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: calc(100% - 2px);

    width: 100%;
    height: 100%;
`;

export const ContainerControls = styled.div`
    display: none;
    justify-content: center;

    position: fixed;
    bottom: 0; left: 50%;
    transform: translate(-50%, 0);

    background: #1A1A1A;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 -4px 30px #000;
    padding: 10px 0;
    width: 100%;

    @media (max-width: 980px) { 
        display: flex; 
    }
`;

export const Controls = styled.div`
    position: relative;

    button {
        position: relative;
        z-index: 1;
        background: #333;
        border: none;
        box-shadow: 0px 0px 10px #000;
        color: #fff;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export const ControllersX = styled.div`
    width: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: absolute;
    z-index: 1;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    background: #272727;
    border: 8px solid #272727;
    border-radius: 10px;

    .x1 { border-radius: 10% 50% 50% 10%; color: #EB3E8F; }
    .x2 { border-radius: 50% 10% 10% 50%; color: #EB3E56; }
`;

export const ControllersY = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #272727;
    border: 8px solid #272727;
    border-radius: 10px;

    .y1 { border-radius: 10% 10% 50% 50%; color: #3EEB65; }
    .y2 { border-radius: 50% 50% 10% 10%; color: #3EB4EB; }
`;
