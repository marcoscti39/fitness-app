import React from "react";

export const CarouselItem: React.ForwardRefRenderFunction<{
  ref: React.ReactElement;
  children: React.ReactNode;
}> = ({ ref, children }) => {
  const carouselItemRef = React.useRef<HTMLDivElement>(null);
  if (carouselItemRef.current) {
    test(carouselItemRef.current.getBoundingClientRect().width);
  }
  const getCarouselItemWidth = () => {
    if (carouselItemRef.current) {
      return carouselItemRef.current.getBoundingClientRect().width;
    }
  };
  return (
    <div ref={carouselItemRef} className="carousel-item">
      {children}
    </div>
  );
};

export const test = (element: number) => {
  const itemRef = element;
  return function getElement() {
    return itemRef;
  };
};
