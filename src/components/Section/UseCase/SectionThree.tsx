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

const SectionThree = () => {
    return (
        <>
            <Row>

                <Column className="bg-white_A700 justify-start lg:mt-[132px] xl:mt-[166px] 2xl:mt-[187px] 3xl:mt-[224px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[25px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] rounded-radius17 w-[50%]">
                    <div className="lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] overflow-x-auto w-[100%]">
                        <Stack className="lg:h-[294px] xl:h-[368px] 2xl:h-[414px] 3xl:h-[496px] w-[100%]">
                            <Img
                                src="images/img_shadow.png"
                                className="test_shadow"
                                alt="shadow"
                            />
                            <Stack
                                className="bg-cover bg-repeat lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] test_shadow"
                                style={{
                                    backgroundImage: "url('images/img_group4.png')",
                                }}
                            >
                                <Img
                                    src="images/img_newmacbookpro.png"
                                    className="NewMacbookPro"
                                    alt="NewMacbookPro"
                                />
                            </Stack>
                        </Stack>
                    </div>
                </Column>
                <Column className="w-[50%]">
                    <Button className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[103px] xl:mt-[128px] 2xl:mt-[145px] 3xl:mt-[174px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]">
                        <Img
                            src="images/img_refresh.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="refresh"
                        />
                    </Button>
                    <Column className="font-almarai items-center justify-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]">
                        <Column className="justify-start w-[100%]">
                            <Text
                                className="leading-[142.00%] text-bluegray_900 w-[87%]"
                                as="h3"
                                variant="h3"
                            >
                                Running High Impact initiatives using WorqApp
                            </Text>
                            <Row className="font-nunitosans items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[67%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Sixteen"
                                />
                                <Text
                                    className="mt-[3px] rowcheckmark_thirteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Use OKRs for High Impact/ Key initiatives{" "}
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[89%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Seventeen"
                                />
                                <Text
                                    className="font-normal leading-[125.00%] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_900 w-[91%]"
                                    as="h5"
                                    variant="h5"
                                >
                                    Embedded Meeting management for biweekly progress
                                    meetings (zoom, meeting minutes and Actionable
                                    Items)
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Eighteen"
                                />
                                <Text
                                    className="rowcheckmark_eighteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Embedded Task management (date, delegate, status,
                                    reminders, comments, documents)
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[72%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Nineteen"
                                />
                                <Text
                                    className="rowcheckmark_three"
                                    as="h5"
                                    variant="h5"
                                >
                                    Chat Group to motivated and share progress
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[77%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Twenty"
                                />
                                <Text
                                    className="rowcheckmark_three"
                                    as="h5"
                                    variant="h5"
                                >
                                    Kanban board and Task list to manage progress{" "}
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[73%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyOne"
                                />
                                <Text
                                    className="font-normal leading-[125.00%] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_900 w-[89%]"
                                    as="h5"
                                    variant="h5"
                                >
                                    Nudges to increase accountability and reduce
                                    procrastination
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyTwo"
                                />
                                <Text
                                    className="rowcheckmark_thirteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Document and media
                                </Text>
                            </Row>
                        </Column>
                    </Column>
                </Column>
            </Row>

        </>
    )
}

export default SectionThree