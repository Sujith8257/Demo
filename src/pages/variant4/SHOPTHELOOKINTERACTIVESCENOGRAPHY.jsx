export default function SHOPTHELOOKINTERACTIVESCENOGRAPHY() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1"}>
              Spatial Scenography
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
              The Curated Study
            </h2>
          </div>
          <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0"}>
            Click the precision index markers across the living study to discover and directly acquire each artisanal component.
          </p>
        </div>
        {/* Scenography Board with Interactive Hotspots */}
        <div className={"relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl bg-surface-container"}>
          <img className={"w-full h-full object-cover"} data-alt={"A curated luxury study desk scene featuring a solid walnut desk, brass desk lamp, automatic field watch resting on a tan leather desk pad, ceramic pen holder, and handbound journal"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDAQ_kq0BbwAZ9qkaD4xHcpMi7CzZFOcp8lPgjNACG9k4fF85WC7SrOKnCrUlvt-l_uH18O2b4XjF2xYLHz8nrUtevFcQ6OvK4tZlRuh9f81q1BxEab12QHK7mbswSA7Jd6_PhElxl2zFUvYHzLwm6en8iiRw3fuKcHFAVt53QZvMC3BRsWbVM8F6Tt6biCjhnQhWRaJqHk7tvTGM8JHrM-TUzceoYUF6bFezNJzRgXqiFNiigQ7cQZ"} />
          {/* Hotspot 1: Automatic Field Watch */}
          <div className={"absolute top-[52%] left-[45%] group/spot z-20"}>
            <button aria-label={"Inspect Meridian Automatic"} className={"w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                add
              </span>
            </button>
            {/* Tooltip Popover */}
            <div className={"absolute -top-28 -left-20 hidden group-hover/spot:flex flex-col bg-surface-container-lowest p-3 rounded-xl shadow-2xl w-52 pointer-events-auto z-30"}>
              <div className={"font-label-caps text-label-caps text-primary uppercase"}>
                Horology
              </div>
              <div className={"font-label-md text-label-md text-on-surface font-bold"}>
                The Meridian 38 Auto
              </div>
              <div className={"font-numeric-price text-numeric-price text-on-surface mt-1"}>
                ₹24,500
              </div>
              <button className={"mt-2 w-full py-1.5 bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase rounded"}>
                Quick Buy
              </button>
            </div>
          </div>
          {/* Hotspot 2: Leather Desk Blotter */}
          <div className={"absolute top-[68%] left-[32%] group/spot z-20"}>
            <button aria-label={"Inspect Leather Pad"} className={"w-8 h-8 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                add
              </span>
            </button>
            <div className={"absolute -top-28 -left-20 hidden group-hover/spot:flex flex-col bg-surface-container-lowest p-3 rounded-xl shadow-2xl w-52 pointer-events-auto z-30"}>
              <div className={"font-label-caps text-label-caps text-secondary uppercase"}>
                Saddlery
              </div>
              <div className={"font-label-md text-label-md text-on-surface font-bold"}>
                Raw-Edge Desk Mat
              </div>
              <div className={"font-numeric-price text-numeric-price text-on-surface mt-1"}>
                ₹4,800
              </div>
              <button className={"mt-2 w-full py-1.5 bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase rounded"}>
                Quick Buy
              </button>
            </div>
          </div>
          {/* Hotspot 3: Cast Brass Desk Lamp */}
          <div className={"absolute top-[28%] left-[78%] group/spot z-20"}>
            <button aria-label={"Inspect Brass Lamp"} className={"w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                add
              </span>
            </button>
            <div className={"absolute -top-28 -left-36 hidden group-hover/spot:flex flex-col bg-surface-container-lowest p-3 rounded-xl shadow-2xl w-52 pointer-events-auto z-30"}>
              <div className={"font-label-caps text-label-caps text-tertiary uppercase"}>
                Metalwork
              </div>
              <div className={"font-label-md text-label-md text-on-surface font-bold"}>
                Sculpted Studio Arc Lamp
              </div>
              <div className={"font-numeric-price text-numeric-price text-on-surface mt-1"}>
                ₹12,200
              </div>
              <button className={"mt-2 w-full py-1.5 bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase rounded"}>
                Quick Buy
              </button>
            </div>
          </div>
          {/* Hotspot 4: Ceramic Pen Vessel */}
          <div className={"absolute top-[42%] left-[22%] group/spot z-20"}>
            <button aria-label={"Inspect Ceramic Vessel"} className={"w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                add
              </span>
            </button>
            <div className={"absolute -top-28 left-0 hidden group-hover/spot:flex flex-col bg-surface-container-lowest p-3 rounded-xl shadow-2xl w-52 pointer-events-auto z-30"}>
              <div className={"font-label-caps text-label-caps text-primary uppercase"}>
                Ceramics
              </div>
              <div className={"font-label-md text-label-md text-on-surface font-bold"}>
                Oatmeal Ribbed Pen Cup
              </div>
              <div className={"font-numeric-price text-numeric-price text-on-surface mt-1"}>
                ₹1,650
              </div>
              <button className={"mt-2 w-full py-1.5 bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase rounded"}>
                Quick Buy
              </button>
            </div>
          </div>
          {/* Scenography Floating Control Pill */}
          <div className={"absolute bottom-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex items-center gap-4"}>
            <div className={"flex items-center gap-2"}>
              <span className={"w-3 h-3 rounded-full bg-secondary-container"}></span>
              <span className={"font-label-caps text-label-caps text-on-surface uppercase font-bold"}>
                4 Artifacts Tagged
              </span>
            </div>
            <button className={"bg-primary text-on-primary font-label-caps text-label-caps uppercase px-4 py-2 rounded-full hover:bg-primary-container transition-colors"}>
              Acquire Full Ensemble • ₹43,150
            </button>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
