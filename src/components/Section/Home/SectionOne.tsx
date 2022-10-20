import React, { FC, useRef } from 'react'
import { Column, Text, Row, Img, Button, Stack, MyModal } from "../../../components";

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
    <>
      <Text
        className="font-almarai mt-5 m-[auto] text-[35px] text-bluegray_900 text-center w-[100%]"
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
        <Button className="font-bold text-center w-[auto] mx-1 px-7 border border-pink_400 border-solid lg:px-10 xl:px-10 ">
          Try it for free
        </Button>
        <Button
          className="font-bold text-center w-[auto] mx-1 px-7 lg:px-10 xl:px-10"
          variant="OutlineBluegray900"
          
        >
          Watch video
        </Button>

      </Row>
      <Column
        className="bg-cover bg-repeat-round items-center justify-start m-[auto] mt-10 w-[300px] lg:w-[60%] lg:mt-20"
        restProps={{
          style: { backgroundImage: "url('images/img_group27357.png')" }
        }}
      >
        <Column
          className="bg-cover bg-repeat-round items-center justify-start h-[170px] lg:h-[100%] lg:p-[0px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]"
          restProps={{
            style: { backgroundImage: "url('images/img_group8.png')" }
          }}
        >
          <Stack
            className="bg-cover bg-repeat h-[150px] mt-1 lg:h-[301px] xl:h-[377px] 2xl:h-[424px] 3xl:h-[508px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:px-[101px] xl:px-[127px] 2xl:px-[143px] 3xl:px-[171px] w-[75%]"
            restProps={{
              style: { backgroundImage: "url('images/img_group9.png')" }
            }}
          >
            <Img
              src="images/img_play.svg"
              className="h-[60px] mx-[auto] inset-x-[0] mt-[50px]  lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px]   lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]  lg:mt-[118px] xl:mt-[144px] 2xl:mt-[160px] 3xl:mt-[185px]"
              alt="play"
              clickEvent={ handleClick }
            />
          </Stack>
        </Column>
      </Column>
      <MyModal ref={childRef}  width={1000}  modalBodyStyle={{ height: 'auto' }} fullModalStyle={{ backgroundColor :'lightblue' }} restProps = {{  footer:null,closable:false}}>
            <video width="100%" controls>
                <source src={'https://rr1---sn-hju7enel.c.drive.google.com/videoplayback?expire=1666283895&ei=N0FRY8f6NtLl1bYPnPKTUA&ip=27.96.93.111&cp=QVRLWENfUlhXRlhPOkp5MGNNNEFZRWNlTWg3VGN5VVVuWl9kSG5jQ08tdHdpTzFZYnZZQ3pkbE0&id=e7e55787bd294f94&itag=22&source=webdrive&requiressl=yes&mh=D6&mm=32&mn=sn-hju7enel&ms=su&mv=u&mvi=1&pl=24&ttl=transient&susc=dr&driveid=1KWsbqaeYzwx9fUhoW85f0cnwByIDFioA&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=29.953&lmt=1666143216466762&mt=1666268550&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhALOFFzcgVv7VOnxHPfgb-OgDWlM2LWJTxZBE5-FhmvCvAiEA9fd9N5CHSSZ5wDiWavENFBU0zJGMGrYDrL04LGrEWVY=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPK6LFV1ESblVW2SwBXqmNDyNpxU2wO4Yx8eZZ9GOBdtAiAEr964IEOqB-XS_TE0L01wdgpIiQr9Lph6Bcdmjsu-NQ==&cpn=WvQhkXeFxXtbnKlk&c=WEB_EMBEDDED_PLAYER&cver=1.20221018.01.00'} type="video/mp4"/>
            </video>
      </MyModal>


    </>
  )
}
