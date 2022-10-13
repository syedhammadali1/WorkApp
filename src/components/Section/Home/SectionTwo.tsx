import React from 'react'
import { Column, Text, Row, Img, Line, List } from "../..";

const SectionTwo = () => {
  return (
    <>
      {/* working  */}
      <Row className="items-end 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[13%]">
        <Text className="rowfeatures" as="h6" variant="h6">
          Testimonial
        </Text>
        <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[33%]" />
      </Row>
      <Row className="items-start justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[94%]">
        <Text className="rowwhattheysaya" as="h2" variant="h2">
          What they say about us
        </Text>
        <Img
          src="images/img_group27422.svg"
          className="lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[14%]"
          alt="Group27422"
        />
      </Row>
      <Row className="items-start justify-between lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[93%]">
        <Img
          src="images/img_arrow6.svg"
          className="lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] w-[12%]"
          alt="ArrowSeven"
        />
        <List
          className="lg:gap-[40px] xl:gap-[50px] 2xl:gap-[57px] 3xl:gap-[68px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[85%]"
          orientation="horizontal"
        >
          <Column className="listavatar">
            <Img
              src="images/img_avatar.png"
              className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
              alt="Avatar"
            />
            <Text
              className="font-normal font-nunitosans leading-[125.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-white_A700 w-[99%]"
              as="h5"
              variant="h5"
            >
              Transforming the workforce to eliminate all inefficiencies
              by enabling focus on high value tasks
            </Text>
            <Text
              className="font-almarai font-bold lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Name
            </Text>
          </Column>
          <Column className="bg-gray_50 border border-bluegray_100 border-solid justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius17 w-[100%]">
            <Img
              src="images/img_avatar_64X64.png"
              className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
              alt="Avatar One"
            />
            <Text className="Quote_One" as="h5" variant="h5">
              Transforming the workforce to eliminate all inefficiencies
              by enabling focus on high value tasks
            </Text>
            <Text className="Source_One" as="h5" variant="h5">
              Name
            </Text>
          </Column>
          <Column className="bg-gray_50 border border-bluegray_100 border-solid justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius17 w-[100%]">
            <Img
              src="images/img_avatar_1.png"
              className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
              alt="Avatar Two"
            />
            <Text className="Quote_One" as="h5" variant="h5">
              Transforming the workforce to eliminate all inefficiencies
              by enabling focus on high value tasks
            </Text>
            <Text className="Source_One" as="h5" variant="h5">
              Name
            </Text>
          </Column>
        </List>
      </Row>
    </>
  )
}

export default SectionTwo