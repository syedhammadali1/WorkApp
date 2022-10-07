
import { Row, Img, Text, Button } from "..";

import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Row className="font-almarai items-start w-[100%]">
        <Img
          src="images/img_worqapplogo2.png"
          className="WorqappLogoTwo"
          alt="WorqappLogoTwo"
        />
        <Text
          className="mb-[1px] mt-5 w-[auto] "
          as="a" href="#usecase"
          variant="h3"
        >
         WorqApp
        </Text>
        <Row className="items-start justify-center lg:ml-[312px] xl:ml-[390px] 2xl:ml-[429px] 3xl:ml-[390px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[29%]">
          <Link to="/">
            <Text className=" font-bold text-pink_400" as="a" href="#" variant="h5">
              Home
            </Text>
          </Link>

          <Text
            className="mb-[1px] lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[auto] "
            as="a" href="#usecase"
            variant="h5"
          >
            Use Cases
          </Text>
          <Text
            className=" lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px]"
            as="a" href="#features"
            variant="h5"
          >
            Features
          </Text>
          <Text
            className=" lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] mt-[1px] w-[auto]"
            as="a" href="#pricing"
            variant="h5"
          >
            Pricing
          </Text>
        </Row>
        <Button className="font-bold lg:ml-[289px] xl:ml-[362px] 2xl:ml-[407px] 3xl:ml-[488px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]">
          Log In
        </Button>
      </Row>
    </>
  )
}

export default Header