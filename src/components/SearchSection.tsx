import React from "react";

import { StyledSearchSection } from "../styles/styledSearchSection";

import { fetchBodyParts } from "../api/fetchBodyParts";
import Carousel from "./Carousel";
import { CarouselItem } from "./CarouselItem";
import gymIcon from "../../public/icons/gym.png";

export default function SearchSection() {
  const [bodyParts, setBodyParts] = React.useState<string[]>([]);

  React.useEffect(() => {
    const getBodyParts = async () => {
      setBodyParts(await fetchBodyParts());
    };
    // getBodyParts();
  }, []);

  return (
    <StyledSearchSection>
      <h2>Aweasome Exercises You Should Know</h2>
      <form>
        <input type="text" placeholder="Search Exercises" />
        <button type="submit">Search</button>
      </form>
      <Carousel>
        {bodyParts.map((bodyPart, index) => (
          <CarouselItem key={index}>
            <img className="carousel-gym-icon" src={gymIcon} alt="" />
            {bodyPart}
          </CarouselItem>
        ))}
      </Carousel>
    </StyledSearchSection>
  );
}
