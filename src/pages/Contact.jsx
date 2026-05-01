import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt, FaEnvelope, FaPaperPlane, FaGlobe
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-[Poppins]">
      <Helmet>
        <title>Help Center | Drivexa Technical Registry</title>
        <meta name="description" content="Contact Drivexa for technical documentation requests, hardware registry updates, or technical inquiries regarding system protocols." />
      </Helmet>

      {/* Simple Hero */}
      <section className="pt-32 pb-16 bg-[#071A3D] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Documentation <span className="text-blue-500">Center</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Have a question about hardware protocols or want to contribute to our technical documentation? Our team manages the hardware resource registry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Documentation Request</h4>
                  <p className="text-slate-600 text-sm font-medium mt-1"> <a href="mailto:info@drivexa.co" >

                    info@drivexa.co
                  </a></p>
                </div>
              </div>


            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-blue-600 size={18}" /> Submit Documentation Request
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hardware Topic</label>
                  <input type="text" placeholder="e.g. Printer Documentation" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Request Details</label>
                  <textarea rows="4" placeholder="Provide details about the documentation you need..." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-md active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
