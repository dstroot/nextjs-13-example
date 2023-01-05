export default async function Index() {
  return (
    <>
      <div className="w-full">
        <h1 className="mt-8 pb-4 lg:mt-16 sm:text-center text-[28px] leading-[40px] md:leading-[50px] md:pt-2 md:text-5xl lg:text-6xl lg:leading-[70px] banner:text-7xl banner:leading-[84px] tracking-[-0.05em] md:tracking-[-0.07em] font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
          You’ve got 99 problems,
          <br /> logging shouldn’t be one.
        </h1>
        <p className="mt-6 md:mt-6 text-lg lg:text-[22px] lg:leading-[33px] text-gray-900 dark:text-[#AAB7D2] sm:text-center">
          From inception to product market fit and beyond,{" "}
          <br className="hidden lg:inline" /> logging is now a solved problem
          for your product.
        </p>
      </div>

      {/*
        Big Rounded Section
      */}
      <div className="sm:mx-8 my-8 text-sm grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900 dark:text-[#AAB7D2] p-8 lg:p-12 rounded-[25px] bg-gray-100 dark:bg-[#09101F] relative bg-clip-padding border-[2px] border-transparent before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:-m-[2px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500">
        <div className="flex items-start space-x-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="url(#paint0_linear_2237_245)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2237_245"
                    x1="5.93523"
                    y1="4.54207"
                    x2="21.0883"
                    y2="8.686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8b5cf6"></stop>
                    <stop offset="1" stopColor="#d946ef"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="text-base pt-[2px] font-semibold text-gray-900 dark:text-gray-100">
                Coordination free ingest
              </h4>
            </div>
            <p>
              Axiom does not need to run huge VMs to handle petabytes of ingest
              volume. Instead it has a custom-built ingest pipeline that is
              hyper efficient at one thing: ingesting data safely.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="url(#paint0_linear_2237_245)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2237_245"
                    x1="5.93523"
                    y1="4.54207"
                    x2="21.0883"
                    y2="8.686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8b5cf6"></stop>
                    <stop offset="1" stopColor="#d946ef"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="text-base pt-[2px] font-semibold text-gray-900 dark:text-gray-100">
                Object storage by default
              </h4>
            </div>
            <p>
              Axiom uses object storage by default for all data. This means your
              data is already on the cheapest storage option all the time,
              without having to wait for it to be ready for queries or suffering
              performance issues.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="url(#paint0_linear_2237_245)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2237_245"
                    x1="5.93523"
                    y1="4.54207"
                    x2="21.0883"
                    y2="8.686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8b5cf6"></stop>
                    <stop offset="1" stopColor="#d946ef"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="text-base pt-[2px] font-semibold text-gray-900 dark:text-gray-100">
                Serverless querying
              </h4>
            </div>
            <p>
              Serverless functions run queries, no matter how large or small
              they are. This means there is no need to keep expensive resources
              running, instead Axiom uses exactly what it needs, exactly when it
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* 
        Big Button 
      */}
      <div className="flex justify-center mb-12">
        <a href="https://cloud.axiom.co">
          <div className="relative rounded-lg pointer-events-none shadow-lgDark ">
            <div className="z-10 relative overflow-hidden rounded-[inherit] p-[3px] m-[-2px] isolate">
              <div className="will-change-transform animate-buttonStroke blur-[4px] origin-[center_center] absolute top-0 left-0 right-0 bottom-0 bg-buttonConicGradient"></div>
              <div className="relative z-100">
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-[#0e1422] hover:bg-gray-200 border border-[#ffffff10] text-gray-900 dark:text-white font-bold px-8 py-4 rounded-lg">
                  <span>Try free 14 day trial</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5px"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* 
        Items Section
      */}
      <div className="flex justify-center w-full mb-12">
        <div className="lg:w-full flex flex-col lg:flex-row items-center justify-around lg:space-y-0 dark:bg-[#0D1423] border border-gray-300 dark:border-[#ffffff22] rounded-[25px] space-y-4 p-8 md:p-4">
          <div className="w-[240px] lg:w-auto flex space-x-2 items-center justify-start px-4 py-2 rounded-[8px]">
            <svg
              className="w-6 h-6 text-[#8CBDFF]"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="url(#paint0_linear_2237_245)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2237_245"
                  x1="5.93523"
                  y1="4.54207"
                  x2="21.0883"
                  y2="8.686"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CBDFF"></stop>
                  <stop offset="1" stopColor="#BE99FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white md:text-base">
              Unlimited Users
            </h4>
          </div>
          <div className="w-[240px] lg:w-auto flex space-x-2 items-center justify-start px-4 py-2 rounded-[8px]  undefined">
            <svg
              className="w-6 h-6 text-[#8CBDFF]"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="url(#paint0_linear_2237_245)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2237_245"
                  x1="5.93523"
                  y1="4.54207"
                  x2="21.0883"
                  y2="8.686"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CBDFF"></stop>
                  <stop offset="1" stopColor="#BE99FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white md:text-base">
              Unlimited Sources
            </h4>
          </div>
          <div className="w-[240px] lg:w-auto flex space-x-2 items-center justify-start px-4 py-2 rounded-[8px]  undefined">
            <svg
              className="w-6 h-6 text-[#8CBDFF]"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="url(#paint0_linear_2237_245)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2237_245"
                  x1="5.93523"
                  y1="4.54207"
                  x2="21.0883"
                  y2="8.686"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CBDFF"></stop>
                  <stop offset="1" stopColor="#BE99FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white md:text-base">
              Unlimited Hosts
            </h4>
          </div>
          <div className="w-[240px] lg:w-auto flex space-x-2 items-center justify-start px-4 py-2 rounded-[8px]  undefined">
            <svg
              className="w-6 h-6 text-[#8CBDFF]"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="url(#paint0_linear_2237_245)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2237_245"
                  x1="5.93523"
                  y1="4.54207"
                  x2="21.0883"
                  y2="8.686"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CBDFF"></stop>
                  <stop offset="1" stopColor="#BE99FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white md:text-base">
              Unlimited Agents
            </h4>
          </div>
          <div className="w-[240px] lg:w-auto flex space-x-2 items-center justify-start px-4 py-2 rounded-[8px]  undefined">
            <svg
              className="w-6 h-6 text-[#8CBDFF]"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="url(#paint0_linear_2237_245)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2237_245"
                  x1="5.93523"
                  y1="4.54207"
                  x2="21.0883"
                  y2="8.686"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CBDFF"></stop>
                  <stop offset="1" stopColor="#BE99FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white md:text-base">
              Unlimited Dashboards
            </h4>
          </div>
        </div>
      </div>

      {/*
        Bottom Section
      */}
      <div className="w-full mb-16">
        <div
          className="border border-gray-300 dark:border-[#ffffff22] rounded-[8px] md:rounded-[40px] p-4 lg:p-12 bg-gradient-to-b from-[#D9D9D905] to-[#ba3a3a05] shadow-lgDark bg-[300%_auto] lg:bg-cover"
          style={{
            backgroundImage: "url(/img/grid-dash.svg)",
            backgroundPosition: "top",
            backgroundRepeat: "revert-layer",
            zIndex: "0",
          }}
        >
          <div className="flex items-center justify-center w-full px-4 pt-4 pb-4 lg:pb-8">
            <div className="w-full max-w-[1237px]">
              <div className="grid lg:grid-cols-[1.4fr_1fr] pb-8 lg:pb-16 items-center">
                <div className="flex flex-col space-y-4 text-sm text-center text-gray-700 dark:text-white lg:text-left lg:space-y-8">
                  <div className="flex flex-col space-y-4">
                    <h4
                      // style={{"background:linear-gradient(90.73deg, #8CBDFF 0%, #BE99FF 10%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 0px 22px rgba(185, 158, 255, 0.51)"}}
                      className="text-2xl font-semibold leading-normal text-transparent uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text"
                    >
                      Datastore
                    </h4>
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white lg:text-4xl lg:whitespace-nowrap">
                      Built from the ground-up for logging
                    </h1>
                  </div>
                  <div className="leading-loose lg:text-base">
                    <p>
                      Axiom uses it’s own, custom-built, datastore built from
                      the ground-up for logging.
                      <br />
                      <br />
                      After working for years with endless open-source &amp;
                      commerically available logging products, the team at Axiom
                      decided to build a datastore that was designed for the
                      cloud. This resulted in a unique architecture that is
                      completely different from existing solutions:
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900 dark:text-[#AAB7D2] p-8 lg:p-12 rounded-[25px] bg-gray-100 dark:bg-[#09101F] relative bg-clip-padding border-[2px] border-transparent before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:-m-[2px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500">
                <div className="flex items-start space-x-2">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-8 text-[#8CBDFF]"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                          stroke="url(#paint0_linear_2237_245)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_2237_245"
                            x1="5.93523"
                            y1="4.54207"
                            x2="21.0883"
                            y2="8.686"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8CBDFF"></stop>
                            <stop offset="1" stopColor="#BE99FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h4 className="text-base pt-[2px] font-semibold text-gray-800 dark:text-white">
                        Coordination free ingest
                      </h4>
                    </div>
                    <p>
                      Axiom does not need to run huge VMs to handle petabytes of
                      ingest volume. Instead it has a custom-built ingest
                      pipeline that is hyper efficient at one thing: ingesting
                      data safely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-8 text-[#8CBDFF]"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                          stroke="url(#paint0_linear_2237_245)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_2237_245"
                            x1="5.93523"
                            y1="4.54207"
                            x2="21.0883"
                            y2="8.686"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8CBDFF"></stop>
                            <stop offset="1" stopColor="#BE99FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h4 className="text-base pt-[2px] font-semibold text-gray-800 dark:text-white">
                        Object storage by default
                      </h4>
                    </div>
                    <p>
                      Axiom uses object storage by default for all data. This
                      means your data is already on the cheapest storage option
                      all the time, without having to wait for it to be ready
                      for queries or suffering performance issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-8 text-[#8CBDFF]"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                          stroke="url(#paint0_linear_2237_245)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_2237_245"
                            x1="5.93523"
                            y1="4.54207"
                            x2="21.0883"
                            y2="8.686"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8CBDFF"></stop>
                            <stop offset="1" stopColor="#BE99FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h4 className="text-base pt-[2px] font-semibold text-gray-800 dark:text-white">
                        Serverless querying
                      </h4>
                    </div>
                    <p>
                      Serverless functions run queries, no matter how large or
                      small they are. This means there is no need to keep
                      expensive resources running, instead Axiom uses exactly
                      what it needs, exactly when it needs.
                    </p>
                  </div>
                </div>
              </div>
              <p className="px-4 mt-12 text-center text-gray-900 dark:text-white md:text-left">
                Together, these architectural decisions make our datastore
                incredibly efficient without compromising on features or
                durability.
              </p>
              <p className="px-4 mt-4 text-center text-gray-900 dark:text-white md:text-left">
                What this means for you is that the team at Axiom can enable new
                levels of logging for even small customers, as well as enable
                more kinds of data to be logged and used by your team.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
