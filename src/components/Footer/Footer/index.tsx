import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Column, Row, Img, Text, Line } from "../..";
import { HashLink } from 'react-router-hash-link';


interface Props {
  props?: Array<string>;
  className: string;
}
const Footer: FC<Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="hidden lg:block justify-start w-[100%] bg-gray-100 p-28">
          <Row className="items-end w-[100%]">
            <Column className="justify-start mb-[1px] w-[49%]">
              <Img
                src="images/img_worqapplogo2.png"
                className="h-12 w-14"
                alt="WorqappLogoTwo One"
              />
              <Text
                className="font-almarai leading-[142.00%]  lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[55%]"
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
              <HashLink to="/#usecases" smooth>
                <Text
                  as="h6" href="#usecase"
                  variant="footerLink"
                  className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[16px] text-bluegray_900 w-[auto]"
                >
                  <>
                    Use Cases
                  </>
                </Text>
              </HashLink>
              <HashLink to="/#features" smooth>
                <Text
                  className="font-nunito font-semibold 2xl:mt-[1px] 3xl:mt-[12px] lg:mt-[1px] xl:mt-[3px] text-bluegray_900 w-[auto]"
                  as="h6" href="#features"
                  variant="footerLink"
                >
                  Features
                </Text>
              </HashLink>
              <HashLink to="/#pricing" smooth>
                <Text className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[9px] text-bluegray_900 w-[auto]" variant="footerLink" as="h6" href="#pricing">
                  Pricing
                </Text>
              </HashLink>
              <HashLink to="/#contactus" smooth>
                <Text
                  className="font-nunito font-semibold lg:mt-[1px] xl:mt-[3px] 2xl:mt-[1px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="footerLink"
                >
                  Contact us
                </Text>
              </HashLink>

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
              <Link to="/">
                <Text className="font-almarai  font-bold text-pink_400 underline w-[auto]" as="h4" variant="h4">
                  Create a Support Case
                </Text>
              </Link>
              <Text className="font-bold underline mt-2 hover:text-black" variant="h4" as='h4'>
                <Link to="/" className="hover:text-bluegray_900">
                  Zoom with worqApp
                </Link>
              </Text>

            </Column>
          </Row>
          <Column className="items-center justify-start  lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[98%]">
            <Line className="bg-bluegray_100_60 h-[1px] w-[100%]" />
            <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Text
                className="font-almarai font-bold mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                2022 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
              </Text>

              <Text
                className="font-nunito font-semibold lg:ml-[43%] xl:ml-[33%] 2xl:ml-[43%] 3xl:ml-[43%] mt-[4px] text-gray_601 w-[auto]"
                // as="a"
                variant="footerLink"
              >
                <Link to="/">
                  Privacy Policy
                </Link>
              </Text>

              <Line className="bg-gray_601 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[5px] w-[1px]" />
              <Text
                className="font-nunito font-semibold lg:ml-[20px] mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                <Link to="/">
                  Terms and Conditions
                </Link>
              </Text>
              <a href="https://www.linkedin.com/company/worq-app/">
                <Img
                  src="images/img_linkedin.svg"
                  className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[1px] checkmark_One"
                  alt="linkedin"
                />
              </a>
              <a href='https://www.instagram.com/worqapp/?hl=en'>
                <Img
                  src="images/img_instagram.svg"
                  className="mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] checkmark_One"
                  alt="instagram"
                />
              </a>
            </Row>
          </Column>
        </Column>

        {/* mobile responsive */}
        <Column className="lg:hidden justify-start w-[100%]  bg-gray-100 flex p-5">
          <Column className="justify-start mb-[1px] mt-[10px]">
            {/* <Img
              src="images/img_worqapplogo2.png"
              className="WorqappLogoTwo w-20"
              alt="WorqappLogoTwo One"
            /> */}
            <Text
              className="font-almarai leading-[142.00%] mt-4 lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[100%]"
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

          <Column className="w-[100%] mt-4 ">
            <FooterDropDown
              head={{
                title: 'HOME',
                children: [
                  ['UseCase', "/#usecases"],
                  ['Features', "/#features"],
                  ['Pricing', "/#pricing"]
                ]
              }}
            />
          </Column>

          <Column className="my-[0px] w-[100%]">
            <FooterDropDown
              head={{
                title: 'CONTACTS',
                children: [
                  ['03-6203 1207', "/"],
                  ['Support@worqapp.com', "/"],
                  ['No 2, Jalan Kerinchi Unit 3.07, Level 3, KL', "/"]
                ]
              }}
            />
          </Column>

          <Column className="w-[100%] mb-4">
            <FooterDropDown
              head={{
                title: 'SUPPORT',
                children: [
                  ['Create a Support Case', "/"],
                  ['Zoom with worqApp', "/"],
                ]
              }}
            />
          </Column>

          <Column>

            <Row>
              <Text
                className="font-almarai font-bold mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                2022 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
              </Text>
            </Row>

            <Row className="justify-start my-3">
              <Text
                className="font-nunito font-semibold text-gray_601 w-[auto]"
                // as="a"
                variant="footerLink"
              >
                <Link to="/">
                  Privacy Policy
                </Link>
              </Text>

              <Line className="bg-gray_601 h-4 w-[1px] mx-2 mt-[3px]" />
              <Text
                className="font-nunito font-semibold text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                <Link to="/">
                  Terms and Conditions
                </Link>
              </Text>
            </Row>

            <Row className="justify-start ">
              <a href="https://www.linkedin.com/company/worq-app/">
                <Img
                  src="images/img_linkedin.svg"
                  className=" mx-1 checkmark_One"
                  alt="linkedin"
                />

              </a>
              <a href='https://www.instagram.com/worqapp/?hl=en'>
                <Img
                  src="images/img_instagram.svg"
                  className=" mx-1 checkmark_One"
                  alt="instagram"
                />
              </a>
            </Row>

          </Column>
        </Column>
      </footer>
    </>
  );
};


interface DropDownProps {
  head: {
    title: string
    children: Array<any>
  }
}

export const FooterDropDown: FC<DropDownProps> = (props) => {
  const [dropDownStatus, setDropDownStatus] = useState(true);

  return (
    <>
      <Row className="justify-between  py-2 bg-gray-100 rounded-t-radius5"
        restProps={{
          onClick: () => setDropDownStatus(!dropDownStatus)
        }}>

        <Text className="Quote2" as="h6" variant="footerLink" >
          {props.head?.title}
        </Text>

        <svg
          className="lg:hidden w-5 h-5 my-[auto] mt-[3px] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          viewBox="0 0 20 20" aria-hidden="true"
          fill="currentColor"
          onClick={() => setDropDownStatus(!dropDownStatus)}
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0.75V13.25M13.25 7H0.75"
            stroke="black"
          />
        </svg>
      </Row>

      <Column className={(dropDownStatus ? "hidden " : "") + "w-[100%]"}>
        {props.head.children.map(([title, url, index]) => (
          <>
            <Row className="justify-between py-2 bg-gray-100" key={Math.random()}>
            <HashLink to={url} smooth>
              <Text as="h6" variant="footerLink" >
                {title}
              </Text>

            </HashLink>

            </Row>
          </>
        ))}
      </Column>
      <Line className="bg-bluegray_100_60  h-[2px] " />
    </>
  )
}

export default Footer;
