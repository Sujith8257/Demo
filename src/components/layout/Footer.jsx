export default function Footer() {
  return (
<>
    <footer className={"w-full bg-[#172337] text-[#FAF8FF] mt-space-xl"}>
      <div className={"max-w-[1760px] mx-auto px-margin pt-space-xl pb-space-lg"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg pb-space-lg"}>
          <div className={"lg:col-span-1"}>
            <div className={"flex items-center gap-2 mb-space-sm"}>
              <div className={"w-3 h-3 rounded-full bg-inverse-primary relative flex items-center justify-center"}>
                <div className={"w-1 h-1 rounded-full bg-[#172337]"}></div>
              </div>
              <span className={"font-headline-sm text-headline-sm font-extrabold tracking-tight uppercase text-white"}>
                AMIHIVE
              </span>
            </div>
            <p className={"font-body-sm text-body-sm text-slate-300 leading-relaxed mb-space-md"}>
              An artisanal emporium curated with horological precision. Celebrating heritage craft, master leatherwork, and bespoke creations from verified studios across India.
            </p>
            <div className={"flex items-center gap-space-xs"}>
              <span className={"material-symbols-outlined text-[20px] text-slate-400"}>
                verified_user
              </span>
              <span className={"font-label-caps text-label-caps text-slate-300"}>
                100% Provenance Guaranteed
              </span>
            </div>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Shop Curations
            </h3>
            <ul className={"space-y-2 font-body-sm text-body-sm text-slate-300"}>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Mechanical Timepieces
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Handmade Ceramics
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Full-Grain Leather goods
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Architectural Objects
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Limited Production Runs
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Heirloom Keepsakes
              </li>
            </ul>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Discover Atelier
            </h3>
            <ul className={"space-y-2 font-body-sm text-body-sm text-slate-300"}>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Artisan Profiles
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Master Workshop Coordinates
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Craftsmanship Stories
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Materials & Provenance
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Commission Bespoke
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Sustainability Report
              </li>
            </ul>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Customer Care
            </h3>
            <ul className={"space-y-2 font-body-sm text-body-sm text-slate-300"}>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Order Tracking
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Shipping & Logistics
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                7-Day Return Policy
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Warranty & Service Centers
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Concierge Support
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Authenticity Certificate FAQ
              </li>
            </ul>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Integrity & Gazette
            </h3>
            <p className={"font-body-sm text-body-sm text-slate-300 mb-space-sm leading-relaxed"}>
              Receive private invitations to private ateliers and rare limited allocations.
            </p>
            <div className={"flex flex-col gap-2 mb-space-md"}>
              <input className={"h-10 px-3 rounded-lg bg-slate-800 text-white font-body-sm text-body-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-inverse-primary"} placeholder={"Enter your atelier email"} type={"email"} />
              <button className={"h-10 px-4 rounded-lg bg-secondary-container hover:bg-secondary text-white font-label-caps text-label-caps uppercase transition-colors"}>
                Subscribe
              </button>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"font-label-caps text-label-caps text-slate-400"}>
                Currency:
              </span>
              <div className={"flex items-center gap-1 bg-slate-800 px-3 py-1 rounded font-body-sm text-body-sm text-white"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  currency_rupee
                </span>
                <span>
                  INR (₹)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={"pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-slate-400"}>
          <div className={"flex flex-wrap items-center gap-space-md"}>
            <span>
              © 2025 AMIHIVE Luxury Craft Pvt Ltd. All rights reserved.
            </span>
            <a className={"hover:text-white transition-colors"} href={"#"}>
              Terms of Service
            </a>
            <a className={"hover:text-white transition-colors"} href={"#"}>
              Privacy Policy
            </a>
            <a className={"hover:text-white transition-colors"} href={"#"}>
              Artisan Standard Compliance
            </a>
          </div>
          <div className={"flex items-center gap-space-sm"}>
            <span className={"material-symbols-outlined text-[20px] text-slate-400"}>
              lock
            </span>
            <span className={"font-label-caps text-label-caps text-slate-300"}>
              256-Bit Encrypted Checkout
            </span>
          </div>
        </div>
      </div>
    </footer>
</>
  );
}
