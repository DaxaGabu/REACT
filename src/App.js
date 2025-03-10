import React from "react";
//import Calculator from "./lecture1501/Calculator";
import MultipleState from "./lec1002/reducerexmp2";
 


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Calculator num1={10} num2={5} />

    </div>
  );
};


 createRoot(document.getElementById("root")).render(
   <div>
     <UseContextExample />
     <MultipleState />
   </div>
 );

 
export default App;