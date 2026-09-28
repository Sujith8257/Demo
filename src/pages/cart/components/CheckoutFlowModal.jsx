import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiX, FiMapPin, FiCheck, FiChevronRight, FiPlus,
  FiSmartphone, FiCreditCard, FiGlobe, FiBox, FiTruck,
  FiLock, FiShield, FiAlertCircle, FiCheckCircle,
  FiPackage, FiClock, FiEdit2,
} from "react-icons/fi";
import { useCheckoutFlow } from "../context/CheckoutFlowContext";
import { useCart, BASE_PRICES } from "../context/CartContext";

/* ─── Shared data ─────────────────────────────────────────────── */
const WATCH_DATA = {
  aster:   { name: "Aster No.04 Automatic", variant: "Midnight Blue / Steel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1zURYwnBE1WMtwieFhRoO0lezT2DJmaUCme3J51pQxAS2O9u8F-kGdKGBp493JnUcBFqxJlJfV8_a-w3n0Z2rRr9BO7CXpZOmJ8dPX02wnEQsv75sTKEqilosQDWLQMsD53TGTrnCgbfPHa0KgfXSXBpv9fRzttcM-gfIvWll0oSnANCnKLhDAXJQLRI0DOqGpPz7D2Ky-7m5rFFLUnBie2xIZXxYrrLT6UNf2yF5xdwt63IcB6i2" },
  heritage:{ name: "Heritage Field 40",     variant: "Forest Green / Leather",  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjP7U_71jj4MUrD0qeRii4pFGqt9jJHgBjHUCaEiMTHQDrTgLbLmhMx9y72chLnl0JdsETLfm9w_BG2Qeke5yfzmxp_dQXk49STjE1VeLT7cBhTO2S-Q9jMNRUOfZSlWJ7SRqm-CCEFnVH2Zillo50YpBHjCGOncck_AH4_IZhqY-lXKF7TJL4U5GsT-Eqj7BHAEdejvu1ekoW-E_215iCtrfhgFUPYrNnO6uRXa2Vlopqj_5Mhcbg" },
  atlas:   { name: "Atlas S4 GPS",          variant: "Graphite",               img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVcCQMe3kIxuDvNSeqtC3NQKSB3Rc6EucnQQhYoHg4tgrsunSmUSeWX1XLWNFMKzAFCfWj-b6KVc8AX3vikkeEigb2axHFsQRshKazBQz6RoP4mrh58CBqLVn42WNb0OCfjKzlYG45BUFLVTNrgdj0AGBfhGp2OVuX9RLGg7pZsQNGvGZ2xwhG1nYBFFf6AY1vvKwI3W_vYvvTyhG0xdyaUFxJ065mrYHkOEQcCPdVSlaHQsZLScyH" },
};

const PAYMENT_METHODS = [
  { id: "upi",        icon: FiSmartphone,  label: "Pay with UPI",        desc: "Google Pay, PhonePe, Paytm & more", badge: "Instant" },
  { id: "card",       icon: FiCreditCard,  label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay",           badge: "Secure"  },
  { id: "netbanking", icon: FiGlobe,       label: "Net Banking",         desc: "All major banks supported",         badge: null      },
  { id: "wallet",     icon: FiBox,         label: "Wallet",              desc: "Amazon Pay, Paytm Wallet",          badge: null      },
  { id: "cod",        icon: FiTruck,       label: "Cash on Delivery",    desc: "Pay when your order arrives",       badge: null      },
];

/* ─── Step indicator ─────────────────────────────────────────── */
function StepBar({ step }) {
  const steps = [
    { id: "address",  label: "Address"  },
    { id: "payment",  label: "Payment"  },
    { id: "review",   label: "Review"   },
  ];
  const ORDER = ["address", "payment", "review", "processing", "success"];
  const current = ORDER.indexOf(step);

  return (
    <div className="flex items-center justify-center gap-2 py-4 px-4 border-b border-gray-100">
      {steps.map((s, i) => {
        const done  = ORDER.indexOf(s.id) < current;
        const active = s.id === step;
        return (
          <React.Fragment key={s.id}>
            {i > 0 && (
              <div className={`h-[2px] w-8 rounded-full transition-colors ${done || active ? "bg-[#123B3A]" : "bg-gray-200"}`} />
            )}
            <div className="flex items-center gap-1.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                done ? "bg-[#34745F] text-white" : active ? "bg-[#123B3A] text-white ring-4 ring-[#DDE9E4]" : "bg-gray-100 text-gray-400"
              }`}>
                {done ? <FiCheck className="text-xs" /> : i + 1}
              </div>
              <span className={`text-xs font-semibold ${active ? "text-[#123B3A]" : done ? "text-[#171B1B]" : "text-gray-400"}`}>
                {s.label}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── Slide variants ─────────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center:       ({ x: 0, opacity: 1 }),
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ════════════════════════════════════════════════════════════════
   STEP 1 — ADDRESS
════════════════════════════════════════════════════════════════ */
function StepAddress() {
  const { savedAddresses, selectedAddress, setSelectedAddress, goToPayment } = useCheckoutFlow();
  const [adding, setAdding] = useState(false);
  const [newAddr, setNewAddr] = useState({ name:"", phone:"", line1:"", line2:"", city:"", state:"", pincode:"", type:"Home" });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
        <div>
          <h3 className="text-sm font-extrabold text-[#171B1B] mb-0.5">Deliver to</h3>
          <p className="text-xs text-[#707776]">Choose or add a delivery address</p>
        </div>

        {/* Saved addresses */}
        {savedAddresses.map((addr) => (
          <div
            key={addr.id}
            onClick={() => setSelectedAddress(addr)}
            className={`border rounded-xl p-3.5 cursor-pointer transition-all ${
              selectedAddress.id === addr.id
                ? "border-[#123B3A] bg-[#F8FAF9] shadow-sm"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  selectedAddress.id === addr.id ? "border-[#123B3A]" : "border-gray-300"
                }`}>
                  {selectedAddress.id === addr.id && (
                    <div className="w-2 h-2 rounded-full bg-[#123B3A]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-[#171B1B]">{addr.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#DDE9E4] text-[#123B3A] font-bold uppercase tracking-wide">
                      {addr.type}
                    </span>
                    {addr.default && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F2E9D8] text-[#C7A66A] font-bold">Default</span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#707776] mt-0.5 leading-relaxed">
                    {addr.line1}, {addr.line2}, {addr.city}, {addr.state} — {addr.pincode}
                  </p>
                  <p className="text-[11px] text-[#707776] mt-0.5">{addr.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add new address toggle */}
        {!adding ? (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="w-full border border-dashed border-[#123B3A]/40 rounded-xl p-3.5 flex items-center gap-2.5 text-xs font-semibold text-[#123B3A] hover:bg-[#F7F6F2] transition-colors cursor-pointer"
          >
            <FiPlus className="text-base" /> Add a new address
          </button>
        ) : (
          <div className="border border-[#123B3A]/20 rounded-xl p-4 bg-[#F7F6F2] space-y-2.5">
            <h4 className="text-xs font-bold text-[#171B1B]">New Address</h4>
            {[
              { key:"name",    label:"Full Name",     type:"text" },
              { key:"phone",   label:"Phone Number",  type:"tel"  },
              { key:"line1",   label:"Street Address",type:"text" },
              { key:"line2",   label:"Area / Landmark",type:"text"},
              { key:"city",    label:"City",          type:"text" },
              { key:"state",   label:"State",         type:"text" },
              { key:"pincode", label:"PIN Code",      type:"number"},
            ].map(f => (
              <div key={f.key}>
                <label className="text-[10px] font-bold text-[#707776] uppercase tracking-wider block mb-0.5">{f.label}</label>
                <input
                  type={f.type}
                  value={newAddr[f.key]}
                  onChange={e => setNewAddr(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full h-9 px-3 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A]"
                />
              </div>
            ))}
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setAdding(false)}
                className="flex-1 h-9 rounded-lg text-xs font-bold text-[#707776] bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (newAddr.name && newAddr.line1 && newAddr.pincode) {
                    setSelectedAddress({ ...newAddr, id: "addr-new", default: false });
                    setAdding(false);
                  }
                }}
                className="flex-1 h-9 rounded-lg text-xs font-bold text-white bg-[#123B3A] hover:bg-[#0D2D2C] cursor-pointer"
              >
                Use this address
              </button>
            </div>
          </div>
        )}

        {/* Delivery promise */}
        <div className="bg-[#DDE9E4]/50 border border-[#123B3A]/10 rounded-xl p-3 flex items-center gap-2.5 text-xs text-[#171B1B]">
          <FiTruck className="text-[#34745F] text-base shrink-0" />
          <div>
            <span className="font-bold block">Free Express Delivery</span>
            <span className="text-[#707776]">Expected arrival: Wednesday, 1 Oct — 48h dispatch</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <button
          type="button"
          onClick={goToPayment}
          disabled={!selectedAddress}
          className="w-full h-12 rounded-xl bg-[#123B3A] text-white text-sm font-bold hover:bg-[#0D2D2C] disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Deliver to this address</span>
          <FiChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   STEP 2 — PAYMENT METHOD
════════════════════════════════════════════════════════════════ */
function StepPayment() {
  const { selectedPayment, setSelectedPayment, upiApp, setUpiApp, upiId, setUpiId, goToReview } = useCheckoutFlow();
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvv: "", name: "" });
  const [selectedBank, setSelectedBank] = useState("hdfc");

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
        <div className="mb-1">
          <h3 className="text-sm font-extrabold text-[#171B1B] mb-0.5">Select Payment Method</h3>
          <p className="text-xs text-[#707776]">Choose how you'd like to pay</p>
        </div>

        {PAYMENT_METHODS.map((m) => {
          const Icon = m.icon;
          const isSelected = selectedPayment === m.id;
          return (
            <div
              key={m.id}
              className={`border rounded-xl overflow-hidden transition-all cursor-pointer ${
                isSelected ? "border-[#123B3A] bg-[#F8FAF9]" : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setSelectedPayment(m.id)}
            >
              {/* Row */}
              <div className="flex items-center gap-3 p-3.5">
                <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${isSelected ? "border-[#123B3A]" : "border-gray-300"}`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-[#123B3A]" />}
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#F7F6F2] flex items-center justify-center border border-gray-100 shrink-0">
                  <Icon className="text-base text-[#123B3A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#171B1B]">{m.label}</span>
                    {m.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#DDE9E4] text-[#123B3A] font-bold">{m.badge}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#707776]">{m.desc}</p>
                </div>
              </div>

              {/* Expandable sub-section */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-100 bg-white px-4 py-3"
                    onClick={e => e.stopPropagation()}
                  >
                    {/* UPI */}
                    {m.id === "upi" && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id:"gpay",    label:"Google Pay"  },
                            { id:"phonepe", label:"PhonePe"     },
                            { id:"paytm",   label:"Paytm"       },
                            { id:"other",   label:"Other UPI ID"},
                          ].map(app => (
                            <button
                              key={app.id}
                              type="button"
                              onClick={() => setUpiApp(app.id)}
                              className={`p-2 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                                upiApp === app.id ? "border-[#123B3A] bg-[#DDE9E4]/40 text-[#123B3A] font-bold" : "border-gray-200 text-[#171B1B] hover:border-gray-300"
                              }`}
                            >
                              {app.label}
                            </button>
                          ))}
                        </div>
                        {upiApp === "other" && (
                          <input
                            type="text"
                            value={upiId}
                            onChange={e => setUpiId(e.target.value)}
                            placeholder="yourname@bank"
                            className="w-full h-9 px-3 text-xs bg-[#F7F6F2] border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A] font-mono"
                          />
                        )}
                      </div>
                    )}

                    {/* Card */}
                    {m.id === "card" && (
                      <div className="space-y-2">
                        <input
                          type="text"
                          maxLength={19}
                          value={cardData.number}
                          onChange={e => setCardData(p => ({ ...p, number: e.target.value.replace(/\D/g,"").replace(/(.{4})/g,"$1 ").trim() }))}
                          placeholder="Card Number"
                          className="w-full h-9 px-3 text-xs bg-[#F7F6F2] border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A] font-mono"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            maxLength={5}
                            value={cardData.expiry}
                            onChange={e => setCardData(p => ({ ...p, expiry: e.target.value }))}
                            placeholder="MM / YY"
                            className="w-full h-9 px-3 text-xs bg-[#F7F6F2] border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A] font-mono text-center"
                          />
                          <input
                            type="password"
                            maxLength={4}
                            value={cardData.cvv}
                            onChange={e => setCardData(p => ({ ...p, cvv: e.target.value.replace(/\D/g,"") }))}
                            placeholder="CVV"
                            className="w-full h-9 px-3 text-xs bg-[#F7F6F2] border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A] font-mono text-center"
                          />
                        </div>
                        <input
                          type="text"
                          value={cardData.name}
                          onChange={e => setCardData(p => ({ ...p, name: e.target.value }))}
                          placeholder="Name on Card"
                          className="w-full h-9 px-3 text-xs bg-[#F7F6F2] border border-gray-200 rounded-lg focus:outline-none focus:border-[#123B3A]"
                        />
                      </div>
                    )}

                    {/* Net Banking */}
                    {m.id === "netbanking" && (
                      <div className="grid grid-cols-3 gap-2">
                        {["HDFC","ICICI","SBI","Axis","Kotak","Other"].map(b => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBank(b.toLowerCase())}
                            className={`p-2 rounded-lg border text-[11px] font-semibold cursor-pointer transition-all ${
                              selectedBank === b.toLowerCase() ? "border-[#123B3A] bg-[#DDE9E4]/40 text-[#123B3A] font-bold" : "border-gray-200 text-[#171B1B]"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Wallet */}
                    {m.id === "wallet" && (
                      <p className="text-[11px] text-[#707776]">Your linked wallet balance will be used to complete the payment.</p>
                    )}

                    {/* COD */}
                    {m.id === "cod" && (
                      <div className="flex items-center gap-2 text-[11px] text-[#34745F] font-semibold">
                        <FiCheckCircle className="text-sm" />
                        <span>Cash on delivery is available for this order. Pay when your watches arrive.</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <button
          type="button"
          onClick={goToReview}
          className="w-full h-12 rounded-xl bg-[#123B3A] text-white text-sm font-bold hover:bg-[#0D2D2C] transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Use this payment method</span>
          <FiChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   STEP 3 — ORDER REVIEW + PAY NOW
════════════════════════════════════════════════════════════════ */
function StepReview({ amounts, quantities }) {
  const { selectedAddress, selectedPayment, startPayment, setStep } = useCheckoutFlow();

  const isCod = selectedPayment === "cod";
  const paymentLabel = {
    upi: "UPI",
    card: "Credit / Debit Card",
    netbanking: "Net Banking",
    wallet: "Wallet",
    cod: "Cash on Delivery",
  }[selectedPayment] || "UPI";

  const cartItems = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .map(([key, qty]) => ({
      key, qty,
      price: BASE_PRICES[key],
      ...WATCH_DATA[key],
    }));

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {/* Section header */}
        <div>
          <h3 className="text-sm font-extrabold text-[#171B1B] mb-0.5">Review Your Order</h3>
          <p className="text-xs text-[#707776]">Check everything before you pay</p>
        </div>

        {/* Delivery address summary */}
        <div className="border border-gray-200 rounded-xl p-3.5 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A66A]">Deliver to</span>
            <button type="button" onClick={() => setStep("address")} className="text-[11px] text-[#123B3A] font-bold hover:underline cursor-pointer flex items-center gap-1">
              <FiEdit2 className="text-xs" /> Change
            </button>
          </div>
          <p className="text-xs font-bold text-[#171B1B]">{selectedAddress.name}</p>
          <p className="text-[11px] text-[#707776] mt-0.5">{selectedAddress.line1}, {selectedAddress.line2}, {selectedAddress.city} — {selectedAddress.pincode}</p>
          <p className="text-[11px] text-[#707776]">{selectedAddress.phone}</p>
        </div>

        {/* Payment method summary */}
        <div className="border border-gray-200 rounded-xl p-3.5 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A66A]">Payment</span>
            <button type="button" onClick={() => setStep("payment")} className="text-[11px] text-[#123B3A] font-bold hover:underline cursor-pointer flex items-center gap-1">
              <FiEdit2 className="text-xs" /> Change
            </button>
          </div>
          <p className="text-xs font-bold text-[#171B1B]">{paymentLabel}</p>
        </div>

        {/* Items */}
        <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
          <div className="px-3.5 pt-3.5 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A66A]">Order Items ({cartItems.reduce((a,i)=>a+i.qty,0)} watches)</span>
          </div>
          <div className="divide-y divide-gray-100">
            {cartItems.map(item => (
              <div key={item.key} className="flex items-center gap-3 px-3.5 py-3">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-gray-100 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#171B1B] truncate">{item.name}</p>
                  <p className="text-[11px] text-[#707776] truncate">{item.variant}</p>
                  <p className="text-[11px] text-[#707776]">Qty: {item.qty}</p>
                </div>
                <span className="text-xs font-bold text-[#171B1B] shrink-0">₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price breakdown */}
        <div className="border border-gray-200 rounded-xl p-3.5 bg-white space-y-2 text-xs text-[#707776]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A66A] block mb-1">Order Total</span>
          <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-[#171B1B]">₹{amounts.subtotal.toLocaleString("en-IN")}</span></div>
          {amounts.discount > 0 && <div className="flex justify-between text-[#34745F]"><span>Special Discount</span><span className="font-semibold">-₹{amounts.discount.toLocaleString("en-IN")}</span></div>}
          {amounts.voucher > 0 && <div className="flex justify-between text-[#34745F]"><span>Voucher Savings</span><span className="font-semibold">-₹{amounts.voucher.toLocaleString("en-IN")}</span></div>}
          <div className="flex justify-between"><span>Express Delivery</span><span className="font-bold text-[#34745F] uppercase text-[10px]">Free</span></div>
          <div className="flex justify-between text-[11px] pt-2 border-t border-gray-100 font-bold text-base text-[#123B3A]">
            <span>Total</span>
            <span>₹{amounts.total.toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex items-center gap-2 text-[11px] text-[#707776] justify-center">
          <FiShield className="text-[#34745F] text-sm" />
          <span>256-bit secured • All payments are encrypted</span>
        </div>
      </div>

      {/* CTA */}
      <div className="p-4 border-t border-gray-100 bg-white space-y-2">
        <button
          type="button"
          onClick={startPayment}
          className="w-full h-12 rounded-xl bg-[#123B3A] text-white text-sm font-bold hover:bg-[#0D2D2C] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
          style={{ boxShadow: "0 4px 14px rgba(18,59,58,0.24)" }}
        >
          <FiLock className="text-sm text-[#C7A66A]" />
          <span>{isCod ? `Place Order` : `Pay Now — ₹${amounts.total.toLocaleString("en-IN")}`}</span>
        </button>
        <p className="text-center text-[11px] text-[#707776]">
          By placing your order, you agree to AMIHIVE's Terms of Sale.
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   STEP 4 — PROCESSING
════════════════════════════════════════════════════════════════ */
function StepProcessing() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-5">
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 rounded-full border-4 border-[#DDE9E4] border-t-[#123B3A] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FiLock className="text-xl text-[#C7A66A]" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-[#171B1B]">Processing your payment</h3>
        <p className="text-sm text-[#707776] mt-1">Please wait, do not close this window...</p>
      </div>
      <div className="bg-[#F7F6F2] border border-[#123B3A]/10 rounded-xl p-3 text-xs text-[#123B3A] font-semibold w-full max-w-xs">
        🔒 Your transaction is being verified securely
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   STEP 5 — SUCCESS POPUP
════════════════════════════════════════════════════════════════ */
function StepSuccess({ closeFlow, amounts }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center gap-5">
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-20 h-20 rounded-full bg-[#DDE9E4] text-[#34745F] flex items-center justify-center"
      >
        <FiCheckCircle className="text-4xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-1"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#34745F] block">Order Confirmed — #AMH-9942</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#171B1B]">Payment Successful! 🎉</h2>
        <p className="text-xs sm:text-sm text-[#707776] mt-1.5 max-w-xs mx-auto leading-relaxed">
          Your timepieces are being prepared at the AMIHIVE Horology Atelier. You'll receive a confirmation on your registered email.
        </p>
      </motion.div>

      {/* Order summary card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-xs bg-[#F7F6F2] border border-[#123B3A]/10 rounded-2xl p-4 text-xs text-left space-y-2"
      >
        <div className="flex justify-between">
          <span className="text-[#707776]">Amount Paid</span>
          <span className="font-bold text-[#123B3A]">₹{amounts.total.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#707776]">Expected Delivery</span>
          <span className="font-semibold text-[#171B1B]">Wed, 1 Oct</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#707776]">Order ID</span>
          <span className="font-mono font-semibold text-[#171B1B]">AMH-9942</span>
        </div>
      </motion.div>

      {/* Timeline hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="w-full max-w-xs space-y-2"
      >
        {[
          { icon: FiCheckCircle, label:"Payment Confirmed",  sub:"Just now",          done: true  },
          { icon: FiPackage,     label:"Atelier Inspection", sub:"In progress",        done: false },
          { icon: FiTruck,       label:"Out for Delivery",   sub:"Expected 1 Oct",     done: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-xs">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${t.done ? "bg-[#34745F] text-white" : "bg-gray-100 text-gray-400"}`}>
              <t.icon className="text-sm" />
            </div>
            <div className="text-left">
              <span className={`font-semibold block ${t.done ? "text-[#171B1B]" : "text-[#707776]"}`}>{t.label}</span>
              <span className="text-[#707776] text-[10px]">{t.sub}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="w-full max-w-xs space-y-2.5 pt-1"
      >
        <a
          href="/order-success"
          className="block w-full h-11 rounded-xl bg-[#123B3A] text-white text-xs font-bold hover:bg-[#0D2D2C] transition-colors flex items-center justify-center gap-2"
        >
          View Order Details
        </a>
        <button
          type="button"
          onClick={closeFlow}
          className="w-full h-10 rounded-xl bg-white border border-gray-200 text-[#123B3A] text-xs font-bold hover:bg-[#F7F6F2] transition-colors cursor-pointer"
        >
          Continue Shopping
        </button>
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MASTER MODAL WRAPPER
════════════════════════════════════════════════════════════════ */
export default function CheckoutFlowModal() {
  const { isOpen, step, closeFlow, resetFlow } = useCheckoutFlow();
  const { amounts, quantities } = useCart();

  // Track direction for slide animation
  const STEP_ORDER = ["address", "payment", "review", "processing", "success"];
  const stepIndex = STEP_ORDER.indexOf(step);

  const isSuccess = step === "success";
  const isProcessing = step === "processing";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={!isProcessing && !isSuccess ? closeFlow : undefined}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="fixed z-[101] inset-x-0 bottom-0 sm:inset-0 flex items-end sm:items-center justify-center pointer-events-none"
          >
            <div
              className="relative bg-white w-full sm:max-w-lg pointer-events-auto flex flex-col overflow-hidden"
              style={{
                borderRadius: "20px 20px 0 0",
                maxHeight: "92dvh",
                height: "92dvh",
              }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-100 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#DDE9E4] flex items-center justify-center">
                      <FiLock className="text-xs text-[#123B3A]" />
                    </div>
                    <span className="text-xs font-bold text-[#123B3A] tracking-wide uppercase">
                      {isSuccess ? "Order Placed ✓" : isProcessing ? "Securing Payment…" : "Secure Checkout"}
                    </span>
                  </div>
                  {!isProcessing && !isSuccess && (
                    <button
                      type="button"
                      onClick={closeFlow}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#171B1B] hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <FiX className="text-base" />
                    </button>
                  )}
                </div>

                {/* Step bar (hidden for processing/success) */}
                {!isProcessing && !isSuccess && <StepBar step={step} />}

                {/* Animated step content */}
                <div className="flex-1 overflow-hidden relative">
                  <AnimatePresence mode="wait" custom={stepIndex}>
                    <motion.div
                      key={step}
                      custom={stepIndex}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      {step === "address"    && <StepAddress />}
                      {step === "payment"    && <StepPayment />}
                      {step === "review"     && <StepReview amounts={amounts} quantities={quantities} />}
                      {step === "processing" && <StepProcessing />}
                      {step === "success"    && <StepSuccess closeFlow={resetFlow} amounts={amounts} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
