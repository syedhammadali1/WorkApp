import React from "react";
import { Column } from "../components";
import { Layout } from "../components/Layouts/Layout";
import SectionOne from "../components/Section/Home/SectionOne";


const Home = () => {
  return (
    <>
      <Layout>
        <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] w-[98%]">
          <SectionOne></SectionOne>
        </Column>
      </Layout>
    </>
  );
};

export default Home;
