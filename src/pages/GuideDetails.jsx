import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
} from "lucide-react";
import { guidesData } from "../data/guidesData";

const GuideDetails = () => {
  const { slug } = useParams();
  const guide = guidesData.find((g) => g.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 font-[Poppins]">
        <h2 className="text-black text-[30px] font-normal">Guide Not Found</h2>
        <p className="text-[#4B5563] mt-3 mb-6">
          The guide you are looking for does not exist.
        </p>
        <Link
          to="/guides"
          className="bg-black text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
        >
          Back to Guides
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>{guide.title} | Drivexa Guide</title>
        <meta name="description" content={guide.desc} />
        <link rel="canonical" href={`https://drivexa.co/guide/${slug}`} />
      </Helmet>

      <div className="max-w-[1600px] mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#4B5563] mb-8">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/guides" className="hover:text-black transition">
            Guides
          </Link>
          <ChevronRight size={14} />
          <span className="text-black truncate">{guide.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Main Content */}
          <article className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
            <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] overflow-hidden">

              {/* Header Image */}
              <div className="w-full h-[280px] md:h-[370px] bg-white flex items-center justify-center p-8 border-b border-[#DCDCDC]">
                <img
                  src={guide.img}
                  alt={guide.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-5 mb-7 text-[13px] text-[#4B5563]">
                  <span className="flex items-center gap-2">
                    <Clock size={15} strokeWidth={1.8} />
                    5 Min Read
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen size={15} strokeWidth={1.8} />
                    Guide Article
                  </span>
                </div>

                <h1 className="text-black text-[34px] md:text-[48px] font-normal leading-[1.05] max-w-[900px]">
                  {guide.title}
                </h1>

                <div className="mt-8 rounded-[14px] border border-[#D6D6D6] bg-white p-3">
                  <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                    <p className="text-[#4B5563] text-[15px] leading-relaxed">
                      {guide.content.introduction}
                    </p>
                  </div>
                </div>

                {/* Causes */}
                <div className="mt-12">
                  <h2 className="text-black text-[28px] md:text-[34px] font-normal leading-tight mb-6 flex items-center gap-3">
                    <AlertCircle size={24} strokeWidth={1.8} />
                    Common Reasons
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {guide.content.reasons.map((reason, i) => (
                      <div
                        key={i}
                        className="rounded-[14px] border border-[#D6D6D6] bg-white p-3"
                      >
                        <div className="min-h-[110px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-5 flex gap-3">
                          <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                          <p className="text-[#4B5563] text-[14px] leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="mt-14">
                  <h2 className="text-black text-[28px] md:text-[34px] font-normal leading-tight mb-8 flex items-center gap-3">
                    <CheckCircle2 size={24} strokeWidth={1.8} />
                    Guide Steps
                  </h2>

                  <div className="space-y-5">
                    {guide.content.steps.map((step, i) => (
                      <div
                        key={i}
                        className="rounded-[14px] border border-[#D6D6D6] bg-white p-3"
                      >
                        <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6 md:p-7">
                          <div className="flex gap-5">
                            <span className="w-11 h-11 shrink-0 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-center text-black text-[15px] font-semibold">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <div>
                              <h3 className="text-black text-[21px] font-semibold mb-3">
                                {step.title}
                              </h3>
                              <p className="text-[#4B5563] text-[15px] leading-relaxed">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-14 pt-8 border-t border-[#DCDCDC] flex flex-col md:flex-row items-center justify-between gap-5">
                  <p className="text-[#4B5563] text-[14px] text-center md:text-left">
                    Want to read more driver information articles?
                  </p>

                  <Link
                    to="/guides"
                    className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
                  >
                    View All Guides
                    <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[22px] font-semibold mb-5">
                  Related Guides
                </h3>

                <div className="space-y-4">
                  {otherGuides.map((item, i) => (
                    <Link
                      key={i}
                      to={`/guide/${item.slug}`}
                      className="group flex gap-4 bg-white border border-[#DCDCDC] rounded-[10px] p-3 transition hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
                    >
                      <div className="w-16 h-16 rounded-[8px] bg-[#FAFAFA] border border-[#E5E7EB] overflow-hidden shrink-0 flex items-center justify-center p-2">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300"
                        />
                      </div>

                      <div>
                        <h4 className="text-black text-[13px] font-semibold leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-[#4B5563] text-[12px] mt-1">
                          Read Guide
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[24px] font-normal leading-tight mb-4">
                  Browse Driver Topics
                </h3>

                <p className="text-[#4B5563] text-[14px] leading-relaxed mb-6">
                  Explore educational topics about printer, network, audio,
                  graphics, USB, Bluetooth, and other driver categories.
                </p>

                <Link
                  to="/drivers"
                  className="block w-full bg-black text-white py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition text-center"
                >
                  Browse Topics
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;