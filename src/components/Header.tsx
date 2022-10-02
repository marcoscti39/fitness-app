import React from "react";

import { StyledHeader } from "../styles/styledHeader";

import headerIcon from "../../public/images/Logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <img src={headerIcon} alt="icon" />
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
