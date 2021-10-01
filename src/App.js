import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <form>
          <label></label>
          <Input />
        </form>
        <Button name={ '+' } />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;