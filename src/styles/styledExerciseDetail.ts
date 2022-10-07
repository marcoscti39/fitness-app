import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
  max-width: 1300px;
  box-sizing: border-box;

  .exercise-hero-img {
    background-color: pink;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }

  .body-target-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .body-target {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  .body-icon {
    width: 80px;
    height: 80px;
    object-fit: none;
    border-radius: 50%;
    background-color: #faf898;
  }

  @media (max-width: 980px) {
    & {
      grid-template-columns: 1fr;
    }
    .exercise-hero-img {
      max-width: 550px;
      min-height: 600px;
      justify-self: center;
    }

    article {
      max-width: 550px;
    }
  }
`;

export const StyledSectionVideos = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 2rem;
  max-width: 1300px;
  width: 100%;
  box-sizing: border-box;

  a {
    color: black;
    text-decoration: none;
  }
  .videos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 370px);
    gap: 3rem;
  }

  .video-item {
    display: flex;
    flex-direction: column;
  }

  .video-thumbnail {
    background-color: yellow;
    width: 100%;
    aspect-ratio: 16/9;
    border-top-left-radius: 10px;
  }

  .video-description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    strong {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 980px) {
    .videos-container {
      justify-content: center;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;

  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  span {
    color: red;
  }
`;

export const StyledCarouselSection = styled.section`
  margin-top: 4rem;
  padding: 0 2rem;
  max-width: 1300px;
  width: 100%;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`;
