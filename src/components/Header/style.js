import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0;
    padding: 5px 25px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.primary.main.color};

    img {
        width: 7%;
        height: 7%;
        padding: 5px;
    }
    ul{
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: space-around;
        padding: 0;
        margin: 0;
        width: 15%;
    }
    a {
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.lg};
    }
    a:hover {
        color: ${({ theme }) => theme.colors.primary.secondary.color};
    }
`;

export default StyledHeader