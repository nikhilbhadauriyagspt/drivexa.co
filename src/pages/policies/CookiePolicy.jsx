import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Cookie Policy - Drivexa</title>
        <meta name="description" content="Cookie Policy for Drivexa. Understand how we use cookies and tracking technologies." />
        <link rel="canonical" href="https://drivexa.co/cookie-policy" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">Cookie Policy for Drivexa</h1>
        <p className="text-gray-500 mb-12 italic">Last Updated: February 06, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <p>
              This Cookie Policy explains how Drivexa (“<strong>Company</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) uses
              cookies and similar tracking technologies when you visit our website
              <a href="https://drivexa.co/" className="text-primary hover:text-secondary"> https://drivexa.co/</a> (the “<strong>Website</strong>”). This policy should be read together with our
              <a href="/privacy-policy" className="text-primary hover:underline font-bold"> PRIVACY POLICY</a> and <a href="/terms-of-service" className="text-primary hover:underline font-bold">TERMS OF SERVICE</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, tablet)
              when you visit a website. Cookies help websites function efficiently, enhance user
              experience, and provide information to website owners about how visitors interact with the
              site.
            </p>
            <p>Cookies do not give us access to your device or personal files.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">2. How We Use Cookies</h2>
            <p>Drivexa uses cookies and similar technologies to:</p>
            <ul className="list-disc pl-10 space-y-2">
              <li>Ensure the Website functions properly</li>
              <li>Maintain security and prevent fraudulent activity</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze Website performance and usage patterns</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p>
              Cookies may collect technical information such as IP address, browser type, device
              information, and browsing behavior, as described in our <a href="/privacy-policy" className="text-primary hover:underline font-bold">PRIVACY POLICY</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">3. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div>
                <p className="font-bold">a) Essential Cookies</p>
                <p>These cookies are strictly necessary for the Website to operate correctly. They enable core functionality such as security, page navigation, and access to essential features. Without these cookies, the Website may not function properly.</p>
              </div>

              <div>
                <p className="font-bold">b) Performance and Analytics Cookies</p>
                <p>These cookies help us understand how visitors interact with our Website by collecting aggregated and anonymized information. This allows us to measure performance, identify errors, and improve Website functionality.</p>
              </div>

              <div>
                <p className="font-bold">c) Functional Cookies</p>
                <p>Functional cookies allow the Website to remember choices you make, such as language preferences or region, to provide a more personalized experience.</p>
              </div>

              <div>
                <p className="font-bold">d) Advertising and Third-Party Cookies</p>
                <p>
                  We may allow trusted third-party service providers to place cookies on our Website for
                  analytics or advertising purposes. These cookies may be used to deliver relevant
                  advertisements and measure campaign effectiveness, subject to applicable laws and user
                  consent where required <a href="/privacy-policy" className="text-primary hover:underline font-bold">PRIVACY POLICY</a>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">4. Third-Party Tracking Technologies</h2>
            <p>
              We may use third-party services such as Google Analytics to analyze Website usage and
              traffic patterns. These third parties may use cookies or similar technologies to collect
              information about your online activities across different websites.
            </p>
            <p>
              You can learn more about Google’s data practices by visiting Google’s Privacy & Terms page
              or opt out using Google’s opt-out tools, as referenced in our <a href="/privacy-policy" className="text-primary hover:underline font-bold">PRIVACY POLICY</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">5. Your Cookie Choices and Controls</h2>
            <p>You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent.</p>
            <p>Please note that disabling cookies may affect certain features or functionality of the Website.</p>
            <p>For more information on managing cookies, visit your browser’s help section.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">6. Do Not Track Signals</h2>
            <p>
              Some browsers offer a “Do Not Track” (DNT) feature. At this time, there is no uniform
              industry standard for recognizing DNT signals, and Drivexa does not currently
              respond to such signals <a href="/privacy-policy" className="text-primary hover:underline font-bold">PRIVACY POLICY</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">7. Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any updates will be indicated by a revised “Last Updated” date at the top of this policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">8. Contact Us</h2>
            <p>If you have questions or concerns about this Cookie Policy or our use of cookies, you may contact us at:</p>
            <address className="not-italic bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-4 leading-relaxed font-bold">
              Henan Yunyue Network Technology Co. Ltd.<br />
              Room 0903, Building 2, Longshang New Residence, Jinshan Street, Kuancheng Manchu Autonomous County, Chengde City, Hebei Province, JS, 320500, China<br />
              Email: info@drivexa.co
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
