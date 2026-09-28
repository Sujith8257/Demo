import React from "react";
import { FiPrinter, FiShoppingBag } from "react-icons/fi";

export default function OrderSuccessHeader({ orderRef }) {
  return (
    <header className="sticky top-0 z-40 bg-[#123B3A] text-white px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <span className="font-poppins text-[#C7A66A] font-extrabold text-lg tracking-wide">AMIHIVE</span>
        {orderRef && (
          <span className="hidden sm:inline text-xs text-white/60 border-l border-white/20 pl-3">
            Order #{orderRef}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <FiPrinter className="text-sm" />
          <span className="hidden sm:inline">Print Receipt</span>
        </button>
        <a
          href="/products"
          className="flex items-center gap-1.5 text-xs font-bold bg-[#C7A66A] text-[#171B1B] px-3 py-1.5 rounded-lg hover:bg-[#B8934A] transition-colors"
        >
          <FiShoppingBag className="text-sm" />
          <span>Shop More</span>
        </a>
      </div>
    </header>
  );
}
