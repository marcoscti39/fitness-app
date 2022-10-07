import React from "react";
import footerImg from "../../public/images/Logo-1.png";

import { StyledFooter } from "../styles/styledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <img className="footer-img" src={footerImg} alt="" />
      <p>Made with love By Me</p>
    </StyledFooter>
  );
}
