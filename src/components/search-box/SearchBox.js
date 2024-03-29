import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br2"
        type="search"
        placeholder="search koto"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
