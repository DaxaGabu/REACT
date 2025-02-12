import React, { useState } from "react";

const EmailValidator = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Email Validator</h2>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        className="border p-2 w-full rounded-md"
      />
      {isValid !== null && (
        <p className={`mt-2 text-center font-bold ${isValid ? "text-green-500" : "text-red-500"}`}>
          {isValid ? "✅ Valid Email" : "❌ Invalid Email"}
        </p>
      )}
    </div>
  );
};

export default EmailValidator;
