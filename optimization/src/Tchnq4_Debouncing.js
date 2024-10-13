import React from "react";

export default function () {
  let counter = 0;

  function getData() {
    console.log("Fetching data..." + counter++);
  }

  const debounceFunction = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);  //The clearTimeout(timer) call clears any previous setTimeout that was started
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };

  const betterFunction = debounceFunction(getData, 300);

  return (
    <div className="container mt-3">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onKeyUp={betterFunction}
      />
    </div>
  );
}
