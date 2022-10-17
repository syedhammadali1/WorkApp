import React, { cloneElement, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Row } from "../../Row";

export const CarouselItem = ({ children, index, activeIndex }: any) => {
  return (
    <div className="carousel-item ">
      {cloneElement(children, {
        index,
        activeIndex
      })}
    </div>
  );
};

const Carousel = ({
  children,
  withSlideIcon = true,
  withIndicators = false,
  withChildrenCount = false,
  shouldBeBottom = false,
  childrenCountClass = "",
  indicatorClass = "w-3 h-3 rounded-full",
}: any) => {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [paused, setPaused] = useState<Boolean>(false);

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
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <>
      {withChildrenCount ?
        <div className={childrenCountClass}>
          {(activeIndex + 1) + '/' + React.Children.count(children)}
        </div>
        : null
      }

      {withIndicators && !shouldBeBottom ?
        <Row className="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2">
          {
            Object.keys(children).map((i) => {
              return <>
                <button key={i} onClick={() => {
                  updateIndex(Number(i));
                }}
                  type="button" className={(activeIndex === Number(i) ? "bg-pink_400" : "bg-gray-400") + " " + indicatorClass} aria-current="false" aria-label="Slide 1" data-carousel-slide-to={i}></button>
              </>
            })
          }
        </Row> : null
      }

      {
        withSlideIcon && !shouldBeBottom ?
          <div className="indicators lg:absolute right-0 bottom-[129%]" >
            <button
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
              // style={{ height: '63px', backgroundColor: 'white', width: '68px', borderRadius: '52px', color: 'black', border: "1px solid black" }}
              className="h-[63px] w-[68px] bg-white text-black rounded-full border-black border-2 hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white"
            >
              <i className="fa fa-angle-left text-2xl" aria-hidden="true"></i>

            </button>
            <button
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              // style={{ height: '63px', backgroundColor: 'black', width: '68px', borderRadius: '52px', color: 'white' }}
              className="h-[63px] w-[68px] bg-white text-black rounded-full border-black border-2 hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white"

            >
              <i className="fa fa-angle-right text-2xl" aria-hidden="true"></i>
            </button>
          </div>
          : null
      }
      <div
        {...handlers}
        className="carousel"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return cloneElement(child, {
              index,
              activeIndex
            })
          })}
        </div>
      </div>

      <Row className="grid grid-cols-3 content-center">
        <div className="self-center col-span-2 ">
          {withIndicators && shouldBeBottom ?
            <Row className="bg-gray-100 rounded">
              {
                Object.keys(children).map((i) => {
                  return <>
                    <button key={i} onClick={() => {
                      updateIndex(Number(i));
                    }}
                      type="button" className={(activeIndex === Number(i) ? "bg-pink_400 rounded h-[1px]" : "h-[1px]") + " " + indicatorClass} aria-current="false" aria-label="Slide 1" data-carousel-slide-to={i}></button>
                  </>
                })
              }
            </Row> : null
          }
        </div>
        <div className="justify-self-end">
          {
            withSlideIcon && shouldBeBottom ?
              <div className="indicators" >
                <button
                  onClick={() => {
                    updateIndex(activeIndex - 1);
                  }}
                  className="h-[40px] w-[40px] bg-white text-black rounded-full border-black border-2 hover:bg-pink_400 hover:text-white hover:border-pink_400 active:bg-pink_400 active:border-pink_400 active:text-white focus:bg-pink_400 focus:border-pink_400 focus:text-white"
                >
                  <i className="fa fa-angle-left " aria-hidden="true"></i>

                </button>
                <button
                  onClick={() => {
                    updateIndex(activeIndex + 1);
                  }}
                  className="h-[40px] w-[40px] bg-white text-black rounded-full border-black border-2 hover:bg-pink_400 hover:text-white hover:border-pink_400 active:bg-pink_400 active:border-pink_400 active:text-white focus:bg-pink_400 focus:border-pink_400 focus:text-white"
                >
                  <i className="fa fa-angle-right " aria-hidden="true"></i>
                </button>
              </div>
              : null
          }</div>
      </Row>
    </>

  );
};

export default Carousel;
