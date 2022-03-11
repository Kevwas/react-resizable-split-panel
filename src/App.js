/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { Example_1, Example_2, Example_3 } from "./examples";
import "./App.css";

function App() {
  const [example, setExample] = useState("1");

  const ExamplesOptions = () => {
    return (
      <div>
        <p>Resizable Split Panels:</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="radio"
            id="example_1"
            name="example"
            value="1"
            onClick={() => setExample("1")}
            checked={example === "1"}
          />
          <label for="example_1">Example 1</label>
          <br />
          <input
            type="radio"
            id="example_2"
            name="example"
            value="2"
            onClick={() => setExample("2")}
            checked={example === "2"}
          />{" "}
          <label for="example_2">Example 2</label>
          <br />{" "}
          <input
            type="radio"
            id="example_3"
            name="example"
            value="3"
            onClick={() => setExample("3")}
            checked={example === "3"}
          />
            <label for="example_3">Example 3</label>
        </div>
      </div>
    );
  };

  const renderExample = () => {
    if (example === "1") return <Example_1 />;
    if (example === "2") return <Example_2 />;
    if (example === "3") return <Example_3 />;
  };

  return (
    <>
      <ExamplesOptions />
      <br />
      {renderExample()}
    </>
  );
}

export default App;
