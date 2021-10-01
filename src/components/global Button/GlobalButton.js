import React from "react";

const GlobalButton = (props) => {
  return (
    <>
      <a href="#ab" className={`global-btn`}>
        {props.txt}
      </a>
    </>
  );
};

export default GlobalButton;
