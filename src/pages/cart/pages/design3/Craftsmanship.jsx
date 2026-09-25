import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function Craftsmanship(){
  return (
    <>
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                {"Haute Horlogerie Architecture"}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight mt-1">
                {"A Closer Look at Your Collection"}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {"\n          Every piece currently staged in your chamber has cleared mechanical torque validation, vacuum seal test, and chronometric tolerance calibration.\n        "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between group">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-xs">
                  <span className="material-symbols-outlined text-[24px]">
                    {"contrast"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                  {"Surface Treatment"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Dark Rhodium Finishing"}
                </h3>
                <p className="font-body-sm text-body-sm text-outline">
                  {"\n              Micro-blasted galvanic coats providing deep obsidian tonality without dampening the natural micro-chamfered light reflections of the movement plates.\n            "}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                <span>
                  {"Calibre Ast.04 Spec"}
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  {"chevron_right"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between group">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-xs">
                  <span className="material-symbols-outlined text-[24px]">
                    {"thermostat"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                  {"Thermal Metallurgy"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Flame-Blued Screws"}
                </h3>
                <p className="font-body-sm text-body-sm text-outline">
                  {"\n              Tempered at precisely 295°C to form an ultra-durable magnetite oxide stratum, providing high friction resistance across all bridge anchor points.\n            "}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                <span>
                  {"Metrology Archive"}
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  {"chevron_right"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between group">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-xs">
                  <span className="material-symbols-outlined text-[24px]">
                    {"all_inclusive"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                  {"Optical Dispersion"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Galvanic Sunburst Dials"}
                </h3>
                <p className="font-body-sm text-body-sm text-outline">
                  {"\n              Diamond-paste circular brushing that refracts light in an unbroken nocturnal arc, ensuring extreme legibility from oblique angles under low light.\n            "}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                <span>
                  {"Optical Calibration"}
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  {"chevron_right"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
