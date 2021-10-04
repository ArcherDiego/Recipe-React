import GlobalStyle from "./theme/GlobalStyle"
import FormRecipe from "./components/Main/FormRecipe";
import Nav from "./components/Header/Nav";
import Logo from "./components/Header/Logo";
import { IconLinkedin, IconGitHub } from "./components/Footer";
import Card from "./components/Main/Card";
import styled from "styled-components";

const Footer = styled.footer`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #D9D68B;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <header>
        <Logo />
        <Nav />
      </header>
      <main>
        <FormRecipe />
        <Card />
      </main>
      <Footer>
        <IconLinkedin width={ 20 } height={ 20 } />
        <IconGitHub width={ 20 } height={ 20 } />
      </Footer>
    </div>
  );
}

export default App;