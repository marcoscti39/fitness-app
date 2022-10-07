import styled from "styled-components";

export const StyledResultsSection = styled.section`
  margin-top: 1rem;
  padding: 0 2rem;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;

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
    a {
      text-decoration: none;
    }
  }
`;
