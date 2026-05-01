// CLEAN + NO SUPPORT CLAIMS
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[#4B5563]">Page not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>{service.title} | Driver Topic</title>
        <meta
          name="description"
          content={`Learn about ${service.title} and how it works in simple terms.`}
        />
      </Helmet>

      <div className="max-w-[1600px] mx-auto px-4">

        {/* Header */}
        <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3 mb-10">
          <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-8 md:p-12">
            <h1 className="text-black text-[38px] md:text-[52px] font-normal">
              {service.title}
            </h1>

            <p className="text-[#4B5563] mt-5 text-[15px] max-w-[700px]">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

          {/* Main */}
          <div className="space-y-10">

            {/* What is it */}
            <Section title="What is this?">
              <p>{service.longDesc}</p>
            </Section>

            {/* Features */}
            <Section title="Key Points">
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Problems */}
            <Section title="Common Situations">
              {service.issues.map((i, idx) => (
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
          <div>
            <div className="rounded-[14px] border border-[#D6D6D6] bg-white p-3">
              <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6">
                <h3 className="text-black text-[20px] mb-4">
                  More Topics
                </h3>

                <div className="space-y-3">
                  {servicesData
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

export default ServiceDetails;