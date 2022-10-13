import React, { cloneElement, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

// import "./Carousel.css";

export const CarouselItem = ({ children,index,activeIndex }: any) => {


  
  return (
    <div className="carousel-item"  style={{ width: '100%', marginRight: '35px' }}>
      {/* {children} */}
      {cloneElement(children, {
            index,
            activeIndex
          })}
    </div>
  );
};
const Carousel = ({ children }: any) => {
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<Boolean>(false);

  const updateIndex = (newIndex: number) => {
    // console.log(newIndex);
    
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       // updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);

    },
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      // {...handlers}
      className="carousel"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      <div className="indicators absolute right-0	" style={{ bottom: "139%" }}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          style={{ height: '63px', backgroundColor: 'white', width: '68px', borderRadius: '52px', color: 'black', border: "1px solid black" }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>

        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          style={{ height: '63px', backgroundColor: 'black', width: '68px', borderRadius: '52px', color: 'white' }}
        >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>

        </button>
      </div>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {  

return  cloneElement(child, {
            index,
            activeIndex
          })
                  
          // return child 
          // React.cloneElement(child,index);
        })}
      </div>

    </div>
  );
};

export default Carousel;
