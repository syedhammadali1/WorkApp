import React, { cloneElement, FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { Row, Column, Text, Button, Img } from "../..";
import Case from "../UseCase/Case";

export const CarouselItem = ({ children, index, activeIndex, className = "", style }: any) => {
  return (
    <div className={"carousel-item" + className} style={style}>
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
  withIndicatorsBottom = false,
  childrenCountClass = "",
  indicatorClass = "w-3 h-3 rounded-full",
  haveCustomIndicatiors = false,
  customIndicatiors,
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

  const renderCustomIndicatior = (params: any) => {
    switch (params.for) {
      case 'homepageusecase':
        return <>
          {
            params.content.map((value: any, index: number) => {
              return (
                <>
                  <div className="mt-6" onClick={() => {
                    updateIndex(index);
                  }}>
                    <Case
                      heading={value.content.c1}
                      description={value.content.c2}
                      isActive={(index === activeIndex ? true : false)}
                    />
                  </div>
                </>
              )
            })
          }
        </>
        break;
      default:
        break;
    }
  }

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
        <Indicator parentChildren={children} updateIndex={updateIndex} activeIndex={activeIndex} indicatorClass={indicatorClass} rowClass="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2" /> : null
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



      {/* main carousel */}


      {
        haveCustomIndicatiors ?
          <div className={"grid grid-cols-2 gap-12 w-full " + customIndicatiors.className }>
            <div className="my-auto">
              {
                renderCustomIndicatior(customIndicatiors)
              }
            </div>
            <div className="overflow-hidden">
              <div
                {...handlers}
                className="carousel" // onMouseEnter={() => setPaused(true)} // onMouseLeave={() => setPaused(false)}
              >
                <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                  {React.Children.map(children, (child, index) => {
                    return cloneElement(child, {
                      index,
                      activeIndex
                    })
                  })}
                </div>
              </div>
            </div>
          </div>


          :
          // default carousel
          <div
            {...handlers}
            className="carousel" // onMouseEnter={() => setPaused(true)} // onMouseLeave={() => setPaused(false)}
          >
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {React.Children.map(children, (child, index) => {
                return cloneElement(child, {
                  index,
                  activeIndex
                })
              })}
            </div>
          </div>
      }



      {/* for idicatior with slider icon */}
      <Row className="grid grid-cols-3 content-center">
        <div className="self-center col-span-2">
          {withIndicators && shouldBeBottom ?
            <Indicator parentChildren={children} updateIndex={updateIndex} activeIndex={activeIndex} indicatorClass={indicatorClass} rowClass="bg-gray-100 rounded" fullWidthScreen={true} />
            : null
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



      {/* for indictor at bottom */}
      {
        withIndicatorsBottom ?
          <>
            <Row className={"grid grid-col-1 " + indicatorClass} >
              <Indicator parentChildren={children} updateIndex={updateIndex} activeIndex={activeIndex} indicatorClass={indicatorClass} rowClass="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 bottom-[10] " />
            </Row>
          </>
          : null
      }

    </>

  );
};


export const Indicator = ({ parentChildren, updateIndex, activeIndex, indicatorClass, rowClass, fullWidthScreen = false }: any) => {
  return (
    <>
      <Row className={rowClass}>
        {
          React.Children.count(parentChildren) > 1 ? Object.keys(parentChildren).map((i) => {
            return <>
              <button key={i} onClick={() => {
                updateIndex(Number(i));
              }}
                type="button" className={(activeIndex === Number(i) ? "bg-pink_400 " : (fullWidthScreen ? ' ' : 'bg-gray-200')) + " " + indicatorClass} aria-current="false" aria-label="Slide 1" data-carousel-slide-to={i}></button>
            </>
          }) : <>
            <button key={0} onClick={() => {
              updateIndex(0);
            }}
              type="button" className={(activeIndex === 0 ? "bg-pink_400 " : (fullWidthScreen ? ' ' : 'bg-gray-200')) + " " + indicatorClass} aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          </>
        }
      </Row>
    </>
  );
};




export default Carousel;
