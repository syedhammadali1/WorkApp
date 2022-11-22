import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Column, Row, Img, Text, Line } from "../..";
import { HashLink } from 'react-router-hash-link';


interface Props {
  props?: Array<string>;
  className: string;
}
const Footer: FC<Props> = (props) => {
  const FooterContent = {
    heading: [
      'Alignment, Accountability, Engagement and Productivity for',
      'Effective Execution'
    ],
    tabs: [
      {
        mainClass: "col-start-5 col-end-6",
        title: 'Home',
        titleUrl: '/#home',
        children: [
          {
            title: "UseCase",
            url: "/#usecases",
            isAnchor: false
          },
          {
            title: "Features",
            url: "/#features",
            isAnchor: false
          },
          {
            title: "Pricing",
            url: "/#pricing",
            isAnchor: false
          },
          {
            title: "Contact Us",
            url: "mailto:support@worqapp.com",
            isAnchor: true
          },
        ]
      },
      {
        mainClass: "col-start-6 col-end-7",
        title: 'Contact',
        children: [
          {
            title: "03-6203 1207",
            url: "/",
            isAnchor: false
          },
          {
            title: "Support@worqapp.com",
            url: "mailto:support@worqapp.com",
            isAnchor: true
          },
          {
            title: "No 2, Jalan Kerinchi Unit 3.07, Level 3, KL",
            url: "/",
            isAnchor: false
          },
        ]
      },
      {
        mainClass: "col-start-8 col-end-10",
        title: 'Support',
        children: [
          {
            title: "Create a Support Case",
            url: "mailto:support@worqapp.com?subject=Support Case regarding:",
            isAnchor: true,
            className: "font-almarai font-bold text-pink_400 underline w-[auto] font-bold lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
            as: "h4",
            variant: "h4",
          },
          {
            title: "Zoom with worqApp",
            url: "https://worqapp.com/zoom",
            isAnchor: true,
            className: "font-almarai font-bold underline mt-2 text-2",
            as: "h4",
            variant: "h4"
          },
        ],
      }
    ],
  }
  return (
    <>
      <footer className={props.className}>
        <Column className="hidden lg:block justify-start w-[100%] bg-gray-100 px-28 py-8">
          <div className="grid grid-cols-9 ">
            <Img
              src="images/img_worqapplogo2.webp"
              className="h-14 w-14 my-2"
              alt="WorqappLogoTwo One"
            />
            <div className="col-start-1 col-span-3">
              <Text
                className="font-almarai  text-bluegray_900 whitespace-pre-line"
                as="h3"
                variant="h3"
              >
                <>
                  <span className="text-bluegray_900 font-bold lg:text-[17px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[28px]">
                    {FooterContent.heading[0] + " "}
                  </span>
                  <span className="text-pink_400 font-bold lg:text-[17px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[28px]">
                    {FooterContent.heading[1]}
                  </span>
                </>
              </Text>
            </div>

            {
              FooterContent.tabs.map((value: any, index: number) => {
                return <WebFooter key={index}
                  head={value} mainClass={value.mainClass}
                />
              })
            }

          </div>

          {/* <Column className="items-center justify-start  lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[98%]">
            <Line className="bg-bluegray_100_60 h-[1px] w-[100%]" />
            <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Text
                className="font-almarai font-bold mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                2023 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
              </Text>

              <Text
                className="font-nunito font-semibold lg:ml-[43%] xl:ml-[33%] 2xl:ml-[43%] 3xl:ml-[43%] mt-[4px] text-gray_601 w-[auto]"
                // as="a"
                variant="footerLink"
              >
                <Link to="/" className="hover:text-pink_400">
                  Privacy Policy
                </Link>
              </Text>

              <Line className="bg-gray_601 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[5px] w-[1px]" />
              <Text
                className="font-nunito font-semibold lg:ml-[20px] mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                <Link to="/" className="hover:text-pink_400">
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
          </Column> */}


          <div className="flex flex-col mt-6 ">
            <Line className="bg-bluegray_100_60 h-[1px] w-[95%]" />

            {/* <div className="flex flex-row">
              <div className="basis-11/12">
                <Text
                  className="font-almarai font-bold text-gray_601 w-[auto]" as="h6" variant="footerLink">
                  2023 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
                </Text>
              </div>

              <div className="basis-2/12  justify-self-end" style={{ justifyContent: "end" }}>
                <Text className="font-nunito font-semibold  text-gray_601"
                  variant="footerLink">
                  <Link to="/" className="hover:text-pink_400">
                    Privacy Policy
                  </Link>
                </Text>
              </div>
              <div className="basis-1/12">
                <Line className="bg-gray_601 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[5px] w-[1px]" />
              </div>
              <div className="basis-2/12">

                <Text className="font-nunito font-semibold  text-gray_601 "
                  variant="footerLink">
                  <Link to="/" className="hover:text-pink_400">
                    Terms and Conditions
                  </Link>
                </Text>
              </div>

              <div className="basis-1/12 ">
                <a href="https://www.linkedin.com/company/worq-app/">
                  <Img
                    src="images/img_linkedin.svg"
                    className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[1px] checkmark_One"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="basis-1/12">
                <a href='https://www.instagram.com/worqapp/?hl=en'>
                  <Img
                    src="images/img_instagram.svg"
                    className="mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] checkmark_One"
                    alt="instagram"
                  />
                </a>
              </div>
            </div> */}
            <div className="grid grid-row-12 mt-6">

              <div className="col-start-1 col-end-3">
                <Text
                  className="font-almarai font-bold  text-gray_601 w-[auto]" as="h6" variant="footerLink">
                  2023 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
                </Text>
              </div>


              <div className="col-start-9 col-end-10 justify-self-end">
                <div className="grid grid-cols-2 ">
                  <div className="col-span-1 justify-self-end  border-gray_601 border-r px-4">
                    <Text className="font-nunito font-semibold  text-gray_601 "
                      variant="footerLink">
                      <Link to="/privacy-policy" className="hover:text-pink_400">
                        Privacy Policy
                      </Link>
                    </Text>
                  </div>

                  <div className="col-span-1 justify-self-start px-4">
                    <Text
                      className="font-nunito font-semibold  text-gray_601"
                      variant="footerLink"
                    >
                      <Link to="/privacy-policy" className="hover:text-pink_400">
                        Terms and Conditions
                      </Link>
                    </Text>
                  </div>
                </div>
              </div>


              <div className="col-start-10 col-end-12 justify-self-start">
                <div className="grid grid-cols-2 ">
                  <div className="col-span-1 justify-self-end ">
                    <a href="https://www.linkedin.com/company/worq-app/">
                      <Img
                        src="images/img_linkedin.svg"
                        className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[1px] checkmark_One"
                        alt="linkedin"
                      />
                    </a>
                  </div>

                  <div className="col-span-1 justify-self-start ">
                    <a href='https://www.instagram.com/worqapp/?hl=en'>
                      <Img
                        src="images/img_instagram.svg"
                        className="mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] checkmark_One"
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>


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
                  {FooterContent.heading[0] + " "}
                </span>
                <span className="text-pink_400 font-bold lg:text-[17px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[28px]">
                  {FooterContent.heading[1]}

                </span>
              </>
            </Text>
          </Column>

          <Column className="w-[100%] my-4 ">
            {
              FooterContent.tabs.map((value: any, index: number) => {
                return <FooterDropDown key={index}
                  head={value}
                />
              })
            }
          </Column>

          <Column>
            <Row>
              <Text
                className="font-almarai font-bold mt-[4px] text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                2023 Nib Technologies Sdn Bhd | ALL RIGHTS RESERVED
              </Text>
            </Row>

            <Row className="justify-start my-3">
              <Text
                className="font-nunito font-semibold text-gray_601 w-[auto]"
                // as="a"
                variant="footerLink"
              >
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </Text>

              <Line className="bg-gray_601 h-4 w-[1px] mx-2 mt-[3px]" />
              <Text
                className="font-nunito font-semibold text-gray_601 w-[auto]"
                as="h6"
                variant="footerLink"
              >
                <Link to="/privacy-policy">
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
    children: Array<object>
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
        {props.head.children.map((value: any, index: number,) => (

          <Row className="justify-between py-2 bg-gray-100" key={index}>
            {value.isAnchor ?
              <a href={value.url} >
                <Text as="h6" variant="footerLink" className=" hover:text-pink_400">
                  {value.title}
                </Text>
              </a>
              :
              <HashLink to={value.url} smooth >
                <Text as="h6" variant="footerLink" className=" hover:text-pink_400" >
                  {value.title}
                </Text>

              </HashLink>
            }
          </Row>

        ))}
      </Column>
      <Line className="bg-bluegray_100_60  h-[2px] " />
    </>
  )
}


