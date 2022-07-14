import "./styles.css";
import Tables from "../src/Components/Tables.jsx";
import Cell from "../src/Components/Cell.jsx";
import Button from "../src/Components/Button.jsx";
import Card from "./Components/Card.jsx";
import ola from "./assets/ola.png";
import PieChartP from "./Components/PieChartP";
import LineChartP from "./Components/LineChartP";

export default function App() {
  return (
    <div className="App">
      <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
      <div className="mt-2 ml-2 mr-2 mb-2">
        <Button name="button" />
      </div>
      <Tables />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <Cell bool="true" />
          </div>
          <div className="col">
            <Cell />
          </div>
        </div>
        <div>
          <br />
          <PieChartP />
          <LineChartP />
        </div>
      </div>
    </div>
  );
}
