import styled from "styled-components";

const StyledCard = styled.div`
    margin: 3% 10%;
    display: flex;
    align-items: flex-start;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.background};

    img {
        border-radius: 15px;
        margin: 5px;
        padding: 5px;
    }

    h1 {
        margin: 0;
        padding: 5px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-family: ${({ theme }) => theme.fontFamily};
    }

    p {
        margin: 0;
        padding: 5px;
        font-size: ${({ theme }) => theme.fontSize.md};
        font-family: ${({ theme }) => theme.fontFamily};
    }
`;

export default StyledCard