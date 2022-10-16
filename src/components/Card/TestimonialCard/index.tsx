import React, { FC } from 'react'
import { Column, Text, Img } from "../..";
interface Props {
    Img?: {
        src?: string
        className?: string
        alt?: string
    }
    testimonial?: {
        name?: string
        feedback?: string
    }
    isActive?: boolean
    index?: any
    activeIndex?: any

}

const TestimonialCard: FC<Props> = (props) => {

    if (props.activeIndex === props.index) {
        return (
            <>
                <Column className='listavatar lg:mr-5 p-5' key={props.index}>
                    <Img
                        src={props.Img?.src}
                        className="h-22 w-20 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                        alt={props.Img?.alt}
                    />
                    <Text
                        className="whitespace-pre-line font-normal font-nunitosans leading-[125.00%] mt-3 mx-1 lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-white_A700 w-[99%]"
                        as="h5"
                        variant="h5"
                    >
                        {props.testimonial?.feedback}
                    </Text>
                    <Text
                        className=" font-almarai font-bold mt-3 mx-1  lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                    >
                        {props.testimonial?.name}
                    </Text>
                </Column>
            </>
        )
    } else {
        return (
            <>
                <Column className="lg:mr-5 p-5 bg-gray_50 border border-bluegray_100 border-solid justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius17 w-[100%]" kjhk={props.index}>
                    <Img
                        src={props.Img?.src}
                        className="h-22 w-20 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                        alt={props.Img?.alt}
                    />
                    <Text
                        className="Quote_One whitespace-pre-line  mt-3 mx-1 "
                        as="h5"
                        variant="h5"
                    >
                        {props.testimonial?.feedback}
                    </Text>
                    <Text
                        className="Source_One  mt-3 mx-1 "
                        as="h5"
                        variant="h5"
                    >
                        {props.testimonial?.name}
                    </Text>
                </Column>
            </>
        )
    }
}




export default TestimonialCard