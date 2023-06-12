import "./App.css";
import { Card } from "./components/Card";
import { CartData } from "./data/Data";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card cartdata={CartData} />
      </div>
    </div>
  );
}

export default App;
