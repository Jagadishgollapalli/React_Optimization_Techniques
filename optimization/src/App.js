import React, { useState, useCallback, Suspense } from "react";
import "./App.css";
import { Tchnq1_Memo } from "./Tchnq1_Memo";
import { Tchnq2_Suspense } from "./Tchnq2_Suspense";
import Tchnq3_Virtualized from "./Tchnq3_Virtualized";

const LazyComponent = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Tchnq2_Suspense"));
    }, 2000);
  });
});

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, World!"); // Unrelated state

  const updateCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const changeMessage = () => {
    console.log("React.memo in action!");
    setMessage("React.memo in action!");
  };

  return (
    <div className="App">
     <div>
        {/* <p>Counter value: {count}</p> */}
        {/* <Tchnq1_Memo inc={updateCount} dec={resetCount} count={count} /> */}
        {/* Unrelated component */}
        {/* <p>{message}</p> */}
        {/* <button onClick={changeMessage}>Change Message</button> */}
      </div>
      
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* <LazyComponent /> */}
        {/* </Suspense> */}
      </div>

      <div>
      <Tchnq3_Virtualized/>
      </div>
    </div>
  );
}

export default App;
