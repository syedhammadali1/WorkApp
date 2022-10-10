import React, { FC } from 'react'
import { Column, Text, Row, Img, Button, List, Line } from "../..";

interface Props {
    for: string;
    price?: string;
    priceLabel?: string;
    priceTag?: string;
    featuresList: ;
}

export const PricingCard: FC<Props> = (props) => {
    if (props.for == 'paid') {
        return (
            <>
                <Column className="bg-white_A700 border border-bluegray_400_47 border-solid justify-center lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius12 w-[100%]">
                    <Text className="columnprice" as="h1" variant="h1">
                        {props.price}
                    </Text>
                    <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]">
                        <Text className="rowforever1" as="h5" variant="h5">
                            {props.priceLabel}
                        </Text>
                        <Button
                            className="font-almarai font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[54%]"
                            shape="CustomBorderTL4"
                            size="sm"
                            variant="FillPink900"
                        >
                            {props.priceTag}
                        </Button>
                    </Row>
                    <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[100%]">
                        <Line className="bg-bluegray_100_60 h-[1px] rotate-[180deg] w-[100%]" />
                        {/* {props.featuresList.map((value, index) => {
                            return (
                                <Row className="items-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[79%]">
                                    <Img
                                        src="images/img_checkmark_24X24.svg"
                                        className="checkmark_One"
                                        alt="checkmark Two"
                                    />
                                    <Text className="rowcheckmark" as="h5" variant="h5">
                                        {value}
                                    </Text>
                                </Row>

                            );
                        })} */}

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
            </>
        )

    } else {

        return (
            <></>
        )
    }
}
