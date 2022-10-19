import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Column, Text, Row, Img, Button, Line } from "../..";
import UsecaseButton from '../../Button/UsecaseButton';
import Carousel, { CarouselItem } from './Carousel';

interface Props { }

export const UseCases: FC<Props> = (props) => {
    return (
        <>
            <Row className="items-start justify-evenly flex-col w-[100%] lg:flex-row" restProps={{ id: "usecases" }} >
                <Column className="justify-start w-full lg:w-[50%] lg:ml-[auto]">
                    <Row className="font-almarai items-end mt-10 lg:mt-[auto] order-1 lg:order-none ">
                        <Text
                            className="font-bold text-gray_901 w-[auto] "
                            as="h6"
                            variant="h6"
                        >
                            USE CASES
                        </Text>
                        <Line className="bg-gray_901 h-[2px] mb-[auto] mt-[auto] w-[50px] ml-[5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px]" />
                    </Row>
                    <Text
                        className="font-almarai font-bold leading-8 mt-2 lg:w-[55%] lg:leading-[125.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-bluegray_900  order-2 lg:order-none"
                        as="h2"
                        variant="h2">
                        <span className="text-pink_400 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            Accelerate
                        </span>
                        <span className="text-bluegray_900 text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            {" "}
                            your Organization
                        </span>
                    </Text>

                    <Text
                        className="my-5 lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowforever1 order-3 lg:order-none"
                        as="h5"
                        variant="h5"
                    >
                        Achieve financial results and business goals with clarity and
                        measurable actions
                    </Text>

                    <Column className="hidden lg:block">
                        <Column className="bg-pink_400 justify-end lg:w-[81%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 ">
                            <Text
                                className="font-almarai 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                            >
                                For BoD, C level and Managers
                            </Text>
                            <Text
                                className="font-normal font-nunitosans leading-[125.00%] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-white_A700 w-[96%]"
                                as="h5"
                                variant="h5"
                            >
                                Manage teams and build efficiency across all levels using
                                tools such as status tracking, performance overview,
                                automatic reminders and intelligent nudges
                            </Text>
                        </Column>

                        <Column className="bg-gray_100 justify-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[81%]">
                            <Text
                                className="font-almarai 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                            >
                                Run High Impact Initiatives <br />
                            </Text>
                            <Text
                                className="font-normal font-nunitosans leading-[125.00%] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_900 w-[94%]"
                                as="h5"
                                variant="h5"
                            >
                                Lead and drive teams towards the key initiatives with
                                regular checkins, result sharing reports and tools to
                                increase accountability and reduce procrastination
                            </Text>
                        </Column>

                        <Column className=" justify-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[81%]">
                            <Text
                                className="font-almarai text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                            >
                                Company wide Engagement and Alignment{" "}
                            </Text>
                            <Text
                                className="font-normal font-nunitosans leading-[125.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_900 w-[99%]"
                                as="h5"
                                variant="h5"
                            >
                                Build common values for Mission, Strategy or Sustainable
                                Goals that are shared from top to bottom with tools to
                                encourage people engagement
                            </Text>
                        </Column>

                        <Link to='/usecases-all'>
                            <Button
                                className=" font-almarai font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center top-[0] w-[81%] mt-5"
                                variant="FillGray902"
                            >
                               View All Use Cases
                            </Button>
                        </Link>
                    </Column>

                    {/* mobile */}
                    <Column className="overflow-hidden lg:hidden order-4 lg:order-none bg-gray-100">
                        <Carousel withSlideIcon={false}
                            withChildrenCount={true}
                            childrenCountClass="absolute font-almarai font-bold right-7 mt-2 text-white bg-gray-300 px-1 rounded"
                        >
                            <CarouselItem>
                                <Img
                                    src="images/img_image6.png"
                                    className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%] "
                                    alt="imageSix"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Img
                                    src="images/img_image6.png"
                                    className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]"
                                    alt="imageSix"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Img
                                    src="images/img_image6.png"
                                    className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]"
                                    alt="imageSix"
                                />
                            </CarouselItem>
                        </Carousel>
                    </Column>


                    <Column className="lg:hidden order-5 bg-gray-100 overflow-hidden ">
                        <Carousel withSlideIcon={false}
                            withIndicators={true}
                            indicatorClass="w-10 h-1.5 rounded-radius8"
                        >
                            <CarouselItem>
                                <UsecaseButton
                                    className="justify-end rounded-radius8 "
                                    title={{
                                        value: "For BoD, C level and Managers",
                                        className: "font-almarai text-[21px] mt-8 mx-4"
                                    }}
                                    description={{
                                        value: "Manage teams and build efficiency across all levels using tools such as status tracking, performance overview, automatic reminders and intelligent nudges",
                                        className: "font-almarai mt-3 mb-1 mx-4"
                                    }}
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <UsecaseButton
                                    className="justify-end rounded-radius8 p-1"
                                    title={{
                                        value: "Run High Impact Initiatives",
                                        className: "font-almarai text-[21px] mt-8 mx-4"
                                    }}
                                    description={{
                                        value: " Lead and drive teams towards the key initiatives with regular checkins, result sharing reports and tools to increase accountability and reduce procrastination",
                                        className: "font-almarai mt-3 mb-1 mx-4"
                                    }}
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <UsecaseButton
                                    className="justify-end rounded-radius8 p-1"
                                    title={{
                                        value: "Company wide Engagement and Alignment",
                                        className: "font-almarai text-[21px] mt-8 mx-4"
                                    }}
                                    description={{
                                        value: "Build common values for Mission, Strategy or Sustainable Goals that are shared from top to bottom with tools to encourage people engagement",
                                        className: "font-almarai mt-3 mb-1 mx-4"
                                    }}
                                />
                            </CarouselItem>
                        </Carousel>


                    </Column>
                </Column>
                <Link to='/usecases-all' className="lg:hidden w-[100%]">
                    <Button
                        className=" font-almarai font-bold w-[100%] mt-5"
                        variant="FillGray902"
                    >
                        View More Cases
                    </Button>
                </Link>
                <Column className="hidden lg:block ">
                    <Img
                        src="images/img_image6.png"
                        className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]"
                        alt="imageSix"
                    />
                </Column>
            </Row>
        </>
    )
}
