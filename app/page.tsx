export default async function Index() {
  return (
    <>
      <div className='w-full'>
        <h1 className='banner:text-7xl banner:leading-[84px] mt-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text pb-4 text-[28px] font-extrabold leading-[40px] tracking-[-0.05em] text-transparent sm:text-center md:pt-2 md:text-5xl md:leading-[50px] md:tracking-[-0.07em] lg:mt-16 lg:text-6xl lg:leading-[70px]'>
          You&apos;ve got 99 problems,
          <br /> logging shouldn&apos;t be one.
        </h1>
        <p className='mt-6 text-lg text-gray-900 dark:text-[#AAB7D2] sm:text-center md:mt-6 lg:text-[22px] lg:leading-[33px]'>
          From inception to product market fit and beyond, <br className='hidden lg:inline' />{' '}
          logging is now a solved problem for your product.
        </p>
      </div>

      {/*
        Big Rounded Section
      */}
      <div className="relative my-8 grid grid-cols-1 gap-8 rounded-[25px] border-[2px] border-transparent bg-gray-100 bg-clip-padding p-8 text-sm text-gray-900 before:absolute before:inset-0 before:z-[-1] before:m-[-2px] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:content-[''] dark:bg-[#09101F] dark:text-[#AAB7D2] sm:mx-8 md:grid-cols-3 lg:p-12">
        <div className='flex items-start space-x-2'>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-8'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                  stroke='url(#paint0_linear_2237_245)'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <defs>
                  <linearGradient
                    id='paint0_linear_2237_245'
                    x1='5.93523'
                    y1='4.54207'
                    x2='21.0883'
                    y2='8.686'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#8b5cf6'></stop>
                    <stop offset='1' stopColor='#d946ef'></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className='pt-[2px] text-base font-semibold text-gray-900 dark:text-gray-100'>
                Coordination free ingest
              </h2>
            </div>
            <p>
              Axiom does not need to run huge VMs to handle petabytes of ingest volume. Instead it
              has a custom-built ingest pipeline that is hyper efficient at one thing: ingesting
              data safely.
            </p>
          </div>
        </div>
        <div className='flex items-start space-x-2'>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-8'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                  stroke='url(#paint0_linear_2237_245)'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <defs>
                  <linearGradient
                    id='paint0_linear_2237_245'
                    x1='5.93523'
                    y1='4.54207'
                    x2='21.0883'
                    y2='8.686'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#8b5cf6'></stop>
                    <stop offset='1' stopColor='#d946ef'></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className='pt-[2px] text-base font-semibold text-gray-900 dark:text-gray-100'>
                Object storage by default
              </h2>
            </div>
            <p>
              Axiom uses object storage by default for all data. This means your data is already on
              the cheapest storage option all the time, without having to wait for it to be ready
              for queries or suffering performance issues.
            </p>
          </div>
        </div>
        <div className='flex items-start space-x-2'>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-8'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                  stroke='url(#paint0_linear_2237_245)'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <defs>
                  <linearGradient
                    id='paint0_linear_2237_245'
                    x1='5.93523'
                    y1='4.54207'
                    x2='21.0883'
                    y2='8.686'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#8b5cf6'></stop>
                    <stop offset='1' stopColor='#d946ef'></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className='pt-[2px] text-base font-semibold text-gray-900 dark:text-gray-100'>
                Serverless querying
              </h2>
            </div>
            <p>
              Serverless functions run queries, no matter how large or small they are. This means
              there is no need to keep expensive resources running, instead Axiom uses exactly what
              it needs, exactly when it needs.
            </p>
          </div>
        </div>
      </div>

      {/* 
        Big Button 
      */}
      <div className='mb-12 flex justify-center'>
        <a href='https://cloud.axiom.co'>
          <div className='pointer-events-none relative rounded-lg shadow-lg '>
            <div className='relative isolate z-10 m-[-2px] overflow-hidden rounded-[inherit] p-[3px]'>
              <div className='animate-buttonStroke bg-buttonConicGradient absolute inset-0 origin-[center_center] blur-[4px] will-change-transform'></div>
              <div className='relative z-50'>
                <div className='flex items-center space-x-3 rounded-lg border border-[#ffffff10] bg-gray-100 px-8 py-4 font-bold text-gray-900 hover:bg-gray-200 dark:bg-[#0e1422] dark:text-white'>
                  <span>Try free 14 day trial</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2.5px'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-5 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7'></path>
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
      <div className='mb-12 flex w-full justify-center'>
        <div className='flex flex-col items-center justify-around space-y-4 rounded-[25px] border border-gray-300 p-8 dark:border-[#ffffff22] dark:bg-[#0D1423] md:p-4 lg:w-full lg:flex-row lg:space-y-0'>
          <div className='flex w-[240px] items-center justify-start space-x-2 rounded-[8px] px-4 py-2 lg:w-auto'>
            <svg
              className='h-6 w-6 text-[#8CBDFF]'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                stroke='url(#paint0_linear_2237_245)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear_2237_245'
                  x1='5.93523'
                  y1='4.54207'
                  x2='21.0883'
                  y2='8.686'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8b5cf6'></stop>
                  <stop offset='1' stopColor='#d946ef'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2 className='text-sm font-medium text-gray-900 dark:text-white md:text-base'>
              Unlimited Users
            </h2>
          </div>
          <div className='flex w-[240px] items-center justify-start space-x-2 rounded-[8px] px-4 py-2  lg:w-auto'>
            <svg
              className='h-6 w-6 text-[#8CBDFF]'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                stroke='url(#paint0_linear_2237_245)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear_2237_245'
                  x1='5.93523'
                  y1='4.54207'
                  x2='21.0883'
                  y2='8.686'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8b5cf6'></stop>
                  <stop offset='1' stopColor='#d946ef'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2 className='text-sm font-medium text-gray-900 dark:text-white md:text-base'>
              Unlimited Sources
            </h2>
          </div>
          <div className=' flex w-[240px] items-center justify-start space-x-2 rounded-[8px] px-4 py-2  lg:w-auto'>
            <svg
              className='h-6 w-6 text-[#8CBDFF]'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                stroke='url(#paint0_linear_2237_245)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear_2237_245'
                  x1='5.93523'
                  y1='4.54207'
                  x2='21.0883'
                  y2='8.686'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8b5cf6'></stop>
                  <stop offset='1' stopColor='#d946ef'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2 className='text-sm font-medium text-gray-900 dark:text-white md:text-base'>
              Unlimited Hosts
            </h2>
          </div>
          <div className=' flex w-[240px] items-center justify-start space-x-2 rounded-[8px] px-4 py-2  lg:w-auto'>
            <svg
              className='h-6 w-6 text-[#8CBDFF]'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                stroke='url(#paint0_linear_2237_245)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear_2237_245'
                  x1='5.93523'
                  y1='4.54207'
                  x2='21.0883'
                  y2='8.686'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8b5cf6'></stop>
                  <stop offset='1' stopColor='#d946ef'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2 className='text-sm font-medium text-gray-900 dark:text-white md:text-base'>
              Unlimited Agents
            </h2>
          </div>
          <div className=' flex w-[240px] items-center justify-start space-x-2 rounded-[8px] px-4 py-2  lg:w-auto'>
            <svg
              className='h-6 w-6 text-[#8CBDFF]'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                stroke='url(#paint0_linear_2237_245)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear_2237_245'
                  x1='5.93523'
                  y1='4.54207'
                  x2='21.0883'
                  y2='8.686'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8b5cf6'></stop>
                  <stop offset='1' stopColor='#d946ef'></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2 className='text-sm font-medium text-gray-900 dark:text-white md:text-base'>
              Unlimited Dashboards
            </h2>
          </div>
        </div>
      </div>

      {/*
        Bottom Section
      */}
      <div className='mb-16 w-full'>
        <div
          className='rounded-[8px] border border-gray-300 bg-gradient-to-b from-[#D9D9D905] to-[#ba3a3a05] bg-[300%_auto] p-4 shadow-lg dark:border-[#ffffff22] md:rounded-[40px] lg:bg-cover lg:p-12'
          style={{
            backgroundImage: 'url(/img/grid-dash.svg)',
            backgroundPosition: 'top',
            backgroundRepeat: 'revert-layer',
            zIndex: '0',
          }}
        >
          <div className='flex w-full items-center justify-center p-4 lg:pb-8'>
            <div className='w-full max-w-[1237px]'>
              <div className='grid items-center pb-8 lg:grid-cols-[1.4fr_1fr] lg:pb-16'>
                <div className='flex flex-col space-y-4 text-center text-sm text-gray-700 dark:text-white lg:space-y-8 lg:text-left'>
                  <div className='flex flex-col space-y-4'>
                    <h2 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-2xl font-semibold uppercase leading-normal text-transparent'>
                      Datastore
                    </h2>
                    <h1 className='text-2xl font-bold text-gray-700 dark:text-white lg:whitespace-nowrap lg:text-4xl'>
                      Built from the ground-up for logging
                    </h1>
                  </div>
                  <div className='leading-loose lg:text-base'>
                    <p>
                      Axiom uses it&apos;s own, custom-built, datastore built from the ground-up for
                      logging.
                      <br />
                      <br />
                      After working for years with endless open-source &amp; commerically available
                      logging products, the team at Axiom decided to build a datastore that was
                      designed for the cloud. This resulted in a unique architecture that is
                      completely different from existing solutions:
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-1 gap-8 rounded-[25px] border-[2px] border-transparent bg-gray-100 bg-clip-padding p-8 text-sm text-gray-900 before:absolute before:inset-0 before:z-[-1] before:m-[-2px] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:content-[''] dark:bg-[#09101F] dark:text-[#AAB7D2] md:grid-cols-3 lg:p-12">
                <div className='flex items-start space-x-2'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-8 text-[#8CBDFF]'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                          stroke='url(#paint0_linear_2237_245)'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2237_245'
                            x1='5.93523'
                            y1='4.54207'
                            x2='21.0883'
                            y2='8.686'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#8CBDFF'></stop>
                            <stop offset='1' stopColor='#BE99FF'></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h2 className='pt-[2px] text-base font-semibold text-gray-800 dark:text-white'>
                        Coordination free ingest
                      </h2>
                    </div>
                    <p>
                      Axiom does not need to run huge VMs to handle petabytes of ingest volume.
                      Instead it has a custom-built ingest pipeline that is hyper efficient at one
                      thing: ingesting data safely.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-2'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-8 text-[#8CBDFF]'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                          stroke='url(#paint0_linear_2237_245)'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2237_245'
                            x1='5.93523'
                            y1='4.54207'
                            x2='21.0883'
                            y2='8.686'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#8CBDFF'></stop>
                            <stop offset='1' stopColor='#BE99FF'></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h2 className='pt-[2px] text-base font-semibold text-gray-800 dark:text-white'>
                        Object storage by default
                      </h2>
                    </div>
                    <p>
                      Axiom uses object storage by default for all data. This means your data is
                      already on the cheapest storage option all the time, without having to wait
                      for it to be ready for queries or suffering performance issues.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-2'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-8 text-[#8CBDFF]'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
                          stroke='url(#paint0_linear_2237_245)'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2237_245'
                            x1='5.93523'
                            y1='4.54207'
                            x2='21.0883'
                            y2='8.686'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#8CBDFF'></stop>
                            <stop offset='1' stopColor='#BE99FF'></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h2 className='pt-[2px] text-base font-semibold text-gray-800 dark:text-white'>
                        Serverless querying
                      </h2>
                    </div>
                    <p>
                      Serverless functions run queries, no matter how large or small they are. This
                      means there is no need to keep expensive resources running, instead Axiom uses
                      exactly what it needs, exactly when it needs.
                    </p>
                  </div>
                </div>
              </div>
              <p className='mt-12 px-4 text-center text-gray-900 dark:text-white md:text-left'>
                Together, these architectural decisions make our datastore incredibly efficient
                without compromising on features or durability.
              </p>
              <p className='mt-4 px-4 text-center text-gray-900 dark:text-white md:text-left'>
                What this means for you is that the team at Axiom can enable new levels of logging
                for even small customers, as well as enable more kinds of data to be logged and used
                by your team.
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
