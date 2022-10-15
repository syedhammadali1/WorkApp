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
            <Row className="w-[90%]">
                <Column className=" lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[50%]">
                    <Text
                        className="font-almarai leading-[108.50%] text-gray_900 w-[92%]"
                        as="h1"
                        variant="h1"
                    >
                        Collaborate with your team like never before
                    </Text>
                    <Text
                        className="font-normal font-nunitosans leading-[125.00%] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-bluegray_900 w-[100%]"
                        as="h5"
                        variant="h5"
                    >
                        Transforming teams and businesses to drive alignment,
                        accountability and productivity with effective execution
                    </Text>
                    <Button
                        className="font-almarai font-bold lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[26%]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="FillPink400"
                    >
                        Sign Up Now
                    </Button>
                </Column>

                <Column className="w-[50%]" >
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