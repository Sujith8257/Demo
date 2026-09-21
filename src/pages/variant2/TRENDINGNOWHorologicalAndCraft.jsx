import { motion } from "framer-motion";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

// Cascade: alternating left/right slide-in per card
const cardVariant = (i) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function TRENDINGNOWHorologicalAndCraft() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4"}>
          <div>
            <div className={"flex items-center gap-2 mb-1"}>
              <span className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}></span>
              <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-widest"}>
                Atelier Pulse
              </span>
            </div>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              Trending Now
            </h2>
            <p className={"font-body-md text-body-md text-on-surface-variant"}>
              Highly requested timepieces and batch-release artisan creations.
            </p>
          </div>
          <a className={"text-primary hover:text-primary-container font-label-md text-label-md flex items-center gap-1"} href={"#"}>
            Explore trending catalogue
            <span className={"material-symbols-outlined text-[16px]"}>
              arrow_forward
            </span>
          </a>
        </div>
        <motion.div
          className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Product 1: Aster No. 04 Automatic */}
          <motion.div variants={cardVariant(0)} className={"group bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#388E3C] text-white font-label-caps text-[10px] uppercase font-bold tracking-wider"}>
                  Save 13%
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    favorite_border
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Aster No.04 automatic watch dial close-up with sunburst midnight dial, date complication at 3 o'clock, polished indices, and brushed steel case."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDxrSwHMR7s6BZI5BrUJjN4qfn_AOZRY74Lbjpkt8I7EIz7ChGV-9W-OE1-b5ausuVZtQks10qHZ7ICE3wbxE90Pi6Tw4IK_8f16h6cWGfwbuIGhfoMjR3nFkfvAybL_EDidacyEFA3PkDqQLoe1D5dVnHQqwQLVHxFpim4TL4EPqBElX8gokMGBb4z78kaJEBIA0YVJKWlEPxQfYIJ7o8rk8MvlHpWH4pJ85Me8PfeDux8v8LdDBK-"} />
                {/* Quick Actions Overlay */}
                <div className={"absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"}>
                  <button className={"flex-1 py-2 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-caps text-[11px] uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm"}>
                    Quick View
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star_half
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (42)
                </span>
              </div>
              <span className={"font-label-caps text-label-caps text-primary uppercase"}>
                Horology Series
              </span>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors"}>
                Aster No. 04 Automatic
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-2"}>
                Double-domed sapphire, Miyota 9015
              </p>
            </div>
            <div className={"pt-space-xs"}>
              <div className={"flex items-baseline gap-2 mb-space-sm"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹18,990
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹21,900
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Add to Cart
              </button>
            </div>
          </motion.div>
          {/* Product 2: Tan Artisan Leather Folio */}
          <motion.div variants={cardVariant(1)} className={"group bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-primary text-on-primary font-label-caps text-[10px] uppercase font-bold tracking-wider"}>
                  Full Grain
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    favorite_border
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Artisanal hand-stitched tan leather document folio case with brass buckle clasp resting next to a metallic brass drafting pen."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDKHKJaIU_NMbcaQR8hF9YaoKVatvEG8E9VxBSMVptIgVxoHWxqGh8VONEWnA63s2shGQRYtdGYmWOeh9n58vvY609PVxdu4VIwu_FeeOews76cUzzSIQVGb3heTqZ1xgWQOgQjJHbrMS3GUKs_TBOPYo0qd0351nAQ0lC3DtfndfR51yfGPfsWVpZNuxbIlhN2HzvdeB-qxlM4MgB0MNmn2riGQaUJAFiahV6TlARBk6bdqHp5U8Ww"} />
                <div className={"absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"}>
                  <button className={"flex-1 py-2 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-caps text-[11px] uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm"}>
                    Quick View
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (19)
                </span>
              </div>
              <span className={"font-label-caps text-label-caps text-tertiary uppercase"}>
                Kanpur Guild
              </span>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors"}>
                Artisan Leather Document Folio
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-2"}>
                Vegetable-tanned with waxed edges
              </p>
            </div>
            <div className={"pt-space-xs"}>
              <div className={"flex items-baseline gap-2 mb-space-sm"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹6,450
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹7,200
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Add to Cart
              </button>
            </div>
          </motion.div>
          {/* Product 3: Studio Stoneware Vessel */}
          <motion.div variants={cardVariant(2)} className={"group bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-caps text-[10px] uppercase font-bold tracking-wider"}>
                  1 of 25 Made
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    favorite_border
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Wood-fired artisanal ceramic ribbed vessel in warm sandstone tones with crackle glaze accents placed against muted grey linen."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDjvFCkoJroCPSDjpV5poE259CiI6fMCPTqChk-F7W6DfzI-1DCeeMZ6LW9hKa8SOGvk6poIPiP2X-jU1yNyjtPSyJrWJ1FJQwPTs3h8Lgs2h-6qb-xi1UVlTQEvOE_Y9Ov3JvAtfZePUxaenXglFRTYobT0V6WkciQM0-0cCkf0JrU6dgDCx4YWTP_xY2-tiP4TMnst9ObjKxz25RXaa_NXRFfNbFxMSvB5STPzZssQvdSubZcdwO4"} />
                <div className={"absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"}>
                  <button className={"flex-1 py-2 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-caps text-[11px] uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm"}>
                    Quick View
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px] text-outline-variant"}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (8)
                </span>
              </div>
              <span className={"font-label-caps text-label-caps text-tertiary uppercase"}>
                Auroville Ceramic
              </span>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors"}>
                Ribbed Stoneware Amphora
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-2"}>
                Wood-fired terracotta & ash glaze
              </p>
            </div>
            <div className={"pt-space-xs"}>
              <div className={"flex items-baseline gap-2 mb-space-sm"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹4,890
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Add to Cart
              </button>
            </div>
          </motion.div>
          {/* Product 4: Chrono Brass Desk Dial */}
          <motion.div variants={cardVariant(3)} className={"group bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#388E3C] text-white font-label-caps text-[10px] uppercase font-bold tracking-wider"}>
                  Special Value
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    favorite_border
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Solid turned heavy brass desk clock with silent sweep quartz movement, white enamel dial and blued Breguet hands on oak desk."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCRH9gNw80yrNBA-tnCQR_WPl00W1XaKhNz-xuMNAdqpHbwh2xarT8z32i4qqtBrtad-vP5CM3Mhhy4kurBOQKh6mD7-3qzjIjHEboUVUPPMEmpejJ5FlwosgT87NN9jdX18TCi_E7CR850szXNa_PouLVsu3YU8j9h_ZjVXAt4yha2g-ffYBS-upQRZ4ENPfsyVn1Vi-HrIejN7uA7WfhsQAwPtecOaY4FP0IQS8M3BPUwwQodUxTf"} />
                <div className={"absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"}>
                  <button className={"flex-1 py-2 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-caps text-[11px] uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm"}>
                    Quick View
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (31)
                </span>
              </div>
              <span className={"font-label-caps text-label-caps text-primary uppercase"}>
                Instrument Series
              </span>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors"}>
                Monument Brass Desk Clock
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-2"}>
                Single-billet milled raw brass
              </p>
            </div>
            <div className={"pt-space-xs"}>
              <div className={"flex items-baseline gap-2 mb-space-sm"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹8,900
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹10,500
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Add to Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
</>
  );
}
