import React, { FC } from 'react'

import { Column, Text, List } from "../..";
import { PricingCard } from '../../Card/PricingCard';

interface Props { }

export const Pricing: FC<Props> = (props) => {
    return (
        <>
            <Text
                className="font-bold mx-auto] mx-[auto] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] text-bluegray_900 w-[auto]"
                as="h2"
                variant="h2"
                restProps={{ id: "pricing" }}
            >
                Pricing
            </Text>

            <List
                className="lg:gap-[44px] xl:gap-[55px] 2xl:gap-[62px] 3xl:gap-[74px] grid grid-cols-2 min-h-[auto]  mx-auto lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[84%]"
                orientation="horizontal"
            >
                <Column className="listfree">
                    <PricingCard for='free' price='Free' priceLabel='Forever' priceTag='Personal'
                        btnLabel="Choose Plan"
                        featuresList={[
                            'Unlimited personal chats',
                            'Unlimited WorqRooms with embedded work tools',
                            'Smart Task Management in WorqRooms',
                            'Virtual Assistant with Smart Nudges',
                            'Productivity Content in Virtual Assistant',
                            'Sign up using free apps on App Store or Google Play',
                        ]} />
                </Column>

                <Column className="bg-white_A700 border border-bluegray_400_47 border-solid justify-center lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius12 w-[100%]">
                    <PricingCard for='paid' price='$8.99' priceLabel='Per user, per month' priceTag='For Teams & Businesses'
                        btnLabel="Choose Plan"
                        featuresList={[
                            'WorqSpace for your team or business',
                            'Feeds and Web Management Portal',
                            'Meetings Management with Zoom integration',
                            'Product Training',
                            'Priority Support Channels',
                            'All existing and coming-soon features for business users exclusively',
                        ]} />
                </Column>
            </List>
        </>
    )
}
