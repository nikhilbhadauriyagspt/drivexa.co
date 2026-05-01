import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import Driverfixisuue from '../components/driverfixissue';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Drivexa | Simple Driver Information Guides</title>
        <meta
          name="description"
          content="Drivexa provides simple educational guides about driver topics, device settings, and common hardware communication issues."
        />
        <link rel="canonical" href="https://drivexa.co/" />
      </Helmet>

      <h1 className="sr-only">
        Driver Information Guides for Common Device and Hardware Topics
      </h1>
      <Hero />
      <DriverCategoryMarquee />



      <CommonProblems />
      <Driverfixisuue />
      <Guides />
      {/* About Our Resource Section */}
      <section className="bg-white py-16 md:py-20 px-4 font-[Poppins]">
        <div className="max-w-[1800px] mx-auto">
          <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
            <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-7 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-10 items-start">

                {/* Left Content */}
                <div>
                  <span className="inline-flex items-center text-black text-[13px] font-medium mb-5">
                    Driver Learning Resource
                  </span>

                  <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05] max-w-[620px]">
                    Simple Guides for Understanding Driver & Hardware Issues
                  </h2>

                  <p className="text-[#4B5563] text-[15px] leading-relaxed mt-6 max-w-[560px]">
                    Drivexa is an informational library created to help users
                    understand how device drivers, hardware connections, and system
                    settings work together.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-8 max-w-[520px]">
                    {["No downloads", "No tech support", "Guide only", "Easy steps"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-[10px] border border-[#DCDCDC] bg-white px-4 py-4"
                        >
                          <p className="text-black text-[14px] font-semibold">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Right Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Understand the Issue",
                      text: "Learn why a device may stop responding, show errors, or behave unexpectedly.",
                    },
                    {
                      title: "Follow Clear Steps",
                      text: "Use simple educational instructions written for normal users, not only experts.",
                    },
                    {
                      title: "Explore Common Topics",
                      text: "Audio, WiFi, display, printer, USB, Bluetooth, and input device guides.",
                    },
                    {
                      title: "Information Only",
                      text: "We do not offer software downloads, direct repair, or technical support services.",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="rounded-[14px] border border-[#D6D6D6] bg-white p-3"
                    >
                      <div className="min-h-[205px] rounded-[10px] border border-[#DCDCDC] bg-white p-6 flex flex-col justify-between">
                        <span className="text-black text-[18px] font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="text-black text-[21px] font-semibold mb-3">
                            {card.title}
                          </h3>

                          <p className="text-[#4B5563] text-[14px] leading-relaxed">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />

    </>
  );
};

export default Home;