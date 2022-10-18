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

      <Row className='grid grid-cols-1 lg:grid-cols-3 w-[100%] mt-10 lg:mt-0'>
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