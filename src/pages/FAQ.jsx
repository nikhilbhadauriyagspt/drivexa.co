import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaChevronDown,
  FaSearch,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      category: "General Questions",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "What is this website about?",
          a: "This website shares simple educational guides about drivers, devices, and common system-related topics. It is designed to help users understand how things work."
        },
        {
          q: "Do you provide technical support?",
          a: "No. This website does not provide technical support, remote access, or repair services. All content is for general information only."
        },
        {
          q: "Are these guides free to read?",
          a: "Yes. All guides on this website are freely available to read and are written for learning purposes."
        }
      ]
    },
    {
      category: "Driver Information",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "What is a driver?",
          a: "A driver is a type of software that allows your computer to communicate with hardware like printers, WiFi adapters, audio devices, and displays."
        },
        {
          q: "Why do driver issues happen?",
          a: "Driver issues can happen due to outdated versions, system changes, incorrect settings, or compatibility differences between hardware and software."
        },
        {
          q: "How do I know if there is a driver issue?",
          a: "Common signs include devices not working properly, missing features, connection issues, or error messages in system settings."
        }
      ]
    },
    {
      category: "Understanding Problems",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "Why is my device not working?",
          a: "This can happen due to multiple reasons such as connection problems, incorrect settings, or driver-related issues. Guides help explain possible causes."
        },
        {
          q: "Why is my WiFi or sound not working?",
          a: "Issues like these are often related to system settings, device configuration, or driver behavior. Each guide explains possible reasons in simple steps."
        },
        {
          q: "What should I do before making changes?",
          a: "It is always recommended to first understand the issue by reading the guide carefully before making any system changes."
        }
      ]
    },
    {
      category: "Using This Website",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "How should I use these guides?",
          a: "You can browse a topic, read the explanation, and understand the steps provided. The content is meant for general awareness."
        },
        {
          q: "Is this site affiliated with any brands?",
          a: "No. This website is an independent informational platform and is not officially connected to any hardware or software brand."
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>FAQ | Driver Information Questions</title>
        <meta
          name="description"
          content="Find simple answers about drivers, device issues, and system-related topics."
        />
        <link rel="canonical" href="https://drivexa.co/faq" />
      </Helmet>

      <div className="max-w-[1600px] mx-auto px-4">

        {/* Header */}
        <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3 mb-12">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] px-6 md:px-12 py-14 text-center">
            <h1 className="text-black text-[38px] md:text-[52px] font-normal">
              Frequently Asked Questions
            </h1>

            <p className="text-[#4B5563] text-[15px] mt-5 max-w-[600px] mx-auto">
              Simple answers to common questions about drivers and device-related topics.
            </p>

            {/* Search */}
            <div className="max-w-[600px] mx-auto mt-8 relative">
              <input
                type="text"
                placeholder="Search a topic..."
                className="w-full border border-[#DCDCDC] rounded-full py-3 pl-12 pr-4 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-10">
          {filteredFaqs.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-black text-[26px] font-semibold mb-5">
                {cat.category}
              </h2>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = activeFaq === id;

                  return (
                    <div
                      key={itemIdx}
                      className="rounded-[14px] border border-[#D6D6D6] bg-white p-3"
                    >
                      <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA]">
                        <button
                          onClick={() =>
                            setActiveFaq(isOpen ? null : id)
                          }
                          className="w-full p-5 flex justify-between items-center text-left"
                        >
                          <span className="text-black text-[16px] font-medium">
                            {item.q}
                          </span>

                          <FaChevronDown
                            className={`transition ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 text-[#4B5563] text-[14px]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;