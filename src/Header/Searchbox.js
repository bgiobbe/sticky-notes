import React from "react";

const Searchbox = (props) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Type here to search..."
      value={props.searchText}
      onChange={props.onSearch}
    />
  );
};

export default Searchbox;
