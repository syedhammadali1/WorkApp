import React, { FC } from 'react'
import {
    Column,
    Row,
    Img,
    Text,
    Button,
    Stack,
} from "../../..";
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
        <Row className='w-full grid grid-cols-2 content-center mt-40'>
            <Column className={opposite ? 'order-2 pl-[10%] ' : ' ' + ' my-[auto]'}>
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
                                <div className={"col-start-2 col-end-12 " + (opposite ? " -ml-4" : "-ml-6")}>
                                    <Text className="font-normal my-[auto] font-nunitosans  not-italic text-bluegray_900 " as="h5" variant="h5">
                                        {value}
                                    </Text>
                                </div>
                            </div>
                        </>
                    })

                }
            </Column>

            {imageColumn}
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