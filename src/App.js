import "./App.css";
import Increment from "./componenet/Increment";
import Temperature from "./componenet/Temperature";

function App() {
  return (
    <div className="container">
      <Increment />
      <hr />

      <hr />
      <Temperature />
    </div>
  );
}

export default App;
