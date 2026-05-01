import React from 'react';
import { useBooking } from '../context/BookingContext';
import { FaWrench, FaCommentDots } from 'react-icons/fa';

const QuickSupportFAB = () => {
  const { openBookingModal } = useBooking();

  return (
    <div className="fixed bottom-8 left-8 z-[90] flex flex-col items-start gap-4">
      {/* Help Tooltip */}
      <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 mb-2 animate-bounce hidden md:block">
        <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          Guides Updated Daily
        </p>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => openBookingModal()}
        className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-slate-900 transition-all duration-500 hover:-translate-y-2 active:scale-90"
      >
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 group-hover:hidden"></div>
        <FaCommentDots className="text-xl group-hover:rotate-12 transition-transform duration-500" />
        
        {/* Label on Hover */}
        <span className="absolute left-full ml-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Request Documentation
        </span>
      </button>
    </div>
  );
};

export default QuickSupportFAB;
