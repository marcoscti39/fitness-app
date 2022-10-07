import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1400px;

  .header-container {
    display: flex;
    max-width: 1200px;
    align-items: center;
    width: 100%;
  }

  img {
    margin-right: 8rem;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    position: relative;
  }

  .active-link::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.primaryColor};
    width: 100%;
    height: 5px;
    bottom: -10px;
  }
`;
