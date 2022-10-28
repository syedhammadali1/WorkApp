
import React, { FC } from 'react'
import { Column, Header, Footer} from "../../components/index";


interface Props {
    children?: any,
    className?: string,

}

export const Layout: FC<Props> = (props) => {
    return (
        <>
            <Header />
            <Column className={"bg-white_A700 items-center justify-start mx-[auto] p-[8px]  w-[100%] lg:w-[100%] lg:px-36  " + props?.className}>
                {props.children}
            </Column>

            <Footer className="font-almarai w-[100%]" />


        </>
    )
}
