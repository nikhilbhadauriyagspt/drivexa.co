import React from "react";
import {
  Download,
  RefreshCcw,
  Monitor,
  XCircle,
  Printer,
  Volume2,
  Wifi,
  Bluetooth,
  Usb,
  MonitorSmartphone,
  Video,
  Scan,
  Cpu,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const issues = [
    ["Driver Not Installed", "Required driver file missing.", "Fresh OS setup or new device added.", <Download />, "fix-driver-not-installed"],
    ["Outdated Drivers", "Old driver can create errors.", "System update or older software version.", <RefreshCcw />, "fix-driver-update-failed"],
    ["Device Not Detected", "Device not visible in system.", "Loose connection or driver mismatch.", <Monitor />, "fix-device-not-detected"],
    ["Driver Update Failed", "Update may stop midway.", "Low storage or version conflict.", <XCircle />, "fix-driver-update-failed"],
    ["Printer Driver Issues", "Printer may not respond.", "Queue, connection, or driver setting.", <Printer />, "fix-printer-driver-issues"],
    ["Audio Not Working", "Sound output may stop.", "Muted output or audio driver issue.", <Volume2 />, "fix-audio-driver-problems"],
    ["Network / WiFi Issues", "Wi-Fi or LAN may fail.", "Adapter setting or router conflict.", <Wifi />, "fix-wifi-network-issues"],
    ["Bluetooth Problems", "Bluetooth may not pair.", "Disabled service or pairing conflict.", <Bluetooth />, "fix-bluetooth-driver-problems"],
    ["USB Not Recognized", "USB device may not appear.", "Port, cable, or controller issue.", <Usb />, "fix-usb-driver-issues"],
    ["Graphics / Display Issues", "Screen may flicker or lag.", "Resolution or display adapter conflict.", <MonitorSmartphone />, "fix-graphics-driver-issues"],
    ["Webcam Offline", "Camera may show black screen.", "Privacy permission or webcam driver.", <Video />, "fix-webcam-driver-issues"],
    ["Scanner Errors", "Scanner may fail to respond.", "App setting, connection, or driver mismatch.", <Scan />, "fix-scanner-driver-problems"],
    ["Chipset Logic", "Components may not sync.", "Missing or incompatible chipset driver.", <Cpu />, "update-chipset-drivers"],
    ["BIOS / Firmware", "Startup issues may appear.", "Firmware mismatch or older BIOS.", <ShieldAlert />, "guide-bios-firmware-updates"],
    ["Input Latency", "Keyboard or touchpad may lag.", "Input driver or background load.", <Zap />, "fix-input-latency-drivers"],
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-4 font-[Poppins]">
      <div className="max-w-[1800px] mx-auto border-b border-[#DCDCDC] pb-16 md:pb-20">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-black text-[32px] md:text-[44px] font-normal leading-[1.05] max-w-[850px] mx-auto">
            Explore Common Driver Issues
          </h2>

          <p className="max-w-[640px] mx-auto mt-6 text-[#334155] text-[14px] leading-relaxed">
            Clean and easy guide-based information about common driver problems,
            why they may appear, and what users should understand first.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {issues.map(([title, desc, reason, icon, slug], index) => (
            <Link
              key={index}
              to={`/guide/${slug}`}
              className="group rounded-[14px] border border-[#D6D6D6] bg-white p-3 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="relative min-h-[245px] rounded-[10px] border border-[#DCDCDC] bg-[#FAFAFA] p-6 flex flex-col justify-between">

                <div className="w-12 h-12 rounded-[8px] bg-white flex items-center justify-center text-[#111827] shadow-sm">
                  {React.cloneElement(icon, {
                    size: 19,
                    strokeWidth: 1.8,
                  })}
                </div>

                <div>
                  <h3 className="text-black text-[20px] font-semibold leading-snug mb-3">
                    {title}
                  </h3>

                  <p className="text-[#4B5563] text-[14px] leading-relaxed">
                    – {desc}
                  </p>

                  <p className="text-[#4B5563] text-[14px] leading-relaxed mt-1">
                    {reason}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}