interface WebFooterProps {
  mainClass?: string
  head: {
    title: string
    titleUrl: string
    children: Array<object>
    className?: string
  }
}

export const WebFooter: FC<WebFooterProps> = ({ mainClass = '', head }: WebFooterProps) => {
  return <>
    <div className={mainClass + " -mt-6"}>
      <div className="grid grid-rows">
        <div>
          {
          head.titleUrl ?
          <HashLink to={head.titleUrl} smooth  >
          <Text className="Quote2 my-2" as="h6" variant="footerLink">
            {head.title}
          </Text>
          </HashLink>
          :
          <Text className="Quote2 my-2" as="h6" variant="footerLink">
          {head.title}
        </Text>
         }


        </div>
        {head.children.map((value: any, index: number) => (
          <div key={Math.random()}>
            {value.isAnchor ?
              <a href={value.url}>
                <Text
                  as={value.as ? "" + value.as + "" : "h6"}
                  variant={value.variant ? "" + value.variant + "" : "footerLink"}
                  className={(value.className ? "" + value.className + "" : "font-nunito font-semibold text-bluegray_900") + " mt-1 hover:text-pink_400"}>
                  {value.title}
                </Text>

              </a>
              :
              <HashLink to={value.url} smooth  >
                <Text
                  as={value.as ? "" + value.as + "" : "h6"}
                  variant={value.variant ? "" + value.variant + "" : "footerLink"}
                  className={(value.className ? "" + value.className + "" : "font-nunito font-semibold text-bluegray_900") + " mt-1 hover:text-pink_400"}>
                  {value.title}
                </Text>
              </HashLink>
            }
          </div>
        ))}
      </div>
    </div>
  </>
}

export default Footer;
