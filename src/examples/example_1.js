import Split from "react-split";

function Example_1() {
  return (
    <>
      <Split
        className="split"
        direction="vertical"
        sizes={[50, 50]}
        minSize={100}
        // expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        // snapOffset={30}
        // dragInterval={1}
        // cursor="col-resize"
      >
        <Split className="split-flex">
          <div></div>
          <div></div>
          <div></div>
        </Split>
        <div></div>
      </Split>
    </>
  );
}

export default Example_1;
