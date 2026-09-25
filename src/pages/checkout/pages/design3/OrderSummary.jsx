import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function OrderSummary() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <aside className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-28">

<div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Active Sync: 3 Instruments Queued
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Manifest #AH-9810</span>
</div>

<div className="space-y-space-sm mb-space-md">

<div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded">
<img className="w-14 h-14 rounded object-cover flex-shrink-0 bg-surface" data-alt="High-performance rugged titanium sports smartwatch dial with dual-band GPS telemetry, matte ceramic bezel, sapphire crystal screen displaying altimeter and heart rate metrics, dramatic directional studio lighting on deep petrol background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhtlgsO17KAeuRWtLG3ahI85KmLbeFhDaqad5Cw9vMVJ4rN9e6A5huTQiavGSFOl2qv6jC0-e7I0maQk4JA47HZzMp6D1GtOHrc6sxSh08p6htzNHGPy1zup3XRqB_9OP_yaV7iLbJj7FyAaP-otkYxEgJdyIU0MMyuILqU_sJ6BF4uKRy7T9_U81UuAyjkV7FJFIoAqbRTVNBkkPdUOs-NW_hLfo_K7kAQt0twEm_frxn8JSRS1y3" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="font-label-md text-label-md text-primary font-bold truncate">Atlas S4 Dual GPS</h3>
<span className="font-label-md text-label-md text-primary font-bold">₹13,990</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Grade 5 Titanium • Sapphire OLED • 46mm</p>
<span className="font-label-sm text-label-sm text-secondary uppercase">Inspected Calibre • Serial #9102-TI</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded">
<img className="w-14 h-14 rounded object-cover flex-shrink-0 bg-surface" data-alt="Swiss mechanical automatic 40mm dress watch with exposed balance wheel escapement, sunburst emerald dial, brushed steel lugs, macro horology photography showing pristine Geneva stripes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI5GY814x4OfFv7ACEGNOfZkh0c7Y2uuE7gQ8Rn3l2jct2ie3Ms9WBoOETK29yLXIcmhgZSOCxDkQv9UjHz9ih_iEZiFAmtRsPRayzWmyw11PtngSqqfB2df5ub2W_XBbj8EOSC6AJIcjHqoAfhk76CgP6iTIHpBJSHv1GRZwrr1vtorwh5qeSMHBmLT0hIOPGIBg-9C-Odevf3Dvb2Ih6kcs2oM-NwZucH_b5Mgheh3TyUro4w_Il" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="font-label-md text-label-md text-primary font-bold truncate">Aster No.04 Automatic</h3>
<span className="font-label-md text-label-md text-primary font-bold">₹18,990</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Calibre AH-2892 • 40mm • 48hr Reserve</p>
<span className="font-label-sm text-label-sm text-secondary uppercase">COSC Certified Escapement</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded">
<img className="w-14 h-14 rounded object-cover flex-shrink-0 bg-surface" data-alt="Tactical military field watch with DLC black coated steel case, 24-hour military numerals with tritium luminescent hands, ballistic nylon strap, pristine collector condition on dark stone background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix8tnzjiLzfPOx7AetvZSsbs1dGbPuGun3Z518ciJd6mBIkPDwPpEqYy0QShawZtyDBQ9KUweLilkserOyLPMFDiMvpkc2zroU84BoeudliycIyE761qEJkfUOWSTwSi7sURQsIz2r9U5O_3aZFkmfaGo2aRT_YSlJXrXXeR_GPnPDrobh2VjSASfVWlAEkTd6gy4Ts3v-2o-SS4J1Ure-33Ycm5bO58NgNMKY3ZqB0ndsmC2UpQd" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="font-label-md text-label-md text-primary font-bold truncate">Heritage Field 40</h3>
<span className="font-label-md text-label-md text-primary font-bold">₹14,290</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Tactical Black DLC • 100m Hydro-Proof</p>
<span className="font-label-sm text-label-sm text-secondary uppercase">Shock-Resist Calibre #401</span>
</div>
</div>
</div>

<div className="space-y-2 py-space-sm font-body-sm text-body-sm text-on-surface-variant">
<div className="flex justify-between">
<span>Items Subtotal (3 timepieces)</span>
<span className="text-on-surface font-semibold">₹47,270</span>
</div>
<div className="flex justify-between text-secondary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">loyalty</span>
                Performance Bundle Incentive
              </span>
<span className="font-semibold">-₹2,500</span>
</div>
<div className="flex justify-between text-secondary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                VIP Pass applied [VELOCITY-CHRONO]
              </span>
<span className="font-semibold">-₹1,500</span>
</div>
<div className="flex justify-between">
<span>Armored Transit Insurance (Comprehensive)</span>
<span className="text-secondary font-bold uppercase font-label-sm text-label-sm">COMPLIMENTARY</span>
</div>
<div className="flex justify-between">
<span>GST & Escrow Verification Stamp (18% incl.)</span>
<span className="text-on-surface">Included</span>
</div>
<div className="pt-space-sm mt-space-xs flex items-baseline justify-between text-primary">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold uppercase tracking-tight">Total Value</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Protected in AMIHIVE Guild Escrow</span>
</div>
<div className="text-right">
<span className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary">₹43,270</span>
<span className="block font-label-sm text-label-sm text-secondary font-bold uppercase">Net Savings: ₹4,000</span>
</div>
</div>
</div>

<div className="mt-space-md">
<button className="group relative w-full h-14 bg-primary text-on-primary rounded font-label-lg text-label-lg uppercase tracking-wider font-bold flex items-center justify-between px-space-md shadow-md hover:bg-primary-container transition-all overflow-hidden" type="button">
<span className="flex items-center gap-2">
<span className="w-8 h-8 rounded bg-surface-container-lowest/15 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">lock</span>
</span>
<span>Slide to Authorize • Pay ₹43,270</span>
</span>
<span className="material-symbols-outlined text-[22px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="mt-space-md p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">72-Hour Precision Timing Benchmark</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Every mechanical balance wheel and digital telemetry sensor undergoes strict chronometric verification with signed certificate included in package.
              </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Escrow Security Metric</span>
<span className="font-label-md text-label-md text-primary font-bold">100% Calibre Authenticated</span>
<span className="font-body-sm text-body-sm text-secondary">Zero Risk Guarantee</span>
</div>
<svg className="w-32 h-10 text-secondary" fill="none" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24L15 21L30 25L45 15L60 18L75 8L90 12L105 4L120 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="120" cy="2" fill="currentColor" r="2.5"></circle>
</svg>
</div>
</aside>
    </>
  );
}
