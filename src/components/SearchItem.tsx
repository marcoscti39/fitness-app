import React, { ReactNode } from "react";
import { StyledSearchItem } from "../styles/styledSearchItem";
import gymIcon from "../../public/icons/gym.png";

interface searchItemProps {
  bodyPart: string;
}

const SearchItem: React.FC<searchItemProps> = ({ bodyPart }) => {
  return (
    <StyledSearchItem>
      <img className="carousel-gym-icon" src={gymIcon} alt="" />
      {bodyPart}
    </StyledSearchItem>
  );
};

export default SearchItem;
