import React from "react";

const Tab = (props) => {
  return (
    <div>
      <p style={{ marginBottom: "60px" }}>{props.txt}</p>
      <h3>{props.h3}</h3>
      <h5>{props.h5}</h5>
    </div>
  );
};

export default Tab;
