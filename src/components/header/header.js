import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/p1"> Page 1 </a>
          </li>
          <li>
            <a href="/p2"> Page 2 </a>
          </li>
          <li>
            <a href="/p2"> Page 3 </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
