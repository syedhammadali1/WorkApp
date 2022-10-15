import React from "react";

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
} from "../../components";
import SectionFive from "../../components/Section/UseCase/SectionFive";
import SectionFour from "../../components/Section/UseCase/SectionFour";
import SectionOne from "../../components/Section/UseCase/SectionOne";
import SectionSeven from "../../components/Section/UseCase/SectionSeven";
import SectionSix from "../../components/Section/UseCase/SectionSix";
import SectionThree from "../../components/Section/UseCase/SectionThree";
import SectionTwo from "../../components/Section/UseCase/SectionTwo";

const UseCasesPage = () => {
  return (
    <>
      <Layout>

        <Column className=" bg-white_A700 items-center  lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius10 w-[100%]">
         
            <SectionOne></SectionOne>
         
        </Column>
        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
          <Column className="bg-gray_100 items-center justify-start 3xl:pt-[109px] lg:pt-[64px] xl:pt-[80px] 2xl:pt-[91px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[90%]">
                  <Column className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                   
                    <SectionTwo></SectionTwo>
                    <SectionThree></SectionThree>
                    <SectionFour></SectionFour>
                    <SectionFive></SectionFive>
                    <SectionSix></SectionSix>
                    <SectionSeven></SectionSeven>

                  </Column>

                </Row>
                <Stack className="lg:h-[412px] xl:h-[516px] 2xl:h-[580px] 3xl:h-[696px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                  <Stack className="absolute lg:h-[412px] xl:h-[516px] 2xl:h-[580px] 3xl:h-[696px] w-[100%]">
                    <Column className="absolute bg-white_A700 items-center justify-end lg:pt-[411px] xl:pt-[515px] 2xl:pt-[579px] 3xl:pt-[695px] shadow-bs1 w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      </Column>
                    </Column>
                    <Img
                      src="images/img_image10_646X457.png"
                      className="absolute bottom-[0] lg:h-[282px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[476px] left-[28%] w-[29%]"
                      alt="imageTen Two"
                    />
                  </Stack>
                  <Stack className="absolute bottom-[0] lg:h-[315px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] right-[0] w-[56%]">
                    <Img
                      src="images/img_shadow_541X811.png"
                      className="absolute bottom-[0] lg:h-[385px] xl:h-[482px] 2xl:h-[542px] 3xl:h-[650px] w-[100%]"
                      alt="shadow Five"
                    />
                    <Stack
                      className="absolute bg-cover bg-repeat bottom-[0] lg:h-[385px] xl:h-[482px] 2xl:h-[542px] 3xl:h-[650px] lg:pl-[4px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group11.png')",
                      }}
                    >
                      <Img
                        src="images/img_newmacbookpro_471X703.png"
                        className="absolute lg:h-[335px] xl:h-[419px] 2xl:h-[472px] 3xl:h-[566px] right-[0] top-[0] w-[87%]"
                        alt="NewMacbookPro Six"
                      />
                    </Stack>
                  </Stack>
                  <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[9%] my-[auto] w-[18%]">
                    <Text
                      className="text-bluegray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Get the app now
                    </Text>
                    <Button
                      className="font-bold ml-[2px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[59%]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillPink400"
                    >
                      Visit Store
                    </Button>
                  </Column>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Column>

      </Layout>

    </>
  );
};

export default UseCasesPage;
