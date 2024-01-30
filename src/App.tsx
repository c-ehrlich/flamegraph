import "./App.css";
import { FlameGraph } from "./FlameGraph";
import { sampleData } from "./data";

function App() {
  return (
    <div>
      <FlameGraph data={sampleData} />
    </div>
  );
}

export default App;
