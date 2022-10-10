import React from 'react'
import { Column, Text, Row, Img, Button, Stack, Line } from "../..";


export const UseCases = () => {
    return (
        <>
            <Row className="items-start justify-evenly w-[100%]" restProps={{ id: "usecase" }} >
                <Column className="justify-start w-[54%]">
                    <Row className="font-almarai items-end w-[21%]">
                        <Text
                            className="font-bold text-gray_901 w-[auto]"
                            as="h6"
                            variant="h6"
                        >
                            USE CASES
                        </Text>
                        <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[36%]" />
                    </Row>
                    <Text
                        className="font-almarai font-bold leading-[125.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-bluegray_900 w-[53%]"
                        as="h2"
                        variant="h2"
                    >
                        <span className="text-pink_400 lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            Accelerate
                        </span>
                        <span className="text-bluegray_900 lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                            {" "}
                            your Organization
                        </span>
                    </Text>
                    <Text
                        className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowforever1"
                        as="h5"
                        variant="h5"
                    >
                        Achieve financial results and business goals with clarity and
                        measurable actions
                    </Text>
                    <Column className="bg-pink_400 justify-end lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[81%]">
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
                    <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[72%]">
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
                    <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[81%]">
                        <Text
                            className="absolute bottom-[0] font-bold font-productsans right-[4%] text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                        >
                            View more Cases
                        </Text>
                        <Button
                            className="absolute font-almarai font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center top-[0] w-[100%]"
                            variant="FillGray902"
                        >
                            View More Cases
                        </Button>
                    </Stack>
                    
                </Column>
                <Img
                    src="images/img_image6.png"
                    className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[46%]"
                    alt="imageSix"
                />
            </Row>
        </>
    )
}
