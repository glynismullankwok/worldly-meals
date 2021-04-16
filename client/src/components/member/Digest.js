import React from "react";

const Digest = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.index + 1}. {props.label} = {(props.total).toFixed(2)}
      </p>
    </div>
  );
};

export default Digest;