// CLEAN + NO SUPPORT CLAIMS
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { topicsData } from "../data/topics";
import { useRequest } from "../context/RequestContext";

const TopicDetails = () => {
  const { slug } = useParams();
  const topic = topicsData.find((s) => s.slug === slug);
  const { openRequestModal } = useRequest();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[#4B5563]">Documentation page not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>{topic.title} | Technical Documentation</title>
        <meta
          name="description"
          content={`Explore technical information about ${topic.title} and how it functions within computer hardware systems.`}
        />
        <link rel="canonical" href={`https://drivexa.co/driver/${slug}`} />
      </Helmet>

      <div className="max-w-[1600px] mx-auto px-4">

        {/* Header */}
        <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3 mb-10">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-8 md:p-12">
            <h1 className="text-black text-[38px] md:text-[52px] font-normal">
              {topic.title}
            </h1>

            <p className="text-[#4B5563] mt-5 text-[15px] max-w-[700px]">
              {topic.shortDesc}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

          {/* Main */}
          <div className="space-y-10">

            {/* What is it */}
            <Section title="Overview">
              <p>{topic.longDesc}</p>
            </Section>

            {/* Features */}
            <Section title="Key Technical Points">
              <ul className="space-y-3">
                {topic.features.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Problems */}
            <Section title="Observed Behaviors">
              {topic.issues.map((i, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-black font-semibold">{i.problem}</h4>
                  <p className="text-[#4B5563] text-[14px]">
                    {i.symptom}
                  </p>
                </div>
              ))}
            </Section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[20px] mb-4 font-semibold">
                  Documentation
                </h3>
                <p className="text-[#4B5563] text-[13px] mb-6 leading-relaxed">
                  Need specific data or architectural details for this topic? Request verified documentation from our registry.
                </p>
                <button 
                  onClick={() => openRequestModal(topic.title)}
                  className="w-full bg-black text-white py-3 rounded-full text-[14px] font-bold hover:bg-blue-600 transition"
                >
                  Request Data
                </button>
              </div>
            </div>

            <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[20px] mb-4">
                  Related Topics
                </h3>

                <div className="space-y-3">
                  {topicsData
                    .filter((s) => s.slug !== slug)
                    .slice(0, 6)
                    .map((s, i) => (
                      <Link
                        key={i}
                        to={`/driver/${s.slug}`}
                        className="block text-[#4B5563] text-[14px] hover:text-black"
                      >
                        {s.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
    <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
      <h2 className="text-black text-[22px] mb-4">{title}</h2>
      <div className="text-[#4B5563] text-[14px] leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export default TopicDetails;
