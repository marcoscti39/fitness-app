import React from "react";

import { StyledPaginationContainer } from "../styles/styledPagination";
import {
  MdKeyboardArrowRight as RightArrow,
  MdKeyboardArrowLeft as LeftArrow,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { exerciseType } from "./ResultsSection";

export default function Pagination({
  exercises,
}: {
  exercises: exerciseType[];
}) {
  const [movePagination, setMovePagination] = React.useState(0);
  const paginationRef = React.useRef<HTMLDivElement>(null);

  const amountOfPages = Math.ceil(exercises.length / 6);

  const paginationData = Array.from(
    { length: amountOfPages },
    (_, index) => index + 1
  );

  React.useEffect(() => {
    const getPaginationSlide = () => {
      if (paginationRef.current) {
        paginationRef.current.style.transform = `translateX(${
          movePagination * 100 * -1
        }%)`;
      }
    };

    getPaginationSlide();
  }, [movePagination]);

  const slidePaginationForward = () => {
    setMovePagination(movePagination + 1);
  };

  const slidePaginationBackward = () => {
    if (movePagination === 0) return;

    setMovePagination(movePagination - 1);
  };

  return (
    <StyledPaginationContainer>
      <div className="pagination-overflow">
        <button
          className="pagination-left-btn"
          onClick={slidePaginationBackward}
        >
          <LeftArrow />
        </button>
        <div ref={paginationRef} className="pagination">
          {paginationData?.map((number, index) => {
            if (index === 4) {
              return (
                <>
                  <NavLink
                    to={`/pag/${number}`}
                    className={({ isActive }) =>
                      isActive
                        ? "pagination-item active-link"
                        : "pagination-item"
                    }
                    key={index}
                  >
                    ...
                  </NavLink>
                  <NavLink
                    to={`/pag/${paginationData.length - 1}`}
                    className={({ isActive }) =>
                      isActive
                        ? "pagination-item active-link"
                        : "pagination-item"
                    }
                    key={"sfdf"}
                  >
                    {paginationData.length - 1}
                  </NavLink>

                  <NavLink
                    to={`/pag/${number}`}
                    className={({ isActive }) =>
                      isActive
                        ? "pagination-item active-link"
                        : "pagination-item"
                    }
                    key={"dfdf"}
                  >
                    {number}
                  </NavLink>
                </>
              );
            }
            return (
              <NavLink
                to={`/pag/${number}`}
                className={({ isActive }) =>
                  isActive ? "pagination-item active-link" : "pagination-item"
                }
                key={index}
                onClick={() => scroll({ top: 1, behavior: "smooth" })}
              >
                {number}
              </NavLink>
            );
          })}
        </div>
        <button
          className="pagination-right-btn"
          onClick={slidePaginationForward}
        >
          <RightArrow />
        </button>
      </div>
    </StyledPaginationContainer>
  );
}
