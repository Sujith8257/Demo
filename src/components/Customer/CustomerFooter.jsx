import { useNavigate } from "react-router-dom";

export default function CustomerFooter({ className = "", theme = "variant5", onNavigateToCatalogue }) {
  let routerNavigate;
  try {
    routerNavigate = useNavigate();
  } catch (e) {
    routerNavigate = null;
  }

  const goToCatalogue = () => {
    if (onNavigateToCatalogue) onNavigateToCatalogue();
    else if (routerNavigate) routerNavigate("/products");
    else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "chrono");
      window.location.href = url.toString();
    }
  };

  const isPetrol = theme === "variant5" || theme === "petrol";

  return (
    <footer className={`w-full ${isPetrol ? "bg-[#0D2D2C] text-[#DDE9E4]" : "bg-[#131a2c] text-[#cdd3cd]"} mt-12 sm:mt-16 border-t border-white/10 ${className}`}>
      <div className={"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg pb-space-lg"}>
          <div className={"lg:col-span-1"}>
            <div className={"flex items-center gap-2 mb-space-sm"}>
              <div className={`w-3 h-3 rounded-full ${isPetrol ? "bg-[#C7A66A]" : "bg-inverse-primary"} relative flex items-center justify-center`}>
                <div className={`w-1 h-1 rounded-full ${isPetrol ? "bg-[#0D2D2C]" : "bg-[#172337]"}`}></div>
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
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
                Mechanical Timepieces
              </li>
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
                Handmade Ceramics
              </li>
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
                Full-Grain Leather goods
              </li>
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
                Architectural Objects
              </li>
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
                Limited Production Runs
              </li>
              <li onClick={goToCatalogue} className={"hover:text-white transition-colors cursor-pointer"}>
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
                Horology Journal
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Provenance Index
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Studio Directory
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Bespoke Commissions
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Craft Exhibitions
              </li>
            </ul>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Patron Services
            </h3>
            <ul className={"space-y-2 font-body-sm text-body-sm text-slate-300"}>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Concierge Support
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Complimentary Shipping
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                7-Day Vault Return
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Certificate Verification
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Care & Maintenance
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Horological Consultation
              </li>
            </ul>
          </div>
          <div>
            <h3 className={"font-label-md text-label-md uppercase tracking-wider text-white mb-space-sm"}>
              Institutional
            </h3>
            <ul className={"space-y-2 font-body-sm text-body-sm text-slate-300"}>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                The Manifesto
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Artisan Guild Charter
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Sustainability Audit
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Press Kit
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Careers at AMIHIVE
              </li>
              <li className={"hover:text-white transition-colors cursor-pointer"}>
                Corporate Inquiries
              </li>
            </ul>
          </div>
        </div>
        <div className={"pt-space-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-body-sm text-slate-400 gap-2"}>
          <div>
            &copy; 2026 AMIHIVE Inc. All rights reserved.
          </div>
          <div className={"flex gap-4"}>
            <span className={"hover:text-white cursor-pointer transition-colors"}>Terms</span>
            <span className={"hover:text-white cursor-pointer transition-colors"}>Privacy</span>
            <span className={"hover:text-white cursor-pointer transition-colors"}>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
