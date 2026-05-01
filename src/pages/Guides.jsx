import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>Driver Information Guides | Drivexa</title>
        <meta
          name="description"
          content="Browse simple educational driver guides about printer, audio, WiFi, graphics, USB, Bluetooth, and common device-related topics."
        />
      </Helmet>

      <div className="max-w-[1600px] mx-auto px-4">
        {/* Header */}
        <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3 mb-12">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] px-6 md:px-12 py-14 text-center">
            <span className="inline-flex items-center gap-2 text-black text-[13px] font-medium mb-5">
              <BookOpen size={18} strokeWidth={1.8} />
              Educational Guide Library
            </span>

            <h1 className="text-black text-[38px] md:text-[56px] font-normal leading-[1.05] max-w-[900px] mx-auto">
              Browse Driver Information Guides
            </h1>

            <p className="text-[#4B5563] text-[15px] leading-relaxed max-w-[760px] mx-auto mt-6">
              Read simple guide-based information about common driver topics,
              device settings, and hardware communication issues.
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {guidesData.map((guide, index) => (
            <Link
              key={index}
              to={`/guide/${guide.slug}`}
              className="group rounded-[14px] border border-[#D6D6D6] bg-white p-3 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] overflow-hidden h-full flex flex-col">
                <div className="w-full h-[230px] bg-white border-b border-[#DCDCDC] p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 text-[12px] text-[#4B5563]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} strokeWidth={1.8} />
                      5 Min Read
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
                    <span>Guide Article</span>
                  </div>

                  <h2 className="text-black text-[21px] font-semibold mb-3 leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-6 line-clamp-2">
                    {guide.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#DCDCDC]">
                    <span className="text-black text-[14px] font-semibold">
                      Read Guide
                    </span>

                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;