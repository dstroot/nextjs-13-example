// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
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
            <h1 className='text-berry-900 text-5xl font-bold dark:text-gray-200'>Privacy</h1>
            <h2 className='text-berry-700 px-6 pb-12 pt-6 text-xl leading-relaxed dark:text-gray-300 sm:px-24'>
              We treat your privacy with upmost respect. Exact details are outlined below as plainly
              as possible. If you have any questions,{' '}
              <a href='mailto:privacy@axiom.co'>please get in touch.</a>
            </h2>
          </div>
        </div>

        <article className='my-6 md:my-10'>
          <p>
            This Privacy Policy explains how Axiom, Inc. (“Axiom”, “us”, “we” or “our”) collects,
            uses, shares, and otherwise processes personal information in connection with our
            websites (the “Sites”) and online services.
          </p>

          <h2>Personal Information We Collect</h2>

          <p>
            Information you provide to us.Personal information that you may provide through the
            Sites, or otherwise communicate with us, includes:
          </p>
          <ul>
            <li>
              <b>Contact information,</b> such as your first and last name, phone number, email
              address and company name.
            </li>
            <li>
              <b>Feedback and correspondence,</b> such as information you provide when you report a
              problem with the Sites or otherwise correspond with us.
            </li>
            <li>
              <b>Marketing information,</b> such as your preferences for receiving marketing
              communications and details about how you engage with marketing communications.
            </li>
          </ul>
          <p>
            <b>Information from third party sites.</b> Our Sites include interfaces that allow you
            to connect with third party sites, such as when you create an account on our Sites by
            logging in to your Google account. If you connect to a third party site through the
            Sites, you authorize us to access, use and store the information that you agreed the
            third party site could provide to us based on your settings on that third party site. We
            will access, use and store that information in accordance with this Privacy Policy. You
            can revoke our access to the information you provide in this way at any time by amending
            the appropriate settings from within your account settings on the applicable third party
            site.
          </p>
          <p>
            <b>Information Collected Automatically.</b> We may automatically log information about
            you and your computer or mobile device when you access our Sites. For example, we may
            log your operating system name and version, manufacturer and model, device identifier,
            browser type, screen resolution, the website you visited before browsing to our Sites,
            pages you viewed, how long you spent on a page, access times, general location
            information such as city, state or geographic area, and information about your use of
            and actions on our Sites. We collect this information about you using cookies. Please
            refer to the <a href='/cookies'>Cookies and Similar Technologies</a> section for more
            details.
          </p>
          <p>
            To make our Sites more useful to you, our servers (which may be hosted by a third party
            service provider) collect information from you, including your browser type, operating
            system, Internet Protocol (“IP”) address (a number that is automatically assigned to
            your computer when you use the Internet, which may vary from session to session), domain
            name, and/or a date/time stamp for your visit.
          </p>
          <h2>How We Use Your Personal Information</h2>
          <p>
            We use your personal information for the following purposes and as otherwise described
            to you in this Privacy Policy or at the time of collection:
          </p>
          <p>
            <b>To provide you with our products and services.</b> We use your personal information
            to register you and/or your company for an account and to communicate with you regarding
            Axiom and our Sites, including by sending you announcements, updates, and support and
            administrative messages.
          </p>
          <p>To operate the Sites. We use your personal information to:</p>
          <ul>
            <li>operate, maintain, administer and improve the Sites</li>
            <li>improve the quality of experience when you interact with our Sites;</li>
            <li>
              better understand your needs and interests, and personalize your experience with the
              Sites; and
            </li>
            <li>respond to your service-related requests, questions and feedback.</li>
          </ul>
          <p>
            <b>For research and development.</b> We use information automatically collected and
            other information to analyze trends, administer the Sites, analyze users&apos; movements
            around the Sites, gather demographic information about our user base as a whole and
            improve the Sites.
          </p>
          <p>
            <b>To send you surveys and marketing communications.</b> We may send you surveys,
            promotions or other marketing communications but you may opt out of receiving them as
            described in the Email communications section below.
          </p>
          <p>
            <b>To create anonymous data.</b> We may create aggregated and other anonymous data from
            our users&apos; information. We make personal information into anonymous data by
            removing information that makes the data personally identifiable. We may use this
            anonymous data and share it with third parties for our lawful business purposes.
          </p>
          <p>
            <b>For compliance, fraud prevention and safety.</b> We may use your personal information
            as we believe appropriate to (a) investigate violations of and enforce our Terms of Use;
            (b) protect our, your or others&apos; rights, privacy, safety or property (including by
            making and defending legal claims); and (c) protect, investigate and deter against
            fraudulent, harmful, unauthorized, unethical or illegal activity.
          </p>
          <p>
            <b>For compliance with law.</b> We may use your personal information as we believe
            appropriate to (a) comply with applicable laws, lawful requests and legal process, such
            as to respond to subpoenas or requests from government authorities; and (b) where
            permitted by law in connection with a legal investigation.
          </p>
          <p>
            <b>With your consent.</b> In some cases we may ask for your consent to collect, use or
            share your personal information, such as when required by law or our agreements with
            third parties.
          </p>
          <h2>How We Share Your Personal Information</h2>
          <p>
            We do not share your personal information with third parties without your consent,
            except in the following circumstances:
          </p>
          <p>
            <b>Service providers.</b> We may share your personal information with third party
            companies and individuals as needed for them to provide us with services in support of
            the Sites (such as hosting and storage, website analytics, email delivery, marketing,
            database management services and legal and other professional advice). These third
            parties will be given limited access to your personal information that is reasonably
            necessary for them to provide their services.
          </p>
          <p>
            <b>Compliance, fraud prevention, safety.</b> We may disclose your personal information
            as we believe appropriate to government or law enforcement officials or private parties
            for the purposes described above under the following sections: For compliance, fraud
            prevention and safety and For compliance with law.
          </p>
          <p>
            <b>Business transfers.</b> We may sell, transfer or otherwise share some or all of our
            business or assets, including your personal information, in connection with a business
            deal (or potential business deal) such as a corporate divestiture, merger,
            consolidation, acquisition, reorganization or sale of assets, or in the event of
            bankruptcy or dissolution.
          </p>
          <h2>Your Choices</h2>
          <p>
            In addition to your choices in connection with cookies (see Cookies and Similar
            Technologies), you have several choices regarding use of information with respect to our
            Sites:
          </p>
          <p>
            <b>Email communications.</b> We may periodically send you information and emails that
            directly promote the use of our Sites. When you receive newsletters or promotional
            communications from us, you may indicate a preference to stop receiving further
            communications from us and you will have the opportunity to “opt-out” by following the
            unsubscribe instructions provided in the e-mail you receive or by contacting us directly
            at contact@axiom.co. You may continue to receive service-related and other non-marketing
            emails.
          </p>
          <p>
            <b>Changes to your personal information.</b> If your personal information changes during
            your relationship with us, you may update your personal information by emailing us at
            privacy@axiom.co. You may also request deletion of your personal information by us, and
            we will use commercially reasonable efforts to honor your request, but please note that
            we may be required to keep such information and not delete it (or to keep this
            information for a certain time, in which case we will comply with your deletion request
            only after we have fulfilled such requirements). When we delete any information, it will
            be deleted from the active database, but may remain in our archives. We may also retain
            your information for fraud or similar purposes.
          </p>
          <p>
            <b>Choosing not to share your personal information.</b> Where we are required by law to
            collect your personal information, or where we need your personal information in order
            to provide the Sites to you, if you do not provide this information when requested (or
            you later ask to delete it), we may not be able to provide you with the Sites. We will
            tell you what information you must provide to receive the Sites by designating it as
            required or through other appropriate means.
          </p>
          <p>
            We may allow service providers and other third parties to use cookies and other tracking
            technologies to track your browsing activity over time and across the Sites and third
            party websites. For more details, see our Cookie Policy. Some Internet browsers may be
            configured to send “Do Not Track” signals to the online services that you visit. We
            currently do not respond to “Do Not Track” or similar signals. To find out more about
            “Do Not Track,” please visit http://www.allaboutdnt.com.
          </p>
          <h2>Other Important Privacy Information</h2>
          <p>
            <b>Security.</b> The security of your personal information important to us. We take a
            number of organizational, technical and physical measures designed to protect the
            personal information we collect. However, security risk is inherent in all internet and
            information technologies and we cannot guarantee the absolute security of your personal
            information. We will comply with applicable laws and regulations requiring that we
            notify you in the event your personal information is compromised as a result of a breach
            of our security measures.
          </p>
          <p>
            <b>Third party sites and services.</b> Our Sites may contain links to third party
            websites. When you click on a link to any other website or location, you will leave our
            Sites and go to another site and another entity may collect personal and/or other
            information from you. We have no control over, do not review, and cannot be responsible
            for, these outside websites or their content. Please be aware that the terms of this
            Privacy Policy do not apply to these outside websites or content, or to any collection
            of your personal information after you click on links to such outside websites. We
            encourage you to read the privacy policies of every website you visit. The links to
            third party websites or locations are for your convenience and do not signify our
            endorsement of such third parties or their products, content or websites.
          </p>
          <p>
            <b>International Transfers.</b> Axiom is headquartered in the United States, and your
            personal information may be collected, used and stored in the United States or other
            locations outside of your state, province, country or other governmental jurisdiction,
            where privacy laws may not be as protective as those in your jurisdiction.
          </p>
          <p>
            <b>Children.</b> We reserve the right to modify this Privacy Policy at any time. If we
            make changes to this Privacy Policy we will post them on the Sites and indicate the
            effective date of the change. If we make material changes to this Privacy Policy we will
            notify you by email or through the Sites.
          </p>
          <h2>How to Contact Us</h2>
          <p>
            <b>Axiom, Inc.</b>
            <br />
            1390 Market Street
            <br />
            Suite 200
            <br />
            San Francisco, CA 94102
            <br />
            privacy@axiom.co
          </p>
          <h2 id='eu'>Notice to European Users</h2>
          <p>The following applies to individuals in the European Economic Area.</p>
          <p>
            Controller. Axiom is the controller of your personal information covered by this Privacy
            Policy for purposes of European data protection legislation.
          </p>
          <p>
            Legal bases for processing. The legal bases of our processing of your personal
            information are described in the table below.
          </p>
          <h3>To provide you with our products and services</h3>
          <p>
            You have entered a contract with us and we need to use your personal information to
            provide services you have requested or take steps that you request prior to providing
            services.
          </p>
          <h3>To provide you with our products and services</h3>
          <ul>
            <li>For research and development</li>
            <li>To send you surveys and marketing communications</li>
            <li>For compliance, fraud prevention and safety</li>
            <li>
              You have entered a contract with us and we need to use your personal information to
              provide services you have requested or take steps that you request prior to providing
              services.
            </li>
          </ul>
          <h3>For compliance with law</h3>
          <p>
            You have entered a contract with us and we need to use your personal information to
            provide services you have requested or take steps that you request prior to providing
            services.
          </p>
          <h3>With your consent</h3>
          <p>
            Processing is based on your consent. Where we rely on your consent you have the right to
            withdraw it anytime in the manner indicated in the Sites.
          </p>
          <h3>To share your personal information as described in this Privacy Policy</h3>
          <p>
            This sharing constitutes our legitimate interests, and in some cases may be necessary to
            comply with our legal obligations.
          </p>
          <h2>Retention</h2>
          <p>
            Generally, we retain your personal information for as long as necessary to process your
            personal information as described in this Privacy Policy unless a longer retention
            period is required or permitted by law.
          </p>
          <h2>Your Rights</h2>
          <p>
            European data protection laws give you certain rights regarding your personal
            information. You may ask us to take the following actions in relation to your personal
            information that we hold:
          </p>
          <ul>
            <li>
              <b>Access.</b> Provide you with information about our processing of your personal
              information and give you access to your personal information.
            </li>
            <li>
              <b>Correct.</b> Update or correct inaccuracies in your personal information.
            </li>
            <li>
              <b>Delete.</b> Delete your personal information.
            </li>
            <li>
              <b>Transfer.</b> Transfer a machine-readable copy of your personal information to you
              or a third party of your choice.
            </li>
            <li>
              <b>Restrict.</b> Restrict the processing of your personal information.
            </li>
            <li>
              <b>Object.</b> Object to our reliance on our legitimate interests as the basis of our
              processing of your personal information that impacts your rights.
            </li>
          </ul>
          <p>
            You may submit these requests by email to privacy@axiom.co or our postal address
            provided above. We may request specific information from you to help us confirm your
            identity and process your request. Applicable law may require or permit us to decline
            your request. If we decline your request, we will tell you why, subject to legal
            restrictions. If you would like to submit a complaint about our use of your personal
            information or response to your requests regarding your personal information, you may
            contact us or submit a complaint to the data protection regulator in your jurisdiction.
            You can find your data protection regulator here.
          </p>
          <h2>Personal Data Export</h2>
          <p>
            If we export your personal information from the European Economic Area to a country
            outside of it and are required to apply additional safeguards to that personal
            information under European data protection legislation, we will do so. Such safeguards
            may include applying the European Commission model contracts for the transfer of
            personal data to third countries described here. Please contact us for further
            information about any such transfers or the specific safeguards applied.
          </p>
        </article>
        <div className='py-8 text-center text-sm text-slate-500'>[As of August 20th, 2020]</div>
      </div>
    </div>
  );
}
