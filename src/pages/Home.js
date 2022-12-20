import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/input">input</Link>
      <Link to="/output">output</Link>
    </div>
  );
}

export default Home;
