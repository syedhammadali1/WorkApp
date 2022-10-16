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

const SectionTwo = () => {
    return (
        <>
            <Row className='w-full grid grid-cols-2 content-center'>
                <Column className="">
                    <Button
                        className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px] bg-sky-400  "
                        styles="gradientUsecaseOne"
                    >
                        <Img
                            src="images/img_user.svg"
                            className="flex items-center justify-center"
                            alt=""
                        />
                    </Button>
                    <Column className="font-almarai">
                        <Column className="">
                            <Column className="">
                                <Text
                                    className="ManagingTeams mt-4"
                                    as="h3"
                                    variant="h3"
                                >
                                    <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                        Managing Teams using <br />
                                    </span>
                                    <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                        WorqApp
                                    </span>
                                </Text>
                            </Column>
                        </Column>
                    </Column>
                    <Row className="font-nunitosans items-end lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[56%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Chat group for daily communication
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[76%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark One"
                        />
                        <Text
                            className="font-normal leading-[125.00%] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_900 w-[90%]"
                            as="h5"
                            variant="h5"
                        >
                            Weekly Zoom meetings (Zoom embedded in WorqApp,
                            trackable actions and printable meeting minutes{" "}
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[84%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Two"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Minutes of all Management meetings saved in one place
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[79%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Three"
                        />
                        <Text
                            className="rowcheckmark_three"
                            as="h5"
                            variant="h5"
                        >
                            List of all Tasks (Status, Attachments and Due Dates
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-end w-[100%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Four"
                        />
                        <Text
                            className="rowcheckmark_three"
                            as="h5"
                            variant="h5"
                        >
                            All documents a to a team in one place
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[78%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Five"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Intelligent nudges to create individual accountability
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[46%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Six"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            OKRs and Weekly Check-ins
                        </Text>
                    </Row>
                </Column>
                <Column className="bg-white_A700 items-end justify-end lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] rounded-radius17 ">
                    <div className="lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] overflow-x-auto w-[99%]">
                        <Stack className="lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]">
                            <Img
                                src="images/main.png"
                                className="absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] right-[0] w-[100%]"
                                alt="shadow Three"
                            />
                            <Stack
                                className="absolute bg-cover bg-repeat lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] right-[0] w-[100%]"
                                style={{
                                    backgroundImage: "url('images/img_group3.png')",
                                }}
                            >
                                <Img
                                    src="images/img_newmacbookpro_423X525.png"
                                    className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] right-[0] top-[6px] w-[80%]"
                                    alt="NewMacbookPro Three"
                                />
                            </Stack>
                        </Stack>
                    </div>
                </Column>
            </Row>
        </>
    )
}

export default SectionTwo