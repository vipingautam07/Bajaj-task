// src/components/MultiSelectDropdown.js
import React from "react";

const MultiSelectDropdown = ({ options, onSelectionChange }) => {
  const handleChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onSelectionChange(selectedOptions);
  };

  return (
    <select multiple onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectDropdown;
