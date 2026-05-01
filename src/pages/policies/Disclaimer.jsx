import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Disclaimer - Drivexa</title>
        <meta name="description" content="Disclaimer for Drivexa." />
        <link rel="canonical" href="https://drivexa.co/disclaimer" />
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        <div className="prose prose-lg text-gray-600">
          <p>Last updated: Apr 2026</p>

          <h3>General Disclaimer</h3>
          <p>The information provided by Drivexa ("we," "us," or "our") on <a href="https://www.drivexa.co">https://www.drivexa.co</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.</p>

          <h3>Professional Disclaimer</h3>
          <p>The Site cannot and does not contain legal or medical advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

          <h3>External Links Disclaimer</h3>
          <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
