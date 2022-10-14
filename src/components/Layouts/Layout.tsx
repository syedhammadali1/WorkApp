import React, { FC } from 'react'
import { Column, Header, Footer } from "../../components/index";


interface Props {
    children?: any
}

export const Layout: FC<Props> = (props) => {
    return (
        <Column className="bg-white_A700 items-center justify-start mx-[auto] p-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
            <Header />
            {props.children}
            <Footer className="font-almarai lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] lg:w-[91%] w-[100%]" />
        </Column>
    )
}
