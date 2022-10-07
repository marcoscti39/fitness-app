import React from "react";

import { StyledSearchSection } from "../styles/styledSearchSection";

import { fetchBodyParts } from "../api/fetchBodyParts";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import SearchItem from "./SearchItem";
import { fetchByBodyParts } from "../api/fetchByBodyParts";
import { exerciseType } from "./ResultsSection";

interface searchProps {
  setExercises: React.Dispatch<React.SetStateAction<exerciseType[]>>;
}

const SearchSection: React.FC<searchProps> = ({ setExercises }) => {
  const [bodyParts, setBodyParts] = React.useState<string[]>([]);
  const carouselItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const getBodyParts = async () => {
      setBodyParts(await fetchBodyParts());
    };
    getBodyParts();
  }, []);

  const filterByBodyPart = async (bodyPart: string) => {
    const dataFiltered = await fetchByBodyParts(bodyPart);
    setExercises(dataFiltered);
  };

  return (
    <StyledSearchSection>
      <h2>Aweasome Exercises You Should Know</h2>
      <form>
        <input type="text" placeholder="Search Exercises" />
        <button type="submit">Search</button>
      </form>
      <Carousel
        carouselItemRef={carouselItemRef}
        forceRender={bodyParts}
        carouselLength={bodyParts.length}
      >
        {bodyParts.map((bodyPart, index) => (
          <CarouselItem ref={carouselItemRef} key={index}>
            <div onClick={() => filterByBodyPart(bodyPart)}>
              <SearchItem bodyPart={bodyPart} />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </StyledSearchSection>
  );
};

export default SearchSection;
