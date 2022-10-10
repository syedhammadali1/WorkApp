import React from "react";

import { Column, Text } from "../components";
import { Layout } from "../components/Layouts/Layout";

const NotFound = () => {
  return (
    <>
      <Layout>
        <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] w-[98%]">
          <Text
            className="font-almarai xl:text-[64px] leading-[142.00%] ml-[auto] mr-[auto] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-bluegray_900 text-center w-[50%]"
            as="h1"
            variant="h1"
          >
            <span className="text-bluegray_900 font-bold lg:text-[45px] xl:text-[62px] 2xl:text-[64px] 3xl:text-[76px]">
              404
              <br />
            </span>
            <span className="text-pink_400 font-bold lg:text-[45px] xl:text-[62px] 2xl:text-[64px] 3xl:text-[76px]">
              Not Found
            </span>
          </Text>
        </Column>
      </Layout>
    </>
  );
};

export default NotFound;
