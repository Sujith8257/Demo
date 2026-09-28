import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiPrinter,
  FiTruck,
  FiShield,
  FiMapPin,
  FiArrowRight,
  FiPackage,
  FiClock,
  FiAward,
} from "react-icons/fi";
import OrderSuccessHeader from "../../components/OrderSuccessHeader";
import OrderTimeline from "../../components/OrderTimeline";
import { DEMO_ORDER } from "../../data/demoOrder";

export default function Design1() {
  const order = DEMO_ORDER;

  return (
    <div className="order-success-root">
      <OrderSuccessHeader isDark={false} orderRef={order.orderRef} />

      <main className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Bezel Curvature Hero Card */}
        <div className="relative mb-8 p-6 sm:p-10 bg-white border border-[#123B3A]/10 shadow-xs bezel-curve-success overflow-hidden">
          {/* Subtle concentric bezel rings */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full border-[10px] border-[#DDE9E4]/40 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full border-[2px] border-dashed border-[#C7A66A]/30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDE9E4] text-xs font-bold text-[#34745F] mb-3">
                <FiCheckCircle className="text-sm" />
                <span>Payment Confirmed • Verified Escrow</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#171B1B] tracking-tight">
                Thank You, {order.customer.name.split(" ")[0]}!
              </h1>
              <p className="text-xs sm:text-sm text-[#707776] mt-2 max-w-xl leading-relaxed">
                Your order <span className="font-mono font-bold text-[#123B3A]">#{order.orderRef}</span> has been confirmed and is entering master horology calibration. We've sent your receipt and tracking instructions to <span className="font-semibold text-[#171B1B]">{order.customer.email}</span>.
              </p>
            </div>

            <div className="bg-[#F7F6F2] border border-[#123B3A]/10 p-5 rounded-2xl text-right shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-[#707776] font-bold block">
                Total Paid
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#123B3A] tracking-tight">
                ₹{order.pricing.finalAmount.toLocaleString("en-IN")}
              </span>
              <span className="block text-xs text-[#34745F] font-semibold mt-1">
                Paid via UPI (Google Pay)
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Reserved Items & Delivery Summary */}
          <div className="lg:col-span-7 space-y-6">
            {/* Items Card */}
            <div className="bg-white border border-[#123B3A]/10 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#DDE9E4]/60 mb-4">
                <h3 className="font-bold text-base text-[#171B1B]">
                  Reserved Timepieces ({order.items.length})
                </h3>
                <span className="text-xs text-[#707776] font-mono">
                  Atelier Registry No. 8841-A
                </span>
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 pb-3.5 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#F7F6F2] p-1 border border-[#123B3A]/10 shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#171B1B] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#707776] font-mono truncate">
                        {item.variant}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] text-[#34745F] font-bold mt-1">
                        <FiAward className="text-xs text-[#C7A66A]" />
                        <span>{item.serial}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-[#171B1B]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      <span className="block text-[11px] text-[#707776]">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown Footer */}
              <div className="mt-5 pt-4 border-t border-[#123B3A]/10 space-y-2 text-xs text-[#707776]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#171B1B]">
                    ₹{order.pricing.subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-[#34745F]">
                  <span>Special Discount & Voucher</span>
                  <span className="font-semibold">
                    -₹{(order.pricing.specialDiscount + order.pricing.voucherDiscount).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Express Courier & Transit Insurance</span>
                  <span className="font-bold text-[#34745F] uppercase text-[11px]">
                    Complimentary (Free)
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100 font-bold text-sm text-[#123B3A]">
                  <span>Final Total</span>
                  <span>₹{order.pricing.finalAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Delivery Destination Card */}
            <div className="bg-white border border-[#123B3A]/10 rounded-2xl p-5 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#DDE9E4] text-[#123B3A] flex items-center justify-center shrink-0 mt-0.5">
                <FiMapPin className="text-base" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C7A66A] font-bold block">
                  Delivery Destination
                </span>
                <h4 className="text-sm font-bold text-[#171B1B] mt-0.5">
                  {order.customer.name} • {order.customer.phone}
                </h4>
                <p className="text-xs text-[#707776] mt-1 leading-relaxed">
                  {order.customer.addressLine1}, {order.customer.addressLine2},{" "}
                  {order.customer.city}, {order.customer.state} — {order.customer.pincode}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#34745F] font-semibold mt-2">
                  <FiTruck className="text-xs text-[#C7A66A]" />
                  <span>{order.customer.deliveryType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Support Actions */}
          <div className="lg:col-span-5 space-y-6">
            <OrderTimeline currentStep={2} />

            <div className="bg-white border border-[#123B3A]/10 rounded-2xl p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B3A]">
                Need Assistance with this Order?
              </h4>
              <p className="text-xs text-[#707776] leading-relaxed">
                Your designated Horology Concierge is ready to assist with sizing requests, engraving adjustments, or express courier instructions.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/home"
                  className="w-full h-11 rounded-xl bg-[#123B3A] text-white text-xs font-bold hover:bg-[#0D2D2C] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Return to Home</span>
                  <FiArrowRight className="text-sm" />
                </Link>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full h-11 rounded-xl bg-[#F7F6F2] text-[#123B3A] text-xs font-bold hover:bg-[#DDE9E4] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiPrinter className="text-sm text-[#C7A66A]" />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
