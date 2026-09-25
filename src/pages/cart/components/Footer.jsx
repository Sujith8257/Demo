export default function Footer(){
  return (
    <>
    <footer className="w-full bg-primary-container text-on-primary-container py-space-xl">
      <div className="max-w-7xl mx-auto px-space-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-6 h-6 rounded-DEFAULT bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                {"timelapse"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-primary font-bold">
              {"AMIHIVE CHRONO"}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary-container max-w-xs">
            {"The premier global marketplace engineered for rare timepieces, certified mechanical movements, and museum-grade masterworks."}
          </p>
          <div className="flex items-center gap-space-xs text-secondary-fixed">
            <span className="material-symbols-outlined text-[16px]">
              {"verified"}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
              {"256-BIT ESCROW ENCRYPTION"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-sm">
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-semibold mb-space-xs">
            {"CURATED HOROLOGY"}
          </h4>
          <nav className="flex flex-col gap-space-xs">
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="luxury" href="#">
              {"Grand Complications"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="automatic" href="#">
              {"Chronometer Certified"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="limited-editions" href="#">
              {"Provenance Archive"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="new-arrivals" href="#">
              {"Geneva Salon Additions"}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-space-sm">
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-semibold mb-space-xs">
            {"CUSTOMER CARE"}
          </h4>
          <nav className="flex flex-col gap-space-xs">
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="atelier-authentication" href="#">
              {"Atelier Verification Protocol"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="vault-storage" href="#">
              {"Secured Vaulting & Transit"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="concierge" href="#">
              {"Private Horologist Concierge"}
            </a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="service-warranty" href="#">
              {"International 2-Year Warranty"}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-space-md">
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-semibold">
            {"ATELIER DISPATCH"}
          </h4>
          <p className="font-body-sm text-body-sm text-on-primary-container">
            {"Receive private allotment invitations and horological market intelligence."}
          </p>
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center bg-primary rounded-lg p-space-xs">
              <input className="w-full bg-transparent px-space-sm py-space-xs text-on-primary placeholder:text-on-primary-container font-body-sm text-body-sm focus:outline-none" placeholder="Enter your atelier email..." type="email" />
              <button className="bg-secondary text-on-secondary px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md hover:bg-secondary-fixed transition-colors flex items-center justify-center" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"arrow_forward"}
                </span>
              </button>
            </div>
            <span className="font-label-sm text-label-sm text-on-primary-container/80">
              {"Bespoke updates only. Never unsolicited promotions."}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-space-lg pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary-container">
        <div className="flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-wider">
          {"© 2025 AMIHIVE INTERNATIONAL ATELIER S.A. ALL RIGHTS RESERVED."}
        </div>
        <div className="flex items-center gap-space-lg">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-primary cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">
              {"language"}
            </span>
            <span>
              {"USD ($) • ENGLISH"}
            </span>
          </div>
          <div className="flex items-center gap-space-sm font-label-sm text-label-sm tracking-wider uppercase">
            <a className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="#">
              {"Privacy"}
            </a>
            <span>
              {"•"}
            </span>
            <a className="hover:text-on-primary transition-colors" data-path="terms-of-sale" href="#">
              {"Terms"}
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
