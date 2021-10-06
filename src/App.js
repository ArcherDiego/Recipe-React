import GlobalStyle from "./theme/GlobalStyle"
import Header from "./components/Header";
import Input from "./components/Input"
import Card from "./components/Card"
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Input />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}

export default App;