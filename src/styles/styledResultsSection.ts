import styled from "styled-components";

export const StyledResultsSection = styled.section`
  margin-top: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .results-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    gap: 3rem;
    justify-content: center;
    article {
      display: flex;
      flex-direction: column;
      border-top: 5px rgb(161, 0, 0) solid;
      background-color: white;
      gap: 1rem;
      padding-bottom: 1rem;
      cursor: pointer;
      color: black;
      text-decoration: none;
      transition: 200ms transform;
      &:hover {
        transform: scale(1.06);
      }

      .results-img {
        width: 100%;
        height: 300px;
        object-fit: contain;
      }
      .results-body-tag {
        display: flex;
        gap: 1rem;

        span {
          display: block;
          padding: 0.7rem;
          border-radius: 1rem;
          background-color: rgb(255, 204, 37);
          font-weight: 600;
          color: white;
        }
      }
      .results-exercise-name {
        font-size: 1.6rem;
        font-weight: 600;
        margin-left: 1rem;
        text-transform: capitalize;
      }
    }
  }
`;
