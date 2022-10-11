import React from 'react'

import { Column, Text, Row, Img, Button, List, Line } from "../..";

export const Pricing = () => {
    return (
        <>
            <Text
                className="font-bold mx-auto] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] text-bluegray_900 w-[auto]"
                as="h2"
                variant="h2"
                restProps={{ id: "pricing" }}
            >
                Pricing
            </Text>

            <List
                className="lg:gap-[44px] xl:gap-[55px] 2xl:gap-[62px] 3xl:gap-[74px] grid grid-cols-2 min-h-[auto] lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[84%]"
                orientation="horizontal"
            >
                <Column className="listfree">
                    <Text className="columnfree" as="h1" variant="h1">
                        Free
                    </Text>
                    <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                        <Text className="rowforever1" as="h5" variant="h5">
                            Forever
                        </Text>
                        <Button
                            className="font-almarai font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
                            shape="CustomBorderTL4"
                            size="sm"
                            variant="FillGray900"
                        >
                            Personal
                        </Button>
                    </Row>
                    <Line className="bg-bluegray_100_60 h-[1px] ml-[2px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] rotate-[180deg] w-[98%]" />
                    <Row className="items-center mr-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[55%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark One"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Unlimited personal chats
                        </Text>
                    </Row>
                    <Row className="items-center lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark One"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Unlimited WorqRooms with embedded work tools
                        </Text>
                    </Row>
                    <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[82%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark Two"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Smart Task Management in WorqRooms
                        </Text>
                    </Row>
                    <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark Three"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Virtual Assistant with Smart Nudges
                        </Text>
                    </Row>
                    <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[83%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark Four"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                            Productivity Content in Virtual Assistant
                        </Text>
                    </Row>
                    <Row className="items-start mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]">
                        <Img
                            src="images/img_checkmark_24X24.svg"
                            className="checkmark_One"
                            alt="checkmark Five"
                        />
                        <Text className="rowcheckmark_five" as="h5" variant="h5">
                            Sign up using free apps on App Store or Google Play
                        </Text>
                    </Row>
                    <Button
                        className="font-bold 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[98%]"
                        size="lg"
                        variant="OutlineBluegray900"
                    >
                        Choose Plan
                    </Button>
                </Column>

                <Column className="bg-white_A700 border border-bluegray_400_47 border-solid justify-center lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius12 w-[100%]">
                    <Text className="columnprice" as="h1" variant="h1">
                        $8.99
                    </Text>
                    <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]">
                        <Text className="rowforever1" as="h5" variant="h5">
                            Per user, per month
                        </Text>
                        <Button
                            className="font-almarai font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[54%]"
                            shape="CustomBorderTL4"
                            size="sm"
                            variant="FillPink900"
                        >
                            For Teams & Businesses
                        </Button>
                    </Row>
                    <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[100%]">
                        <Line className="bg-bluegray_100_60 h-[1px] rotate-[180deg] w-[100%]" />
                        <Row className="items-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[79%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Two"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                WorqSpace for your team or business
                            </Text>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark One One"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                Feeds and Web Management Portal
                            </Text>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[93%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Two One"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                Meetings Management with Zoom integration
                            </Text>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[40%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Three One"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                Product Training
                            </Text>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[57%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Four One"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                Priority Support Channels
                            </Text>
                        </Row>
                        <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[85%]">
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Five One"
                            />
                            <Text
                                className="rowcheckmark_five_one"
                                as="h5"
                                variant="h5"
                            >
                                All existing and coming-soon features for business users
                                exclusively
                            </Text>
                        </Row>
                        <Button
                            className="font-bold lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                            size="lg"
                        >
                            Choose Plan
                        </Button>
                    </Column>
                </Column>
            </List>
        </>
    )
}
