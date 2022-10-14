import React, { FC } from 'react'
import { Column, Text } from "../..";

interface Props {
    title?: {
        value?: string,
        className?: string
    }
    description?: {
        value?: string,
        className?: string
    }
    isActive?: boolean
    className?: string
}

const UsecaseButton: FC<Props> = ({ title, description, isActive = false, className }: Props) => {
    return (
        <Column className={(isActive ? "bg-pink_400" : "bg-gray_100 ") + className + "whitespace-pre-line"}>
            <Text
                className={title?.className + " whitespace-pre-line"}
                as="h3"
                variant="h3"
            >
                {title?.value}
            </Text>
            <Text
                className={description?.className + " whitespace-pre-line"}
                as="h5"
                variant="h5"
            >
                {description?.value}
            </Text>
        </Column>
    )
}

export default UsecaseButton