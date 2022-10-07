import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  width: 100%;
  max-width: 1400px;

  button {
    display: grid;
    place-items: center;
    line-height: 0;
    cursor: pointer;
    border: none;
    background-color: white;
    font-size: 1.5rem;
    position: relative;
    z-index: 10;
  }
  .pagination-overflow {
    overflow-x: hidden;
    display: flex;
  }
  .pagination {
    display: flex;
    width: 240px;
    transition: transform 300ms;

    .pagination-item {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 40px;
      height: 48px;
      background-color: white;
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        background-color: rgba(230, 230, 230, 1.575);
      }
    }
    .active-link {
      background-color: rgb(151, 151, 151);
    }
  }
`;
