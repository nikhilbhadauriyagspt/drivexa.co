import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBook,
  FaLightbulb,
  FaSearch,
  FaCheckCircle,
  FaListAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>About Us | Drivexa - Driver Information Guides</title>
        <meta
          name="description"
          content="Drivexa provides simple educational guides about common driver issues, device settings, and troubleshooting information."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-white px-4 pt-32 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
            <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] px-6 md:px-12 py-16 text-center">
              <span className="inline-flex items-center gap-2 text-black text-[13px] font-medium mb-5">
                <FaBook /> Educational Driver Resource
              </span>

              <h1 className="text-black text-[38px] md:text-[58px] font-normal leading-[1.05] max-w-[900px] mx-auto">
                Clear Driver Guides for Common Device Issues
              </h1>

              <p className="text-[#4B5563] text-[15px] leading-relaxed max-w-[760px] mx-auto mt-6">
                Drivexa shares simple, guide-based information about
                drivers, device settings, and common hardware-related problems.
                The website is made for learning and self-reading only.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
                <Link
                  to="/guides"
                  className="bg-black text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
                >
                  Browse Guides
                </Link>
                <Link
                  to="/faq"
                  className="bg-white border border-[#D6D6D6] text-black px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-[#F3F3F3] transition"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05]">
              What This Website Provides
            </h2>

            <p className="text-[#4B5563] text-[15px] leading-relaxed mt-6">
              This website provides written information about common driver
              topics such as printer drivers, WiFi drivers, audio drivers,
              graphics drivers, USB issues, Bluetooth problems, and device
              detection errors.
            </p>

            <div className="mt-8 rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[20px] font-semibold mb-3">
                  Important Note
                </h3>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">
                  Drivexa is an informational guide website. We do not
                  provide technical support, remote access, repair service,
                  live assistance, or driver downloads.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InfoCard
              icon={<FaBook />}
              title="Driver Guides"
              desc="Simple articles about common driver-related situations."
            />
            <InfoCard
              icon={<FaSearch />}
              title="Issue Awareness"
              desc="Information to understand what may cause a device problem."
            />
            <InfoCard
              icon={<FaLightbulb />}
              title="Easy Language"
              desc="Content written in a clear and simple reading style."
            />
            <InfoCard
              icon={<FaCheckCircle />}
              title="Educational Use"
              desc="Guide content made for learning and general awareness."
            />
          </div>
        </div>
      </section>

      {/* Why Our Guides */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05]">
              Why Read Our Driver Guides?
            </h2>

            <p className="text-[#334155] text-[14px] leading-relaxed max-w-[520px] lg:ml-auto lg:text-right">
              Our content is organized to make driver-related topics easier to
              understand before users make changes on their own device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ValueItem
              title="Simple Structure"
              desc="Guides are written in small sections so users can understand the topic step by step."
            />
            <ValueItem
              title="Common Topics"
              desc="We cover frequent driver issues related to audio, WiFi, printers, graphics, USB, and more."
            />
            <ValueItem
              title="No Service Claims"
              desc="The website only provides educational information and does not claim to fix devices directly."
            />
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05] text-center mb-12">
            How to Use This Website
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StepItem
              number="01"
              title="Choose a Topic"
              desc="Select the driver category or device issue you want to learn about."
            />
            <StepItem
              number="02"
              title="Read the Guide"
              desc="Go through the information carefully and understand the possible reasons."
            />
            <StepItem
              number="03"
              title="Review Safely"
              desc="Use the guide as general information before changing settings on your device."
            />
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-[1600px] mx-auto rounded-[14px] border border-[#D6D6D6] bg-white p-3">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05]">
                  Driver Topics We Cover
                </h2>
                <p className="text-[#4B5563] text-[15px] leading-relaxed mt-5">
                  Our guide library includes common driver and device-related
                  topics that users often search for.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Printer & Scanner Drivers",
                  "WiFi & Network Drivers",
                  "Audio & Sound Drivers",
                  "Graphics & Display Drivers",
                  "USB & Input Devices",
                  "Bluetooth & Webcam Issues",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-white border border-[#DCDCDC] rounded-[10px] p-4 flex items-center gap-3 text-black text-[14px] font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-black text-[34px] md:text-[46px] font-normal leading-[1.05]">
            Start Reading Driver Guides
          </h2>

          <p className="text-[#4B5563] text-[15px] leading-relaxed mt-5 max-w-[620px] mx-auto">
            Browse our educational guide library to learn about common driver
            problems and device-related topics.
          </p>

          <Link
            to="/guides"
            className="inline-flex mt-8 bg-black text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
          >
            View All Guides
          </Link>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }) => (
  <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
    <div className="min-h-[180px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6 flex flex-col justify-between">
      <div className="w-11 h-11 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-center text-black">
        {icon}
      </div>
      <div>
        <h4 className="text-black text-[19px] font-semibold mb-2">{title}</h4>
        <p className="text-[#4B5563] text-[14px] leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const ValueItem = ({ title, desc }) => (
  <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
    <div className="min-h-[210px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-7 flex flex-col justify-end">
      <h4 className="text-black text-[22px] font-semibold mb-3">{title}</h4>
      <p className="text-[#4B5563] text-[14px] leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StepItem = ({ number, title, desc }) => (
  <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
    <div className="min-h-[220px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-7 flex flex-col justify-between">
      <span className="text-black text-[20px] font-medium">{number}</span>
      <div>
        <h4 className="text-black text-[22px] font-semibold mb-3">{title}</h4>
        <p className="text-[#4B5563] text-[14px] leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

export default About;