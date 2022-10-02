import React from "react";

import rightArrow from "../../public/icons/right-arrow.png";
import leftArrow from "../../public/icons/left-arrow.png";

import { StyledCarouselContainer } from "../styles/styledSearchSection";
import { test } from "./CarouselItem";

export default function Carousel({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [carouselMove, setCarouselMove] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const carouselContainerRef = React.useRef<HTMLDivElement>(null);

  const getCarouselDetails = () => {
    const $carouselItem = document.querySelector(".carousel-item");

    const carouselWidth =
      carouselContainerRef.current?.getBoundingClientRect().width;

    const carouselItemWidth = $carouselItem?.getBoundingClientRect().width;
    console.log(carouselItemWidth);
    if (carouselWidth && carouselItemWidth) {
      const amountOfImagesBeingShown = Math.floor(
        carouselWidth / carouselItemWidth
      );

      const amountOfGap =
        (carouselWidth % carouselItemWidth) / amountOfImagesBeingShown;

      return {
        amountOfImagesBeingShown,
        amountOfGap,
      };
    }
  };

  React.useEffect(() => {
    if (carouselRef.current) {
      const translateCalc = carouselMove * 100 * -1;
      carouselRef.current.style.transform = `translateX(${translateCalc}%)`;

      console.log(test());

      const { amountOfGap } = getCarouselDetails() || { amountOfGap: 0 };
      if (amountOfGap) {
        carouselRef.current.style.gap = `${amountOfGap}px`;
      }
    }
  }, [carouselMove]);

  const moveCarouselForwards = () => {
    const { amountOfImagesBeingShown } = getCarouselDetails()!;
    const carouselEnd = 10 / amountOfImagesBeingShown;
    if (carouselMove === carouselEnd - 1) return;
    setCarouselMove((prev) => prev + 1);
  };

  const moveCarouselBackwards = () => {
    if (carouselMove === 0) return;
    setCarouselMove((prev) => prev - 1);
  };

  return (
    <StyledCarouselContainer ref={carouselContainerRef}>
      <div ref={carouselRef} className="carousel">
        {children}
      </div>
      <div className="carousel-btn-wrapper">
        <button>
          <img src={leftArrow} alt="" onClick={moveCarouselBackwards} />
        </button>
        <button>
          <img src={rightArrow} alt="" onClick={moveCarouselForwards} />
        </button>
      </div>
    </StyledCarouselContainer>
  );
}
