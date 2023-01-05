"use client";

import Link from "next/link";
import { footerItems } from "./footerItems";
import { StatusButton } from "../StatusButton";
import { Disclosure } from "@headlessui/react";

type Data = {
  page: {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
  };
  components: [
    {
      id: string;
      name: string;
      status: string;
      created_at: string;
      updated_at: string;
      position: number;
      description: string | null;
      showcase: boolean;
      start_date: string;
      group_id: null;
      page_id: string;
      group: boolean;
      only_show_if_degraded: boolean;
    }
  ];
  incidents: [];
  scheduled_maintenances: [];
  status: {
    indicator: string;
    description: string;
  };
};

export const Footer2 = ({ statusData }: { statusData: Data }) => {
  const panelLinks =
    "text-sm text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700";
  const gridLinks =
    "block mb-3 text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700";
  const logoLinks =
    "flex items-center space-x-2 text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700";

  return (
    <div className="flex items-center justify-center w-full px-4 bg-white dark:bg-[#09101F] md:pt-24 border-t dark:border-gray-200 border-gray-800">
      <div className="container px-4 mx-auto">
        {/* 
          Main Grid on Larger Screens, hidden on small screens
        */}
        <div className="hidden grid-cols-2 gap-12 pb-16 md:grid sm:grid-cols-4">
          {/* 
            First Column - Logo, Twitter, etc. 
          */}
          <div className="flex flex-col items-start ml-8">
            <Link
              className="flex text-[#656A8C] hover:text-berry-900 dark:text-gray-300"
              href="/"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 fill-[#656A8C] dark:fill-gray-300"
              >
                <path
                  fill="inherit"
                  d="M24.8172 16.3508L19.4768 7.25452C19.2319 6.83646 18.6285 6.49438 18.1358 6.49438H14.8018C14.0268 6.49438 13.709 5.95705 14.0957 5.30028L15.924 2.19416C16.0691 1.94761 16.0688 1.64416 15.9232 1.39791C15.7776 1.15167 15.5088 1 15.2179 1H10.5668C10.0741 1 9.46936 1.3413 9.22284 1.7584L0.185002 17.0513C-0.0615144 17.4684 -0.0616976 18.1511 0.184635 18.5683L2.51012 22.5073C2.89759 23.1636 3.53305 23.1643 3.92217 22.509L5.73928 19.4489C6.1284 18.7935 6.76386 18.7943 7.15133 19.4506L8.7987 22.2409C9.04497 22.6582 9.64968 22.9995 10.1423 22.9995H20.89C21.3826 22.9995 21.9873 22.6582 22.2336 22.2409L24.8145 17.8696C25.0608 17.4524 25.062 16.7689 24.8172 16.3508ZM17.605 15.913C17.99 16.5707 17.671 17.1087 16.8961 17.1087H8.53623C7.76129 17.1087 7.44424 16.5718 7.83171 15.9155L12.015 8.83009C12.4024 8.17379 13.0364 8.17379 13.4238 8.83015L17.605 15.913Z"
                />
              </svg>
            </Link>
            <ul className="flex items-start justify-center mt-8 space-x-4 text-sm md:flex-col md:space-x-0 md:space-y-3 ">
              <li>
                <a
                  href="https://twitter.com/AxiomFM"
                  className={logoLinks}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to Axiom twitter"
                >
                  <span className="inline-block ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="svg-inline--fa fa-twitter fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </span>
                  <span className="inline">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className={logoLinks}
                  target="_blank"
                  href="/support#axiom-community"
                >
                  <span className="inline-block ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="svg-inline--fa fa-twitter fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"
                      ></path>
                    </svg>
                  </span>
                  <span className="inline">Slack</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/axiomhq"
                  className={logoLinks}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-block ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </span>
                  <span className="inline">Github</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 
            Second Column - Resources
          */}
          <div className="text-sm">
            <div className="mb-6 text-slate-900 dark:text-slate-100 font-medium text-[15px]">
              Resources
            </div>
            {footerItems.resources.map((item, index) => {
              return item.internal ? (
                <Link
                  key={`${index}`}
                  scroll={true}
                  href={item.path}
                  className={gridLinks}
                >
                  {item.name}
                </Link>
              ) : (
                <a key={`${index}`} className={gridLinks} href={item.path}>
                  {item.name}
                </a>
              );
            })}
          </div>
          {/* 
            Third Column - Company
          */}
          <div className="text-sm">
            <div className="mb-6 text-berry-900 dark:text-white font-medium text-[15px]">
              Company
            </div>
            {footerItems.company.map((item, index) => {
              return item.internal ? (
                <Link key={`${index}`} href={item.path} className={gridLinks}>
                  {item.name}
                </Link>
              ) : (
                <a key={`${index}`} className={gridLinks} href={item.path}>
                  {item.name}
                </a>
              );
            })}
          </div>
          {/* 
            Fourth Column - Legal
          */}
          <div className="text-sm">
            <div className="mb-6 text-berry-900 dark:text-white font-medium text-[15px]">
              Legal
            </div>
            {footerItems.legal.map((item, index) => {
              return item.internal ? (
                <Link key={`${index}`} href={item.path} className={gridLinks}>
                  {item.name}
                </Link>
              ) : (
                <a key={`${index}`} className={gridLinks} href={item.path}>
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* 
          Accordion/Disclosure panels for phones, hidden on large screens 
        */}
        <div className="flex flex-col py-8 md:hidden">
          <Disclosure>
            <Disclosure.Button className="w-full flex justify-between items-center text-base text-left text-berry-900 dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
              <h4>Resources</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel
              as="ul"
              className="flex flex-col py-4 pl-4 space-y-4"
            >
              {footerItems.resources.map((item, index) => {
                return item.internal ? (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button as={Link} href={item.path}>
                      {item.name}
                    </Disclosure.Button>
                  </li>
                ) : (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button>
                      <a href={item.path}>{item.name}</a>
                    </Disclosure.Button>
                  </li>
                );
              })}
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="w-full flex justify-between items-center text-base text-left text-berry-900 dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
              <h4>Company</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel
              as="ul"
              className="flex flex-col py-4 pl-4 space-y-4"
            >
              {footerItems.company.map((item, index) => {
                return item.internal ? (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button as={Link} href={item.path}>
                      {item.name}
                    </Disclosure.Button>
                  </li>
                ) : (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button>
                      <a href={item.path}>{item.name}</a>
                    </Disclosure.Button>
                  </li>
                );
              })}
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="w-full flex justify-between items-center text-base text-left text-berry-900 dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
              <h4>Legal</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel
              as="ul"
              className="flex flex-col py-4 pl-4 space-y-4"
            >
              {footerItems.legal.map((item, index) => {
                return item.internal ? (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button as={Link} href={item.path}>
                      {item.name}
                    </Disclosure.Button>
                  </li>
                ) : (
                  <li className={panelLinks} key={`${index}`}>
                    <Disclosure.Button>
                      <a href={item.path}>{item.name}</a>
                    </Disclosure.Button>
                  </li>
                );
              })}
            </Disclosure.Panel>
          </Disclosure>
        </div>
        {/* 
          Final Bottom Section
        */}
        <div className="flex flex-col flex-wrap items-center justify-between pb-8 space-y-6 md:pt-8 md:space-y-0 md:flex-row md:border-t md:dark:border-gray-800">
          <div className="block md:hidden">
            <svg
              width="135"
              height="27"
              viewBox="0 0 135 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 fill-[#656A8C] dark:fill-gray-300"
            >
              <path
                d="M47.1862 19.3175H39.9179L39.0223 21.8865C38.8766 22.3046 38.3832 22.6467 37.926 22.6467H34.0002C33.543 22.6467 33.3064 22.311 33.4745 21.9008L40.5895 4.53706C40.7575 4.12684 41.2692 3.79122 41.7264 3.79122H45.408C45.8653 3.79122 46.3765 4.12702 46.544 4.53744L53.6306 21.9004C53.7981 22.3109 53.561 22.6467 53.1038 22.6467H49.178C48.7208 22.6467 48.2275 22.3046 48.0817 21.8865L47.1862 19.3175ZM45.9035 15.6053L43.552 8.77019L41.2006 15.6053H45.9035ZM70.3652 22.6467C69.908 22.6467 69.3403 22.3379 69.1037 21.9604L65.7471 16.607L62.3906 21.9604C62.1539 22.3379 61.5862 22.6467 61.129 22.6467H56.3479C55.8907 22.6467 55.7291 22.3496 55.9887 21.9866L62.4488 12.9538L56.559 4.45786C56.3048 4.09121 56.471 3.79122 56.9282 3.79122H61.3427C61.7999 3.79122 62.3709 4.09808 62.6116 4.47312L65.7471 9.35955L68.8547 4.47474C69.0938 4.0988 69.6636 3.79122 70.1209 3.79122H74.566C75.0233 3.79122 75.1882 4.09046 74.9326 4.45619L69.0148 12.9243L75.5051 21.9868C75.765 22.3497 75.6035 22.6467 75.1463 22.6467H70.3652ZM83.9908 21.8447C83.9908 22.2858 83.6167 22.6467 83.1595 22.6467H79.6304C79.1732 22.6467 78.7991 22.2858 78.7991 21.8447V4.59321C78.7991 4.15212 79.1732 3.79122 79.6304 3.79122H83.1595C83.6167 3.79122 83.9908 4.15212 83.9908 4.59321V21.8447ZM87.1173 13.16C87.1173 7.68018 91.3926 3.261 97.9585 3.261C104.524 3.261 108.8 7.68018 108.8 13.16C108.8 18.6694 104.524 23.0886 97.9585 23.0886C91.3926 23.0886 87.1173 18.6694 87.1173 13.16ZM103.486 13.16C103.486 10.3023 101.409 7.70955 97.9585 7.70955C94.5383 7.70955 92.431 10.3023 92.431 13.16C92.431 16.0179 94.5383 18.6694 97.9585 18.6694C101.379 18.6694 103.486 16.0179 103.486 13.16ZM130.959 22.6467C130.502 22.6467 130.08 22.2888 130.021 21.8513L128.662 11.7459L124.738 21.8952C124.578 22.3085 124.073 22.6467 123.616 22.6467H121.889C121.432 22.6467 120.928 22.3082 120.769 21.8945L116.843 11.6574L115.484 21.8512C115.425 22.2887 115.003 22.6467 114.546 22.6467H111.231C110.774 22.6467 110.451 22.2891 110.513 21.8521L112.974 4.58574C113.036 4.14876 113.461 3.79122 113.918 3.79122H116.989C117.446 3.79122 117.953 4.12861 118.116 4.54098L122.737 16.283L127.388 4.5404C127.551 4.12834 128.059 3.79122 128.516 3.79122H131.587C132.044 3.79122 132.469 4.14876 132.531 4.58574L134.992 21.8521C135.055 22.2891 134.731 22.6467 134.274 22.6467H130.959ZM26.2993 18.0486L20.64 8.53881C20.3805 8.10174 19.7411 7.74414 19.2189 7.74414H15.6857C14.8645 7.74414 14.5279 7.18235 14.9375 6.49573L16.875 3.24842C17.0288 2.9907 17.0285 2.67343 16.8742 2.41599C16.7199 2.15855 16.435 2 16.1268 2H11.1979C10.6758 2 10.0349 2.3568 9.77368 2.7929L0.19608 18.7809C-0.0652427 19.217 -0.065343 19.9307 0.195678 20.3669L2.66008 24.4849C3.07072 25.171 3.7441 25.1718 4.15646 24.4867L6.08205 21.2874C6.49451 20.6023 7.16778 20.6031 7.57843 21.2892L9.32419 24.2064C9.58522 24.6426 10.226 24.9995 10.7481 24.9995H22.1376C22.6597 24.9995 23.3004 24.6426 23.5615 24.2064L26.2965 19.6363C26.5575 19.2001 26.5588 18.4857 26.2993 18.0486ZM18.6564 17.5909C19.0645 18.2784 18.7265 18.8409 17.9052 18.8409H9.04601C8.22481 18.8409 7.88883 18.2796 8.29948 17.5935L12.7325 10.186C13.1431 9.49988 13.8149 9.49991 14.2256 10.186L18.6564 17.5909Z"
                fill="inherit"
              />
            </svg>
          </div>

          {/* 
            Atlassian Status Indicator
          */}
          <StatusButton statusData={statusData}></StatusButton>

          <div className="flex flex-col space-y-6 md:space-y-0">
            {/* 
              Block of Icons on small screens (phone), hidden on larger screens
            */}
            <div className="block md:hidden">
              <ul className="flex items-start justify-center space-x-4 text-sm md:flex-col md:space-x-0 md:space-y-3 ">
                <li>
                  <a
                    href="https://twitter.com/AxiomFM"
                    className={logoLinks}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Axiom twitter"
                  >
                    <span className="inline-block ">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="svg-inline--fa fa-twitter fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </span>
                    <span className="hidden">Follow on Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    className={logoLinks}
                    target="_blank"
                    rel="noreferrer"
                    href="/support#axiom-community"
                  >
                    <span className="inline-block ">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="svg-inline--fa fa-twitter fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"
                        ></path>
                      </svg>
                    </span>
                    <span className="hidden">Slack</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/axiomhq"
                    className={logoLinks}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-block ">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </span>
                    <span className="hidden">Github</span>
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Copyright © 2022 Axiom, Inc.
              <span className="hidden md:inline"> All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
