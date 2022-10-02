import React from "react";

import { StyledPaginationContainer } from "../styles/styledPagination";
import {
  MdKeyboardArrowRight as RightArrow,
  MdKeyboardArrowLeft as LeftArrow,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const pagdata = ["1", "2", "3", "4", "5", "6"];

export default function Pagination() {
  const navigate = useNavigate();

  const test = (number: string) => {
    if (number === "0") {
      navigate("/");
      return;
    }
    navigate(`/pag/${number}`);
  };
  return (
    <StyledPaginationContainer>
      <button className="pagination-left-btn">
        <LeftArrow />
      </button>
      <div className="pagination">
        {pagdata.map((number, index) => (
          <NavLink
            to={`/pag/${number}`}
            className={({ isActive }) =>
              isActive ? "pagination-item active-link" : "pagination-item"
            }
            key={index}
          >
            {number}
          </NavLink>
        ))}
      </div>
      <button className="pagination-right-btn">
        <RightArrow />
      </button>
    </StyledPaginationContainer>
  );
}
