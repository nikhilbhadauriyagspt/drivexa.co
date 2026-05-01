import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Return Policy - Drivexa</title>
        <meta name="description" content="Official Return Policy for Drivexa. Details on returns, process, and refunds." />
        <link rel="canonical" href="https://drivexa.co/refund-policy" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">Return Policy</h1>
        <p className="text-gray-500 mb-12 italic">Last updated Apr 30, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <p>
              Thank you for your purchase. We hope you are happy with your purchase. However, if you
              are not completely satisfied with your purchase for any reason, you may return it to us for a
              refund only. Please see below for more information on our return policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">RETURNS</h2>
            <p>
              All returns must be postmarked within seven (7) days of the purchase date. All returned
              items must be in new and unused condition, with all original tags and labels attached.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">RETURN PROCESS</h2>
            <p>
              To return an item, please email customer service at <a href="mailto:info@drivexa.co" className="text-primary font-bold">info@drivexa.co</a> to obtain
              an Return Merchandise Authorization (RMA) number. After receiving an RMA number, place
              the item securely in its original packaging and include your proof of purchase, then mail your
              return to the following address:
            </p>
            <address className="not-italic bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-6 leading-relaxed font-bold">
              Drivexa<br />
              Attn: Returns<br />
              RMA #<br />
              1267 Filer Ave E<br />
              Twin Falls, ID 83301<br />
              United States
            </address>
            <p className="mt-6">Return shipping charges will be paid or reimbursed by us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">REFUNDS</h2>
            <p>
              After receiving your return and inspecting the condition of your item, we will process your
              return. Please allow at least seven (7) days from the receipt of your item to process your
              return. Refunds may take 1-2 billing cycles to appear on your credit card statement,
              depending on your credit card company. We will notify you by email when your return has
              been processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">EXCEPTIONS</h2>
            <p>
              For defective or damaged products, please contact us at the contact details below to arrange
              a refund or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">QUESTIONS</h2>
            <p>
              If you have any questions concerning our return policy, please contact us at:
            </p>
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl mt-4">
              <p className="font-bold text-xl mb-2">+1-402-508-9991</p>
              <a href="mailto:info@drivexa.co" className="text-secondary font-bold text-lg hover:underline">info@drivexa.co</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
