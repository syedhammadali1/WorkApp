import React, { FC } from 'react'
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
