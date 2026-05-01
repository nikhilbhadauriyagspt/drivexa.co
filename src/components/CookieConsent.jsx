import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(() => {
        try {
            const consent = localStorage.getItem("cookieConsent");
            return !consent;
        } catch (e) {
            return true;
        }
    });

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-md z-[200] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-slate-50 opacity-50">
                    <ShieldCheck size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                            <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-[17px] font-bold text-slate-900">
                            Privacy Preference
                        </h3>
                    </div>

                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-6">
                        We use cookies and similar files to improve website experience and
                        understand basic site usage. You can accept or decline this choice.
                        Read our{" "}
                        <Link to="/cookie-policy" className="text-blue-600 hover:underline">
                            Cookie Policy
                        </Link>{" "}
                        for details.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-[13px] hover:bg-blue-700 transition shadow-lg shadow-blue-200 active:scale-95"
                        >
                            Accept All
                        </button>

                        <button
                            onClick={handleDecline}
                            className="flex-1 bg-slate-50 text-slate-600 border border-slate-200 py-3 rounded-xl font-bold text-[13px] hover:bg-slate-100 transition active:scale-95"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;