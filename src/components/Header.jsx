import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaBookOpen,
  FaDesktop,
  FaVolumeUp,
  FaWifi,
  FaUsb,
  FaKeyboard,
  FaPrint,
} from "react-icons/fa";
import { servicesData } from "../data/services";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = servicesData.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const driverCategories = [
    {
      title: "Display & Graphics",
      icon: <FaDesktop />,
      slug: "graphics-drivers",
    },
    {
      title: "Sound & Audio",
      icon: <FaVolumeUp />,
      slug: "audio-drivers",
    },
    {
      title: "Internet & WiFi",
      icon: <FaWifi />,
      slug: "network-drivers",
    },
    {
      title: "Printer & Scanner",
      icon: <FaPrint />,
      slug: "printer-drivers",
    },
    {
      title: "Input Devices",
      icon: <FaKeyboard />,
      slug: "input-drivers",
    },
    {
      title: "External Ports",
      icon: <FaUsb />,
      slug: "usb-support",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Guides", path: "/guides" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="absolute top-5 left-4 right-4 md:left-8 md:right-8 z-[100]">
      <div className="bg-white rounded-full shadow-sm border border-white/70">
        <div className="max-w-[1800px] mx-auto px-5 md:px-7 h-14 md:h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <img
              src="/logo/logo.avif"
              alt="Logo"
              className="h-7 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[12px] font-semibold rounded-full transition-all ${location.pathname === link.path
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Topics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("topics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold rounded-full transition-all ${activeDropdown === "topics"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                Topics
                <FaChevronDown
                  size={8}
                  className={`transition-transform ${activeDropdown === "topics" ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-[520px] pt-4 transition-all duration-300 ${activeDropdown === "topics"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-4"
                  }`}
              >
                <div className="bg-white rounded-[28px] shadow-2xl border border-gray-100 p-5 grid grid-cols-2 gap-3">
                  {driverCategories.map((cat) => (
                    <Link
                      key={cat.title}
                      to={`/driver/${cat.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-blue-600 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <span className="text-[13px] font-bold text-gray-800">
                        {cat.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-[310px] relative" ref={searchRef}>
            <div className="relative w-full">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={12}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search guides..."
                className="w-full bg-gray-100 border border-transparent rounded-full py-2.5 pl-10 pr-4 text-[12px] font-medium outline-none focus:bg-white focus:border-blue-200"
              />
            </div>

            {searchTerm && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 shadow-2xl rounded-[24px] overflow-hidden z-[120]">
                <div className="max-h-[280px] overflow-y-auto p-2">
                  {searchResults.length > 0 ? (
                    searchResults.map((res) => (
                      <div
                        key={res.id}
                        onClick={() => {
                          navigate(`/driver/${res.slug}`);
                          setSearchTerm("");
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer rounded-2xl"
                      >
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <FaBookOpen size={13} />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-gray-800">
                            {res.title}
                          </p>
                          <p className="text-[10px] text-gray-500 line-clamp-1">
                            {res.shortDesc}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-xs text-gray-400">
                      No matching guides found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/guides"
            className="hidden lg:block bg-black text-white px-6 py-3 rounded-full text-[11px] font-bold hover:bg-blue-600 transition"
          >
            Read Guides
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-gray-700"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 z-[200] transition-all duration-300 ${isOpen ? "visible" : "invisible"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[330px] bg-white shadow-2xl transition-transform duration-300 p-7 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-10">
            <img
              src="/logo/logo.avif"
              alt="Logo"
              className="h-8 w-auto"
            />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={22} />
            </button>
          </div>

          <nav className="space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-bold text-gray-800"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/guides"
              onClick={() => setIsOpen(false)}
              className="block text-xl font-bold text-blue-600"
            >
              Browse Guides
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;