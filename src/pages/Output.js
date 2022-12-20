import React from "react";

function Output({ imgUrl }) {
  return (
    <>
      <img src={"https://api.opendota.com" + imgUrl}></img>
    </>
  );
}

export default Output;
