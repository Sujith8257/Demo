export default function BESTSELLERSAsymmetrical4ColumnBento() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex items-end justify-between mb-space-lg"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-1"}>
              Marketplace Provenance
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              Curated Bestsellers
            </h2>
          </div>
          <a className={"text-primary font-label-md text-label-md flex items-center gap-1 hover:underline"} href={"#"}>
            View All 68 Pieces
            <span className={"material-symbols-outlined text-[16px]"}>
              arrow_forward
            </span>
          </a>
        </div>
        {/* Asymmetrical Bento Grid: 2x2 Hero alongside four 1x1 units */}
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"}>
          {/* Premier Piece: 2x2 Bento Hero Card */}
          <div className={"lg:col-span-2 lg:row-span-2 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group"}>
            <div>
              <div className={"flex items-center justify-between mb-space-sm"}>
                <span className={"px-3 py-1 rounded bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider"}>
                  Premier Piece of the Month
                </span>
                <span className={"font-label-caps text-label-caps text-outline"}>
                  Ref. MS-780
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md text-on-surface mb-2"}>
                The Solis Sunburst Chronograph
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mb-space-sm"}>
                Equipped with a dual-register mechanical chronograph movement, solid milled brass pushers, and a perforated rally leather strap handcrafted in Jaipur.
              </p>
            </div>
            <div className={"relative w-full h-80 rounded-lg overflow-hidden bg-surface-container mb-space-md"}>
              <img className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"} data-alt={"Editorial dynamic flatlay of the Solis chronograph watch with sunburst copper dial, surrounding micro-tools, fine spring bars, and leather conditioning balm on raw slate stone."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDC7GwKbwK8SN7qz5AuaxswEVRHioQ7wMpm7nOaC2_ND-eFxs-QZfiPVCNBO99qz0eDPdgePBft5QXwhMMqN9qoG1qDmH_9LNITQnzVnsRkrTleyqGdUSPD4PW6dxUr9OE-YDMWtETdgTzLJLg0LG2TY0vaItC3qrALTu1CRmMR8jyhOZvKa-UjC8sy9k6BTD6KWeFgw-l-4dKDSB8uUmx3ZXdpBmibkkrohB0dgC2KfTu6O8_R2hxV"} />
              <div className={"absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded font-label-caps text-label-caps text-primary"}>
                ✓ Tested -2/+2s per day
              </div>
            </div>
            <div className={"flex items-center justify-between pt-space-xs"}>
              <div>
                <span className={"font-label-caps text-label-caps text-outline block uppercase"}>
                  Collector Price
                </span>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹32,500
                </span>
              </div>
              <button className={"px-6 py-3 rounded-lg bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase tracking-wider hover:opacity-95 shadow-md"}>
                Acquire Piece
              </button>
            </div>
          </div>
          {/* Bento 1x1 Card 1 */}
          <div className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between group"}>
            <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
              <img className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"} data-alt={"Minimalist sand-cast bronze desktop paperweight and incense burner created by artisan sculptors with textured raw metal surface."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBOW4II0eP4OVhcMshMjNCkWeAPdyjzZy1veD6PEEq_n4KiFwg9DsHwDtT5ZmZgQdp4sdlJa8aJ-zi2Wfjv1qsW284A_sRYECaANP3aO-Vs4l5s8rejBkky-Z_eU167j4XEU6N9J0PpeTeepgMz3OB_oMJKlLrG_gbJBnzWBlQBxzeBa6KIESZnjaRo_ij8KOBsvlzjLSDk8txDDJDUZsmJwpjZdCj6S24Op9y-fhRkOl10s_0UIG2H"} />
              <span className={"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-caps text-[10px] text-on-surface uppercase"}>
                Cast Bronze
              </span>
            </div>
            <div>
              <h4 className={"font-label-md text-label-md text-on-surface truncate mb-1"}>
                Architectural Incense Monolith
              </h4>
              <div className={"flex items-center justify-between"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹4,800
                </span>
                <button aria-label={"Add to cart"} className={"w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center hover:bg-secondary transition-colors shadow-xs"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Bento 1x1 Card 2 */}
          <div className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between group"}>
            <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
              <img className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"} data-alt={"Heirloom single malt whisky decanter and lowball glasses hand-blown in ribbed amber crystal by glassblowers."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDRfB3WD2BzCFF2D8MWMn0D6uxNwjzxgS8H7Y_TECsd6Sn8o5r1NZ49RSRGPjDcOLwmM-68NX71SKPC66E2ufih0vM8HJB_RMqL9Q8EDrecYqykQmdOaaTGICdfbqPDC_crDgbMyTSHEkIRIaHYuqrj6HyTdHA4JkFqqxfHgihYBUt2CN70v3kXIMqcC53qOyt5GqkdPN-a2B65skYeWa6x6yqrVa1hzObwiWLtX8vpwUAWBl56ePwZ"} />
              <span className={"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-caps text-[10px] text-on-surface uppercase"}>
                Mouth-blown
              </span>
            </div>
            <div>
              <h4 className={"font-label-md text-label-md text-on-surface truncate mb-1"}>
                Amber Fluted Barware Set
              </h4>
              <div className={"flex items-center justify-between"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹7,200
                </span>
                <button aria-label={"Add to cart"} className={"w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center hover:bg-secondary transition-colors shadow-xs"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Bento 1x1 Card 3 */}
          <div className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between group"}>
            <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
              <img className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"} data-alt={"Minimalist titanium key carabiner and brass capsule machined from solid bar stock resting on slate."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCoNiTpAxCUMPzd7uS1cNQT-LaZFDWaqHipgEbOAjknvdbtul-V8Q12srILliRjM-5qVwO9iREVXzMPg0jJSuMXbJmqIhcVbZJ9vLDo3j5eavetI2weskpySSZoy2Z04Q9nOtkqEbhZfiDBAQDxOijGuTeD5jOov6FP33L5Dilwfm9wiXa9tDV64tS0P0SPQthFyJNHYlsrpw6CSaDeMo4cVkF_ohLc2N5-kLDGDogmrpecz2CplK51"} />
              <span className={"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-caps text-[10px] text-on-surface uppercase"}>
                Grade 5 Ti
              </span>
            </div>
            <div>
              <h4 className={"font-label-md text-label-md text-on-surface truncate mb-1"}>
                Precision Machined Carabiner
              </h4>
              <div className={"flex items-center justify-between"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹2,900
                </span>
                <button aria-label={"Add to cart"} className={"w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center hover:bg-secondary transition-colors shadow-xs"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Bento 1x1 Card 4 */}
          <div className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between group"}>
            <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
              <img className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"} data-alt={"Handcrafted leather desktop desk blotter pad with stitched edges, fountain pen groove, and brass cable clip."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAFfI7KY1relWKuUW_T7vt4UFh26EsGca6Wm1R_fM1oQ5Z9SvWs8tCptxDyreVqJxC4ZgQT5o-59w6nihHxOuUEEuZqlYqJqM_VJL89FbV81Vg3vc_2F3Oy5FEh3NaGz4HQC9Kn5bAhabr2XBDb5DhJXn6567SLIvMxTjm0sCiHeg-W4dlEEGNxUfvZN2C7CS4QH3LpjlU89lLcAetJjDq4Ct5AmiNDWt-eYBxjczpLGXB0Xi06jWhA"} />
              <span className={"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-caps text-[10px] text-on-surface uppercase"}>
                Bridle Hide
              </span>
            </div>
            <div>
              <h4 className={"font-label-md text-label-md text-on-surface truncate mb-1"}>
                Executive Saddlery Blotter
              </h4>
              <div className={"flex items-center justify-between"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹5,400
                </span>
                <button aria-label={"Add to cart"} className={"w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center hover:bg-secondary transition-colors shadow-xs"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
