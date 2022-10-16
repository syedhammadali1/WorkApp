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
import UsecaseSection, { FirstText, ImageColumn } from "../../components/Section/UseCase/Section";
import SectionFive from "../../components/Section/UseCase/SectionFive";
import SectionOne from "../../components/Section/UseCase/SectionOne";
import SectionSeven from "../../components/Section/UseCase/SectionSeven";
import SectionSix from "../../components/Section/UseCase/SectionSix";

const UseCasesPage = () => {

  const UsecaseSectionOne = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseOne',
      Img: {
        src: 'images/img_user.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Managing Teams using <br />
        </span>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          WorqApp
        </span>
      </FirstText>,
    featureList: [
      'Chat group for daily communication',
      'Weekly Zoom meetings (Zoom embedded in WorqApp,trackable actions and printable meeting minutes',
      'Minutes of all Management meetings saved in one place',
      'Weekly Zoom meetings (Zoom embedded in WorqApp, trackable actions and printable meeting minutes)',
      'All documents a to a team in one place',
      'Intelligent nudges to create individual accountability',
      'OKRs and Weekly Check - ins',
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/section2img.svg'
      }} use="right" />
  }

  const UsecaseSectionTwo = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseTwo',
      Img: {
        src: 'images/img_refresh.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Running High Impact <br />
        </span>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          initiatives using WorqApp
        </span>
      </FirstText>,
    featureList: [
      'Use OKRs for High Impact/ Key initiatives',
      'Embedded Meeting management for biweekly progress meetings (zoom, meeting minutes and Actionable Items) ',
      'Embedded Task management (date, delegate, status, reminders, comments, documents)',
      'Chat Group to motivated and share progress',
      'Kanban board and Task list to manage progress',
      'Nudges to increase accountability and reduce procrastination',
      'Document and media',
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/Section3Img.svg'
      }} use="left" />,
    opposite: true
  }

  const UsecaseSectionThree = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseThree',
      Img: {
        src: 'images/img_checkmark_61X61.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Talent Development using  <br />
        </span>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          WorqApp
        </span>
      </FirstText>,
    featureList: [
      'Leaders on all levels are responsible to set clear goals and improvement plans',
      'Individual OKRs for goals',
      'Minutes for montly check-ins and annual review meetings',
      'Chat Group to motivated and share progress',
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/section4img.svg'
      }} use="left" />,
  }


  return (
    <>
      <Layout>
        <Column className=" bg-white_A700 items-center rounded-radius10 w-[100%]">
          <SectionOne></SectionOne>
        </Column>

        <Column className="items-center justify-start flex w-full mt-10">
          <Column className="bg-gray_100 items-center justify-start w-full">
            <Column className="items-center justify-start w-full">
              <Column className="items-center justify-start w-full">
                <Row className="items-center justify-between w-full px-20">
                  <Column className="flex w-full">
                    <UsecaseSection {...UsecaseSectionOne} />
                    <UsecaseSection {...UsecaseSectionTwo} />
                    <UsecaseSection {...UsecaseSectionThree} />

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
