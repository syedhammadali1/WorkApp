import React, { FC } from 'react'
import { Column, Text, Row, Img, Button, Line } from "../..";

interface Props {
    for?: string;
    price?: string;
    priceLabel?: string;
    priceTag?: string;
    featuresList: Array<string>;
    btnLabel: string;
}

export const PricingCard: FC<Props> = (props) => {
    if (props.for === 'paid') {
        return (
            <>
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
                    {props.featuresList.map((value, index) => {
                        return (
                            <Row className="items-center mt-4 w-[79%]" key={index}>
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
                    })}
                    <Button
                        className="font-bold lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                        size="lg"
                    >
                        {props.btnLabel}
                    </Button>
                </Column>
            </>
        )

    } else {

        return (
            <>
                <Text className="columnfree" as="h1" variant="h1">
                    {props.price}
                </Text>
                <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                    <Text className="rowforever1" as="h5" variant="h5">
                        {props.priceLabel}
                    </Text>
                    <Button
                        className="font-almarai font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
                        shape="CustomBorderTL4"
                        size="sm"
                        variant="FillGray900"
                    >
                        {props.priceTag}
                    </Button>
                </Row>
                <Line className="bg-bluegray_100_60 h-[1px] ml-[2px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] rotate-[180deg] w-[98%]" />


                {props.featuresList.map((value, index) => {
                    return (
                        <Row className="items-center mr-[auto] mt-1 w-[55%]" key={index}>
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark One"
                            />
                            <Text className="rowcheckmark" as="h5" variant="h5">
                                {value}
                            </Text>
                        </Row>
                    );
                })}

                <Button
                    className="font-bold 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[98%]"
                    size="lg"
                    variant="OutlineBluegray900"
                >
                    {props.btnLabel}
                </Button>
            </>
        )
    }
}
