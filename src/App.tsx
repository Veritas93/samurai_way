import "./App.css";
import { Header } from "./section/Header";
import { Main } from "./section/Main";
import { NavMenu } from "./section/NavMenu";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavMenu />
      <Main />
    </div>
  );
}

export default App;
