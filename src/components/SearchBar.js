import React from "react";

const SearchBar = () => {
  return (
    <div>
      {/* LARGE & LARGER DEVICES */}
      <div className="d-none d-lg-block">
        <form className="d-flex">
          <input
            className="form-control input-group"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success input-group-append"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {/* END LARGE DEVICES */}

      {/* MEDIUM & SMALLER DEVICES */}
      <div className="d-lg-none d-xl-none d-xxl-none d-xs-block d-sm-block d-md-block">
        <form className="d-flex">
          <input
            className="form-control input-group"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success input-group-append"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {/* END SMALL DEVICES */}
    </div>
  );
};

export default SearchBar;
