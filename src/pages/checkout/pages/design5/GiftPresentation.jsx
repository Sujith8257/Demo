import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function GiftPresentation() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-[#F2E9D8] text-primary p-space-lg shadow-sm" style={{ borderRadius: "32px 8px 32px 8px" }}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary text-secondary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">diamond</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Atelier Craftsmanship</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Milestone Heirloom Presentation & Dedication</h2>
</div>
</div>
<span className="px-space-md py-1 bg-primary text-secondary font-label-sm text-label-sm uppercase tracking-widest rounded-full font-bold self-start md:self-auto shadow-sm">
              All-Inclusive Gifting Suite
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Each timepiece is nested into handcrafted French velvet with custom brass dedication plaque and archival letterpress certificate.
          </p>

<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm mb-space-md flex flex-col md:flex-row items-center gap-space-md">
<div className="w-full md:w-48 h-32 rounded bg-surface-container overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up photograph of a solid dark American walnut presentation coffret box with emerald green hand poured wax seal and brass hinges for luxury watch display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-8QL6227q4xDW6Vez5riBYzw_m6y119en-9TcBvlaBO4BUGDKPUemhM1V3mO1kACBkpviPvmun3w_hq-SvXmrUOHavnzJ_LBq5lPOh3z8kg4Kir9Slz4dTOGxJU8gyeJ_OKQsj-pFGSMmsGK77N9dzdl9N-55cVn1r7-2wD2gqq1xe4JU4SDXzn1IfMQLQ34kDDiXcBbyndfJM-N1D4x9onoccmHAr40MXdOIHdhl3vZXC8FCVCW" />
<div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-primary/90 text-on-primary font-label-sm text-[9px] rounded uppercase">Walnut & Velvet</div>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Complimentary Solid Walnut Coffret & Hand-Poured Emerald Wax Seal</span>
<span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Crafted from FSC-certified kiln-dried American walnut, interior lined in Forest Emerald microfiber velvet. Sealed manually with hot botanical lacquer bearing the AMIHIVE Guild Signet.
              </p>
<div className="flex items-center gap-space-md mt-1 font-label-sm text-label-sm text-secondary font-bold">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">verified</span> Anti-Magnetic Lining</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">lock</span> Tamper Cryo-Seal</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm mb-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">history_edu</span>
<span>Diamond-Drag Engraved Brass Plaque Dedication</span>
</label>
<span className="font-label-sm text-label-sm text-secondary font-bold" id="char-counter">{engraving.length} / 80 Characters</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant">
              Inscribed onto a polished brushed brass plate secured to the interior coffret lid.
            </p>
<input className="w-full bg-surface-container-low px-space-md py-2.5 rounded font-body-md text-body-md text-primary font-semibold focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm" id="engraving-input" maxLength="80" type="text" value={engraving} onChange={(event) => setEngraving(event.target.value.slice(0,80))} />
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm mb-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">edit_note</span>
<span>Calligraphic Letterpress Enclosed Message</span>
</label>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">300 GSM Deckle Paper</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant">
              Hand-inscribed by the Guild Master Calligrapher using archive sumi-e ink, tucked into an emerald wax-sealed parchment envelope.
            </p>
<textarea className="w-full bg-surface-container-low px-space-md py-2.5 rounded font-body-md text-body-md text-primary italic focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm resize-none" rows="3" defaultValue={"May your journey forward keep rhythm with passion, quiet excellence, and the relentless measure of genuine ambition."} />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
<label className="flex items-start gap-space-sm bg-surface-container-lowest/80 p-space-sm rounded cursor-pointer hover:bg-surface-container-lowest transition-colors">
<input defaultChecked className="mt-1 accent-primary w-4 h-4" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Discreet Gifting Invoice</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Omit all prices from physical package, warranty cards, and courier slips.</span>
</div>
</label>
<label className="flex items-start gap-space-sm bg-surface-container-lowest/80 p-space-sm rounded cursor-pointer hover:bg-surface-container-lowest transition-colors">
<input defaultChecked className="mt-1 accent-primary w-4 h-4" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Heirloom Provenance Ledger</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Include blank generational lineage transfer leaf and ownership cert.</span>
</div>
</label>
</div>
</section>
    </>
  );
}
