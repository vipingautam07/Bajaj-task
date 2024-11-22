// src/components/TextInput.js
import React, { useState } from "react";
import axios from "axios";

const TextInput = ({ onResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = JSON.parse(jsonInput);
      const response = await axios.post("http://localhost:3000/bfhl", data);
      onResponse(response.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON format or API error.");
    }
  };

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Enter JSON data here"
        rows="10"
        cols="50"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextInput;
