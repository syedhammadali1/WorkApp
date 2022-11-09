import React, { FC, useRef } from 'react'
import { Column, Text, Row, Img, Button } from "../../../components";
import { Modall } from '../../Modal';

interface Props { }
interface RefObject {
  showModal: () => void
}
export const SectionOne: FC<Props> = (props) => {
  const childRef = useRef<RefObject>(null);

  const handleClick = () => {
    return childRef.current ? childRef.current.showModal() : ''
  };


  return (
    <div>
      <Text
        className="font-almarai mt-5 m-[auto] text-[32px] text-bluegray_900 text-center w-[100%]"
        as="h1"
        variant="h1"
      >
        <span className="text-bluegray_900 font-bold ">
          Enterprise Execution
          <br />
        </span>
        <span className="text-pink_400 font-bold ">
          Effectively
        </span>
      </Text>
      <Text
        className="mx-[auto] px-10 py-3 lg:py-5 text-center rowforever1"
        as="h5"
        variant="h5"
      >
        Transforming teams and businesses to drive alignment, accountability
        and productivity with effective execution
      </Text>
      <Row className="font-almarai items-center justify-center m-[auto] rounded-radius5 w-[100%]">
        <a href="https://web.worqapp.com" className="hover:text-white">
          <Button className="font-bold text-center w-[auto] mx-1  px-6 border border-pink_400 border-solid lg:px-10 xl:px-10 p-[0.5rem] 3xl:px-10 3xl:p-[0.6rem] ">
            Try it for free
          </Button>
        </a>
        <Button
          className="font-bold text-center w-[auto] mx-1 px-6 lg:px-10 xl:px-10 p-[0.5rem] 3xl:px-10 3xl:p-[0.6rem] "
          variant="OutlineBluegray900"
          onclick={handleClick}

        >
          Watch video
        </Button>

      </Row>
      {/* <Column
        className="bg-cover bg-repeat-round items-center justify-start m-[auto] mt-10 w-[300px] lg:w-[60%] lg:mt-20"
        restProps={{
          style: { backgroundImage: "url('images/img_group27357.png')" }
        }}
      > */}
      <Column
        className="bg-contain bg-no-repeat bg-center h-48 mt-10 lg:mt-16 lg:h-[30rem] items-center justify-start  w-[100%]"
        restProps={{
          style: { backgroundImage: "url('images/thumbnail-image1.webp')" }
        }}
      >
        {/* <Stack
            className="bg-cover bg-repeat h-[150px] mt-1 lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:px-[101px] xl:px-[127px] 2xl:px-[143px] 3xl:px-[171px] w-[75%]"
            restProps={{
              style: { backgroundImage: "url('images/thumbnail-image.png')" }
            }}
          > */}
        <Img
          src="images/play-circle.png"
          className="h-[60px] mx-[auto] inset-x-[0] my-auto  lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px]   lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]   hover:cursor-pointer"
          alt="play"
          clickEvent={handleClick}
        />
        {/* </Stack> */}
      </Column>
      {/* </Column> */}


      <Modall ref={childRef}>
      <video width="100%" controls>
          <source src='video.mp4' type="video/mp4" />
        </video>
      </Modall>


    </div>
  )
}
