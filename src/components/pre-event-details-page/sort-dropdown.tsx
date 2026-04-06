import React from "react";

const SortDropdown = () => {
  return (
    <select className="theme-combo" name="state">
      <option value="AL">Rating: Highest</option>
      <option value="WY">Rating: Lowest</option>
      <option value="WY">Rating: Dates</option>
    </select>
  );
};

export default SortDropdown;