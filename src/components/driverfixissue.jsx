import React from "react";
import { Search, Settings, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function DriverProcessSection() {
    const steps = [
        {
            no: "01",
            title: "Identify the Driver Issue",
            desc: "Check whether the problem is related to printer, audio, WiFi, USB, graphics, Bluetooth, or another device driver.",
            icon: Search,
            link: "/guides",
        },
        {
            no: "02",
            title: "Review Device Settings",
            desc: "Look at basic system settings, connected devices, and error messages before making any changes.",
            icon: Settings,
            link: "/guides",
        },
        {
            no: "03",
            title: "Follow the Right Guide",
            desc: "Use simple step-by-step information to understand the possible cause and safe next steps.",
            icon: BookOpen,
            link: "/guides",
        },
        {
            no: "04",
            title: "Check Everything Again",
            desc: "After following the guide, restart the device if needed and confirm whether the issue is resolved.",
            icon: CheckCircle,
            link: "/guides",
        },
    ];

    return (
        <section className="bg-white py-16 md:py-20 px-4 font-[Poppins] overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                {/* Top Heading */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-14">
                    <h2 className="text-black text-[34px] md:text-[44px] lg:text-[50px] font-normal leading-[1.02] max-w-5xl">
                        Simple Steps to Understand Driver Problems
                    </h2>

                    <p className="text-[#334155] text-[14px] leading-relaxed max-w-[620px] lg:ml-auto lg:text-right pt-3">
                        Our guides are made for learning only. They help you understand
                        common driver issues clearly without offering downloads or technical
                        support services.
                    </p>
                </div>

                {/* Process Layout */}
                <div className="relative">
                    {/* Connector Lines */}
                    <div className="hidden lg:block absolute left-[42%] right-[18%] top-[95px] h-[1.5px] bg-[#9DB2FF]" />
                    <div className="hidden lg:block absolute left-[42%] right-[18%] top-[265px] h-[1.5px] bg-[#9DB2FF]" />
                    <div className="hidden lg:block absolute left-[42%] top-[95px] h-[170px] w-[1.5px] bg-[#9DB2FF]" />
                    <div className="hidden lg:block absolute right-[18%] top-[95px] h-[170px] w-[1.5px] bg-[#9DB2FF]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-14 gap-x-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isRight = index % 2 === 1;

                            return (
                                <Link
                                    key={index}
                                    to={step.link}
                                    className={`relative z-10 rounded-[14px] border border-[#D6D6D6] bg-white p-3 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${isRight ? "lg:translate-y-[80px]" : ""
                                        }`}
                                >
                                    <div className="min-h-[170px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-7 flex flex-col justify-between">
                                        <div className="flex items-center justify-between">
                                            <span className="text-black text-[18px] font-medium">
                                                {step.no}
                                            </span>

                                            <div className="w-11 h-11 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                                                <Icon size={20} strokeWidth={1.8} />
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <h3 className="text-black text-[21px] font-semibold leading-snug mb-3">
                                                {step.title}
                                            </h3>

                                            <p className="text-[#4B5563] text-[14px] leading-relaxed max-w-[620px]">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}