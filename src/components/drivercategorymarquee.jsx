import React from "react";
import {
    Printer,
    Wifi,
    Volume2,
    Monitor,
    Bluetooth,
    Usb,
    ScanLine,
    Cpu,
    HardDrive,
    Touchpad,
    Video,
    ShieldCheck,
    Search,
    ShieldAlert,
    Tv,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DriverCategoryMarquee() {
    const drivers = [
        { title: "Printer", icon: Printer, slug: "fix-printer-driver-issues" },
        { title: "Network", icon: Wifi, slug: "fix-wifi-network-issues" },
        { title: "Audio", icon: Volume2, slug: "fix-audio-driver-problems" },
        { title: "Graphics", icon: Monitor, slug: "fix-graphics-driver-issues" },
        { title: "Bluetooth", icon: Bluetooth, slug: "fix-bluetooth-driver-problems" },
        { title: "USB", icon: Usb, slug: "fix-usb-driver-issues" },
        { title: "Scanner", icon: ScanLine, slug: "fix-scanner-driver-problems" },
        { title: "Chipset", icon: Cpu, slug: "update-chipset-drivers" },
        { title: "Storage", icon: HardDrive, slug: "fix-device-not-detected" },
        { title: "Touchpad", icon: Touchpad, slug: "fix-input-latency-drivers" },
        { title: "Webcam", icon: Video, slug: "fix-webcam-driver-issues" },
        { title: "BIOS", icon: ShieldCheck, slug: "guide-bios-firmware-updates" },
        { title: "Search", icon: Search, slug: "" },
        { title: "Security", icon: ShieldAlert, slug: "" },
        { title: "Monitor", icon: Tv, slug: "fix-graphics-driver-issues" },
    ];

    const marqueeItems = [...drivers, ...drivers];

    return (
        <section className="bg-white py-10 md:py-12 px-4 font-[Poppins] overflow-hidden">
            <div className="max-w-[1800px] mx-auto rounded-[14px] border border-[#D6D6D6] bg-white p-3">
                <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] overflow-hidden">

                    {/* Left Content */}
                    <div className="p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#DCDCDC] flex flex-col justify-center">
                        <h2 className="text-black text-[26px] md:text-[32px] font-normal leading-tight">
                            Browse Driver Topics
                        </h2>

                        <p className="text-[#4B5563] text-[14px] leading-relaxed mt-4">
                            Quick access to common driver and device guide categories.
                        </p>
                    </div>

                    {/* Right Marquee */}
                    <div className="relative overflow-hidden py-7">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

                        <div className="flex w-max animate-driverMarquee gap-4 px-5">
                            {marqueeItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={index}
                                        to={item.slug ? `/guide/${item.slug}` : "/guides"}
                                        className="group w-[132px] h-[132px] rounded-[12px] border border-[#DCDCDC] bg-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
                                    >
                                        <div className="w-12 h-12 rounded-[8px] bg-[#FAFAFA] border border-[#E5E7EB] text-[#111827] flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                            <Icon size={21} strokeWidth={1.8} />
                                        </div>

                                        <p className="text-black text-[14px] font-semibold group-hover:text-[#111827] transition-colors">
                                            {item.title}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}