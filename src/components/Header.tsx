import React from "react";

import { StyledHeader } from "../styles/styledHeader";

import headerIcon from "../../public/images/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <Link to="/">
          <img src={headerIcon} alt="icon" />
        </Link>
        <nav>
          <ul>
            <li>
              <a href="foo" className="active-link">
                Home
              </a>
            </li>
            <li>
              <a href="foo">Exercises</a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}
