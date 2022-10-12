import React from 'react'
import { Button } from '../../Button'
import { Column } from '../../Column'
import { Stack } from '../../Stack'
import { Text } from '../../Text'

const Enterprise = () => {
  return (
    <Stack className="font-poppins mx-auto lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px]   xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] w-[90%]">
      <Column
        className="absolute bg-cover bg-repeat-round font-almarai items-center justify-end lg:p-[43px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[100%]"
        restProps={{
          style: {
            backgroundImage: "url('images/img_group124.svg')",
          }
        }}
      >
        <Text className="columnenterpriseexec_two" as="h2" variant="h2">
          Enterprise Execution
          <br />
          Effectively
        </Text>
        <Button className="font-bold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]">
          Contact Us{" "}
        </Button>
      </Column>
    </Stack>
  )
}

export default Enterprise