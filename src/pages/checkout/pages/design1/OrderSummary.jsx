import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function OrderSummary() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="lg:col-span-4 sticky top-28 space-y-space-md">

<div className="bg-surface-container-lowest p-space-lg shadow-md rounded-xl" style={{ borderRadius: "72px 16px 16px 16px" }}>

<div className="pt-2 pb-space-md mb-space-md">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Acquisition Manifest</span>
<span className="px-2 py-0.5 bg-surface-container font-label-sm text-label-sm text-primary rounded font-mono font-bold">#8841-A</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">watch</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Order Summary</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">3 Calibres currently in vaulted inspection lock.</p>
</div>

<div className="space-y-space-md pb-space-md mb-space-md">

<div className="flex items-center gap-space-sm">
<div className="w-14 h-14 rounded-lg bg-surface-container flex-shrink-0 p-1 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover rounded" data-alt="Macro studio photograph of Aster No.04 Automatic luxury mechanical wristwatch showing petrol green sunburst dial and exhibition escapement on neutral beige background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1zURYwnBE1WMtwieFhRoO0lezT2DJmaUCme3J51pQxAS2O9u8F-kGdKGBp493JnUcBFqxJlJfV8_a-w3n0Z2rRr9BO7CXpZOmJ8dPX02wnEQsv75sTKEqilosQDWLQMsD53TGTrnCgbfPHa0KgfXSXBpv9fRzttcM-gfIvWll0oSnANCnKLhDAXJQLRI0DOqGpPz7D2Ky-7m5rFFLUnBie2xIZXxYrrLT6UNf2yF5xdwt63IcB6i2" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-primary font-bold truncate">Aster No.04 Automatic</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono">CAL-AST04 • 40mm • Qty 1</p>
<div className="flex items-center gap-1 text-[11px] text-secondary">
<span className="material-symbols-outlined text-[13px]">verified</span> Serialized Atelier No. 048/300
                </div>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-primary font-bold">₹18,990</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-14 h-14 rounded-lg bg-surface-container flex-shrink-0 p-1 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover rounded" data-alt="High-end catalog shot of Heritage Field 40 Swiss automatic watch with matte black dial and brown leather strap on porcelain surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjP7U_71jj4MUrD0qeRii4pFGqt9jJHgBjHUCaEiMTHQDrTgLbLmhMx9y72chLnl0JdsETLfm9w_BG2Qeke5yfzmxp_dQXk49STjE1VeLT7cBhTO2S-Q9jMNRUOfZSlWJ7SRqm-CCEFnVH2Zillo50YpBHjCGOncck_AH4_IZhqY-lXKF7TJL4U5GsT-Eqj7BHAEdejvu1ekoW-E_215iCtrfhgFUPYrNnO6uRXa2Vlopqj_5Mhcbg" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-primary font-bold truncate">Heritage Field 40</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono">CAL-HF40 • 38mm • Qty 1</p>
<div className="flex items-center gap-1 text-[11px] text-secondary">
<span className="material-symbols-outlined text-[13px]">verified</span> Chronometer Calibrated
                </div>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-primary font-bold">₹14,290</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-14 h-14 rounded-lg bg-surface-container flex-shrink-0 p-1 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover rounded" data-alt="Precision photograph of Atlas S4 GPS horological tactical timepiece with titanium brushed bezel and dark sapphire glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVcCQMe3kIxuDvNSeqtC3NQKSB3Rc6EucnQQhYoHg4tgrsunSmUSeWX1XLWNFMKzAFCfWj-b6KVc8AX3vikkeEigb2axHFsQRshKazBQz6RoP4mrh58CBqLVn42WNb0OCfjKzlYG45BUFLVTNrgdj0AGBfhGp2OVuX9RLGg7pZsQNGvGZ2xwhG1nYBFFf6AY1vvKwI3W_vYvvTyhG0xdyaUFxJ065mrYHkOEQcCPdVSlaHQsZLScyH" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-primary font-bold truncate">Atlas S4 GPS Escapement</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono">CAL-ATS4 • 42mm • Qty 1</p>
<div className="flex items-center gap-1 text-[11px] text-secondary">
<span className="material-symbols-outlined text-[13px]">verified</span> Dual-Oscillator Certified
                </div>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-primary font-bold">₹13,990</span>
</div>
</div>
</div>

<div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant pb-space-md mb-space-md">
<div className="flex justify-between items-center">
<span>Subtotal (3 Calibres)</span>
<span className="text-on-surface font-medium">₹47,270</span>
</div>
<div className="flex justify-between items-center text-primary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">workspace_premium</span> Atelier Tier Privilege
              </span>
<span className="font-medium">-₹3,000</span>
</div>
<div className="flex justify-between items-center text-secondary">
<span className="flex items-center gap-1 font-mono text-[12px]">
<span className="material-symbols-outlined text-[14px]">confirmation_number</span> COUPON: CALIBRE5
              </span>
<span className="font-medium">-₹1,500</span>
</div>
<div className="flex justify-between items-center">
<span>Armored Escort Transit</span>
<span className="text-secondary font-bold uppercase font-label-sm text-label-sm">FREE (Complimentary)</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Applicable GST (18% included)</span>
<span>₹6,520</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl mb-space-lg flex items-baseline justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">Total Escrow Amount</span>
<span className="block font-label-sm text-label-sm text-secondary">Taxes & Armored Cover Included</span>
</div>
<div className="text-right">
<span className="text-[28px] font-bold text-primary tracking-tight leading-none">₹42,770</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant font-mono">INR NET</span>
</div>
</div>

<button className="w-full h-[52px] bg-primary hover:bg-primary-container text-on-primary rounded font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-md transition-all group" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">lock</span>
<span>Authorize Escrow & Complete — ₹42,770</span>
</button>

<div className="text-center mt-space-md">
<a className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" data-path="shopping-cart" href="#">
<span className="material-symbols-outlined text-[14px]">arrow_back</span>
              Return to Acquisition Manifest
            </a>
</div>

<div className="mt-space-lg pt-space-md space-y-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
<span>256-Bit Escrow Vault Protocol Active</span>
</div>
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">av_timer</span>
<span>7-Day In-Hand Chronometer Precision Trial</span>
</div>
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">military_tech</span>
<span>5-Year Atelier Mechanical Escapement Warranty</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary-container text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">support_agent</span>
</div>
<div className="flex-1">
<h5 className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Personal Vault Concierge</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Assigned Horologist: Maître Antoine D'Souza</p>
</div>
<span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
</div>
</div>
    </>
  );
}
