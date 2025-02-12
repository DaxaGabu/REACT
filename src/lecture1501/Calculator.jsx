import React from "react";
const Calculator = ({ num1, num2 }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Calculator</h2>
      <p className="text-gray-700"><strong>Addition:</strong> {num1 + num2}</p>
      <p className="text-gray-700"><strong>Subtraction:</strong> {num1 - num2}</p>
      <p className="text-gray-700"><strong>Multiplication:</strong> {num1 * num2}</p>
      <p className="text-gray-700"><strong>Division:</strong> {num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero"}</p>
    </div>
  );
};

export default Calculator;
