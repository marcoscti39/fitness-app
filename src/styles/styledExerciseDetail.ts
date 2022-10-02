import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

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
    }
  }

  .body-icon {
    width: 80px;
    height: 80px;
    object-fit: none;
    border-radius: 50%;
    background-color: #faf898;
  }
`;

export const StyledSectionVideos = styled.section`
  font-family: Arial, Helvetica, sans-serif;
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
      line-height: 2.4rem;
      margin-top: 0.5rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  span {
    color: red;
  }
`;
