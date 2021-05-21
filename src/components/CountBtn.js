import React from "react";

const CountBtn = () => {
  return (
    <React.Fragment>
      <button disabled onClick={(e) => e.preventDefault()}>
        Count
      </button>
    </React.Fragment>
  );
};

export default CountBtn;
