import React, { FC } from 'react'
import { Column, Text, Row, Img, Button, Stack, Line, FeatureCard } from "../..";
import { MobileFeatureCard } from '../../Card/FeatureCard';
import Carousel, { CarouselItem } from './Carousel';

interface Props { }

export const Features: FC<Props> = (props) => {
    return (
        <>
            <Row className="font-almarai items-end mt-10 xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] lg:w-[20%] lg:ml-[7%]" restProps={{ id: "features" }}>
                <Text className="rowfeatures" as="h6" variant="h6">
                    Features
                </Text>
                <Line className="ml-2 bg-gray_901 h-[2px] mb-[auto] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[auto] w-[18%]" />
            </Row>
            <Text className="columnusecases w-[93%] lg:ml-[auto] mt-2 text-[34px]" as="h2" variant="h2">
                <span className="text-bluegray_900 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                    WorqApp — Your <br></br> Personal{" "}
                    <span className="text-pink_400 font-almarai lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px]">
                        Assistant
                    </span>
                </span>

            </Text>
            <Stack className="hidden lg:block lg:h-[504px] xl:h-[630px] 2xl:h-[709px] 3xl:h-[851px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] w-[93%]">
                <Column className="absolute justify-start left-[0] top-[4%] w-[23%]">
                    <FeatureCard
                        Img={{ src: "images/img_checkmark.svg", className: "lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[14%]" }}
                        TextOne={{
                            className: "font-almarai lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-bluegray_900 w-[auto]",
                            innerText: "WorqRoom"
                        }}
                        TextTwo={{
                            className: "Smarttaskmana",
                            innerText: "Reliable messaging rooms like group chat but with seamlessly embedded work tools"
                        }}
                    />
                </Column>
                <Column className="absolute justify-start right-[2%] top-[3%] w-[62%]">
                    <Row className="items-center w-[94%]">
                        <Column className="w-[63%]">
                            <FeatureCard
                                Img={{ src: "images/img_mail.svg", className: "mail" }}
                                TextOne={{
                                    className: "font-almarai ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-bluegray_900 w-[auto]",
                                    innerText: "Virtual Assistant"
                                }}
                                TextTwo={{
                                    className: "font-normal font-nunitosans leading-[125.00%] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-bluegray_900 w-[71%]",
                                    innerText: "Intelligent Assistant for work updates, schedule reminders, smart nudges and Pro Tips"
                                }}
                            />
                        </Column>
                        <Column className="mb-[1px] w-[37%]">
                            <FeatureCard
                                Img={{ src: "images/img_calendar.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Meeting Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: `Meetings with measurable actions, follow up nudges and minutes PDF. Supports Zoom too`
                                }}
                            />
                        </Column>
                    </Row>
                    <Row className="items-start justify-evenly 3xl:mt-[108px] lg:mt-[64px] 2xl:mt-[90px] w-[100%]">
                        <Column className="justify-start w-[59%]">

                            <FeatureCard
                                Img={{ src: "images/img_bookmark_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] Feeds",
                                    innerText: "Comments & Docs"
                                }}
                                TextTwo={{
                                    className: "ml-[1px] lg:mt-[12px] xl:mt-[15px]  2xl:mt-[17px] 3xl:mt-[20px] w-[70%]",
                                    innerText: `Embedded comments and attachments for increased collaboration`
                                }}
                            />
                        </Column>
                        <Column className="justify-start w-[41%]">

                            <FeatureCard
                                Img={{ src: "images/img_bookmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "Feeds",
                                    innerText: "Feeds"
                                }}
                                TextTwo={{
                                    className: "IntelligentAss",
                                    innerText: `Internal engagement for celebrations, news or discussions
                                    etc. among a team or everyone`
                                }}
                            />
                        </Column>
                    </Row>
                </Column>
                <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[25%]">
                    <FeatureCard
                        Img={{ src: "images/img_cursor.svg", className: "mail" }}
                        TextOne={{
                            className: "TaskManagement",
                            innerText: " Task Management"
                        }}
                        TextTwo={{
                            className: "Smarttaskmana",
                            innerText: `Smart task management with delegation, priority, status
                                    tracking, checklists and history`
                        }}
                    />
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
                                src="images/arrowup.svg"
                                className="flex items-center justify-center mx-[auto] w-[15px] lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                                alt="arrowdown"
                            />
                        </Button>
                    </Row>
                    <Column className="absolute bottom-[0%] inset-x-[0] items-center justify-start w-[100%]">
                        <Row className="items-start justify-evenly w-[100%]">
                            <Column className="justify-start w-[35%]">

                                <FeatureCard
                                    Img={{ src: "images/img_file.svg", className: "mail" }}
                                    TextOne={{
                                        className: "Feeds",
                                        innerText: "OKRs"
                                    }}
                                    TextTwo={{
                                        className: "font-normal font-nunitosans leading-[125.00%] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-bluegray_900 w-[76%]",
                                        innerText: `Goal management using OKR for teams and businesses with
                                    regular checkins and initiatives`
                                    }}
                                />


                            </Column>
                            <Column className="justify-start w-[37%]">

                                <FeatureCard
                                    Img={{ src: "images/img_mail_45X45.svg", className: "mail" }}
                                    TextOne={{
                                        className: "TaskManagement",
                                        innerText: "WorqSpace"
                                    }}
                                    TextTwo={{
                                        className: "font-normal font-nunitosans leading-[125.00%] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-bluegray_900 w-[74%]",
                                        innerText: `Web Admin for teams or businesses. Manage team, roles,
                                    invoicing and billing etc`
                                    }}
                                />
                            </Column>
                            <Column className="justify-start mt-[1px] w-[28%]">

                                <FeatureCard
                                    Img={{ src: "images/img_file_45X45.svg", className: "mail" }}
                                    TextOne={{
                                        className: "Feeds",
                                        innerText: "Schedule"
                                    }}
                                    TextTwo={{
                                        className: "font-normal font-nunitosans leading-[125.00%] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-bluegray_900 w-[100%]",
                                        innerText: `Two way Calendar Integration fr ease, efficiency and
                                    always up-todate view of your schedule`
                                    }}
                                />
                            </Column>
                        </Row>
                        <Line className="bg-bluegray_100_60 h-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[97%]" />
                    </Column>
                </Stack>
            </Stack>

            <Column className="hidden lg:block items-center justify-start mx-[auto] 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] w-[88%]">
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
                            restProps={{
                                style: {
                                    backgroundImage: "url('images/img_group27357.png')",
                                }
                            }}
                        >
                            <Stack
                                className="bg-cover bg-repeat-round lg:h-[271px] xl:h-[339px] 2xl:h-[381px] 3xl:h-[457px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] w-[100%]"
                                restProps={{
                                    style: {
                                        backgroundImage: "url('images/img_group8.png')",
                                    },
                                    id: 'wow'
                                }}
                            >
                                <Img
                                    src="images/img_newmacbookpro.png"
                                    className="absolute lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] inset-x-[0] mx-[auto] top-[6px] w-[76%]"
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

            {/* mobile */}
            <Column className="w-100 overflow-hidden lg:hidden">
                <Carousel shouldBeBottom={true}
                    withIndicators={true}
                    indicatorClass="w-full h-1 rounded"
                >
                    <CarouselItem>
                        <Column >
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_checkmark.svg", className: "" }}
                                TextOne={{
                                    className: "",
                                    innerText: "WorqRoom"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana ",
                                    innerText: "Reliable messaging rooms like group chat but with seamlessly embedded work tools"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_mail.svg", className: "w-10 h-10 mx-3 mt-6" }}
                                TextOne={{
                                    className: "font-almarai",
                                    innerText: "Virtual Assistant"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Intelligent Assistant for work updates, schedule reminders, smart nudges and Pro Tips"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{
                                    src: "images/img_calendar.svg", className: ""
                                }}
                                TextOne={{
                                    className: " TaskManagement ",
                                    innerText: "Meeting Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana ",
                                    innerText: `Meetings with measurable actions, follow up nudges and minutes PDF. Supports Zoom too`
                                }}
                            />
                        </Column>
                    </CarouselItem>

                    <CarouselItem>
                        <Column>
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_cursor.svg", className: "mail" }}
                                TextOne={{
                                    className: "",
                                    innerText: "Task Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Smart task management with delegation, priority, status tracking, checklists and history"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_bookmark_45X45.svg", className: "" }}
                                TextOne={{
                                    className: "",
                                    innerText: "Comments & Docs"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Embedded comments and attachments for increased collaboration"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_bookmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "",
                                    innerText: "Feeds"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Internal engagement for celebrations, news or discussions etc. among a team or everyone"
                                }}
                            />
                        </Column>
                    </CarouselItem>

                    <CarouselItem>
                        <Column>
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_file.svg", className: "mail" }}
                                TextOne={{
                                    className: "",
                                    innerText: "OKRs"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Goal management using OKR for teams and businesses with regular checkins and initiatives"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_mail_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "",
                                    innerText: "WorqSpace"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Web Admin for teams or businesses. Manage team, roles, invoicing and billing etc"
                                }}
                            />
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5"
                                Img={{ src: "images/img_file_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "",
                                    innerText: "Schedule"
                                }}
                                TextTwo={{
                                    className: "",
                                    innerText: "Two way Calendar Integration fr ease, efficiency and always up-todate view of your schedule"
                                }}
                            />
                        </Column>
                    </CarouselItem>

                </Carousel>

            </Column>

            <Column className="lg:hidden items-center justify-start">
                <Text
                    className="font-almarai mt-5 m-[auto] text-[29px] text-bluegray_900 text-center w-[100%]"
                    as="h1"
                    variant="h1"
                >
                    <span className="text-bluegray_900 font-almarai  ">
                        Transforming Teams and Businesses to Drive <br />
                    </span>
                    <span className="text-bluegray_300 font-almarai ">
                        Alignment, Accountability and Productivity{" "}
                    </span>
                    <span className="text-bluegray_900 font-almarai ">
                        with
                    </span>
                    <span className="text-pink_400 font-almarai ">
                        {" "}
                        Effective Execution
                    </span>
                </Text>
                <Column
                    className="bg-cover bg-repeat-round items-center justify-start m-[auto] mt-10 w-[80%]"
                    restProps={{
                        style: { backgroundImage: "url('images/img_group27357.png')" }
                    }}
                >
                    <Column
                        className="bg-cover bg-repeat-round items-center justify-start h-[170px] w-[100%]"
                        restProps={{
                            style: { backgroundImage: "url('images/img_group8.png')" }
                        }}
                    >
                        <Stack
                            className="bg-cover bg-repeat h-[150px] mt-1 w-[75%]"
                            restProps={{
                                style: { backgroundImage: "url('images/img_group9.png')" }
                            }}
                        >
                            <Img
                                src="images/img_image6.png"
                                className="h-[200px] mx-[auto] inset-x-[0] ml-[70%] "
                                alt="play"
                            />
                        </Stack>
                    </Column>
                </Column>
                <Line className="bg-bluegray_100_60 h-[1px] mt-12 w-full" />
            </Column>

        </>
    )
}
