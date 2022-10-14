import React, { FC } from 'react'
import { Column } from '../../Column';
import { Img } from '../../Img';
import { Text } from '../../Text';


interface Props {
    Img?: {
        src?: string;
        className?: string;
    },
    TextOne?: {
        innerText?: string;
        className?: string;
    },
    TextTwo?: {
        innerText?: string;
        className?: string;
    },
    restProps?: any;
}

export const FeatureCard: FC<Props> = (props) => {
    return (
        <>
            <Img
                src={props.Img?.src}
                className={props.Img?.className}
                alt="checkmark"
            />
            <Text
                className={props.TextOne?.className}
                as="h4"
                variant="h4"
            >
                {props.TextOne?.innerText}
            </Text>
            <Text className={props.TextTwo?.className} as="h5" variant="h5">
                {props.TextTwo?.innerText}
            </Text>
        </>

    )
}

interface MobProps {
    Img?: {
        src?: string;
        className?: string;
    },
    TextOne?: {
        innerText?: string;
        className?: string;
    },
    TextTwo?: {
        innerText?: string;
        className?: string;
    },
    className?: string;
    restProps?: any;
}
export const MobileFeatureCard: FC<MobProps> = (props) => {
    return (
        <>
            <Column className={props.className}>
                <Img
                    src={props.Img?.src}
                    className={props.Img?.className + " w-10 h-10 mx-3 mt-6"}
                    alt="checkmark"
                />
                <Text
                    className={props.TextOne?.className + " font-almarai whitespace-pre mx-3 mt-3 w-[auto]"}
                    as="h4"
                    variant="h4"
                >
                    {props.TextOne?.innerText}
                </Text>
                <Text className={props.TextTwo?.className + " font-normal font-nunitosans whitespace-pre-line px-3 py-3"} as="h5" variant="h5">
                    {props.TextTwo?.innerText}
                </Text>
            </Column>
        </>

    )
}
