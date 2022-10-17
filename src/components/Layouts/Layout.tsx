import React, { FC } from 'react'
import { Column, Header, Footer } from "../../components/index";


interface Props {
    children?: any
    className?: string
}

export const Layout: FC<Props> = (props) => {
    return (
        <>
            <Column className={"bg-white_A700 items-center justify-start mx-[auto] p-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%] " + props?.className}>
                <Header />
                {props.children}
            </Column>
            <Footer className="font-almarai w-[100%]" />
        </>
    )
}
