import styled from "styled-components";

const StyleFooter = styled.footer`
  margin: 0;
  bottom: 0;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.main.color};

  a {
    margin: 5px;
  }
`;

export default StyleFooter