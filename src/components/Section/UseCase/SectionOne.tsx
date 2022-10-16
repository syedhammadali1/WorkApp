import React from 'react'
import {
    Column,
    Row,
    Img,
    Text,
    Button,
    Stack,

} from "../..";

const SectionOne = () => {
    return (
        <>
            <Row className="w-full grid grid-cols-2 content-center">
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
                    <Stack className="lg:h-[356px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] ">
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


        </>
    )
}

export default SectionOne