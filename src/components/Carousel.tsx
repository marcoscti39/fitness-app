import React from "react";

import rightArrow from "../../public/icons/right-arrow.png";
import leftArrow from "../../public/icons/left-arrow.png";

import { StyledCarouselContainer } from "../styles/styledSearchSection";

export default function Carousel({
  children,
  carouselItemRef,
  forceRender,
  carouselLength,
}: {
  forceRender?: unknown;
  carouselItemRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  carouselLength: number;
}): React.ReactElement {
  const [carouselMove, setCarouselMove] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const carouselContainerRef = React.useRef<HTMLDivElement>(null);

  const getCarouselDetails = () => {
    const carouselWidth =
      carouselContainerRef.current?.getBoundingClientRect().width;

    const carouselItemWidth =
      carouselItemRef.current?.getBoundingClientRect().width;
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
      if (carouselItemRef.current) {
        const { amountOfGap } = getCarouselDetails()!;
        if (amountOfGap) {
          carouselRef.current.style.gap = `${amountOfGap}px`;
        }
      }
    }
  }, [carouselMove, forceRender]);

  const moveCarouselForwards = () => {
    const { amountOfImagesBeingShown } = getCarouselDetails()!;
    const carouselEnd = carouselLength / amountOfImagesBeingShown;
    if (carouselMove === Math.ceil(carouselEnd - 1)) return;
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
