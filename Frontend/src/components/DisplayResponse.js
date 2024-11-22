// src/components/DisplayResponse.js
import React from "react";

const DisplayResponse = ({ response, filters }) => {
  const { numbers, alphabets, highest_alphabet } = response;

  const getFilteredData = () => {
    let data = {};
    if (filters.includes("Numbers")) data.numbers = numbers;
    if (filters.includes("Alphabets")) data.alphabets = alphabets;
    if (filters.includes("Highest alphabet"))
      data.highest_alphabet = highest_alphabet;
    return data;
  };

  const filteredData = getFilteredData();

  return (
    <div>
      <h3>Response:</h3>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default DisplayResponse;
