import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import Driverfixisuue from '../components/driverfixissue';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fix Driver Issues | WiFi, Audio, USB & Printer Solutions</title>
        <meta name="description" content="Technical repository for hardware specifications, driver-level architectural data, and system optimization documentation for the global technical community." />
        <link rel="canonical" href="https://www.drivexa.co" />
      </Helmet>

      <h1 className="sr-only">Fix Driver Issues with Step-by-Step Information Guides</h1>
      <Hero />
      <DriverCategoryMarquee />
      <CommonProblems />
      <Driverfixisuue />
      <Guides />
      <FAQ />

    </>
  );
};

export default Home;