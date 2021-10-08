import styled from "styled-components";

const StyleInput = styled.div`
    margin: 3% 0;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 50%;
        border-radius: 5px;
        height: 30px;
    }
    label {
        font-size: ${({ theme }) => theme.fontSize.lg};
    }
`;

export default StyleInput