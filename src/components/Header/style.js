import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0;
    padding: 5px 25px 5px 25px;
    display: flex;
    justify-content: space-between;
    background-color: #D9D68B;

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
        color: black;
        font-size: 1.5em
    }
    a:hover {
        color: gray;
    }
`;

export default StyledHeader