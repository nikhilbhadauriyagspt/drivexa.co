import { 
  FaMicrochip, FaDesktop, FaVolumeUp, FaWifi, 
  FaHdd, FaUsb, FaBluetooth, FaKeyboard, 
  FaPrint, FaSearchPlus, FaVideo, 
  FaCode, FaShieldAlt, FaTv 
} from 'react-icons/fa';

export const topicsData = [
  // ESSENTIAL DRIVERS
  {
    id: 1,
    iconName: "FaMicrochip",
    title: "Chipset Drivers",
    shortDesc: "The central traffic controller for motherboard architecture.",
    longDesc: "Chipset drivers define how the CPU interacts with the motherboard, RAM, and storage. Without them, the system cannot coordinate hardware resources.",
    issues: [
      { problem: "System Instability", symptom: "Frequent blue screens (BSOD) and random freezes." },
      { problem: "Hardware Non-Recognition", symptom: "Internal components or RAM modules are not detected." }
    ],
    features: ["CPU-RAM Sync", "Bus Architecture Support", "Data Flow Management"],
    slug: "chipset-drivers"
  },
  {
    id: 2,
    iconName: "FaDesktop",
    title: "Graphics (Display)",
    shortDesc: "High-performance visual rendering for GPU & Screen.",
    longDesc: "Graphics drivers translate software instructions into visual commands for your GPU to render 3D environments, 4K video, and smooth UI.",
    issues: [
      { problem: "Screen Flickering", symptom: "Display randomly flashes black or shows lines." },
      { problem: "Low Resolution", symptom: "System is stuck at 800x600 with no other options." }
    ],
    features: ["4K Resolution Support", "3D Rendering", "Hardware Acceleration"],
    slug: "graphics-drivers"
  },
  {
    id: 3,
    iconName: "FaVolumeUp",
    title: "Audio Drivers",
    shortDesc: "Managing crystal clear sound input and output.",
    longDesc: "Audio drivers handle the conversion of digital signals into analog sound for speakers and process incoming signals from microphones.",
    issues: [
      { problem: "No Sound", symptom: "Speakers produce no audio even at max volume." },
      { problem: "Distorted Audio", symptom: "Crackling or static noises during playback." }
    ],
    features: ["HD Audio Processing", "Noise Cancellation", "Jack Sensing"],
    slug: "audio-drivers"
  },
  {
    id: 4,
    iconName: "FaWifi",
    title: "Network Drivers",
    shortDesc: "Connecting your system via Wi-Fi and Ethernet.",
    longDesc: "Network drivers enable communication with external networks, handling packet transmission and stable handshake with routers.",
    issues: [
      { problem: "Frequent Drops", symptom: "Internet connection drops every few minutes." },
      { problem: "Limited Connectivity", symptom: "Wi-Fi shows 'No Internet' on one device only." }
    ],
    features: ["Wi-Fi 6 Support", "Low-Latency LAN", "Packet Optimization"],
    slug: "network-drivers"
  },

  // HARDWARE-SPECIFIC
  {
    id: 5,
    iconName: "FaHdd",
    title: "Storage Controller",
    shortDesc: "Efficient data transfer for SSDs and HDDs.",
    longDesc: "Manages the critical path between the OS and physical drives, optimizing read/write speeds and ensuring data integrity.",
    issues: [
      { problem: "Slow Boot", symptom: "System takes minutes to reach the login screen." },
      { problem: "Drive Not Found", symptom: "Secondary SSDs do not appear in Explorer." }
    ],
    features: ["NVMe Optimization", "RAID Support", "Data Integrity"],
    slug: "storage-controller"
  },
  {
    id: 6,
    iconName: "FaUsb",
    title: "USB Support",
    shortDesc: "Port recognition and external device connectivity.",
    longDesc: "Assigns system resources to USB ports, supporting high-speed data transfer and power delivery for external devices.",
    issues: [
      { problem: "Device Unrecognized", symptom: "Flash drives or mice don't work when plugged in." },
      { problem: "Power Surges", symptom: "USB ports stop providing power to devices." }
    ],
    features: ["USB 3.2 Protocols", "Plug & Play Support", "Resource Allocation"],
    slug: "usb-support"
  },
  {
    id: 7,
    iconName: "FaBluetooth",
    title: "Bluetooth Drivers",
    shortDesc: "Seamless wireless pairing for peripherals.",
    longDesc: "Manages radio frequency protocols for stable pairing with headphones, keyboards, and mobile smartphones.",
    issues: [
      { problem: "Pairing Failed", symptom: "Devices cannot find each other via Bluetooth." },
      { problem: "Audio Lag", symptom: "Significant delay in wireless headphone sound." }
    ],
    features: ["Low-Latency Sync", "Multi-Device Pairing", "Signal Stability"],
    slug: "bluetooth-drivers"
  },
  {
    id: 8,
    iconName: "FaKeyboard",
    title: "Touchpad/Keyboard",
    shortDesc: "Precision input control and gesture translation.",
    longDesc: "Translates physical gestures and keystrokes into OS signals, supporting multi-touch and advanced shortcut mapping.",
    issues: [
      { problem: "Input Lag", symptom: "Delay between typing and letters appearing." },
      { problem: "Gesture Failure", symptom: "Two-finger scroll on touchpad stops working." }
    ],
    features: ["Multi-Touch Support", "Key Mapping", "Sensitivity Logic"],
    slug: "input-drivers"
  },

  // PERIPHERAL DRIVERS
  {
    id: 9,
    iconName: "FaPrint",
    title: "Printer Drivers",
    shortDesc: "Digital to physical document translation.",
    longDesc: "Converts digital files into precise printer-ready commands, managing spooling and color accuracy.",
    issues: [
      { problem: "Spooler Errors", symptom: "Documents get stuck in the print queue." },
      { problem: "Offline Status", symptom: "Printer shows 'Offline' despite being connected." }
    ],
    features: ["Color Management", "Spooling Logic", "Device Handshake"],
    slug: "printer-drivers"
  },
  {
    id: 10,
    iconName: "FaSearchPlus",
    title: "Scanner Support",
    shortDesc: "Image digitizing and OCR protocol management.",
    longDesc: "Enables communication with scanning hardware to convert physical documents into high-resolution digital formats.",
    issues: [
      { problem: "Scan Failure", symptom: "Scanning software cannot detect the hardware." },
      { problem: "Poor Quality", symptom: "Scanned images appear distorted or low-res." }
    ],
    features: ["TWAIN Support", "OCR Integration", "Image Processing"],
    slug: "scanner-support"
  },
  {
    id: 11,
    iconName: "FaVideo",
    title: "Webcam Drivers",
    shortDesc: "HD video capture and streaming optimization.",
    longDesc: "Controls camera sensor settings, resolution, and frame rates for video calls and streaming applications.",
    issues: [
      { problem: "No Camera Found", symptom: "Apps report 'No camera detected' even if built-in." },
      { problem: "Grainy Video", symptom: "Webcam output is extremely low quality and dark." }
    ],
    features: ["Resolution Control", "Frame Rate Sync", "Sensor Management"],
    slug: "webcam-drivers"
  },

  // ADVANCED SYSTEMS
  {
    id: 12,
    iconName: "FaCode",
    title: "BIOS/UEFI",
    shortDesc: "Low-level pre-boot hardware initialization.",
    longDesc: "Crucial firmware that performs system checks and starts the computer components before loading the OS.",
    issues: [
      { problem: "Boot Loop", symptom: "Computer restarts repeatedly before Windows loads." },
      { problem: "System Clock Error", symptom: "Time and date reset on every restart." }
    ],
    features: ["Hardware Init", "Microcode Patching", "POST Checks"],
    slug: "bios-uefi-firmware"
  },
  {
    id: 13,
    iconName: "FaShieldAlt",
    title: "Security Drivers",
    shortDesc: "System encryption and secure boot protection.",
    longDesc: "Provides hardware-level encryption and ensures that the system hasn't been tampered with during boot.",
    issues: [
      { problem: "TPM Missing", symptom: "System fails Windows 11 compatibility checks." },
      { problem: "Bitlocker Error", symptom: "Drive encryption fails to unlock during boot." }
    ],
    features: ["TPM 2.0 Support", "Encryption Logic", "Secure Boot Sync"],
    slug: "security-drivers"
  },
  {
    id: 14,
    iconName: "FaTv",
    title: "Monitor Calibration",
    shortDesc: "Color accuracy and refresh rate optimization.",
    longDesc: "Ensures the system sends the correct timing and color profile data to your monitor for the best visual experience.",
    issues: [
      { problem: "Wrong Refresh Rate", symptom: "Screen feels laggy or limited to 60Hz on high-end monitors." },
      { problem: "Color Tint", symptom: "The screen has a strange yellow or blue tint." }
    ],
    features: ["ICC Profile Sync", "Refresh Rate Logic", "EDID Management"],
    slug: "monitor-calibration"
  }
];
