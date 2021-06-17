import "./App.scss";
import { useLayout } from "./hooks/useLayout";

const App = () => {
  let col = useLayout();

  return (
    <div className="App" style={ { display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)` } }>
      <div className="App__block">1</div>
      <div className="App__block">2</div>
      <div className="App__block">3</div>
      <div className="App__block">4</div>
      <div className="App__block">5</div>
      <div className="App__block">6</div>
      <div className="App__block">7</div>
      <div className="App__block">8</div>
      <div className="App__block">9</div>
    </div>
  );
}

export default App;
