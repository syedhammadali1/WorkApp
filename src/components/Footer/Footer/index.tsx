import React, { FC } from "react";
import { Link } from 'react-router-dom';

import { Column, Row, Img, Text, Line, CheckBox } from "../..";

interface Props {
    props?:Array<string>;
    className:string;

  }
const Footer:FC<Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start w-[100%]">
          <Row className="items-end w-[95%]">
            <Column className="justify-start mb-[1px] w-[53%]">
              <Img
                src="images/img_worqapplogo2.png"
                className="WorqappLogoTwo"
                alt="WorqappLogoTwo One"
              />
              <Text
                className="font-almarai leading-[142.00%] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[55%]"
                as="h3"
                variant="h3"
              >
                <span className="text-bluegray_900 font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                  Alignment, Accountability, Engagement and Productivity for{" "}
                </span>
                <span className="text-pink_400 font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                  Effective Execution
                </span>
              </Text>
            </Column>
            <Column className="justify-start lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[14%]">
              <Link to="/">
                <Text className="Quote2" as="h6" variant="h6">
                  HOME
                </Text>
              </Link>

              <Text
                className="font-nunito font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                as="a" href="#usecase"
                variant="h6"
              >
                Use Cases{" "}
              </Text>
              <Text
                className="font-nunito font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 w-[auto]"
                as="a" href="#features"
                variant="h6"
              >
                Features
              </Text>
              <Text className="Quote_Two" variant="h6" as="a" href="#pricing">
                Pricing
              </Text>
              <Text
                className="font-nunito font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Contact us
              </Text>
            </Column>
            <Column className="justify-start mb-[1px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[19%]">
              <Text className="Quote2" as="h6" variant="h6">
                CONTACTS
              </Text>
              <Text
                className="font-nunito font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                03-6203 1207
              </Text>
              <Text className="Quote_Two" as="h6" variant="h6">
                Support@worqapp.com
              </Text>
              <Text
                className="font-nunito font-semibold leading-[125.00%] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[61%]"
                as="h6"
                variant="h6"
              >
                No 2, Jalan Kerinchi Unit 3.07, Level 3, KL
              </Text>
            </Column>
            <Column className="justify-start lg:mb-[24px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[14%]">
              <Text className="Quote2" as="h6" variant="h6">
                SUPPORT
              </Text>
              <Text className="font-almarai font-bold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-pink_400 underline w-[auto]">
                Create a Support Case
              </Text>
              <Text className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] underline Feeds">
                Zoom with worqApp
              </Text>
            </Column>
          </Row>
          <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[98%]">
            <Line className="bg-bluegray_100_60 h-[1px] w-[100%]" />
            <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Text
                className="font-almarai font-bold mt-[1px] text-gray_601 w-[auto]"
                as="h6"
                variant="h6"
              >
                2022 WorkApp
              </Text>
              <Text
                className="font-nunito font-semibold lg:ml-[317px] xl:ml-[397px] 2xl:ml-[447px] 3xl:ml-[536px] mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="h6"
              >
                Privacy Policy
              </Text>
              <Line className="bg-gray_601 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[2px] w-[1px]" />
              {/* <CheckBox
                className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[2px]"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="GroupThirtyOne"
                label=""
              ></CheckBox> */}
              <Img
                src="images/img_linkedin.svg"
                className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[1px] checkmark_One"
                alt="linkedin"
              />
              <Img
                src="images/img_instagram.svg"
                className="mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] checkmark_One"
                alt="instagram"
              />
            </Row>
          </Column>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
