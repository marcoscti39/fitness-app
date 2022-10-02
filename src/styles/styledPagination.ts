import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    display: grid;
    place-items: center;
    line-height: 0;
    cursor: pointer;
    border: none;
    background-color: white;
    font-size: 1.5rem;
  }

  .pagination {
    display: flex;

    .pagination-item {
      background-color: white;
      padding: 1rem;
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
