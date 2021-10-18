import React from "react";
import { Link } from "react-router-dom";

function Root() {
  return (
    <ul>
      <li>
        <Link to="/homepage">Homepage</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  );
}

export default Root;
