import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  SearchBoxStyles,
  SearchBoxContainerStyles,
  SearchIconStyles,
} from "./Searchbox.styles";
import SearchGlass from "../assets/search-glass.svg";

const Searchbox = ({ handleChange }) => {
  return (
    <SearchBoxContainerStyles>
      <SearchIconStyles>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </SearchIconStyles>
      <SearchBoxStyles
        className="search"
        type="search"
        placeholder="Search by title or company name"
        onChange={handleChange}
      />
    </SearchBoxContainerStyles>
  );
};

export default Searchbox;
