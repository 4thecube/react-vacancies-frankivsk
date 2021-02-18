import React from "react";

import {SearchBoxStyles} from './Searchbox.styles';

const Searchbox = ({handleChange}) => {
  return (
    <div>
      <SearchBoxStyles
        className="search"
        type="search"
        placeholder='Search by title or company name'
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbox;
