import React, { cloneElement, useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { Row, Text, Button, Line, Case } from "..";

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
  bottomIndicatorRowClass
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
          <Row className="font-almarai items-end mt-10 ">
            <Text
              className="font-bold text-gray_901 w-[auto] "
              as="h6"
              variant="h6"
            >
              {params.ThisSection.heading}
            </Text>
            <Line className="bg-gray_901 h-[2px] mb-[auto] mt-[auto] w-[50px] ml-[5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px]" />
          </Row>
          <Text
            className="font-almarai font-bold leading-8 mt-2 lg:leading-[125.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-bluegray_900  order-2 lg:order-none"
            as="h2"
            variant="h2">
            <span className="text-pink_400 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
              {params.ThisSection.title[0]}
            </span>
            <span className="text-bluegray_900 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
              {" "} <br />
              {params.ThisSection.title[1]}{" "}{params.ThisSection.title[2]}
            </span>
          </Text>
          <Text
            className="my-5 lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowforever1 order-3 lg:order-none"
            as="h5"
            variant="h5"
          >
            {params.ThisSection.description}
          </Text>
          {
            params.content.map((value: any, index: number) => {
              return (

                <div className="mt-6" onClick={() => {
                  updateIndex(index);
                }} key={index}>
                  <Case
                    heading={value.content.c1}
                    description={value.content.c2}
                    isActive={(index === activeIndex ? true : false)}
                  />
                </div>

              )
            })
          }
          <Link to={'/usecases-all'}>
            <Button
              className="font-almarai font-bold w-[100%] mt-10"
              variant="FillGray902">
              {params.buttonLabel}
            </Button>
          </Link>
        </>
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
              {/* <i className="fa fa-angle-left text-2xl" aria-hidden="true"></i> */}
              <svg className="h-7 w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>

            </button>
            <button
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              // style={{ height: '63px', backgroundColor: 'black', width: '68px', borderRadius: '52px', color: 'white' }}
              className="h-[63px] w-[68px] bg-white text-black rounded-full border-black border-2 hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white"

            >
              {/* <i className="fa fa-angle-right text-2xl" aria-hidden="true"></i> */}
              <svg className="w-full h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          : null
      }



      {/* main carousel */}


      {
        haveCustomIndicatiors ?
          <div className={"grid grid-cols-2 gap-12 w-full " + customIndicatiors.className}>
            <div className="">

              {
                renderCustomIndicatior(customIndicatiors)
              }
            </div>
            <div className="overflow-hidden my-auto">
              <div
                {...handlers}
                className="carousel " // onMouseEnter={() => setPaused(true)} // onMouseLeave={() => setPaused(false)}
              >
                <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                  {React.Children.map(children, (child, index) => {
                    return cloneElement(child, {
                      index,
                      activeIndex,
                      key: index
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
                  activeIndex,
                  key: index
                })
              })}
            </div>
          </div>
      }



      {/* for idicatior with slider icon */}
      <Row className={"grid grid-cols-3 content-center " + bottomIndicatorRowClass}>
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
                  className="h-[40px] w-[40px] bg-white text-black rounded-full border-black border-2 hover:bg-black hover:text-white hover:border-black active:bg-black active:border-black active:text-white focus:bg-black focus:border-black focus:text-white"
                >
                  {/* <i className="fa fa-angle-left " aria-hidden="true"></i> */}
                  <svg className="h-4 w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button
                  onClick={() => {
                    updateIndex(activeIndex + 1);
                  }}
                  className="h-[40px] w-[40px] bg-white text-black rounded-full border-black border-2 hover:bg-black hover:text-white hover:border-black active:bg-black active:border-black active:text-white focus:bg-black focus:border-black focus:text-white"
                >
                  {/* <i className="fa fa-angle-right " aria-hidden="true"></i> */}
                  <svg className="w-full h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
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
            return (
              <button key={i} onClick={() => {
                updateIndex(Number(i));
              }}
                type="button" className={(activeIndex === Number(i) ? "bg-pink_400 " : (fullWidthScreen ? ' ' : 'bg-gray-200')) + " " + indicatorClass} aria-current="false" aria-label="Slide 1" data-carousel-slide-to={i}></button>
            )
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
