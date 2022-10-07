import styled from "styled-components";

export const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 1rem;

  strong {
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    color: ${(props) => props.theme.primaryColor};
  }

  h1 {
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    max-width: 380px;
  }

  span {
    margin-bottom: 2.5rem;
    font-size: 1.3rem;
  }

  button {
    text-decoration: none;
    color: white;
    width: fit-content;
    padding: 1rem;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.primaryColor};
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  @media (max-width: 1030px) {
    & {
      align-items: center;
    }
    h1 {
      max-width: 100%;
      text-align: center;
    }
  }
`;

export const MainHero = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding: 0 2rem;
  max-width: 1400px;
  .hero-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .exercise-text {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    font-size: 10.5rem;
    font-weight: 800;
    z-index: -1;
    bottom: -30px;
    color: rgba(243, 18, 18, 0.3);
    margin-left: 1.5rem;
    @media (max-width: 800px) {
      & {
        display: none;
      }
    }
  }

  @media (max-width: 1030px) {
    & {
      grid-template-columns: 1fr;
      gap: 2rem;
      max-height: 1000px;
    }

    .hero-img {
      max-height: 700px;
    }
  }
`;
