import React from "react";

const Digest = (props) => {
  return (
    <div>
      <p>
     <strong>{props.index + 1}. {props.label} = </strong>  {(props.total).toFixed(2)}
      {props.unit}</p>
    </div>
  );
};

export default Digest;