import React from "react";
import Header from "./Header";

const SearchItems = ({ keyword, searchResults }) => {
  const title = keyword;
  return (
    <>
      <Header text={title} />
    </>
  );
};

export default SearchItems;
