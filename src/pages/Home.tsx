import React from "react";
import { Column, Layout, Enterprise, Features, Pricing, HomeSectionOne, Testimonial, UseCases } from "../components/index";


const Home = () => {
  return (
    <>
      <Layout>
        <Column className="justify-start  w-[100%]">
          <HomeSectionOne />
          <Column className="font-almarai justify-start p-3 lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[193px] w-[100%] mx-[auto]">
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
