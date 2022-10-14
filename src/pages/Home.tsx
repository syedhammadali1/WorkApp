import React from "react";
import { Column, Layout, Enterprise, Features, Pricing, SectionOne, Testimonial, UseCases } from "../components/index";


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
            {/* <Enterprise /> */}
          </Column>


        </Column>
      </Layout>
    </>
  );
};

export default Home;
