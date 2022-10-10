import React from "react";
import { Link } from "react-router-dom";

import { Column, Text, Row, Img, Button, Stack, Line, List } from "../components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import SectionOne from "../components/Section/Home/SectionOne";

const Home = () => {
  return (
    <>
      <Column className="bg-white_A700 items-center justify-start mx-[auto] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
        <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] w-[98%]">
          <Header></Header>

          <SectionOne></SectionOne>


          <Footer className="font-almarai lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] w-[91%]" />

        </Column>
      </Column>
    </>
  );
};

export default Home;
