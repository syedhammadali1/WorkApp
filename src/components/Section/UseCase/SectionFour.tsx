import React from 'react'
import {
    Column,
    Row,
    Img,
    Text,
    Button,
    Stack,
    Line,
    CheckBox,
    Layout,
} from "../..";

const SectionFour = () => {
    return (
        <>
            <Row>
                <Column className="w-[50%]">
                    <Button className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:mt-[141px] xl:mt-[177px] 2xl:mt-[199px] 3xl:mt-[238px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]">
                        <Img
                            src="images/img_checkmark_61X61.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="checkmark Seven"
                        />
                    </Button>
                    <Text
                        className="font-almarai leading-[142.00%] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_900 w-[83%]"
                        as="h3"
                        variant="h3"
                    >
                        Talent Development using WorqApp
                    </Text>
                    <Column className="font-nunitosans items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[87%]">
                        <Column className="justify-start w-[100%]">
                            <Row className="items-start w-[84%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Eight"
                                />
                                <Text
                                    className="font-normal leading-[125.00%] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_900 w-[90%]"
                                    as="h5"
                                    variant="h5"
                                >
                                    Leaders on all levels are responsible to set clear
                                    goals and improvement plans
                                </Text>
                            </Row>
                            <Row className="items-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[49%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Nine"
                                />
                                <Text className="rowcheckmark" as="h5" variant="h5">
                                    Individual OKRs for goals.
                                </Text>
                            </Row>
                            <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Ten"
                                />
                                <Text
                                    className="rowcheckmark_three"
                                    as="h5"
                                    variant="h5"
                                >
                                    Minutes for montly check-ins and annual review meetings.
                                </Text>
                            </Row>
                            <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[92%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Eleven"
                                />
                                <Text
                                    className="rowcheckmark_three"
                                    as="h5"
                                    variant="h5"
                                >
                                    Chat group to motivate, followup and share
                                    progress.{" "}
                                </Text>
                            </Row>
                        </Column>
                    </Column>
                </Column>

                <Column className="bg-white_A700 items-center justify-start lg:mr-[29px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] lg:mt-[100px] xl:mt-[126px] 2xl:mt-[142px] 3xl:mt-[170px] rounded-radius17 w-[50%]">
                    <div className="overflow-x-auto w-[100%]">
                        <Stack className="lg:h-[429px] xl:h-[536px] 2xl:h-[603px] 3xl:h-[723px] w-[100%]">
                            <Column
                                className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end left-[0] w-[100%]"
                                style={{
                                    backgroundImage:
                                        "url('images/img_group27430.png')",
                                }}
                            >
                                <Stack
                                    className="bg-cover bg-repeat lg:h-[373px] xl:h-[467px] 2xl:h-[525px] 3xl:h-[630px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[100%]"
                                    style={{
                                        backgroundImage:
                                            "url('images/img_group8.png')",
                                    }}
                                >
                                    <Img
                                        src="images/img_newmacbookpro_456X713.png"
                                        className="absolute lg:h-[325px] xl:h-[406px] 2xl:h-[457px] 3xl:h-[548px] inset-x-[0] mx-[auto] top-[0] w-[77%]"
                                        alt="NewMacbookPro Four"
                                    />
                                </Stack>
                            </Column>
                            <Img
                                src="images/img_image10_646X457.png"
                                className="absolute bottom-[0] lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] right-[0] w-[87%]"
                                alt="imageTen One"
                            />
                        </Stack>
                    </div>
                </Column>

            </Row>
        </>
    )
}

export default SectionFour