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

const SectionSeven = () => {
    return (
        <>
            <Row>


                <Column className="bg-white_A700 justify-end lg:mt-[138px] xl:mt-[173px] 2xl:mt-[195px] 3xl:mt-[234px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[25px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] rounded-radius17 w-[50%]">
                    <div className="lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] overflow-x-auto w-[100%]">
                        <Stack className="lg:h-[294px] xl:h-[368px] 2xl:h-[414px] 3xl:h-[496px] w-[100%]">
                            <Img
                                src="images/img_shadow_1.png"
                                className="test_shadow"
                                alt="shadow Two"
                            />
                            <Stack
                                className="bg-cover bg-repeat lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] test_shadow"
                                style={{
                                    backgroundImage:
                                        "url('images/img_group10.png')",
                                }}
                            >
                                <Img
                                    src="images/img_newmacbookpro_1.png"
                                    className="NewMacbookPro"
                                    alt="NewMacbookPro Two"
                                />
                            </Stack>
                        </Stack>
                    </div>
                </Column>
                <Column className="w-[50%]">
                    <Button className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[120px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]">
                        <Img
                            src="images/img_camera.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="camera"
                        />
                    </Button>
                    <Text
                        className="font-almarai leading-[142.00%] lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] text-bluegray_900 w-[65%]"
                        as="h3"
                        variant="h3"
                    >
                        Employee Onboarding using WorqApp
                    </Text>
                    <Text
                        className="font-normal font-nunitosans lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_700 w-[auto]"
                        as="h5"
                        variant="h5"
                    >
                        Onboarding new emplyees is easier and faster with
                        Worqapp
                    </Text>
                    <Row className="font-nunitosans items-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[78%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark ThirtyOne"
                        />
                        <Text
                            className="rowcheckmark_thirtyone"
                            as="h5"
                            variant="h5"
                        >
                            Day one for everyone starts with clarity and alignment
                            to company’s mission and objectives.
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[74%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark ThirtyTwo"
                        />
                        <Text
                            className="rowcheckmark_thirtyone"
                            as="h5"
                            variant="h5"
                        >
                            Company’s Vision, Missionand values are available in
                            WorqApp for all staff
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[73%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark ThirtyThree"
                        />
                        <Text
                            className="rowcheckmark_thirtyone"
                            as="h5"
                            variant="h5"
                        >
                            Everyone can relate to their daily work with strategic
                            Objectives of the company
                        </Text>
                    </Row>
                    <Row className="font-nunitosans items-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[78%]">
                        <Img
                            src="images/img_checkmark1.svg"
                            className="checkmark"
                            alt="checkmark ThirtyFour"
                        />
                        <Text
                            className="rowcheckmark_thirtyone"
                            as="h5"
                            variant="h5"
                        >
                            New employees can see posts about culture on the using
                            company’s culture section or Feds.
                        </Text>
                    </Row>
                </Column>
            </Row>
        </>
    )
}

export default SectionSeven