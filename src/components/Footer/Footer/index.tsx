import React, { FC } from "react";
import { Link } from 'react-router-dom';

import { Column, Row, Img, Text, Line, CheckBox } from "../..";

interface Props {
  props?: Array<string>;
  className: string;

}
const Footer: FC<Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start w-[100%]">
          <Row className="items-end w-[102%]">
            <Column className="justify-start mb-[1px] w-[49%]">
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
                <>
                  <span className="text-bluegray_900 font-bold lg:text-[17px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[28px]">
                    Alignment, Accountability, Engagement and Productivity for{" "}
                  </span>
                  <span className="text-pink_400 font-bold lg:text-[17px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[28px]">
                    Effective Execution
                  </span>
                </>

              </Text>
            </Column>

            <Column className="mb-1 w-[8%]">
              <Link to="/">
                <Text className="Quote2" as="h6" variant="footerLink">
                  HOME
                </Text>
              </Link>
              <Link to="/#usecases">
                <Text
                  as="h6" href="#usecase"
                  variant="footerLink"
                  className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[16px] text-bluegray_900 w-[auto]"
                >
                  <>
                    Use Cases
                  </>
                </Text>
              </Link>
              <Link to="/#features">
                <Text
                  className="font-nunito font-semibold 2xl:mt-[1px] 3xl:mt-[12px] lg:mt-[1px] xl:mt-[3px] text-bluegray_900 w-[auto]"
                  as="h6" href="#features"
                  variant="footerLink"
                >
                  Features
                </Text>
              </Link>
              <Link to="/#pricing">
                <Text className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[9px] text-bluegray_900 w-[auto]" variant="footerLink" as="h6" href="#pricing">
                  Pricing
                </Text>
              </Link>
              <Link to="/#contactus">
                <Text
                  className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="footerLink"
                >
                  Contact us
                </Text>
              </Link>

            </Column>
            <Column className="mb-2 ml-8 ">
              <Text className="Quote2" as="h6" variant="footerLink">
                CONTACTS
              </Text>

              <Link to="/03-6203 1207">
                <Text
                  className="font-nunito font-semibold  xl:mt-[1px] 2xl:mt-[1px] 3xl:mt-[16px] lg:mt-[1px] 2xl:mb-[1px] 3xl:mb-[14px]  text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="footerLink"
                >
                  03-6203 1207
                </Text>
              </Link>

              <Link to="/03-6203 1207">
                <Text className="font-nunito font-semibold  xl:mt-[1px] 2xl:mt-[1px] 3xl:mt-[16px] lg:mt-[1px] 2xl:mb-[1px] 3xl:mb-[14px]  text-bluegray_900 w-[auto]" as="h6" variant="footerLink">
                  Support@worqapp.com
                </Text>
              </Link>

              <Link to="/">
                <Text
                  className="font-nunito font-semibold mb-1 leading-[125.00%] xl:mt-[8px] 2xl:mt-[1px] 3xl:mt-[15px] lg:mt-[1px] text-bluegray_900 w-[61%]"
                  as="h6"
                  variant="footerLink"
                >
                  No 2, Jalan Kerinchi Unit 3.07, Level 3, KL
                </Text>
              </Link>
            </Column>
            <Column className=" mx-[auto] xl:mb-[38px] 2xl:mb-[30px] 3xl:mb-[45px] lg:mb-[17px]">
              <Link to="/">
                <Text className="Quote2 " as="h6" variant="footerLink">
                  SUPPORT
                </Text>
              </Link>
              {/*  */}
              <Link to="/">
                <Text className="font-almarai  font-bold text-pink_400 underline w-[auto]" as="h4" variant="h4">
                  Create a Support Case
                </Text>
              </Link>
              {/*  */}
              <Text className="font-bold underline mt-2" variant="h4" as='h4'>
                <Link to="/">
                  Zoom with worqApp
                </Link>
              </Text>

            </Column>
          </Row>
          <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[98%]">
            <Line className="bg-bluegray_100_60 h-[1px] w-[100%]" />
            <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Text
                className="font-almarai font-bold mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="h6"
              >
                2022 WorkApp
              </Text>

              <Text
                className="font-nunito font-semibold lg:ml-[63%] xl:ml-[61%] 2xl:ml-[63%] 3xl:ml-[63%] mt-[4px] text-gray_601 w-[auto]"
                as="a"
                variant="h6"
              >
                <Link to="/">
                  Privacy Policy
                </Link>
              </Text>

              <Line className="bg-gray_601 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[2px] w-[1px]" />
              <Text
                className="font-nunito font-semibold lg:ml-[20px] mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="h6"
              >
                <Link to="/">
                Terms and Conditions
                </Link>
              </Text>
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
