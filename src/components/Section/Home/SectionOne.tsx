import React from 'react'
import { Column, Text, Row, Img, Button, Stack, Line, List } from "../../../components";

const SectionOne = () => {
  return (
    <>
    <Text
    className="font-almarai xl:text-[64px] leading-[142.00%] lg:ml-[325px] xl:ml-[402px] 2xl:ml-[440px] 3xl:ml-[432px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-bluegray_900 text-center w-[50%]"
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
    className="lg:ml-[201px] xl:text-[16px] xl:ml-[342px] 2xl:ml-[417px] 3xl:ml-[377px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rowforever1"
    as="h5"
    variant="h5"
  >
    Transforming teams and businesses to drive alignment, accountability
    and productivity with effective execution
  </Text>
  <Row className="font-almarai items-center justify-center lg:ml-[379px] xl:ml-[564px] 2xl:ml-[534px] 3xl:ml-[641px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius5 w-[22%]">
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
  </>

 
  )
}

export default SectionOne