import React from "react";

import { LoaderRingStyles, LoaderContainerStyles } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderContainerStyles>
      <LoaderRingStyles>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderRingStyles>
    </LoaderContainerStyles>
  );
};

export default Loader;
