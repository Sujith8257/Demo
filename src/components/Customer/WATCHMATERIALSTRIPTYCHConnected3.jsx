export default function WATCHMATERIALSTRIPTYCHConnected3({
  className = "",
  containerClassName = "max-w-[1760px] mx-auto px-margin",
  bgClass = "bg-surface-container-low",
  kickerClass = "text-primary",
  cardBgClass = "bg-surface-container-lowest shadow-sm",
  fieldTagClass = "bg-surface-container-lowest/90 text-on-surface",
  borderClass = "border-surface-container",
}) {
  return (
    <section className={`w-full py-space-xl ${bgClass} ${className}`} id="specification-triptych">
      <div className={containerClassName}>
        <div className={"text-center max-w-xl mx-auto mb-space-lg"}>
          <span className={`font-label-caps text-label-caps ${kickerClass} uppercase tracking-widest block mb-1 font-bold`}>
            Horological Anatomy
          </span>
          <h2 className={"font-headline-lg text-headline-lg text-on-surface mb-space-xs font-bold"}>
            Tolerances Without Compromise
          </h2>
          <p className={"font-body-md text-body-md text-on-surface-variant"}>
            Every component sourced from verified artisanal ateliers, calibrated to resist the rigours of everyday heirloom ownership.
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
          {/* Field 1: Movement */}
          <div className={`${cardBgClass} rounded-xl overflow-hidden flex flex-col`}>
            <div className={"w-full h-64 overflow-hidden relative"}>
              <img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-500"} data-alt={"Ultra-macro photograph inside a luxury mechanical watch movement showing intricate escapement wheel, balance spring oscillating, blued screws, and ruby bearings."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDAIV59piWpypkIZvvIp5jExrh7keUUte3Zl1gqIkwegbi8nGx3oTgVPe5rzxWNXrCxKQWWtonQyxVj7vDgQRKZncmLrILKmch_yKbOzwQkHxv-GtE5CC3Its6aDB0vMtgc7pKPVkPRcJhkqQhfyR0dc6DxMxBxXU-S7Geyc_ytWVUOAkhoAidVaHCiaucTpT8LKQx5yt_yvOPYiritXf6dbfgpAT7-OH_e7DP5knnRhMIZuxhM8e_9"} />
              <div className={`absolute bottom-3 left-3 ${fieldTagClass} px-3 py-1 rounded font-label-caps text-label-caps font-bold shadow-xs`}>
                FIELD 01: ENGINE
              </div>
            </div>
            <div className={"p-space-md flex-1 flex flex-col justify-between"}>
              <div>
                <h3 className={"font-headline-sm text-headline-sm text-on-surface mb-2"}>
                  Self-Winding Mechanical Calibres
                </h3>
                <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                  Custom tungsten rotors ensure rapid kinetic transfer. Regulated in five physical positions for impeccable chronometric consistency.
                </p>
              </div>
              <div className={`pt-space-sm border-t ${borderClass} flex items-center justify-between text-outline font-label-caps text-label-caps uppercase`}>
                <span>
                  Reserve: 42h
                </span>
                <span>
                  Rate: 4 Hz / 28.8k
                </span>
              </div>
            </div>
          </div>
          {/* Field 2: Sapphire */}
          <div className={`${cardBgClass} rounded-xl overflow-hidden flex flex-col`}>
            <div className={"w-full h-64 overflow-hidden relative"}>
              <img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-500"} data-alt={"Extreme macro shot of double-domed sapphire crystal glass showing anti-reflective violet tint reflection on a polished watch bezel."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCwYWsF2ajadSYFzshGAdY4CBe_OXpgNCrQkbegqYcvxKmn3M8LGj5l_HPzD_sB8Bgg0hLpxrqI7lmv_gXEPeH6KWSR1pjJuUgTINdvnIXvVrewfnFAKUQBlQKQ1VI8u0AF2eCEbIqAJX9nSOn_PU6-ymvxzkcO2NrhLSUXe8HF3VXT9pg4g_yyHRAjoogOm8qv71a-_Cy_-LBn8vNh8a4TJyGoWmZqZAwC9H-__dBO2pT0kH8JrXtc"} />
              <div className={`absolute bottom-3 left-3 ${fieldTagClass} px-3 py-1 rounded font-label-caps text-label-caps font-bold shadow-xs`}>
                FIELD 02: CLARITY
              </div>
            </div>
            <div className={"p-space-md flex-1 flex flex-col justify-between"}>
              <div>
                <h3 className={"font-headline-sm text-headline-sm text-on-surface mb-2 font-bold"}>
                  Double-Domed Sapphire Crystal
                </h3>
                <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                  Diamond-cut Corundum with a 9 Mohs hardness rating. Dual internal anti-reflective coating delivers zero glare across bright sunlight.
                </p>
              </div>
              <div className={`pt-space-sm border-t ${borderClass} flex items-center justify-between text-outline font-label-caps text-label-caps uppercase`}>
                <span>
                  Hardness: 9 Mohs
                </span>
                <span>
                  Coating: 5-Layer AR
                </span>
              </div>
            </div>
          </div>
          {/* Field 3: Leather */}
          <div className={`${cardBgClass} rounded-xl overflow-hidden flex flex-col`}>
            <div className={"w-full h-64 overflow-hidden relative"}>
              <img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-500"} data-alt={"Artisan saddler inspecting full grain vegetable-tanned bridle leather strap with waxed edges."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDFhXF3Nlq56E7t5fR4_g9Kk8Xk6P4eF3Q2hGg_J1j9mN3L5q6s7w8Y9z0A1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0"} />
              <div className={`absolute bottom-3 left-3 ${fieldTagClass} px-3 py-1 rounded font-label-caps text-label-caps font-bold shadow-xs`}>
                FIELD 03: TACTILITY
              </div>
            </div>
            <div className={"p-space-md flex-1 flex flex-col justify-between"}>
              <div>
                <h3 className={"font-headline-sm text-headline-sm text-on-surface mb-2 font-bold"}>
                  Saddlery Bridle Hides
                </h3>
                <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                  Pit-tanned with mimosa bark over 60 days. Hand-stitched with waxed French linen threads and burnished with natural beeswax.
                </p>
              </div>
              <div className={`pt-space-sm border-t ${borderClass} flex items-center justify-between text-outline font-label-caps text-label-caps uppercase`}>
                <span>
                  Origin: Nilgiris
                </span>
                <span>
                  Thickness: 3.2 mm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
