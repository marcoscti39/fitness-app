import React from "react";

interface childrenProp{
    children: React.ReactNode
}

interface refProp{
    ref: React.createRef<HTMLDivElement>()
}

const CarouselItem: React.ForwardRefRenderFunction<HTMLDivElement, childrenProp> = ({ children, ref }) => {
  return (
    <div ref={ref} className="carousel-item">
      {children}
    </div>
  );
};

export default React.forwardRef(CarouselItem)
