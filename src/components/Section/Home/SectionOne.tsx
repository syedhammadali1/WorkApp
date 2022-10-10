import React from 'react'
import { Column, Text, Row, Img, Button, Stack, Line, List } from "../../../components";

const SectionOne = () => {
  return (
    <>
      <Text
        className="font-almarai xl:text-[64px] leading-[142.00%] ml-[auto] mr-[auto] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-bluegray_900 text-center w-[50%]"
        as="h1"
        variant="h1"
      >
        <span className="text-bluegray_900 font-bold lg:text-[45px] xl:text-[62px] 2xl:text-[64px] 3xl:text-[76px]">
          Enterprise Execution
          <br />
        </span>
        <span className="text-pink_400 font-bold lg:text-[45px] xl:text-[62px] 2xl:text-[64px] 3xl:text-[76px]">
          Effectively
        </span>
      </Text>
      <Text
        className=" xl:text-[16px] ml-[auto] mr-[auto] text-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rowforever1"
        as="h5"
        variant="h5"
      >
        Transforming teams and businesses to drive alignment, accountability
        and productivity with effective execution
      </Text>
      <Row className="font-almarai items-center justify-center ml-[auto] mr-[auto]    lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius5 w-[22%]">
        <Button className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]">
          Try it for free
        </Button>
        <Button
          className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
          variant="OutlineBluegray900"
        >
          Watch video
        </Button>
      </Row>
      <Column
        className="bg-cover bg-repeat items-center justify-start lg:ml-[177px] xl:ml-[221px] 2xl:ml-[249px] 3xl:ml-[298px] lg:mt-[54px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[65%]"
        restProps={{
          style: { backgroundImage: "url('images/img_group27357.png')" }
        }}
      >
        <Column
          className="bg-cover bg-repeat items-center justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]"
          restProps={{
            style: { backgroundImage: "url('images/img_group8.png')" }
          }}
        >
          <Stack
            className="bg-cover bg-repeat lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:px-[101px] xl:px-[127px] 2xl:px-[143px] 3xl:px-[171px] w-[78%]"
            restProps={{
              style: { backgroundImage: "url('images/img_group9.png')" }
            }}
          >
            <Img
              src="images/img_play.svg"
              className="absolute lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] inset-x-[0] mx-[auto] top-[222px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="play"
            />
          </Stack>
        </Column>
      </Column>
    </>


  )
}

export default SectionOne