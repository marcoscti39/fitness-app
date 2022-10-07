import React from "react";

interface childrenProp {
  children: React.ReactNode;
}

const CarouselItem: React.ForwardRefRenderFunction<
  HTMLDivElement,
  childrenProp
> = ({ children }, ref) => {
  return (
    <div ref={ref} className="carousel-item">
      {children}
    </div>
  );
};

export default React.forwardRef(CarouselItem);
