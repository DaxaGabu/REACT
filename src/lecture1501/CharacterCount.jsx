import React, { useState } from "react";

const CharacterCount = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Character Counter</h2>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded-md"
      />

      <p className="mt-2 text-gray-700 text-center font-bold">
        Total Characters: {text.length}
      </p>
    </div>
  );
};

export default CharacterCount;
