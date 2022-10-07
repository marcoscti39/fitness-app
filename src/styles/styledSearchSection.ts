import styled from "styled-components";

export const StyledSearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 500px;
    line-height: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-top: 5rem;
  }

  form {
    display: flex;
    width: 100%;
    max-width: 900px;
    margin-top: 2rem;

    input {
      flex: 1;
      padding: 0.5rem;
      font-size: 1.2rem;
    }

    button {
      color: white;
      background-color: ${(props) => props.theme.primaryColor};
      padding: 0.5rem 2rem;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const StyledCarouselContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin-top: 2rem;
  box-sizing: border-box;

  .carousel {
    display: flex;
    transition: 200ms all;
  }

  .carousel-btn-wrapper {
    display: flex;
    gap: 1rem;
    justify-content: end;
    margin-top: 1rem;
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
