// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies',
  // description: 'NextJS + TailwindCSS minimalist starter kit',
  // openGraph: {
  //   title: 'NextJS + TailwindCSS minimalist starter kit',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
};


export default function Index() {
  return (
    <div className='mx-auto max-w-4xl'>
      <div className='prose prose-lg mb-8 max-w-none break-words dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500'>
        <div className='flex w-full px-4 pt-12 text-center'>
          <div className='w-full'>
            <h1 className='text-berry-900 text-5xl font-bold dark:text-gray-200'>Cookies</h1>
            <h2 className='text-berry-700 px-6 pb-12 pt-6 text-xl leading-relaxed dark:text-gray-300 sm:px-24'>
              This policy explains how we use cookies and similar
              <br className='hidden sm:block' /> tracking technologies on our websites.
            </h2>
          </div>
        </div>

        <article className='prose max-w-none dark:prose-invert'>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer when you visit a site.
            Cookies serve different purposes, like helping us understand how our site is being used,
            letting you navigate between pages efficiently, remembering your preferences, and
            generally improving your browsing experience. Cookies can also help ensure advertising
            you see online is more relevant to you and your interests.
          </p>
          <h2>Who places cookies on my device?</h2>
          <p>
            Cookies set by the site you visit are called “first party cookies”. Cookies set by
            parties other than us are called “third party cookies”. Third party cookies enable third
            party features or functionality within the site, such as site analytics, advertising and
            social media features. The parties that set these third party cookies can recognize your
            computer or device both when it visits the site in question and also when it visits
            certain other sites and/or mobile apps. We do not control how these third parties&apos;
            use your information, which is subject to their own privacy policies. See below for
            details on use of third party cookies and similar technologies with our sites and app.
          </p>
          <h2>How long will cookies stay on my device?</h2>
          <p>
            The length of time a cookie will stay on your device depends on whether it is a
            “persistent” or “session” cookie. Session cookies will only stay on your device until
            you stop browsing. Persistent cookies stay on your browsing device after you have
            finished browsing until they expire or are deleted.
          </p>
          <h2>What other tracking technologies should I know about?</h2>
          <p>
            Cookies are not the only way to track visitors to a site or app. Companies use tiny
            graphics files with unique identifiers called beacons (and also “pixels” or “clear
            gifs”) to recognize when someone visits its sites. These technologies often depend on
            cookies to function properly, and so disabling cookies may impair their functioning.
          </p>
          <h2>What types of cookies and similar tracking technologies does Axiom use?</h2>
          <p>
            We use cookies and other tracking technologies in the following categories described in
            the table below.
          </p>

          <table>
            <thead>
              <tr>
                <th>TYPE OF COOKIE</th>
                <th>WHO SERVES THESE COOKIES</th>
                <th>HOW TO REFUSE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Essential Cookies</b>
                  <br />
                  <br />
                  These cookies are essential to provide you with services available through our
                  websites and to enable you to use some of their features. Without these cookies,
                  the services that you have asked for cannot be provided, and we only use these
                  cookies to provide you with those services.
                </td>
                <td>Axiom, Inc.</td>
                <td>
                  Because these cookies are strictly necessary to deliver the Websites to you, you
                  cannot refuse them. You can block or delete them by changing your browser settings
                  however, as described below under the heading “Your choices”.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Functionality Cookies</b>
                  <br />
                  <br />
                  These cookies allow our websites to remember choices you make when you use them.
                  The purpose of these cookies is to provide you with a more personal experience and
                  to avoid you having to re-select your preferences every time you visit our
                  websites.
                </td>
                <td>Hubspot, Inc.</td>
                <td>
                  To refuse these cookies, please follow the instructions below under the heading
                  “Your choices”. Hubspot is used for conducting live chat &amp; support on the
                  website.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Analytics and Performance Cookies</b>
                  <br />
                  <br />
                  These cookies are used to collect information about traffic to our websites and
                  how users use our websites. The information gathered may include the number of
                  visitors to our websites, the websites that referred them to our websites, the
                  pages they visited on our websites, what time of day they visited our websites,
                  whether they have visited our websites before, and other similar information. We
                  use this information to help operate our websites more efficiently, to gather
                  broad demographic information, monitor the level of activity on our websites, and
                  improve the websites.
                </td>
                <td>
                  Google Analytics
                  <br />
                  Mixpanel
                  <br />
                  Koala
                  <br />
                  Twitter
                </td>
                <td>
                  To refuse these cookies, please follow the instructions below under the heading
                  “Your choices” Alternatively, please click on the relevant opt-out link below:
                  <br />
                  <br />
                  <b>Google Analytics</b>
                  <br />
                  You can find out more information about Google Analytics cookies here and about
                  how Google protects your data here. You can prevent the use of Google Analytics
                  relating to your use of our websites by downloading and installing the browser
                  plugin available here.
                  <br />
                  <br />
                  <b>Mixpanel</b>
                  <br />
                  The subsite, https://cloud.axiom.co (a subsite of axiom.co) uses Mixpanel to help
                  analyze how users use the site. The tool does not use cookies however user data is
                  shared with Mixpanel. In addition to your name and email address, your IP may be
                  transmitted to Mixpanel (though never stored there). This information is then used
                  to evaluate the use of the service as well as compute statistical reports on
                  website activity to help us build a better product.
                  <br />
                  <br />
                  You can find more information about Mixpanel&apos;s privacy policy here:
                  https://mixpanel.com/privacy. If you wish to not share usage information with
                  Mixpanel, please let us know at privacy@axiom.co
                  <br />
                  <br />
                  <b>Koala</b>
                  <br />
                  The Services use cookies and similar technologies such as pixel tags, web beacons,
                  clear GIFs and JavaScript (collectively, “Cookies”) to enable our servers to
                  recognize your web browser, tell us how and when you visit and use our Services,
                  analyze trends, learn about our user base and operate and improve our Services.
                  Cookies are small pieces of data– usually text files – placed on your computer,
                  tablet, phone or similar device when you use that device to access our Services.
                  We may also supplement the information we collect from you with information
                  received from third parties, including third parties that have placed their own
                  Cookies on your device(s). Please note that because of our use of Cookies, the
                  Services do not support “Do Not Track” requests sent from a browser at this time.
                  <br />
                  <br />
                  <b>Twitter</b>
                  <br />
                  Pixels are small amounts of code placed on a web page, in a web-enabled app, or an
                  email. We use pixels, some of which we provide to advertisers to place on their
                  web properties, to learn whether you&apos;ve interacted with specific web or email
                  content — as many services do. This helps us measure and improve our services and
                  personalize your experience, including the ads you see.
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            You can control these cookies as described in the Your choices section below. The third
            parties who serve cookies listed in the table above may use other third parties to place
            cookies, but any such indirect placement of cookies is out of our control. You should
            review the privacy policies of the third parties listed in the table above to find out
            more information about their use of cookies.
          </p>
          <h2>Your choices</h2>
          <p>
            Most browsers let you remove or reject cookies. To do this, follow the instructions in
            your browser settings. Many browsers accept cookies by default until you change your
            settings. Please note that if you set your browser to disable cookies, parts of the site
            may not work properly. For more information about cookies, including how to see what
            cookies have been set on your computer or mobile device and how to manage and delete
            them, visit www.allaboutcookies.org.
          </p>
          <h2>Changes</h2>
          <p>
            Information about the cookies we use may be updated from time to time, so please check
            back on a regular basis for any changes.
          </p>
          <h2>Questions</h2>
          <p>
            If you have any questions about this Cookie Policy, please contact us by email at
            privacy@axiom.co.
          </p>
        </article>
        <div className='py-8 text-center text-sm text-slate-500'>[As of August 20th, 2020]</div>
      </div>
    </div>
  );
}
