import React from 'react'
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  CheckBox,
  Layout,
} from "../..";

const SectionThree = () => {
  return (
    <>
      {/* <Stack className="lg:h-[412px] xl:h-[516px] 2xl:h-[580px] 3xl:h-[696px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
        <Stack className="absolute lg:h-[412px] xl:h-[516px] 2xl:h-[580px] 3xl:h-[696px] w-[100%]">
          <Img
            src="images\usecases\Frame 5.png"
            className="absolute  w-[100%]"
            alt="imageTen Two"
          />
        </Stack>


        <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[9%] my-[auto] w-[18%] font-bold ">
          <Text
            className="text-bluegray_900 w-[auto] font-bold font-almarai"
            as="h2"
            variant="h2"
          >
            Get the app now
          </Text>


          <Button
            className="font-almarai font-bold px-[20px] py-[10px] mt-4 w-[59%]"
            shape="RoundedBorder5"
            size=""
            variant="FillPink400"
          >
            Visit Store
          </Button>

        </Column>
      </Stack> */}

      <Row className='grid grid-cols-1 lg:grid-cols-3 w-[100%]'>
        <Column className='lg:col-span-1 bg-white'>
          <div className='lg:my-auto mx-auto mt-9 text-center lg:text-left lg:px-[25%]'>

            <Text
              className="text-bluegray_900 w-[auto] text-4xl 3xl:text-[55px] xl:text-[40px] font-bold font-almarai"
              as="h2"
              variant="h2"
            >
              Get the app now
            </Text>


            <Button
              className="font-almarai font-bold px-[20px] py-[10px] mt-4 w-[63%]"
              shape="RoundedBorder5"
              size=""
              variant="FillPink400"
            >
              Visit Store
            </Button>

          </div>

        </Column>
        <Column className='lg:col-span-2'>
          <Img
            src="images\usecases\Frame_5.png"
            className="w-[100%]"
            alt="imageTen Two"
          />
        </Column>
      </Row>






    </>
  )
}

export default SectionThree