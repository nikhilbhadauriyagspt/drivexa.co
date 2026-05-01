import React from "react";
import { ArrowRight, ChevronRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

export default function PopularDriverGuides() {
    const guides = guidesData.slice(0, 11).map((guide, index) => ({
        ...guide,
        featured: index === 0,
        thumbImg: guide.img.includes("/images/")
            ? guide.img
            : guide.img.replace(".webp", "_thumb.webp"),
    }));

    return (
        <section className="bg-white px-4 py-16 md:py-20 font-[Poppins]">
            <div className="max-w-[1800px] mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 text-black text-[13px] font-medium">
                            <BookOpen size={18} strokeWidth={1.8} />
                            Recommended Reading
                        </div>

                        <h2 className="text-black text-[34px] md:text-[44px] lg:text-[48px] font-normal leading-[1.05] max-w-[760px]">
                            Most Read Information Guides
                        </h2>
                    </div>

                    <div className="lg:text-right lg:ml-auto">
                        <p className="text-[#334155] text-[14px] leading-relaxed max-w-[520px]">
                            Explore simple driver guide articles for common WiFi, audio,
                            printer, USB, graphics, and device-related issues.
                        </p>

                        <Link
                            to="/guides"
                            className="inline-flex items-center gap-2 mt-5 bg-black text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
                        >
                            View All Guides
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {guides.map((guide, index) => (
                        <Link
                            key={index}
                            to={`/guide/${guide.slug}`}
                            className={`group rounded-[14px] border border-[#D6D6D6] bg-white p-3 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${guide.featured ? "md:col-span-2" : ""
                                }`}
                        >
                            <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] overflow-hidden">
                                <div className="relative h-[245px] overflow-hidden bg-[#F5F5F5]">
                                    <img
                                        src={guide.thumbImg}
                                        alt={guide.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                                    <div className="absolute left-5 right-5 bottom-5">
                                        <span className="inline-flex bg-white/90 text-black px-3 py-1 rounded-full text-[11px] font-semibold mb-3">
                                            Guide Article
                                        </span>

                                        <h3 className="text-white text-[20px] font-semibold leading-snug">
                                            {guide.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-5 bg-[#FAFAFA] flex items-center justify-between gap-4">
                                    <p className="text-[#4B5563] text-[14px] leading-relaxed line-clamp-2">
                                        {guide.desc}
                                    </p>

                                    <div className="w-10 h-10 shrink-0 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition">
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}