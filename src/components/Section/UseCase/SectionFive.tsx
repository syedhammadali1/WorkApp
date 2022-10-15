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

const SectionFive = () => {
    return (
        <>
            <Row>

                <Column className="bg-white_A700 justify-start lg:mt-[186px] xl:mt-[233px] 2xl:mt-[262px] 3xl:mt-[314px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[25px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] rounded-radius17 w-[50%]">
                    <div className="lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] overflow-x-auto w-[100%]">
                        <Stack className="lg:h-[294px] xl:h-[368px] 2xl:h-[414px] 3xl:h-[496px] w-[100%]">
                            <Img
                                src="images/img_shadow_413X625.png"
                                className="test_shadow"
                                alt="shadow One"
                            />
                            <Stack
                                className="bg-cover bg-repeat lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] test_shadow"
                                style={{
                                    backgroundImage: "url('images/img_group90.png')",
                                }}
                            >
                                <Img
                                    src="images/img_newmacbookpro_361X538.png"
                                    className="NewMacbookPro"
                                    alt="NewMacbookPro One"
                                />
                            </Stack>
                        </Stack>
                    </div>
                </Column>

                <Column className="w-[50%]">
                    <Button className="flex lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-center lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[57px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]">
                        <Img
                            src="images/img_map.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="map"
                        />
                    </Button>
                    <Column className="font-almarai items-center justify-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]">
                        <Column className="justify-start w-[100%]">
                            <Text
                                className="leading-[142.00%] text-bluegray_900 w-[97%]"
                                as="h3"
                                variant="h3"
                            >
                                Company-wide Engagement and Alignment using WorqApp
                            </Text>
                            <Row className="font-nunitosans items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[75%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyThree"
                                />
                                <Text className="rowcheckmark" as="h5" variant="h5">
                                    Post to create engagement and drive performance
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[73%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyFour"
                                />
                                <Text
                                    className="mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowcheckmark_thirteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Posts to drive alignment to Mission and Strategy
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[48%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyFive"
                                />
                                <Text
                                    className="rowcheckmark_thirteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Posts to build common values
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[88%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentySix"
                                />
                                <Text
                                    className="font-normal leading-[125.00%] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_900 w-[92%]"
                                    as="h5"
                                    variant="h5"
                                >
                                    Posts to initiate discussions in order to get
                                    insights from the whole organization
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[60%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentySeven"
                                />
                                <Text
                                    className="rowcheckmark_three"
                                    as="h5"
                                    variant="h5"
                                >
                                    All documents a to a team in one place
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyEight"
                                />
                                <Text className="rowcheckmark" as="h5" variant="h5">
                                    Confidential polls to encourage people to speak up
                                    about key issues.
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark TwentyNine"
                                />
                                <Text className="rowcheckmark" as="h5" variant="h5">
                                    Post to celebrate organization and individual
                                    achievments
                                </Text>
                            </Row>
                            <Row className="font-nunitosans items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[90%]">
                                <Img
                                    src="images/img_checkmark1.svg"
                                    className="checkmark"
                                    alt="checkmark Thirty"
                                />
                                <Text
                                    className="rowcheckmark_eighteen"
                                    as="h5"
                                    variant="h5"
                                >
                                    Posts to create clear boundaries and manage risks
                                    (rules that must be followed e.g. anti-corruption
                                    policies)
                                </Text>
                            </Row>
                        </Column>
                    </Column>
                </Column>
            </Row>
        </>
    )
}

export default SectionFive