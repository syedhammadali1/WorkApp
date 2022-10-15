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

const SectionSix = () => {
    return (
        <>
            <Row>
                <Column className="w-[50%]">
                    <Button className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:mt-[105px] xl:mt-[132px] 2xl:mt-[149px] 3xl:mt-[178px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]">
                        <Img
                            src="images/img_search.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="search"
                        />
                    </Button>
                    <Text
                        className="font-almarai leading-[142.00%] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_900 w-[72%]"
                        as="h3"
                        variant="h3"
                    >
                        Individual productivity using WorqApp
                    </Text>
                    <Text
                        className="font-normal font-nunitosans leading-[125.00%] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_700 w-[85%]"
                        as="h5"
                        variant="h5"
                    >
                        WorqApp’s Virtual Assistant and Task Manager (soon to be
                        an integrated calendar view) helps everyone in the
                        organization to improve their personal productivity
                    </Text>
                    <Row className="font-nunitosans items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[97%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Twelve"
                        />
                        <Text
                            className="font-normal leading-[125.00%] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[3px] not-italic text-bluegray_900 w-[93%]"
                            as="h5"
                            variant="h5"
                        >
                            Tasks (today, Tomorrow, This Week, High Impact Tasks,
                            Overdue tasks and personal folders for tasks)
                            Reminders for daily schedule, overdue tasks and nudges
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Thirteen"
                        />
                        <Text
                            className="rowcheckmark_thirteen"
                            as="h5"
                            variant="h5"
                        >
                            Individual Goals/ OKRs
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[26%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Fourteen"
                        />
                        <Text
                            className="font-normal lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                        >
                            Secure Notes
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[85%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark Fifteen"
                        />
                        <Text
                            className="font-normal leading-[125.00%] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] not-italic text-bluegray_900 w-[91%]"
                            as="h5"
                            variant="h5"
                        >
                            Calendar for an integrated view and time-boxing
                            Insights such as Leadership content.
                        </Text>
                    </Row>
                </Column>

                    <Column className="bg-white_A700 items-end justify-end lg:mr-[29px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] lg:mt-[129px] xl:mt-[161px] 2xl:mt-[182px] 3xl:mt-[218px] lg:pl-[22px] xl:pl-[28px] 2xl:pl-[32px] 3xl:pl-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] rounded-radius17 w-[50%]">
                        <div className="lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] overflow-x-auto w-[99%]">
                            <Stack className="lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] w-[100%]">
                                <Img
                                    src="images/img_shadow_2.png"
                                    className="absolute lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] right-[0] w-[100%]"
                                    alt="shadow Four"
                                />
                                <Stack
                                    className="absolute bg-cover bg-repeat lg:h-[345px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] right-[0] w-[100%]"
                                    style={{
                                        backgroundImage: "url('images/img_group7.png')",
                                    }}
                                >
                                    <Img
                                        src="images/img_newmacbookpro_2.png"
                                        className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] right-[0] top-[0] w-[84%]"
                                        alt="NewMacbookPro Five"
                                    />
                                </Stack>
                            </Stack>
                        </div>
                    </Column>

            </Row>
        </>
    )
}

export default SectionSix