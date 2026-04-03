import React from "react";
import SearchBar from "../searchbar";

type Props = {
  onSearch?: (category: string, location: string) => void;
};

const SearchResultHeader = ({ onSearch }: Props): JSX.Element => {
  return (
    <section className="search-result-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto mb-5 text-center">

            <h1>Find the Perfect Wedding Photographer</h1>

            <p className="lead">
              Search over 360,000 Photographers with reviews, pricing,
              availability and more
            </p>

            {/* ✅ CORRECT POSITION */}
            <div className="mt-4">
              <SearchBar onSearch={onSearch} />
            </div>

          </div>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li className="breadcrumb-item">Vendors</li>
            <li className="breadcrumb-item active">
              Wedding Photographers
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default SearchResultHeader;