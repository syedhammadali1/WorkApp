
import { Row, Img, Text, Button, Column } from "..";
import React, { useEffect, useState, FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

interface Props { }

const Header: FC<Props> = (props) => {
  let activeClassName = "text-pink_400 font-bold";
  const [drawerStatus, setDrawerStatus] = useState(true);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState('');
  const navLinks = [
    {
      title: 'Home', url: '/', isHash: false
    },
    {
      title: 'Use Cases', url: '/#usecases', isHash: true
    },
    {
      title: 'Features', url: '/#features', isHash: true
    },
    {
      title: 'Pricing', url: '/#pricing', isHash: true
    },
    {
      title: 'FAQ', url: '/faq', isHash: false
    },
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
      <Row className="font-almarai items-start w-full justify-between lg:px-8 px-3">
        <Link to='/'>
          <Img
            src="images/img_worqapplogo2.png"
            className="WorqappLogoTwo h-16 sm:h-16"
            alt="WorqappLogoTwo"
          />
        </Link>


        <Text
          className="hidden lg:block my-[auto] w-[auto] cursor-[pointer] "
          as="a" href="#usecase"
          variant="h3"
        >
          <Link to='/'>
            WorqApp
          </Link>
        </Text>
        <Row className="hidden lg:flex items-start justify-center my-[auto] mx-[auto] w-[90%]">
       
          {
            navLinks.map((value: any, index: number) => {
              return value.isHash ?
                (
                  <HashLink className={navClass(value.url)} to={value.url} key={Math.random()} smooth>
                    <Text
                      className="hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      {value.title}
                    </Text>
                  </HashLink>

                ) :
                <NavLink className={navClass(value.url)} to={value.url} key={Math.random()}>
                  <Text
                    className="hover:text-pink_400 hover:font-bold my-[auto] mx-[15px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    {value.title}
                  </Text>
                </NavLink>
            })
          }

        </Row>
        <Button className="hidden lg:block font-bold mx-[auto] my-[auto] text-center w-[80px]">
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
          
          {
            navLinks.map((value: any, index: number) => {
              return value.isHash ?
                (
                  <li className="my-[5px]">

                    <HashLink className={navClass(value.url)} to={value.url} key={Math.random()} smooth>
                      <Text
                        className="block py-1 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"

                        as="h5"
                        variant="h5"
                      >
                        {value.title}
                      </Text>
                    </HashLink>
                  </li>

                ) :
                <li className="my-[5px]">

                  <NavLink className={navClass(value.url)} to={value.url} key={Math.random()}>
                    <Text
                      className="block py-1 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      as="h5"
                      variant="h5"
                    >
                      {value.title}
                    </Text>
                  </NavLink>
                </li>

            })
          }




        </ul>
      </Column>
    </>
  )
}

export default Header