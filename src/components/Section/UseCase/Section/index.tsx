import React, { FC } from 'react'
import {
    Column,
    Row,
    Img,
    Text,
    Button,
    Stack,
} from "../../..";
import { MobileFeatureCard } from '../../../Card/FeatureCard';
import Carousel, { CarouselItem } from '../../Home/Carousel';
interface Props {
    FBtn: {
        className?: string,
        styleClass?: string,
        Img: {
            src: string,
            className?: string,
            alt?: string,
        }
    }
    firstText: any,
    featureList: Array<string>,
    imageColumn: any,
    opposite?: boolean
}

const UsecaseSection: FC<Props> = ({ FBtn, firstText, featureList, imageColumn, opposite = false }: Props) => {
    return (
        <Row className='w-full grid grid-col-1 lg:grid-cols-2 content-center mt-10 lg:mt-40'>
            <Column className={'px-3 lg:px-0 ' + (opposite ? 'lg:order-2 lg:pl-[10%]' : ' ' + ' lg:my-[auto]')}>
                <Button
                    className={"flex justify-center w-[70px] " + FBtn?.className}
                    styles={FBtn?.styleClass}
                >
                    <Img
                        src={FBtn.Img.src}
                        className={"flex items-center justify-center " + FBtn.Img.className}
                        alt={FBtn.Img.alt}
                    />
                </Button>
                <Column className="font-almarai my-5">
                    <Text
                        className="ManagingTeams"
                        as="h3"
                        variant="h3"
                    >
                        {firstText}
                    </Text>
                </Column>

                {
                    featureList.map((value, index) => {
                        return <>
                            <div className="grid grid-cols-12 mb-5">
                                <div className="col-start-1 col-end-2 ">
                                    <Img
                                        src="images/img_checkmark1.svg"
                                        className="checkmark"
                                        alt="checkmark"
                                    />
                                </div>
                                <div className={"col-start-2 col-end-13 lg:col-end-12 " + (opposite ? " lg:-ml-4" : "lg:-ml-6")}>
                                    <Text className="font-normal my-[auto]   not-italic text-bluegray_900 " as="h5" variant="h5">
                                        {value}
                                    </Text>
                                </div>
                            </div>
                        </>
                    })

                }
            </Column>

            <div className='hidden lg:block'>
                {imageColumn}
            </div>

            <Column className="overflow-hidden lg:hidden bg-white ">
                <Carousel withSlideIcon={false}
                    withChildrenCount={true}
                    withIndicatorsBottom={true}
                    childrenCountClass="absolute font-almarai font-bold right-7 mt-2 text-white bg-gray-300 px-1 rounded"
                    indicatorClass="w-10 h-1.5 rounded-radius8 mb-4"
                >
                    <CarouselItem>
                        <Img
                            src="images/img_image6.png"
                            className="w-[100%] "
                            alt=""
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Img
                            src="images/img_image6.png"
                            className="w-[100%] "
                            alt=""
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Img
                            src="images/img_image6.png"
                            className="w-[100%] "
                            alt=""
                        />
                    </CarouselItem>
                </Carousel>
            </Column>
        </Row>
    )
}

// alag isliyay banaye hain ager in future inko update kerna hou alag say tou ker skay verna childElement ka ek component bhi bana sktay thay

interface FirstTextProps {
    children: any
}

export const FirstText: FC<FirstTextProps> = ({ children }: FirstTextProps) => {
    return (
        <>
            {children}
        </>
    )
}


interface ImageColumn {
    use?: string | null,
    img?: {
        className?: string,
        src?: string
    }
    children?: any
}

export const ImageColumn: FC<ImageColumn> = ({ children = null, img, use }: ImageColumn) => {
    if (children) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        if (use === 'right') {
            return (
                <>
                    <Column className="bg-white_A700 items-end justify-end rounded-radius17 lg:pl-[60px] lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px]">
                        <div className="overflow-x-auto w-full">
                            <Stack className="lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]">
                                <Img
                                    src={img?.src}
                                    className={"absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] right-[0] w-[100%] " + img?.className}
                                    alt=""
                                />
                            </Stack>
                        </div>
                    </Column>
                </>
            )
        }
        if (use === 'left') {
            return (
                <>
                    <Column className="bg-white_A700 items-end justify-end rounded-radius17 lg:pr-[10px] lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px]">
                        <div className="overflow-x-auto w-full">
                            <Stack className="lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]">
                                <Img
                                    src={img?.src}
                                    className={"absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] left-[0] w-[100%] " + img?.className}
                                    alt=""
                                />

                            </Stack>
                        </div>
                    </Column>
                </>
            )
        }
    }
    return (
        <>

        </>
    )
}


export default UsecaseSection


// LeftSide Stack
//     < Stack className = "lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]" >
//         <Img
//             src="images/usecases/Section3Img.svg"
//             className="absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] left-[0] w-[100%]"
//             alt="shadow Three"
//         />
// <Stack
//                 className="absolute bg-cover bg-repeat lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] left-[0] w-[100%]"
//                 style={{
//                   backgroundImage: "url('images/img_group3.png')",
//                 }}
//               >
//                 <Img
//                   src="images/usecases/section3inner.svg"
//                   className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] left-[0] top-[6px] w-[90%]"
//                   alt="NewMacbookPro Three"
//                 />
//               </Stack>
//             </Stack >


// RightSide Stack
    // < Column className = "bg-white_A700 items-end justify-end rounded-radius17 lg:pl-[60px] lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px]" >
    //     <div className="overflow-x-auto w-full">
    //         <Stack className="lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]">
    //             <Img
    //                 src="images/usecases/section2img.svg"
    //                 className="absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] right-[0] w-[100%]"
    //                 alt="shadow Three"
    //             />
    //             <Stack
    //             className="absolute bg-cover bg-repeat lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] right-[0] w-[100%]"
    //             style={{
    //               backgroundImage: "url('images/img_group3.png')",
    //             }}
    //           >
    //             <Img
    //               src="images/img_newmacbookpro_423X525.png"
    //               className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] right-[0] top-[6px] w-[80%]"
    //               alt="NewMacbookPro Three"
    //             />
    //           </Stack>
    //         </Stack>
    //     </div>
    //     </Column >