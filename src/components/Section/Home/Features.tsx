import React, { FC } from 'react'
import { Column, Text, Row, Img, Button, Stack, Line, FeatureCard } from "../..";
import { MobileFeatureCard } from '../../Card/FeatureCard';
import ExpandCollapse, { ExpandCollapseItem } from '../../Expand-Collapse';
import Carousel, { CarouselItem } from './Carousel';

interface Props { }

export const Features: FC<Props> = (props) => {
    return (
        <>
            <Column>
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

                {/* <Column className='w-full hidden grid-flow-row lg:grid'>
                    <Column className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_checkmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "WorqRoom"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Reliable messaging rooms like group chat but with seamlessly embedded work tools"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_mail.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Virtual Assistant"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Intelligent Assistant for work updates, schedule reminders, smart nudges and Pro Tips"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_calendar.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Meeting Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Meetings with measurable actions, follow up nudges and minutes PDF. Supports Zoom too"
                                }}
                            />
                        </Column>
                    </Column>

                    <Column className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_cursor.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "Task Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Smart task management with delegation, priority, status tracking, checklists and history"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_bookmark_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Comments & Docs"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Embedded comments and attachments for increased collaboration"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_bookmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Feeds"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Internal engagement for celebrations, news or discussions etc. among a team or everyone"
                                }}
                            />
                        </Column>
                    </Column>

                    <Column className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_file.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "OKRs"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Goal management using OKR for teams and businesses with regular checkins and initiatives"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_mail_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "WorqSpace"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Web Admin for teams or businesses. Manage team, roles, invoicing and billing etc"
                                }}
                            />
                        </Column>

                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_file_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Schedule"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Two way Calendar Integration fr ease, efficiency and always up-to-date view of your schedule"
                                }}
                            />
                        </Column>

                    </Column>
                </Column> */}

                <ExpandCollapse className='w-full hidden grid-flow-row lg:grid'>
                    <ExpandCollapseItem className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_checkmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "WorqRoom"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Reliable messaging rooms like group chat but with seamlessly embedded work tools"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_mail.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Virtual Assistant"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Intelligent Assistant for work updates, schedule reminders, smart nudges and Pro Tips"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_calendar.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Meeting Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Meetings with measurable actions, follow up nudges and minutes PDF. Supports Zoom too"
                                }}
                            />
                        </Column>
                    </ExpandCollapseItem>

                    <ExpandCollapseItem className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_cursor.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "Task Management"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Smart task management with delegation, priority, status tracking, checklists and history"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_bookmark_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Comments & Docs"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Embedded comments and attachments for increased collaboration"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_bookmark.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Feeds"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Internal engagement for celebrations, news or discussions etc. among a team or everyone"
                                }}
                            />
                        </Column>
                    </ExpandCollapseItem>

                    <ExpandCollapseItem className='grid grid-cols-3 mx-20'>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_file.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement ",
                                    innerText: "OKRs"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Goal management using OKR for teams and businesses with regular checkins and initiatives"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2 border-r-2 border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_mail_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "WorqSpace"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Web Admin for teams or businesses. Manage team, roles, invoicing and billing etc"
                                }}
                            />
                        </Column>
                        <Column className='w-full border-b-2  border-gray-100 p-14'>
                            <FeatureCard
                                Img={{ src: "images/img_file_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] TaskManagement",
                                    innerText: "Schedule"
                                }}
                                TextTwo={{
                                    className: "Smarttaskmana",
                                    innerText: "Two way Calendar Integration fr ease, efficiency and always up-to-date view of your schedule"
                                }}
                            />
                        </Column>
                    </ExpandCollapseItem>
                </ExpandCollapse>
            </Column>


            <Column className="hidden lg:block items-center justify-start mx-[auto] 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] w-[88%]">
                <Stack className="lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] w-[97%]">
                    <Column className="absolute backdrop-opacity-[0.5] bg-pink_400_4c blur-[155.00px] lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] left-[0] rounded-radius50 lg:w-[133px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]"></Column>
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
                <Stack className="lg:h-[372px] xl:h-[465px] 2xl:h-[523px] 3xl:h-[627px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:w-[100%]">
                    <Column className="absolute backdrop-opacity-[0.5] bg-blue_A400_1c blur-[155.00px] lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] left-[12%] rounded-radius50 top-[0] lg:w-[133px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]"></Column>
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
                                className="bg-cover bg-repeat-round lg:h-[401px] xl:h-[419px] 2xl:h-[381px] 3xl:h-[457px] w-[100%]"
                                restProps={{
                                    style: {
                                        backgroundImage: "url('images/homefeature.svg')",
                                    },
                                    id: 'wow'
                                }}
                            >

                            </Stack>
                        </Column>

                    </Stack>

                    <Img
                        src="images/img_arrow6.svg"
                        className="absolute lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] left-[0] top-[3%] w-[25%]"
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
                    <CarouselItem style={{ width: "100%" }}>
                        <Column >
                            <MobileFeatureCard
                                className="border-gray-300  border-2 rounded mt-5 w-full"
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

                    <CarouselItem style={{ width: "100%" }}>
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

                    <CarouselItem style={{ width: "100%" }}>
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
                    className="bg-cover bg-repeat-round items-center justify-start m-[auto] mt-10 w-[350px]"
                    restProps={{
                        style: { backgroundImage: "url('images/img_group27357.png')" }
                    }}
                >
                    <Column
                        className="bg-cover bg-repeat-round items-center justify-start h-[170px] w-[100%] "
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
