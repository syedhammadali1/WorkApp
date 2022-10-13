
import { Row, Img, Text, Button, Column } from "..";
import React, { useEffect, useState, FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

interface Props { }

const Header: FC<Props> = (props) => {
  let activeClassName = "text-pink_400 font-bold";
  const [drawerStatus, setDrawerStatus] = useState(true);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState('');
  const navLinks = [
    ['Home', '/'],
    ['Use Cases', '/#usecase'],
    ['Features', '/#features'],
    ['Pricing', '/#pricing'],
  ];

  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);
  let navClass = (navLink: string) => {
    let newUrl = url.replace(window.location.origin, "")
    return newUrl === navLink ? activeClassName : "";
  }

  return (
    <>
      <Row className="font-almarai items-start w-full justify-between">
        <Img
          src="images/img_worqapplogo2.png"
          className="WorqappLogoTwo mr-3 h-16 sm:h-16"
          alt="WorqappLogoTwo"
        />
        <Text
          className="hidden lg:block mb-[1px] mt-5 w-[auto] cursor-[pointer] "
          as="a" href="#usecase"
          variant="h3"
        >
          WorqApp
        </Text>
        <Row className="hidden lg:flex items-start justify-center my-[auto] mx-[auto] w-[90%]">
          {navLinks.map(([title, url, index]) => (
            <>
              <NavLink className={navClass(url)} to={url} key={Math.random()}>
                <Text
                  className="hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  {title}
                </Text>
              </NavLink>
            </>
          ))}
        </Row>
        <Button className="hidden lg:block font-bold mx-[auto] my-[auto] text-center w-[10%]">
          Log In
        </Button>

        {/* for mobile */}
        <svg
          className="lg:hidden w-7 h-7 my-[auto] mr-[10px] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setDrawerStatus(!drawerStatus)}
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Row>

      {/* mobile links */}
      <Column className={(drawerStatus ? "hidden" : "") + " lg:hidden justify-between items-center w-full md:flex md:w-auto md:order-1"}>
        <ul className="w-full flex flex-col p-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navLinks.map(([title, url, index]) => (
            <>
              <li className="my-[5px]">
                <NavLink className={navClass(url)} to={url} key={Math.random()}>
                  <Text
                    className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    as="h5"
                    variant="h5"
                  >
                    {title}
                  </Text>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </Column>
    </>
  )
}

export default Header