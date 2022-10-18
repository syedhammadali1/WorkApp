import React from "react";

import {
  Column,
  Row,
  Text,
  Layout,
} from "../../components";
import UsecaseSection, { FirstText, ImageColumn } from "../../components/Section/UseCase/Section";
import SectionOne from "../../components/Section/UseCase/SectionOne";
import SectionThree from "../../components/Section/UseCase/SectionThree";

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
      }} use="right" />,
    mobileImages: [
      {
        src: 'images/usecases/mobsection2img.svg',
        className: 'p-5'
      }
    ]
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
    opposite: true,
    mobileImages: [
      {
        src: 'images/usecases/mobsection3img.svg',
        className: 'p-5'
      }
    ]
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
    mobileImages: [
      {
        src: 'images/usecases/mobsection2img.svg',
        className: 'p-5'
      }
    ]
  }

  const UsecaseSectionFour = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseFour',
      Img: {
        src: 'images/img_map.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Company-wide Engagement and Alignment using WorqApp  <br />
        </span>

      </FirstText>,
    featureList: [
      'Post to create engagement and drive performance',
      ' Posts to drive alignment to Mission and Strategy',
      'Posts to build common values',
      'Posts to initiate discussions in order to get insights from the whole organization',
      'All documents a to a team in one place',
      'Confidential polls to encourage people to speak up about key issues.',
      'Post to celebrate organization and individual achievments',
      'Posts to create clear boundaries and manage risks (rules that must be followed e.g. anti-corruption policies)',
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/Section3Img.svg'
      }} use="left" />,
    opposite: true,
    mobileImages: [
      {
        src: 'images/usecases/mobsection2img.svg',
        className: 'p-5'
      }
    ]
  }

  const UsecaseSectionFive = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseFive',
      Img: {
        src: 'images/img_search.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Individual productivity <br />
        </span>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          using WorqApp
        </span>

        <div className={"col-start-2 col-end-12 my-3 lg:w-[70%]"}>
          <Text className="font-normal my-[auto]   not-italic text-bluegray_900 " as="h5" variant="h5">
            WorqApp’s Virtual Assistant and Task Manager (soon to be
            an integrated calendar view) helps everyone in the
            organization to improve their personal productivity
          </Text>
        </div>
      </FirstText>,
    featureList: [
      `Tasks (today, Tomorrow, This Week, High Impact Tasks,
        Overdue tasks and personal folders for tasks)
        Reminders for daily schedule, overdue tasks and nudges`,

      ' Individual Goals/ OKRs',
      'Secure Notes',
      ` Calendar for an integrated view and time-boxing
      Insights such as Leadership content.`,
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/section2img.svg'
      }} use="right" />,
    mobileImages: [
      {
        src: 'images/usecases/mobsection2img.svg',
        className: 'p-5'
      }
    ]
  }

  const UsecaseSectionSix = {
    FBtn: {
      className: '',
      styleClass: 'gradientUsecaseSix',
      Img: {
        src: 'images/img_camera.svg',
        className: '',
        alt: 'user',
      }
    },
    firstText:
      <FirstText>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          Employee Onboarding  <br />
        </span>
        <span className="text-bluegray_900 font-almarai font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
          using WorqApp
        </span>

        <div className={"col-start-2 col-end-12 my-3 lg:w-[70%]"}>
          <Text className="font-normal my-[auto]  not-italic text-bluegray_900 " as="h5" variant="h5">
            Onboarding new emplyees is easier and faster with
            Worqapp
          </Text>
        </div>

      </FirstText>,
    featureList: [
      `Day one for everyone starts with clarity and alignment
     to company’s mission and objectives.`,

      `Company’s Vision, Missionand values are available in
      WorqApp for all staff`,

      `Everyone can relate to their daily work with strategic
      Objectives of the company`,

      `New employees can see posts about culture on the using
      company’s culture section or Feds.`,
    ],
    imageColumn:
      <ImageColumn img={{
        src: 'images/usecases/Section3Img.svg'
      }} use="left" />,
    opposite: true,
    mobileImages: [
      {
        src: 'images/usecases/mobsection3Img.svg',
        className: 'p-5'
      }
    ]
  }



  return (
    <>
      <Layout className="lg:p-[0px] xl:p-[0px] 2xl:p-[0px] 3xl:p-[0px]">
        <Column className=" bg-white_A700 items-center rounded-radius10 w-[100%] lg:px-16">
          <SectionOne></SectionOne>
        </Column>

        <Column className="items-center justify-start flex w-full mt-10">
          <Column className="bg-gray_100 items-center justify-start w-full">
            <Column className="items-center justify-start w-full">
              <Column className="items-center justify-start w-full">
                <Row className="items-center justify-between w-full lg:px-20">
                  <Column className="flex w-full">
                    <UsecaseSection {...UsecaseSectionOne} />
                    <UsecaseSection {...UsecaseSectionTwo} />
                    <UsecaseSection {...UsecaseSectionThree} />
                    <UsecaseSection {...UsecaseSectionFour} />
                    <UsecaseSection {...UsecaseSectionFive} />
                    <UsecaseSection {...UsecaseSectionSix} />
                  </Column>
                </Row>

                <SectionThree />
              </Column>
            </Column>
          </Column>
        </Column>
      </Layout>
    </>
  );
};

export default UseCasesPage;
