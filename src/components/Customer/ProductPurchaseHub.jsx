import React, { useState } from 'react';

const DIAL_OPTIONS = [
  { id: 'blue', name: 'Sunburst Midnight Blue', color: '#0d274c' },
  { id: 'black', name: 'Classic Matte Obsidian', color: '#1b1b1b' },
  { id: 'silver', name: 'Sunray Brushed Silver', color: '#d5d7dc' },
  { id: 'green', name: 'Deep Forest Green', color: '#1c352d' },
];

const STRAP_OPTIONS = [
  { id: 'cognac', name: 'Cognac Leather', fullName: 'Cognac Italian Leather', color: '#7B3F11' },
  { id: 'obsidian', name: 'Obsidian Black', fullName: 'Obsidian Black Leather', color: '#1f1f1f' },
  { id: 'steel', name: 'Steel Jubilee Link', fullName: 'Steel Jubilee 5-Link Bracelet', color: '#a8acb6' },
];

const CASE_SIZES = [
  { size: '38mm', label: 'Subtle', desc: 'Fits wrists 5.5" - 6.75"' },
  { size: '40mm', label: 'Standard', desc: 'Balanced fit for most wrists 6.25" - 7.5"' },
  { size: '42mm', label: 'Presence', desc: 'Commanding stance for 7.0"+ wrists' },
];

