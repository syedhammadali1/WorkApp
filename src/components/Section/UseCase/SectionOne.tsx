import React, { FC } from 'react'
import {
    Column,
    Row,
    Img,
    Text,
    Button,
    Stack,

} from "../..";

interface Props { }

const SectionOne: FC<Props> = (props) => {
    return (
        <>
            <Row className="hidden lg:grid w-full grid-cols-2 content-center">
                <Column className="m-[auto] pl-[10%] self-start">
                    <Text
                        className="font-almarai leading-[108.50%] text-gray_900 "
                        as="h1"
                        variant="h1"
                    >
                        Collaborate with <br /> your team like <br /> never before
                    </Text>
                    <Text
                        className="font-normal font-nunitosans leading-[125.00%] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-bluegray_900 "
                        as="h5"
                        variant="h5"
                    >
                        Transforming teams and businesses to drive alignment,
                        accountability and productivity with effective execution
                    </Text>
                    <div className="mt-9">
                        <Button
                            className="font-almarai font-bold px-[20px] py-[10px]"
                            shape="RoundedBorder5"
                            size=""
                            variant="FillPink400"
                        >
                            Sign Up Now
                        </Button>
                    </div>
                </Column>

                <Column className="">
                    <Stack className=" lg:h-[356px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] ">
                        <Img
                            src="images/img_group27516.png"
                            className="absolute bottom-[0] lg:h-[247px] xl:h-[308px] 2xl:h-[347px] 3xl:h-[416px] right-[0] w-[87%]"
                            alt="Group27516"
                        />
                        <Img
                            src="images/img_image10.png"
                            className="absolute lg:h-[356px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] w-[100%]"
                            alt="imageTen"
                        />
                    </Stack>
                </Column>
            </Row>


            {/* mobile */}
            <Row className="lg:hidden w-full grid grid-cols-1">
                <Column className="mx-[auto] self-start">
                    <Text
                        className="font-almarai  text-gray_900 text-[35px] m-[auto] text-center"
                        as="h1"
                        variant="h1"
                    >
                        Collaborate with <br /> your team like <br /> never before
                    </Text>
                    <Text
                        className="font-normal font-nunitosans leading-[125.00%] not-italic text-bluegray_900 text-center mx-10 mt-4"
                        as="h5"
                        variant="h5"
                    >
                        Transforming teams and businesses to drive alignment,
                        accountability and productivity with effective execution
                    </Text>
                    <div className="mt-4 text-center">
                        <Button
                            className="font-almarai font-bold px-[20px] py-[10px]"
                            shape="RoundedBorder5"
                            size=""
                            variant="FillPink400"
                        >
                            Sign Up Now
                        </Button>
                    </div>
                </Column>

                <Img
                    src="/images/usecases/Framemobile16.svg"
                    className="w-[100%] mt-10"
                    alt="Group27516"
                />
            </Row>
        </>
    )
}

export default SectionOne