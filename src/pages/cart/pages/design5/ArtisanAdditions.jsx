import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function ArtisanAdditions(){
  return (
    <>
      <div className="flex flex-col gap-space-lg pt-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-xs">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              {"BESPOKE ADDITIONS"}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
              {"Complete the Gift — Artisan Horology Complements"}
            </h2>
          </div>
          <a className="font-label-md text-label-md text-secondary font-bold hover:text-primary transition-colors flex items-center gap-1" data-path="accessories" href="#">
            <span>
              {"View Atelier Archive"}
            </span>
            <span className="material-symbols-outlined text-[16px]">
              {"north_east"}
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 bg-surface-container-low overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monogrammed cognac Tuscan leather watch roll with soft suede lining holding three mechanical watches, hand-stitched details, luxury warm lighting on wooden vanity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8aI5W52gog0BZMZNaZBj5bkLZSrzFF0iQJTkFhRgzszGQVf1AwQmzHJyeuXqE76UQ-_JXhZUO94E7Oduzvf00XttL2vZ1ps8C5j1fk3Q-ja8pB6IoblALDhRup7lt0jVj-JiCnwOFWmk0v1Bc-mHJ4eC8UUGJRGHxL-r6vm3ESaTJeCdXG2n9Lpm77lz3r0pS4TmndquHC-7-3-l9joWlAFRMeP2A0CVXBu_quN3_T9q2HePdXQv3" />
              <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-DEFAULT">
                {"Tuscan Leather"}
              </span>
            </div>
            <div className="p-space-md flex flex-col justify-between flex-1 gap-space-md">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"Monogrammed Leather Watch Roll"}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {"Holds 3 timepieces with removable cushions in supple cognac saddle leather."}
                </p>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹5,490"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Incl. Foil Embossing"}
                  </span>
                </div>
                <button className="bg-surface-container hover:bg-secondary-fixed/50 text-primary px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md font-bold transition-colors flex items-center gap-1" data-accessory-name="Monogrammed Leather Watch Roll" data-accessory-price="5490" data-cart-action="accessory" type="button">
                  <span>
                    {"+ Add"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 bg-surface-container-low overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Solid brushed brass valet tray with forest green felt inlay holding luxury watch tools and a mechanical chronograph watch, quiet understated elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFrhZX3WfAEURk7fS-fx0yK39hk1PspdvZu_FVxYCr5EZeGhvwvMPKuEFajPibvoGcoJciJO5ehrUwcZtq-XlFwEJ8v7jUUjF8aQNetrw0sIBdN26EEikqcJv8eDTxgR8jmVtV-OsJdQcS-aFhKMe6JanmXEM22tvHn-JasEp1rx7IZm__PP8WEpwjE4qvMVqt7f5JfI-ROW7YQCeg0itxK0mzzfINsOUgo6teeMQ04YchrQUs2v16" />
              <span className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-DEFAULT">
                {"Solid Brass"}
              </span>
            </div>
            <div className="p-space-md flex flex-col justify-between flex-1 gap-space-md">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"Equinox Solid Brass Valet Tray"}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {"Milled from 3kg naval brass billet with British racing green wool-felt base."}
                </p>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹3,850"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Laser Hallmarked"}
                  </span>
                </div>
                <button className="bg-surface-container hover:bg-secondary-fixed/50 text-primary px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md font-bold transition-colors flex items-center gap-1" data-accessory-name="Equinox Solid Brass Valet Tray" data-accessory-price="3850" data-cart-action="accessory" type="button">
                  <span>
                    {"+ Add"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 bg-surface-container-low overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bespoke watch care cleaning kit with beeswax leather balm, micro-fiber polishing cloths with gold logo, and anti-magnetic tweezers inside an amber glass jar presentation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe7T-QFIgCJVcaHCR-Y6J5yKgjvE0-ofsAdZnZKzzlSzFIfGow5etXRAg_7-UpJSD4aOdw2BE-LS4qDpcNOCt8y1fRMfoY_tpTz-OSQ3ZSf3ln62AxaEHQRuMAbHFA0_5phMFq5zgjsj3QEw21HxxDR7pESqXWariswUurDXpMq2EjYg1y4mxdouB6zcfiA31JpE3AqvUe-p9Bq11PvDf15w1jmokziXIrR4rkdSQ-P1izq6ZmusYG" />
              <span className="absolute top-3 left-3 bg-surface-container-highest text-on-surface font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-DEFAULT">
                {"Atelier Care"}
              </span>
            </div>
            <div className="p-space-md flex flex-col justify-between flex-1 gap-space-md">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"Horology Care & Balm Suite"}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {"Organic beeswax leather conditioner, micro-weave silk cloth, and synthetic loupe."}
                </p>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹1,850"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Geneva Standard"}
                  </span>
                </div>
                <button className="bg-surface-container hover:bg-secondary-fixed/50 text-primary px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md font-bold transition-colors flex items-center gap-1" data-accessory-name="Horology Care & Balm Suite" data-accessory-price="1850" data-cart-action="accessory" type="button">
                  <span>
                    {"+ Add"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
