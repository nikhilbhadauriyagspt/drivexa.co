import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="w-full bg-white px-3 md:px-8 pt-4">
      <div className="relative max-w-[1800px] mx-auto rounded-[18px] overflow-hidden">

        {/* Header inside banner image */}
        <Header />

        {/* Banner image */}
        <Link to="/guides" className="block">
          <img
            src="/banner/banner-01.avif"
            alt="Fix Driver Issues with Step-by-Step Installation Guides"
            className="w-full h-full md:h-full xl:h-[90vh] object-cover object-center"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </Link>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h1>
            Fix Driver Issues with Step-by-Step Installation Guides
          </h1>
          <p>
            Solve WiFi, Audio, Printer, and USB problems easily with our
            verified technical documentation.
          </p>
        </div>
      </div>
    </section>
  );
}