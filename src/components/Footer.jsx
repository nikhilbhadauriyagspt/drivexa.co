import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pt-16 pb-6 font-[Poppins]">
      <div className="max-w-[1800px] mx-auto rounded-[14px] border border-[#D6D6D6] bg-white p-3">
        <div className="rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-[34%_66%]">
            {/* Brand */}
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#DCDCDC]">
              <Link to="/" className="inline-flex items-center mb-6">
                <img
                  src="/logo/logo.avif"
                  alt="Drivexa"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <h3 className="text-black text-[28px] md:text-[34px] font-normal leading-tight max-w-[420px]">
                Simple driver information for everyday device issues.
              </h3>

              <p className="text-[#4B5563] text-[14px] leading-relaxed mt-5 max-w-[390px]">
                Your resource for understanding hardware drivers and device
                communication. All information is for educational purposes.
              </p>

              <a
                href="mailto:info@drivexa.co"
                className="inline-flex items-center gap-2 mt-8 bg-black text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-blue-600 transition"
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>

            {/* Links */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <FooterColumn
                  title="Quick Links"
                  links={[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Guides", path: "/guides" },
                    { name: "FAQ", path: "/faq" },
                    { name: "Contact", path: "/contact" },
                  ]}
                />

                <FooterColumn
                  title="Guides"
                  links={[
                    { name: "Installation Guides", path: "/guide/fix-driver-not-installed" },
                    { name: "Update Information", path: "/guide/fix-driver-not-installed" },
                    { name: "Hardware Connection", path: "/guide/fix-usb-driver-issues" },
                    { name: "Audio Problems", path: "/guide/fix-audio-driver-problems" },
                    { name: "WiFi & Network", path: "/guide/fix-wifi-network-issues" },
                    { name: "Graphics & Display", path: "/guide/fix-graphics-driver-issues" },
                  ]}
                />

                <FooterColumn
                  title="Driver Topics"
                  links={[
                    { name: "Printer Drivers", path: "/driver/printer-drivers" },
                    { name: "Network Drivers", path: "/driver/network-drivers" },
                    { name: "Audio Drivers", path: "/driver/audio-drivers" },
                    { name: "Graphics Drivers", path: "/driver/graphics-drivers" },
                    { name: "Bluetooth Drivers", path: "/driver/bluetooth-drivers" },
                    { name: "USB Support", path: "/driver/usb-support" },
                  ]}
                />

                <FooterColumn
                  title="Policies"
                  links={[
                    { name: "Privacy Policy", path: "/privacy-policy" },
                    { name: "Terms of Service", path: "/terms-of-service" },
                    { name: "Cookie Policy", path: "/cookie-policy" },
                    { name: "Disclaimer", path: "/disclaimer" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#DCDCDC] px-8 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#4B5563] text-[13px] text-center md:text-left">
              © {currentYear} Drivexa. All information is for educational purposes.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-black text-[15px] font-semibold mb-5">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[#4B5563] text-[14px] hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}