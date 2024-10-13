import React from "react";

export const Tchnq1_Memo = React.memo((props) => {
  console.log(`Component rendered for ${props.count}`);

  return (
    <div>
      <button onClick={props.inc}>Increment</button>
      <button onClick={props.dec}>Decrement</button>
    </div>
  );
});
