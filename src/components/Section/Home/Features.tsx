import React from 'react'
import { Column, Text, Row, Img, Button, Stack, Line } from "../..";
import { FeatureCard } from '../../Card/FeatureCard';

export const Features = () => {
    return (
        <>
            <Row className="font-almarai items-end xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] w-[20%]" restProps={{ id: "features" }}>
                <Text className="rowfeatures" as="h6" variant="h6">
                    Features
                </Text>
                <Line className="bg-gray_901 h-[2px] mb-[12px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[38%]" />
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
                    <Row className="items-start justify-evenly 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]">
                        <Column className="justify-start w-[59%]">

                            <FeatureCard
                                Img={{ src: "images/img_bookmark_45X45.svg", className: "mail" }}
                                TextOne={{
                                    className: "ml-[1px] Feeds",
                                    innerText: "Comments & Docs"
                                }}
                                TextTwo={{
                                    className: "ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rowforever1",
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
                                src="images/img_arrowdown.svg"
                                className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                                alt="arrowdown"
                            />
                        </Button>
                    </Row>
                    <Column className="absolute bottom-[2%] inset-x-[0] items-center justify-start w-[100%]">
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
        </>
    )
}
