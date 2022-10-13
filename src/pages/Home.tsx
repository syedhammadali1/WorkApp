import React from "react";
import { Column } from "../components";
import { Layout } from "../components/Layouts/Layout";
import Enterprise from "../components/Section/Home/Enterprise";
import { Features } from "../components/Section/Home/Features";
import { Pricing } from "../components/Section/Home/Pricing";
import SectionOne from "../components/Section/Home/SectionOne";
import { Testimonial } from "../components/Section/Home/Testimonial";
import { UseCases } from "../components/Section/Home/UseCases";



const Home = () => {
  return (
    <>
      <Layout>
        <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] w-[100%]">
          <SectionOne />
          <Column className="font-almarai justify-start lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[193px] w-[92%] mx-[auto]">
            <UseCases />
            <Features />
            <Pricing />
            <Testimonial />
            <Enterprise />
          </Column>
        </Column>
      </Layout>
    </>
  );
};

export default Home;
