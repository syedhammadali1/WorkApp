import React, { FC } from 'react'
import { Column, Text, Button } from "../..";


interface Props { }

export const Enterprise: FC<Props> = (props) => {

  return (
    <>
      <Column className="hidden lg:flex font-poppins mx-auto lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px]  xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] lg:w-[90%]">
        <Column
          className=" bg-cover bg-repeat-round font-almarai items-center justify-end lg:p-[43px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[100%]"
          restProps={{
            style: {
              backgroundImage: "url('images/img_group124.svg')",
            }
          }}
        >
          <Text className="columnenterpriseexec_two " as="h2" variant="h2">
            Enterprise Execution
            <br />
            Effectively
          </Text>
          <Button className="font-bold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[17%]">
            Contact Us
          </Button>
        </Column>

      </Column>


      <div className='lg:hidden font-almarai bg-cover rounded-radius8 bg-repeat-round text-center content-center py-10 mt-6' style={{ backgroundImage: "url('images/subtract.svg')" }}>

        <Text className="font-bold text-white text-[26px] text-center" as="h2" variant="h2">
          Enterprise Execution
          <br />
          Effectively
        </Text>


        <Button className="font-bold text-center mt-4 ">
          Contact Us
        </Button>
      </div>
    </>
  )
}

export default Enterprise