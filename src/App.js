import FormRecipe from "./components/Main/FormRecipe";
import Nav from "./components/Header/Nav";
import Logo from "./components/Header/Logo";
import { IconLinkedin, IconGitHub } from "./components/Footer";
import Card from "./components/Main/Card";

const App = () => {
  return (
    <div className="App">
      <header>
        <Logo />
        <Nav />
      </header>
      <main>
        <FormRecipe />
        <Card />
      </main>
      <footer>
        <IconLinkedin />
        <IconGitHub />
      </footer>
    </div>
  );
}

export default App;