
import { Row, Img, Text, Button } from "..";
import React, { useEffect, useState, FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

interface Props { }

const Header: FC<Props> = (props) => {
  let activeClassName = "text-pink_400 font-bold";
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  let navClass = (navLink: string) => {
    let newUrl = url.replace(window.location.origin, "")
    return newUrl === navLink ? activeClassName : "";
  }

  return (
    <>
      <Row className="font-almarai items-start w-[100%]">
        <Img
          src="images/img_worqapplogo2.png"
          className="WorqappLogoTwo"
          alt="WorqappLogoTwo"
        />
        <Text
          className="mb-[1px] mt-5 w-[auto] cursor-[pointer] "
          as="a" href="#usecase"
          variant="h3"
        >
          WorqApp
        </Text>
        <Row className="items-start justify-center my-[auto] mx-[auto] w-[90%]">
          <NavLink className={navClass('/')} to="/" >
            <Text className={"hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"} as="h5" variant="h5">
              Home
            </Text>
          </NavLink>
          <NavLink className={navClass('/w')} to="/w" >
            <Text className={"hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"} as="h5" variant="h5">
              w
            </Text>
          </NavLink>
          
          <NavLink className={navClass('/#usecase')} to="/#usecase">
            <Text
              className="hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Use Cases
            </Text>
          </NavLink>
          <NavLink className={navClass('/#features')} to="/#features">
            <Text
              className="  hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Features
            </Text>
          </NavLink>
          <NavLink className={navClass('/#pricing')} to="/#pricing">
            <Text
              className="  hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Pricing
            </Text>
          </NavLink>

        </Row>
        <Button className="font-bold mx-[auto] my-[auto] text-center w-[10%]">
          Log In
        </Button>
      </Row>
    </>
  )
}

export default Header