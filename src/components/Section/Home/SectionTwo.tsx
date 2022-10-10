import React from 'react'
import { Column, Text, Row, Img, Button, Stack, Line, List } from "../..";

const SectionTwo = () => {
  return (
    <>
      <Column className="font-almarai justify-start 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[193px] w-[92%]">
        <Row className="items-start justify-evenly w-[100%]" id="usecase">
          <Column className="justify-start w-[54%]">
            <Row className="font-almarai items-end w-[21%]">
              <Text
                className="font-bold text-gray_901 w-[auto]"
                as="h6"
                variant="h6"
              >
                USE CASES
              </Text>
              <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[36%]" />
            </Row>
            <Text
              className="font-almarai font-bold leading-[125.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-bluegray_900 w-[53%]"
              as="h2"
              variant="h2"
            >
              <span className="text-pink_400 lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                Accelerate
              </span>
              <span className="text-bluegray_900 lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                {" "}
                your Organization
              </span>
            </Text>
            <Text
              className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowforever1"
              as="h5"
              variant="h5"
            >
              Achieve financial results and business goals with clarity and
              measurable actions
            </Text>
            <Column className="bg-pink_400 justify-end lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[81%]">
              <Text
                className="font-almarai 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                For BoD, C level and Managers
              </Text>
              <Text
                className="font-normal font-nunitosans leading-[125.00%] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-white_A700 w-[96%]"
                as="h5"
                variant="h5"
              >
                Manage teams and build efficiency across all levels using
                tools such as status tracking, performance overview,
                automatic reminders and intelligent nudges
              </Text>
            </Column>
            <Column className="bg-gray_100 justify-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[81%]">
              <Text
                className="font-almarai 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Run High Impact Initiatives <br />
              </Text>
              <Text
                className="font-normal font-nunitosans leading-[125.00%] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_900 w-[94%]"
                as="h5"
                variant="h5"
              >
                Lead and drive teams towards the key initiatives with
                regular checkins, result sharing reports and tools to
                increase accountability and reduce procrastination
              </Text>
            </Column>
            <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[72%]">
              <Text
                className="font-almarai text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Company wide Engagement and Alignment{" "}
              </Text>
              <Text
                className="font-normal font-nunitosans leading-[125.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_900 w-[99%]"
                as="h5"
                variant="h5"
              >
                Build common values for Mission, Strategy or Sustainable
                Goals that are shared from top to bottom with tools to
                encourage people engagement
              </Text>
            </Column>
            <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[81%]">
              <Text
                className="absolute bottom-[0] font-bold font-productsans right-[4%] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                View more Cases
              </Text>
              <Button
                className="absolute font-almarai font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center top-[0] w-[100%]"
                variant="FillGray902"
              >
                View More Cases
              </Button>
            </Stack>
            <Row className="font-almarai items-end xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] w-[20%]" id="features">
              <Text className="rowfeatures" as="h6" variant="h6">
                Features
              </Text>
              <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[38%]" />
            </Row>
          </Column>
          <Img
            src="images/img_image6.png"
            className="lg:h-[560px] xl:h-[701px] 2xl:h-[788px] 3xl:h-[945px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[46%]"
            alt="imageSix"
          />
        </Row>
        <Text className="columnusecases" as="h2" variant="h2">
          <span className="text-bluegray_900 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
            WorqApp — Your <br></br> Personal{" "}               <span className="text-pink_400 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
              Assistant
            </span>
          </span>

        </Text>
        <Stack className="lg:h-[504px] xl:h-[630px] 2xl:h-[709px] 3xl:h-[851px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] w-[95%]">
          <Column className="absolute justify-start left-[0] top-[4%] w-[23%]">
            <Img
              src="images/img_checkmark.svg"
              className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[14%]"
              alt="checkmark"
            />
            <Text
              className="font-almarai lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-bluegray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              WorqRoom
            </Text>
            <Text className="Smarttaskmana" as="h5" variant="h5">
              Reliable messaging rooms like group chat but with seamlessly
              embedded work tools
            </Text>
          </Column>
          <Column className="absolute justify-start right-[2%] top-[3%] w-[62%]">
            <Row className="items-center w-[94%]">
              <Column className="w-[63%]">
                <Img
                  src="images/img_mail.svg"
                  className="mail"
                  alt="mail"
                />
                <Text
                  className="font-almarai ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Virtual Assistant
                </Text>
                <Text
                  className="font-normal font-nunitosans leading-[125.00%] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-bluegray_900 w-[71%]"
                  as="h5"
                  variant="h5"
                >
                  Intelligent Assistant for work updates, schedule
                  reminders, smart nudges and Pro Tips
                </Text>
              </Column>
              <Column className="mb-[1px] w-[37%]">
                <Img
                  src="images/img_calendar.svg"
                  className="mail"
                  alt="calendar"
                />
                <Text
                  className="ml-[1px] TaskManagement"
                  as="h4"
                  variant="h4"
                >
                  Meeting Management
                </Text>
                <Text className="Smarttaskmana" as="h5" variant="h5">
                  Meetings with measurable actions, follow up nudges and
                  minutes PDF. Supports Zoom too
                </Text>
              </Column>
            </Row>
            <Row className="items-start justify-evenly 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]">
              <Column className="justify-start w-[59%]">
                <Img
                  src="images/img_bookmark_45X45.svg"
                  className="mail"
                  alt="bookmark"
                />
                <Text className="ml-[1px] Feeds" as="h4" variant="h4">
                  Comments & Docs
                </Text>
                <Text
                  className="ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rowforever1"
                  as="h5"
                  variant="h5"
                >
                  Embedded comments and attachments for increased
                  collaboration
                </Text>
              </Column>
              <Column className="justify-start w-[41%]">
                <Img
                  src="images/img_bookmark.svg"
                  className="mail"
                  alt="bookmark One"
                />
                <Text className="Feeds" as="h4" variant="h4">
                  Feeds
                </Text>
                <Text className="IntelligentAss" as="h5" variant="h5">
                  Internal engagement for celebrations, news or discussions
                  etc. among a team or everyone
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[25%]">
            <Img
              src="images/img_cursor.svg"
              className="mail"
              alt="cursor"
            />
            <Text className="TaskManagement" as="h4" variant="h4">
              Task Management
            </Text>
            <Text className="Smarttaskmana" as="h5" variant="h5">
              Smart task management with delegation, priority, status
              tracking, checklists and history
            </Text>
          </Column>
          <Stack className="absolute lg:h-[504px] xl:h-[630px] 2xl:h-[709px] 3xl:h-[851px] w-[100%]">
            <Row className="absolute items-start justify-evenly right-[0] w-[100%]">
              <Stack className="lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] w-[97%]">
                <Stack className="absolute lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] w-[100%]">
                  <Line className="absolute bg-bluegray_100_60 lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] left-[31%] w-[1px]" />
                  <Column className="absolute inset-y-[33%] items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_100_60 h-[1px] w-[100%]" />
                    <Line className="bg-bluegray_100_60 h-[1px] lg:mt-[165px] xl:mt-[207px] 2xl:mt-[233px] 3xl:mt-[279px] w-[100%]" />
                  </Column>
                </Stack>
                <Line className="absolute bg-bluegray_100_60 lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] right-[31%] w-[1px]" />
              </Stack>
              <Button
                className="flex lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] items-center justify-center lg:mt-[481px] xl:mt-[602px] 2xl:mt-[677px] 3xl:mt-[812px] rounded-radius50 lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"
                size="smIcn"
                variant="icbFillGray902"
              >
                <Img
                  src="images/img_arrowdown.svg"
                  className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="arrowdown"
                />
              </Button>
            </Row>
            <Column className="absolute bottom-[2%] inset-x-[0] items-center justify-start w-[100%]">
              <Row className="items-start justify-evenly w-[100%]">
                <Column className="justify-start w-[35%]">
                  <Img
                    src="images/img_file.svg"
                    className="mail"
                    alt="file"
                  />
                  <Text className="Feeds" as="h4" variant="h4">
                    OKRs
                  </Text>
                  <Text
                    className="font-normal font-nunitosans leading-[125.00%] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-bluegray_900 w-[76%]"
                    as="h5"
                    variant="h5"
                  >
                    Goal management using OKR for teams and businesses with
                    regular checkins and initiatives
                  </Text>
                </Column>
                <Column className="justify-start w-[37%]">
                  <Img
                    src="images/img_mail_45X45.svg"
                    className="mail"
                    alt="mail One"
                  />
                  <Text className="TaskManagement" as="h4" variant="h4">
                    WorqSpace
                  </Text>
                  <Text
                    className="font-normal font-nunitosans leading-[125.00%] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-bluegray_900 w-[74%]"
                    as="h5"
                    variant="h5"
                  >
                    Web Admin for teams or businesses. Manage team, roles,
                    invoicing and billing etc
                  </Text>
                </Column>
                <Column className="justify-start mt-[1px] w-[28%]">
                  <Img
                    src="images/img_file_45X45.svg"
                    className="mail"
                    alt="file One"
                  />
                  <Text className="Feeds" as="h4" variant="h4">
                    Schedule
                  </Text>
                  <Text
                    className="font-normal font-nunitosans leading-[125.00%] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-bluegray_900 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Two way Calendar Integration fr ease, efficiency and
                    always up-todate view of your schedule
                  </Text>
                </Column>
              </Row>
              <Line className="bg-bluegray_100_60 h-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[97%]" />
            </Column>
          </Stack>
        </Stack>
        <Column className="items-center justify-start lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] w-[88%]">
          <Stack className="lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] w-[97%]">
            <div className="absolute backdrop-opacity-[0.5] bg-pink_400_4c blur-[155.00px] lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] left-[0] rounded-radius50 lg:w-[133px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]"></div>
            <Text
              className="absolute bottom-[1%] font-bold inset-x-[0] leading-[125.00%] mx-[auto] text-bluegray_300 text-center w-[97%]"
              as="h2"
              variant="h2"
            >
              <span className="text-bluegray_900 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                Transforming Teams and Businesses to Drive
              </span>
              <span className="text-bluegray_300 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                {" "}
                Alignment, Accountability and Productivity{" "}
              </span>
              <span className="text-bluegray_900 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                with
              </span>
              <span className="text-pink_400 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                {" "}
                Effective Execution
              </span>
            </Text>
          </Stack>
          <Stack className="lg:h-[372px] xl:h-[465px] 2xl:h-[523px] 3xl:h-[627px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[84%]">
            <div className="absolute backdrop-opacity-[0.5] bg-blue_A400_1c blur-[155.00px] lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] left-[12%] rounded-radius50 top-[0] lg:w-[133px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]"></div>
            <Stack className="absolute bottom-[0] lg:h-[326px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[550px] right-[0] w-[85%]">
              <Column
                className="absolute bg-cover bg-repeat items-center justify-start left-[0] top-[0] w-[88%]"
                style={{
                  backgroundImage: "url('images/img_group27357.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[271px] xl:h-[339px] 2xl:h-[381px] 3xl:h-[457px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group8.png')",
                  }}
                >
                  <Img
                    src="images/img_newmacbookpro.png"
                    className="absolute lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] inset-x-[0] mx-[auto] top-[0] w-[77%]"
                    alt="NewMacbookPro"
                  />
                </Stack>
              </Column>
              <Img
                src="images/img_image6.png"
                className="absolute lg:h-[323px] xl:h-[403px] 2xl:h-[454px] 3xl:h-[544px] inset-y-[0] my-[auto] right-[0] w-[42%]"
                alt="imageSix One"
              />
            </Stack>
            <Img
              src="images/img_arrow6.svg"
              className="absolute lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] left-[0] top-[3%] w-[15%]"
              alt="ArrowSix"
            />
          </Stack>
          <Line className="bg-bluegray_100_60 h-[1px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[99%]" />
        </Column>
        <Text
          className="font-bold lg:ml-[361px] xl:ml-[451px] 2xl:ml-[508px] 3xl:ml-[609px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] text-bluegray_900 w-[auto]"
          as="h2"
          variant="h2"
          id="pricing"
        >
          Pricing
        </Text>
        <List
          className="lg:gap-[44px] xl:gap-[55px] 2xl:gap-[62px] 3xl:gap-[74px] grid grid-cols-2 min-h-[auto] lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[84%]"
          orientation="horizontal"
        >
          <Column className="listfree">
            <Text className="columnfree" as="h1" variant="h1">
              Free
            </Text>
            <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
              <Text className="rowforever1" as="h5" variant="h5">
                Forever
              </Text>
              <Button
                className="font-almarai font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
                shape="CustomBorderTL4"
                size="sm"
                variant="FillGray900"
              >
                Personal
              </Button>
            </Row>
            <Line className="bg-bluegray_100_60 h-[1px] ml-[2px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] rotate-[180deg] w-[98%]" />
            <Row className="items-center mr-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[55%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark One"
              />
              <Text className="rowcheckmark" as="h5" variant="h5">
                Unlimited personal chats
              </Text>
            </Row>
            <Row className="items-center lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark One"
              />
              <Text className="rowcheckmark" as="h5" variant="h5">
                Unlimited WorqRooms with embedded work tools
              </Text>
            </Row>
            <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[82%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark Two"
              />
              <Text className="rowcheckmark" as="h5" variant="h5">
                Smart Task Management in WorqRooms
              </Text>
            </Row>
            <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark Three"
              />
              <Text className="rowcheckmark" as="h5" variant="h5">
                Virtual Assistant with Smart Nudges
              </Text>
            </Row>
            <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[83%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark Four"
              />
              <Text className="rowcheckmark" as="h5" variant="h5">
                Productivity Content in Virtual Assistant
              </Text>
            </Row>
            <Row className="items-start mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]">
              <Img
                src="images/img_checkmark_24X24.svg"
                className="checkmark_One"
                alt="checkmark Five"
              />
              <Text className="rowcheckmark_five" as="h5" variant="h5">
                Sign up using free apps on App Store or Google Play
              </Text>
            </Row>
            <Button
              className="font-bold 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[98%]"
              size="lg"
              variant="OutlineBluegray900"
            >
              Choose Plan
            </Button>
          </Column>
          <Column className="bg-white_A700 border border-bluegray_400_47 border-solid justify-center lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius12 w-[100%]">
            <Text className="columnprice" as="h1" variant="h1">
              $8.99
            </Text>
            <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]">
              <Text className="rowforever1" as="h5" variant="h5">
                Per user, per month
              </Text>
              <Button
                className="font-almarai font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[54%]"
                shape="CustomBorderTL4"
                size="sm"
                variant="FillPink900"
              >
                For Teams & Businesses
              </Button>
            </Row>
            <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[100%]">
              <Line className="bg-bluegray_100_60 h-[1px] rotate-[180deg] w-[100%]" />
              <Row className="items-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[79%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark Two"
                />
                <Text className="rowcheckmark" as="h5" variant="h5">
                  WorqSpace for your team or business
                </Text>
              </Row>
              <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark One One"
                />
                <Text className="rowcheckmark" as="h5" variant="h5">
                  Feeds and Web Management Portal
                </Text>
              </Row>
              <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[93%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark Two One"
                />
                <Text className="rowcheckmark" as="h5" variant="h5">
                  Meetings Management with Zoom integration
                </Text>
              </Row>
              <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[40%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark Three One"
                />
                <Text className="rowcheckmark" as="h5" variant="h5">
                  Product Training
                </Text>
              </Row>
              <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[57%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark Four One"
                />
                <Text className="rowcheckmark" as="h5" variant="h5">
                  Priority Support Channels
                </Text>
              </Row>
              <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[85%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="checkmark_One"
                  alt="checkmark Five One"
                />
                <Text
                  className="rowcheckmark_five_one"
                  as="h5"
                  variant="h5"
                >
                  All existing and coming-soon features for business users
                  exclusively
                </Text>
              </Row>
              <Button
                className="font-bold lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                size="lg"
              >
                Choose Plan
              </Button>
            </Column>
          </Column>
        </List>
        <Row className="items-end 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[13%]">
          <Text className="rowfeatures" as="h6" variant="h6">
            Testimonial
          </Text>
          <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[33%]" />
        </Row>
        <Row className="items-start justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[94%]">
          <Text className="rowwhattheysaya" as="h2" variant="h2">
            What they say about us
          </Text>
          <Img
            src="images/img_group27422.svg"
            className="lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[14%]"
            alt="Group27422"
          />
        </Row>
        <Row className="items-start justify-between lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[93%]">
          <Img
            src="images/img_arrow6.svg"
            className="lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] w-[12%]"
            alt="ArrowSeven"
          />
          <List
            className="lg:gap-[40px] xl:gap-[50px] 2xl:gap-[57px] 3xl:gap-[68px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[85%]"
            orientation="horizontal"
          >
            <Column className="listavatar">
              <Img
                src="images/img_avatar.png"
                className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                alt="Avatar"
              />
              <Text
                className="font-normal font-nunitosans leading-[125.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-white_A700 w-[99%]"
                as="h5"
                variant="h5"
              >
                Transforming the workforce to eliminate all inefficiencies
                by enabling focus on high value tasks
              </Text>
              <Text
                className="font-almarai font-bold lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Name
              </Text>
            </Column>
            <Column className="bg-gray_50 border border-bluegray_100 border-solid justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius17 w-[100%]">
              <Img
                src="images/img_avatar_64X64.png"
                className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                alt="Avatar One"
              />
              <Text className="Quote_One" as="h5" variant="h5">
                Transforming the workforce to eliminate all inefficiencies
                by enabling focus on high value tasks
              </Text>
              <Text className="Source_One" as="h5" variant="h5">
                Name
              </Text>
            </Column>
            <Column className="bg-gray_50 border border-bluegray_100 border-solid justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius17 w-[100%]">
              <Img
                src="images/img_avatar_1.png"
                className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                alt="Avatar Two"
              />
              <Text className="Quote_One" as="h5" variant="h5">
                Transforming the workforce to eliminate all inefficiencies
                by enabling focus on high value tasks
              </Text>
              <Text className="Source_One" as="h5" variant="h5">
                Name
              </Text>
            </Column>
          </List>
        </Row>
      </Column>
    </>


  )
}

export default SectionTwo