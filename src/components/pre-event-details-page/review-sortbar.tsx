import React from "react";
import SortDropdown from "./sort-dropdown";

const ReviewSortBar = () => {
  return (
    <div className="card-shadow-body d-md-flex justify-content-between align-items-center py-3">
      
      <strong>19 Reviews for Poetric Pics Photography</strong>

      <div className="d-flex align-items-center col-md-5 col-12 p-0 mt-3 mt-md-0">
        <small className="text-nowrap mr-3">Sort by</small>
        <SortDropdown />
      </div>

    </div>
  );
};

export default ReviewSortBar;