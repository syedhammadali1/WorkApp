import React, { FC } from 'react'
import { Text, Row, Img, Line, List, TestimonialCard } from "../..";
import Carousel, { CarouselItem } from '../Home/Carousel';

interface Props {

}

export const Testimonial: FC<Props> = (props) => {
    return (
        <>
            <Row className="items-end mt-10 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] lg:w-[13%] lg:ml-[3%]">
                <Text className="rowfeatures " as="h6" variant="h6">
                    Testimonial
                </Text>
                <Line className="bg-gray_901 h-[2px] mb-[10px] ml-1 lg:mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[33%]" />
            </Row>
            <Row className="items-start justify-between lg:mx-[auto] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[90%]">
                <Text className="rowwhattheysaya text-[35px]" as="h2" variant="h2">
                    What they say <br />
                    <span className="text-pink_400 font-almarai">
                        about us
                    </span>
                </Text>
            </Row>
            <Row className="hidden lg:flex items-start justify-between mx-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[89%] relative">
                <Img
                    src="images/img_arrow6.svg"
                    className=" lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] w-[12%]"
                    alt="ArrowSeven"
                />
                <List
                    className="overflow-hidden lg:gap-[40px] xl:gap-[50px] 2xl:gap-[57px] 3xl:gap-[68px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[85%]"
                    orientation="horizontal"
                >
                    <Carousel>
                        <CarouselItem>
                            <TestimonialCard isActive={true} Img={{ src: "images/img_avatar.png" }} testimonial={{
                                name: 'Alex', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                            }} />
                        </CarouselItem>
                        <CarouselItem>
                            <TestimonialCard Img={{ src: "images/img_avatar_64X64.png" }} testimonial={{
                                name: 'Xasai', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                            }} />
                        </CarouselItem>
                        <CarouselItem>
                            <TestimonialCard Img={{ src: "images/img_avatar_1.png" }} testimonial={{
                                name: 'Waldix', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                            }} />
                        </CarouselItem>
                        <CarouselItem>
                            <TestimonialCard Img={{ src: "images/img_avatar_1.png" }} testimonial={{
                                name: 'Waldix', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                            }} />
                        </CarouselItem>

                    </Carousel>
                </List>
            </Row>

            {/* mobile */}
            <div className='lg:hidden overflow-hidden mt-5'>
                <Carousel
                    shouldBeBottom={true}
                    withIndicators={true}
                    indicatorClass="w-full h-1"
                >
                    <CarouselItem>
                        <TestimonialCard isActive={true} Img={{ src: "images/img_avatar.png" }} testimonial={{
                            name: 'Alex', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                        }} />
                    </CarouselItem>
                    <CarouselItem>
                        <TestimonialCard Img={{ src: "images/img_avatar_64X64.png" }} testimonial={{
                            name: 'Xasai', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                        }} />
                    </CarouselItem>
                    <CarouselItem>
                        <TestimonialCard Img={{ src: "images/img_avatar_1.png" }} testimonial={{
                            name: 'Waldix', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                        }} />
                    </CarouselItem>
                    <CarouselItem>
                        <TestimonialCard Img={{ src: "images/img_avatar_1.png" }} testimonial={{
                            name: 'Waldix', feedback: "Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks"
                        }} />
                    </CarouselItem>

                </Carousel>
            </div>
        </>

    )
}