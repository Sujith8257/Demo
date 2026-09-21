export default function TRENDINGSEARCHINTENTSCROLLERContinuous() {
  return (
<>
    <section className={"relative w-full overflow-hidden bg-surface-container-low py-6 shadow-inner"}>
      <div className={"mx-auto max-w-[1760px] px-margin"}>
        <div className={"flex flex-col gap-4 md:flex-row md:items-center md:justify-between"}>
          <div className={"flex items-center gap-2 text-on-surface-variant"}>
            <span className={"material-symbols-outlined text-secondary-container text-[20px]"}>
              trending_up
            </span>
            <span className={"font-label-caps text-label-caps uppercase tracking-wider text-on-surface"}>
              Trending Atelier Searches
            </span>
          </div>
          {/* Curving Ribbon Chips */}
          <div className={"flex items-center gap-2.5 overflow-x-auto pb-2 md:pb-0"}>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                schedule
              </span>
              Automatic Watches
              <span className={"font-label-caps text-[10px] text-secondary-container font-bold"}>
                HOT
              </span>
            </a>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                work
              </span>
              Handmade Leather
            </a>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                cake
              </span>
              Wedding Gifts
            </a>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                potted_plant
              </span>
              Home Décor
            </a>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                stars
              </span>
              Limited Editions
            </a>
            <a className={"flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-body-sm font-label-md text-on-surface shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap"} href={"#"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                fiber_new
              </span>
              New Arrivals
            </a>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
