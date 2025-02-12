import React, { useState } from "react";

const TextToggle = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Text Visibility Toggle</h2>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded-md"
      />

      {isVisible && text && (
        <p className="mt-2 text-gray-700 text-center">{text}</p>
      )}

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
      >
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default TextToggle;
