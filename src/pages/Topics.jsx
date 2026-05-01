import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { topicsData } from "../data/topics";

const TopicsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      name: "Core Driver Topics",
      desc: "Basic driver categories related to everyday device usage.",
      driverIds: [1, 2, 3, 4],
    },
    {
      name: "Device Components",
      desc: "Internal hardware parts and how they interact with the system.",
      driverIds: [5, 6, 7, 8],
    },
    {
      name: "Connected Devices",
      desc: "External devices like USB, printers, and accessories.",
      driverIds: [9, 10, 11],
    },
    {
      name: "System-Level Topics",
      desc: "Advanced topics like BIOS, firmware, and system behavior.",
      driverIds: [12, 13, 14],
    },
  ];

  return (
    <div className="bg-white pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>Driver Topics | Drivexa Information Registry</title>
        <meta
          name="description"
          content="Explore simple information about different driver categories and device-related topics including audio, WiFi, and more."
        />
        <link rel="canonical" href="https://drivexa.co/drivers" />
      </Helmet>
      <div className="max-w-[1600px] mx-auto px-4">

        {/* Header */}
        <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3 mb-12">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] px-8 py-14 text-center">
            <h1 className="text-black text-[42px] md:text-[56px] font-normal">
              Technical Resource Library
            </h1>

            <p className="text-[#4B5563] mt-5 max-w-[650px] mx-auto text-[15px]">
              Explore simple information about different driver categories and device-related topics.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <div key={i}>
              <h2 className="text-black text-[28px] font-semibold mb-2">
                {cat.name}
              </h2>

              <p className="text-[#4B5563] text-[14px] mb-6">
                {cat.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {topicsData
                  .filter((s) => cat.driverIds.includes(s.id))
                  .map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/driver/${topic.slug}`}
                      className="group rounded-[14px] border border-[#D6D6D6] bg-white p-3 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition"
                    >
                      <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6 h-full flex flex-col justify-between">

                        <h4 className="text-black text-[18px] font-semibold mb-2">
                          {topic.title}
                        </h4>

                        <p className="text-[#4B5563] text-[14px] line-clamp-2">
                          {topic.shortDesc}
                        </p>

                        <div className="mt-6 text-black text-[13px] font-semibold">
                          View Documentation →
                        </div>

                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
