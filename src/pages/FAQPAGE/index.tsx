import React, { useState } from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  Layout,
} from "../../components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const FAQPAGEPage = () => {
  const accordianData = [{
    title: 'How can i create multiple worqspaces?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  },
  {
    title: 'Can I cancel my subscription anytime?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  },
  {
    title: 'Can I get my manager to pay for the membership?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  },
  {
    title: 'I forgot my password, how can I reset it again?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  },
  {
    title: 'Can I get my manager to pay for the membership?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  },
  {
    title: 'I forgot my password, how can I reset it again?',
    description: 'Transforming the workforce to eliminate all inefficiencies by enabling focus on high value tasksTransforming the workforce to eliminate all inefficiencies by enabling focus on high value tasks'
  }];
  const [data] = useState(accordianData)
  return (
    <>
      <Layout>
        <Column className="bg-white_A700 font-almarai items-center justify-end mx-[auto] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
          <Column className="items-center justify-start mt-[1px] w-[95%]">

            <Text
              className="font-bold text-xl xl:text-[48px] lg:mt-[41px]  xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] my-[30px] text-gray_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Frequently asked questions
            </Text>
            <Stack className="lg:h-[348px] xl:h-[436px] 2xl:h-[490px] 3xl:h-[588px] xl:mt-[104px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[83px] w-[90%] mx-auto md:w-[73%]">
              <Accordion preExpanded={[0]} allowZeroExpanded={true} className="w-[100%]">
                {" "}
                {data.map((item: any, index: number) => (
                  <AccordionItem uuid={index} key={Math.random()}>
                    <Column className="justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[100%]">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {({ expanded }) => (
                              <Row className="items-start justify-between w-[100%]">
                                <Text

                                  className={`mt-[2px] xl:text-[20px] ${expanded ? 'text-pink_400' : ''} hover:text-pink_400  w-[auto]`}
                                  as="h4"
                                  variant="h4"
                                >
                                  {item.title}
                                </Text>
                                {expanded && (
                                  <Img
                                    src="images/img_arrowdown_24X24.svg"

                                    className="checkmark_One h-[30px] "
                                    alt="arrowdown"
                                  />
                                )}
                                {!expanded && (
                                  <Img
                                    src="images/Vector.svg"

                                    className="checkmark_One h-[30px] mt-2"
                                    alt="arrowdown One"
                                  />
                                )}
                              </Row>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="w-full">
                        <Column className="font-nunitosans items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] mt-4 w-[90%]">
                          <Text
                            className="font-normal leading-[125.00%] not-italic text-bluegray_900 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            {item.description}
                          </Text>
                        </Column>
                      </AccordionItemPanel>
                    </Column>
                    <Line className="self-center w-[100%] h-[1px] bg-bluegray_100_60 my-3" />
                  </AccordionItem>
                ))}
              </Accordion>

            </Stack>

          </Column>
        </Column>

      </Layout>
    </>
  );
};

export default FAQPAGEPage;
