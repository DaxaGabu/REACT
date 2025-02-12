import React from "react";
import Calculator from "./lecture1501/Calculator";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Calculator num1={10} num2={5} />

    </div>
  );
};

export default App;
