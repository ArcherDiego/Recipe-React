import styled from "styled-components";

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
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
        width: 50%;
        height: 60%;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            margin: 5px;
            font-family: ${({ theme }) => theme.fontFamily};
        }

        h1 {
            margin: 10px;
            font-size: ${({ theme }) => theme.fontSize.xl};
            font-family: ${({ theme }) => theme.fontFamily};
        }

        a {
            margin-top: 50px;
            font-size: ${({ theme }) => theme.fontSize.md};
            font-family: ${({ theme }) => theme.fontFamily};
            color: ${({ theme }) => theme.colors.primary.secondary.color};
        }

        a:hover {
            color: ${({ theme }) => theme.colors.primary.secondary.altColor};
        }

        input {
            margin-top: 50px;
            width: 300px;
            font-size: ${({ theme }) => theme.fontSize.md};
            font-family: ${({ theme }) => theme.fontFamily};
        }
    }
`;