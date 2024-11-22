// src/App.js
import React, { useState } from "react";
import TextInput from "./components/TextInput";
import MultiSelectDropdown from "./components/MultiSelectDropdown";
import DisplayResponse from "./components/DisplayResponse";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState(null);
  const [filters, setFilters] = useState([]);

  const handleResponse = (data) => {
    setResponse(data);
  };

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <div className="App">
      <h1>JSON Data Processor</h1>
      <TextInput onResponse={handleResponse} />
      {response && (
        <div>
          <MultiSelectDropdown
            options={["Alphabets", "Numbers", "Highest alphabet"]}
            onSelectionChange={handleFilterChange}
          />
          <DisplayResponse response={response} filters={filters} />
        </div>
      )}
    </div>
  );
};

export default App;