export default function ProductPurchaseHub({
  product = null,
  onAddToCart = null,
  onBuyNow = null
}) {
  const [selectedDial, setSelectedDial] = useState(DIAL_OPTIONS[0]);
  const [selectedStrap, setSelectedStrap] = useState(STRAP_OPTIONS[0]);
  const [selectedCaseSize, setSelectedCaseSize] = useState('40mm');
  const [pincode, setPincode] = useState('560001');
  const [pincodeStatus, setPincodeStatus] = useState({
    checked: true,
    city: 'Bengaluru Central',
    date: 'Tuesday, 14 Sep',
    available: true
  });
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [cartState, setCartState] = useState('idle'); // 'idle' | 'added'
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [allOffersOpen, setAllOffersOpen] = useState(false);

  // Price calculations
  const price = product?.price || 18990;
  const originalPrice = product?.originalPrice || 21990;
  const discountPct = Math.round(((originalPrice - price) / originalPrice) * 100);
  const savings = originalPrice - price;

  const handleCheckPincode = (e) => {
    e?.preventDefault();
    if (!pincode || pincode.trim().length !== 6) {
      setPincodeStatus({ checked: true, city: '', date: '', available: false });
      return;
    }
    setIsCheckingPincode(true);
    setTimeout(() => {
      setIsCheckingPincode(false);
      setPincodeStatus({
        checked: true,
        city: pincode === '560001' ? 'Bengaluru Central' : `Pincode ${pincode}`,
        date: 'Wednesday, 15 Sep',
        available: true
      });
    }, 400);
  };

  const handleCartClick = () => {
    setCartState('added');
    if (onAddToCart) onAddToCart({ dial: selectedDial, strap: selectedStrap, size: selectedCaseSize });
    setTimeout(() => {
      setCartState('idle');
    }, 2200);
  };

  const handleBuyClick = () => {
    if (onBuyNow) {
      onBuyNow({ dial: selectedDial, strap: selectedStrap, size: selectedCaseSize });
    } else if (onAddToCart) {
      onAddToCart({ dial: selectedDial, strap: selectedStrap, size: selectedCaseSize });
      window.location.href = '/cart';
    }
  };

  return (
    <div className="lg:col-span-7 flex flex-col space-y-space-md">
      {/* Header & Brand Authority */}
      <div className="space-y-space-2xs">
        <div className="flex items-center justify-between">
          <span className="font-label-bold text-label-bold text-secondary tracking-widest uppercase">
            AMIHIVE TIMEPIECES · ARTISAN SERIES
          </span>
          <span className="font-caption text-caption text-outline">SKU: AMH-AST-04B</span>
        </div>
        <h1 className="font-headline-1 text-[24px] sm:text-[28px] md:text-headline-1 text-on-surface tracking-tight leading-snug">
          {product?.name || 'Aster No.04 Automatic Blue Dial Watch'}
        </h1>
        <p className="font-body-regular text-body-regular text-on-surface-variant">
          {product?.description || 'Caliber 9015 Automatic Movement · Double-Domed Sapphire Crystal · Vegetable-Tanned Italian Leather'}
        </p>
      </div>

      {/* Social Proof & Review Ribbon */}
      <div className="flex flex-wrap items-center gap-space-sm pb-space-xs">
        <a
          href="#reviews-section"
          className="flex items-center gap-1.5 bg-[#388E3C] text-white px-2.5 py-1 rounded-full font-label-bold text-label-bold shadow-sm hover:opacity-95 transition-opacity"
        >
          <span>4.7</span>
          <span
            className="material-symbols-outlined text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </a>
        <span className="font-body-medium text-body-medium text-on-surface-variant">
          <strong className="text-on-surface font-body-bold">284 Ratings</strong> &amp; 96 Verified Collector Reviews
        </span>
        <span className="text-outline-variant">•</span>
        <span className="flex items-center gap-1 text-primary font-label-bold text-label-bold">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          100% Authentic Guaranteed
        </span>
      </div>

      {/* Pricing Block with Value Framing */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-2xs">
        <div className="flex items-baseline gap-space-sm flex-wrap">
          <span className="font-headline-1 text-[34px] leading-tight text-on-surface font-bold">
            ₹{price.toLocaleString('en-IN')}
          </span>
          <span className="font-headline-3 text-headline-3 text-outline line-through">
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
          <span className="bg-[#E8F5E9] text-[#388E3C] font-label-bold text-label-bold px-space-xs py-space-2xs rounded-full">
            {discountPct}% OFF
          </span>
          <span className="text-[#388E3C] font-body-bold text-body-bold">
            Save ₹{savings.toLocaleString('en-IN')} Today
          </span>
        </div>
        <p className="font-caption text-caption text-on-surface-variant">
          Inclusive of all duties, packaging and GST. Free insured air courier included.
        </p>

        {/* Genuine Urgency / Batch run indicator */}
        <div className="pt-space-xs flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388E3C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#388E3C]"></span>
          </span>
          <span className="font-label-bold text-label-bold text-on-surface">In Stock</span>
          <span className="text-outline-variant">•</span>
          <span className="font-label text-label text-on-surface-variant">
            Batch #04 — Only 18 pieces remaining from this artisan seasonal drop
          </span>
        </div>
      </div>

      {/* Promotional Multi-Offers Box */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs border border-surface-container/60">
        <div className="flex items-center justify-between pb-space-2xs">
          <div className="flex items-center gap-space-2xs text-secondary font-label-bold text-label-bold uppercase">
            <span className="material-symbols-outlined text-[18px]">local_offer</span>
            <span>Available Offers &amp; Partner Privileges</span>
          </div>
          <button
            onClick={() => setAllOffersOpen(!allOffersOpen)}
            className="font-label-bold text-label-bold text-primary hover:underline"
          >
            {allOffersOpen ? 'Show less ↑' : 'View all 6 offers →'}
          </button>
        </div>
        <div className="space-y-space-xs">
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
              check_circle
            </span>
            <p className="font-body-regular text-body-regular text-on-surface">
              <strong className="font-body-bold">Bank Privilege:</strong> 10% Instant discount up to ₹1,500 on HDFC &amp; ICICI Bank Credit Cards.
            </p>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
              check_circle
            </span>
            <p className="font-body-regular text-body-regular text-on-surface">
              <strong className="font-body-bold">Welcome Privilege:</strong> Flat ₹500 off on your first AMIHIVE order applied automatically at checkout.
            </p>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
              check_circle
            </span>
            <p className="font-body-regular text-body-regular text-on-surface">
              <strong className="font-body-bold">Artisan Gift:</strong> Use code{' '}
              <span className="font-mono bg-surface-container px-1.5 py-0.5 rounded font-bold text-primary">
                WATCH500
              </span>{' '}
              for a complimentary natural beeswax strap care balm.
            </p>
          </div>

          {allOffersOpen && (
            <div className="pt-2 border-t border-surface-container space-y-space-xs animate-fade-in">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="font-body-regular text-body-regular text-on-surface">
                  <strong className="font-body-bold">No-Cost EMI:</strong> Up to 6 months No-Cost EMI on major credit cards.
                </p>
              </div>
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="font-body-regular text-body-regular text-on-surface">
                  <strong className="font-body-bold">Corporate Privilege:</strong> Extra 5% off on corporate billing with GST invoice.
                </p>
              </div>
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[#388E3C] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="font-body-regular text-body-regular text-on-surface">
                  <strong className="font-body-bold">Patron Circle:</strong> Earn 2x reward tier points toward limited edition reservation drops.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Variant Configurator */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md border border-surface-container/60">
        {/* Dial Colour Selector */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-bold text-label-bold text-on-surface">
              Dial Finish:{' '}
              <span className="font-label text-label text-on-surface-variant" id="selected-dial-name">
                {selectedDial.name}
              </span>
            </span>
            <span className="font-caption text-caption text-primary font-semibold">
              Premium Sunray Finish
            </span>
          </div>
          <div className="flex items-center gap-space-sm" id="dial-swatches">
            {DIAL_OPTIONS.map((dial) => {
              const isSelected = selectedDial.id === dial.id;
              return (
                <button
                  key={dial.id}
                  onClick={() => setSelectedDial(dial)}
                  className={`w-9 h-9 rounded-full shadow-sm transition-all p-0.5 ${
                    isSelected
                      ? 'ring-2 ring-offset-2 ring-primary scale-105'
                      : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: dial.color }}
                  data-color-name={dial.name}
                  title={dial.name}
                  aria-label={dial.name}
                />
              );
            })}
          </div>
        </div>

        {/* Strap Material Selector */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-bold text-label-bold text-on-surface">
              Strap Selection:{' '}
              <span className="font-label text-label text-on-surface-variant" id="selected-strap-name">
                {selectedStrap.fullName}
              </span>
            </span>
            <span className="font-caption text-caption text-outline">Quick-Release Pins</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs" id="strap-options">
            {STRAP_OPTIONS.map((strap) => {
              const isSelected = selectedStrap.id === strap.id;
              return (
                <button
                  key={strap.id}
                  onClick={() => setSelectedStrap(strap)}
                  className={`flex items-center gap-space-xs p-space-xs rounded-lg font-label-bold text-label-bold text-left transition-all strap-pill ${
                    isSelected
                      ? 'bg-primary-fixed text-on-primary-fixed shadow-sm ring-1 ring-primary/20'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: strap.color }}
                  />
                  <div className="truncate">{strap.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Size Segmented Picker */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-bold text-label-bold text-on-surface">
              Case Diameter:{' '}
              <span className="font-label text-label text-on-surface-variant">
                {selectedCaseSize} ({CASE_SIZES.find((s) => s.size === selectedCaseSize)?.label})
              </span>
            </span>
            <button
              onClick={() => setSizeGuideOpen(true)}
              className="font-label text-label text-primary hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">straighten</span> Size Guide
            </button>
          </div>
          <div className="flex items-center gap-space-xs">
            {CASE_SIZES.map((item) => {
              const isSelected = selectedCaseSize === item.size;
              return (
                <button
                  key={item.size}
                  onClick={() => setSelectedCaseSize(item.size)}
                  className={`flex-1 py-2 px-1 sm:px-2 rounded-lg font-label-bold text-[11px] sm:text-label-bold transition-all text-center ${
                    isSelected
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {item.size} ({item.label})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pincode Delivery Availability Checker */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs border border-surface-container/60">
        <span className="font-label-bold text-label-bold text-on-surface flex items-center gap-space-2xs">
          <span className="material-symbols-outlined text-[18px] text-primary">pin_drop</span>
          Estimated Dispatch &amp; Location Services
        </span>
        <form onSubmit={handleCheckPincode} className="flex items-center gap-space-xs">
          <div className="relative flex-1">
            <input
              className="w-full h-11 pl-space-sm pr-space-md rounded-lg bg-surface-container-low font-body-regular text-body-regular text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/30 transition-all"
              maxLength={6}
              placeholder="Enter 6-digit Pincode"
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
            />
          </div>
          <button
            type="submit"
            disabled={isCheckingPincode}
            className="h-11 px-space-md bg-primary text-on-primary font-label-bold text-label-bold rounded-lg hover:bg-primary-container transition-colors shrink-0 shadow-sm disabled:opacity-50"
          >
            {isCheckingPincode ? 'Checking...' : 'Check'}
          </button>
        </form>

        {pincodeStatus.checked && pincodeStatus.available && (
          <div className="pt-space-2xs flex flex-col space-y-1">
            <div className="flex items-center gap-space-xs text-on-surface font-body-medium text-body-medium">
              <span className="material-symbols-outlined text-[#388E3C] text-[18px]">local_shipping</span>
              <span>
                Delivering to <strong>{pincode} ({pincodeStatus.city})</strong> by{' '}
                <strong>{pincodeStatus.date}</strong>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-caption text-caption pl-space-md">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#388E3C]">check</span>{' '}
                Free Insured Transit
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#388E3C]">check</span>{' '}
                7-Day At-Home Inspection &amp; Returns
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#388E3C]">check</span>{' '}
                Cash on Delivery Available
              </span>
            </div>
          </div>
        )}

        {pincodeStatus.checked && !pincodeStatus.available && (
          <p className="text-error text-caption font-semibold pt-1">
            Please enter a valid 6-digit postal code to check delivery time.
          </p>
        )}
      </div>

      {/* Conversion CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
        <button
          onClick={handleCartClick}
          id="cart-cta"
          className={`w-full sm:w-1/2 py-3.5 px-6 rounded-lg font-body-bold text-body-bold active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs shadow-sm ${
            cartState === 'added'
              ? 'bg-[#388E3C] text-white'
              : 'bg-[#FF9F00] text-[#191B23] hover:brightness-105'
          }`}
        >
          {cartState === 'added' ? (
            <>
              <span className="material-symbols-outlined text-[20px]">check</span>
              <span>ADDED TO BAG</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span>ADD TO CART</span>
            </>
          )}
        </button>
        <button
          onClick={handleBuyClick}
          id="buy-cta"
          className="w-full sm:w-1/2 py-3.5 px-8 rounded-lg bg-secondary-container text-on-secondary font-body-bold text-body-bold hover:bg-[#e55513] active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs shadow-md"
        >
          <span className="material-symbols-outlined text-[20px]">bolt</span>
          <span>BUY NOW</span>
        </button>
      </div>

      {/* Trust Badges & Verified Merchant Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs">
        <div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">lock</span>
          <span className="font-caption text-caption text-on-surface font-semibold">
            256-Bit SSL Checkout
          </span>
        </div>
        <div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
          <span className="font-caption text-caption text-on-surface font-semibold">
            100% Certified Original
          </span>
        </div>
        <div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
          <span className="font-caption text-caption text-on-surface font-semibold">
            2-Year Studio Warranty
          </span>
        </div>
        <div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">published_with_changes</span>
          <span className="font-caption text-caption text-on-surface font-semibold">
            7-Day Free Returns
          </span>
        </div>
      </div>

      {/* Merchant / Guild Fulfillment Credential */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-space-xs bg-surface-container-lowest rounded-lg shadow-sm font-caption text-caption text-on-surface-variant border border-surface-container/50">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
          <span>
            Sold &amp; Fulfilled by <strong className="text-on-surface">AMIHIVE Studio Horology</strong>
          </span>
          <span className="bg-[#E8F5E9] text-[#388E3C] px-1.5 py-0.5 rounded font-bold">4.9 ★</span>
        </div>
        <a href="#reviews-section" className="text-primary hover:underline font-semibold text-right">
          1,420 Merchant Reviews
        </a>
      </div>

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSizeGuideOpen(false)}
        >
          <div
            className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <h3 className="font-headline-3 text-on-surface">Watch Case Size Guide</h3>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>
            <p className="text-body-regular text-on-surface-variant">
              Choosing the right case diameter ensures comfort and proportionate presence on your wrist:
            </p>
            <div className="space-y-3">
              {CASE_SIZES.map((s) => (
                <div key={s.size} className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
                  <div className="flex justify-between items-center">
                    <span className="font-body-bold text-on-surface">{s.size} — {s.label}</span>
                    <span className="font-caption text-primary font-semibold">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 text-center">
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="px-6 py-2 bg-primary text-on-primary font-label-bold rounded-lg"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
