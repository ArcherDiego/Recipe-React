import styled from "styled-components";

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerStyle = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        background-color: white;
        color: black;
        width: 60%;
        height: 60%;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            margin: 5px;
            right: 15px;
        }
    }
`;