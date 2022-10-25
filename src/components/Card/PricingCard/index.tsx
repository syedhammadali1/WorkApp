import React, { FC } from 'react'
import { Text, Row, Img, Button, Line } from "../..";

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
                <Text className="columnprice text-[55px] ml-5 mb-0 font-thin" as="h1" variant="h1">
                    {props.price}
                </Text>
                <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                    <Text className="rowforever1  ml-6 lg:ml-1" as="h5" variant="h5">
                        {props.priceLabel}
                    </Text>
                    <Button
                        className="font-almarai  text-[12px] px-3 xl:mt-[10px] lg:px-5 xl:px-5 2xl:px-5 3xl:px-5  lg:mt-[8px] 2xl:mt-[12px] 3xl:mt-[14px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] lg:text-center "
                        shape="CustomBorderTL4"
                        size="sm"
                        variant="FillPink900"
                    >

                        {props.priceTag}

                    </Button>
                </Row>
                <Line className="bg-bluegray_100_60 h-[1px] ml-[2px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] rotate-[180deg] w-[100%]" />
                {props.featuresList.map((value, index) => {
                    return (
                        <Row className="items-center mx-5 my-2 lg:mr-[auto] lg:mt-1 lg:w-[75%]" key={index}>
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark Two"
                            />
                            <Text className="rowcheckmark font-thin text-[15px] mx-2" as="h5" variant="h5">
                                {value}
                            </Text>
                        </Row>
                    );
                })}
                <a href="https://web.worqapp.com" className="hover:text-white">
                    <Button
                        className="font-bold ml-[10%] my-10 p-[4px] w-[80%] lg:w-[98%] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]"
                        size="lg"
                    >

                        {props.btnLabel}
                    </Button>
                </a>
            </>
        )

    } else {

        return (
            <>
                <Text className="columnfree text-[55px] ml-5 font-thin" as="h1" variant="h1">
                    {props.price}
                </Text>
                <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                    <Text className="rowforever1  ml-6 lg:ml-1" as="h5" variant="h5">
                        {props.priceLabel}
                    </Text>
                    <Button
                        className="font-almarai  px-3 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] lg:text-center lg:w-[23%]"
                        shape="CustomBorderTL4"
                        size="sm"
                        variant="FillGray900"
                    >
                        {props.priceTag}
                    </Button>
                </Row>
                <Line className="bg-bluegray_100_60 h-[1px] ml-[2px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] rotate-[180deg] w-[100%]" />
                {props.featuresList.map((value, index) => {
                    return (
                        <Row className="items-center mx-5 my-2 lg:mr-[auto] lg:mt-1 lg:w-[75%]" key={index}>
                            <Img
                                src="images/img_checkmark_24X24.svg"
                                className="checkmark_One"
                                alt="checkmark One"
                            />
                            <Text className="rowcheckmark font-thin text-[15px] mx-2" as="h5" variant="h5">
                                {value}
                            </Text>
                        </Row>
                    );
                })}

                <a href="https://web.worqapp.com" className="hover:text-bluegray_900">
                    <Button
                        className="font-bold ml-[10%] my-10 p-[4px] w-[80%] lg:w-[98%] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] "
                        size="lg"
                        variant="OutlineBluegray900"
                    >

                        {props.btnLabel}
                    </Button>
                </a>
            </>
        )
    }
}
