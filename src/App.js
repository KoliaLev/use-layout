import "./App.css";
import { useLayout } from "./hooks/useLayout";

function App() {
  let col = useLayout();

  return (
    <div className="App" style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)` }}>
      <div className="block">1</div>
      <div className="block">2</div>
      <div className="block">3</div>
      <div className="block">4</div>
      <div className="block">5</div>
      <div className="block">6</div>
      <div className="block">7</div>
      <div className="block">8</div>
      <div className="block">9</div>
    </div>
  );
}

export default App;
