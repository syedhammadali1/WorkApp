import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Column, Text, Row, Img, Button, Line, Carousel, CarouselItem, UsecaseButton } from "../..";

interface Props { }

export const UseCases: FC<Props> = (props) => {
    const ThisSection = {
        heading: "USE CASES",
        title: [
            "Accelerate",
            "your",
            "Organization"
        ],
        description: "Achieve financial results and business goals with clarity and measurable actions",
        useCases: [
            {
                img: "images/img_image6.webp",
                content: {
                    c1: "For BoD, A level and Managers",
                    c2: "Manage teams and build efficiency across all levels using tools such as status tracking, performance overview, automatic reminders and intelligent nudges"
                }
            },
            {
                img: "images/img_image6.webp",
                content: {
                    c1: "Run High Impact Initiatives",
                    c2: "Lead and drive teams towards the key initiatives with regular checkins, result sharing reports and tools to increase accountability and reduce procrastination"
                }
            },
            {
                img: "images/img_image6.webp",
                content: {
                    c1: "Company wide Engagement and Alignment",
                    c2: "Build common values for Mission, Strategy or Sustainable Goals that are shared from top to bottom with tools to encourage people engagement"
                }
            }
        ],
        buttonLabel: "View All Use Cases"
    }


    return (
        <>
            <Row className="items-start justify-evenly flex-col w-[100%] lg:flex-row" restProps={{ id: "usecases" }} >
                <Column className="justify-start">

                    {/* web */}
                    {/* <Column className="w-full overflow-hidden hidden lg:block"> */}
                    <div className='w-full overflow-hidden hidden lg:block  bg-transparent'>
                        <Carousel withSlideIcon={false} haveCustomIndicatiors={true}
                            customIndicatiors={{ for: 'homepageusecase', content: ThisSection.useCases, className: "bg-white", buttonLabel: ThisSection.buttonLabel, ThisSection: ThisSection }}>
                            {
                                ThisSection.useCases.map((value: any, index: number) => {
                                    return <CarouselItem key={index}>
                                        <Column>
                                            <Img
                                                src={value.img}
                                                className="w-full mt-6 py-24 px-8"
                                                alt="imageSix"
                                            />
                                        </Column>
                                    </CarouselItem>
                                })
                            }
                        </Carousel>
                    </div>
                </Column>
                {/* web */}
                {/* </Column> */}

                {/* mobile */}

                <div className='lg:hidden'>
                    <Row className="font-almarai items-end mt-10 ">
                        <Text
                            className="font-bold text-gray_901 w-[auto] "
                            as="h6"
                            variant="h6"
                        >
                            {ThisSection.heading}
                        </Text>
                        <Line className="bg-gray_901 h-[2px] mb-[auto] mt-[auto] w-[50px] ml-[5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px]" />
                    </Row>
                    <Text
                        className="font-almarai font-bold leading-8 mt-2 lg:w-[55%] lg:leading-[125.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-bluegray_900  order-2 lg:order-none"
                        as="h2"
                        variant="h2">
                        <span className="text-pink_400 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            {ThisSection.title[0]} <br />
                        </span>
                        <span className="text-bluegray_900 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            {" "}
                            {ThisSection.title[1]} {ThisSection.title[2]}
                        </span>
                    </Text>
                    <Text
                        className="my-5 lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowforever1 order-3 lg:order-none"
                        as="h5"
                        variant="h5"
                    >
                        {ThisSection.description}
                    </Text>
                </div>
                <Column className="w-full overflow-hidden rounded-lg lg:hidden bg-gray-100">
                    <Carousel withSlideIcon={false}
                        withChildrenCount={true}
                        withIndicatorsBottom={true}
                        childrenCountClass="absolute font-almarai font-bold right-7 mt-2 text-white bg-gray-300 px-1 rounded"
                        indicatorClass="w-10 h-1.5 rounded-radius8 mb-6 mt-1">
                        {
                            ThisSection.useCases.map((value: any, index: number) => {
                                return <CarouselItem key={index}>
                                    <Column>
                                        <Img
                                            src={value.img}
                                            className="w-full "
                                            alt="imageSix"
                                        />

                                        <UsecaseButton
                                            className="justify-end rounded-radius8 p-1"
                                            title={{
                                                value: value.content.c1,
                                                className: "font-almarai text-[21px]  mx-4"
                                            }}
                                            description={{
                                                value: value.content.c2,
                                                className: "font-almarai mt-3 mb-1 mx-4"
                                            }}
                                        />
                                    </Column>
                                </CarouselItem>
                            })
                        }
                    </Carousel>
                </Column>
                <Link to='/usecases-all' className="lg:hidden w-[100%]">
                    <Button
                        className=" font-almarai font-bold w-[100%] mt-5"
                        variant="FillGray902"
                    >
                        {ThisSection.buttonLabel}
                    </Button>
                </Link>
                {/* mobile */}
            </Row>
        </>
    )
}


