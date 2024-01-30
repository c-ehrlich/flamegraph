import "./App.css";
import { FlameGraph } from "./FlameGraph";
import { sampleData } from "./data";

function App() {
  return (
    <div>
      {/* @ts-expect-error idk */}
      <FlameGraph data={sampleData} />
    </div>
  );
}

export default App;
