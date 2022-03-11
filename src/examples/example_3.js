import { useState } from "react";
import Split from "react-split";
import { BiMinus } from "react-icons/bi";

const Options = ({ children }) => {
  return (
    <div
      style={{ background: "#bbb", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 2,
          left: 2,
          display: "flex",
          flexDirection: "column",
          marginLeft: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const CollapseButton = ({ onClick }) => {
  console.log(onClick);
  return (
    <button onClick={onClick} type="button">
      <BiMinus aria-hidden="true" />
    </button>
  );
};

function Example_3() {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <>
      <Split
        className="split"
        direction="vertical"
        // sizes={[50, 50]}
        // minSize={100}
        // gutterSize={10}
        // gutterAlign="center"
      >
        <Split className="split-flex" collapsed={collapsedIndex}>
          <Options>
            <CollapseButton onClick={() => setCollapsedIndex(0)} />
          </Options>
          <Options>
            <CollapseButton onClick={() => setCollapsedIndex(1)} />
          </Options>
          <Options>
            <CollapseButton onClick={() => setCollapsedIndex(2)} />
          </Options>
        </Split>
        <div></div>
      </Split>
    </>
  );
}

export default Example_3;
