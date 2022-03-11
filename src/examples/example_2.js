import Split from "react-split";

function Example_2() {
  return (
    <>
      <Split
        className="split"
        direction="vertical"
        sizes={[30, 70]}
        minSize={100}
        gutterSize={10}
        gutterAlign="center"
      >
        <Split
          className="split-flex"
          sizes={[20, 35, 45]}
          minSize={[10, 40, 90]}
        >
          <div></div>
          <div></div>
          <div></div>
        </Split>
        <div></div>
      </Split>
    </>
  );
}

export default Example_2;
