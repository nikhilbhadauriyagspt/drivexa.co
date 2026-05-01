import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, HelpCircle, Cpu } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(1);

    const faqs = [
        {
            q: "Why is my driver not installed?",
            a: "This can happen when the system cannot find a matching driver or the device was added after setup. Our guide helps you understand what to check first.",
        },
        {
            q: "How do I know if my driver is outdated?",
            a: "Common signs include slow performance, device errors, missing features, or poor WiFi, audio, printer, or display behavior.",
        },
        {
            q: "Why is my device not detected?",
            a: "A device may not appear because of a loose connection, disabled port, missing chipset driver, or driver mismatch.",
        },
        {
            q: "Is it safe to update drivers?",
            a: "Driver updates are safest when you understand the device model and use official system or manufacturer update options.",
        },
        {
            q: "Why did my driver update fail?",
            a: "Driver updates may fail because of low storage, version conflict, interrupted setup, or incompatible driver files.",
        },
        {
            q: "What happens if I install the wrong driver?",
            a: "The device may stop working correctly, show errors, or need rollback through system settings.",
        },
    ];

    return (
        <section className="bg-white py-16 md:py-20 px-4 font-[Poppins] overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                {/* Top */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
                    <h2 className="text-black text-[34px] md:text-[44px] lg:text-[48px] font-normal leading-[1.05]">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#334155] text-[14px] leading-relaxed max-w-[520px] lg:ml-auto lg:text-right pt-2">
                        Find simple answers about common driver issues, system updates, and
                        device problems before following a detailed guide.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-10 items-center">
                    {/* Left Visual */}
                    <div className="relative min-h-[520px] hidden lg:flex items-center justify-center overflow-hidden">
                        <div className="absolute w-[470px] h-[360px] bg-[#BDEBFF] rounded-[28px] rotate-[-4deg] opacity-90" />

                        <div className="absolute left-4 top-24 w-[150px] h-[230px] bg-white rounded-[14px] border border-[#D6D6D6] shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-5 rotate-[-2deg]">
                            <HelpCircle size={28} className="text-blue-600 mb-8" />
                            <p className="text-[13px] text-[#4B5563] leading-relaxed">
                                Learn what the issue means before making changes.
                            </p>
                            <p className="mt-10 text-[12px] text-black font-semibold">
                                Driver Guide
                            </p>
                        </div>

                        <div className="relative w-[320px] h-[500px] bg-white rounded-[44px] border-[6px] border-[#D7D7D7]  rotate-[8deg] p-7">
                            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-full" />

                            <div className="mt-16 text-center">
                                <div className="w-24 h-24 rounded-full bg-[#F4F4F4] mx-auto flex items-center justify-center">
                                    <Cpu size={42} className="text-blue-600" />
                                </div>
                                <h3 className="mt-5 text-[22px] font-semibold text-black">
                                    Driver Help
                                </h3>
                                <p className="text-[13px] text-[#6B7280] mt-1">
                                    Simple learning page
                                </p>
                            </div>

                            <div className="mt-8 bg-[#FAFAFA] border border-[#DCDCDC] rounded-[16px] p-5">
                                <p className="text-[42px] leading-none text-orange-400">”</p>
                                <p className="text-[13px] text-[#4B5563] leading-relaxed mt-2">
                                    Understand WiFi, audio, printer, USB, and display driver
                                    issues with easy guide-based information.
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 right-10 w-[170px] bg-white rounded-[16px] border border-[#D6D6D6] shadow-[0_20px_50px_rgba(15,23,42,0.12)] p-4 rotate-[4deg]">
                            <p className="text-[11px] uppercase tracking-widest text-[#6B7280]">
                                Topics
                            </p>
                            <p className="mt-2 text-[14px] font-semibold text-black">
                                Audio • WiFi • USB
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6">
                        {faqs.map((faq, i) => {
                            const isOpen = active === i;

                            return (
                                <div
                                    key={i}
                                    className={`rounded-[14px] border border-[#D6D6D6] transition-all duration-300 ${isOpen ? "bg-[#F3F3F3]" : "bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isOpen ? null : i)}
                                        className="w-full px-6 md:px-7 py-6 flex items-center justify-between text-left"
                                    >
                                        <span className="text-black text-[18px] md:text-[22px] font-normal leading-snug">
                                            {faq.q}
                                        </span>

                                        <ChevronDown
                                            size={24}
                                            strokeWidth={1.8}
                                            className={`text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="px-6 md:px-7 pb-7 text-[#334155] text-[14px] leading-relaxed max-w-[760px]">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="pt-3">
                            <Link
                                to="/guides"
                                className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
                            >
                                Browse Full Library
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}