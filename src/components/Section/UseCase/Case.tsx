import React, { FC } from 'react'
import { Column, Text } from '../../'

interface Props {
    heading: string
    description: string
    isActive?: boolean
    restProps?: any
}

const Case: FC<Props> = ({ heading, description, isActive = false, restProps }: Props) => {
    return (
        <Column className={"justify-end w-full p-6 rounded-radius8  " + (isActive ? "bg-pink_400" : "bg-white hover:bg-gray-100")} {...restProps}>
            <Text
                className={"font-almarai w-[auto] " + (isActive ? "text-white_A700" : "text-black")}
                as="h3"
                variant="h3">
                {heading}
            </Text>
            <Text
                className={"font-normal font-nunitosans leading-[125.00%] not-italicw-full mt-2 " + (isActive ? "text-white_A700" : "text-black")}
                as="h5"
                variant="h5">
                {description}
            </Text>
        </Column>
    )
}

export default Case