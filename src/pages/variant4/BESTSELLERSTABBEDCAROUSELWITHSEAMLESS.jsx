import { motion } from "framer-motion";
import { HiOutlineHeart } from "react-icons/hi2";
import { BsStarFill } from "react-icons/bs";

// Flip entrance: each card flips in from rotateY(12deg) with stagger
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const flipCard = {
  hidden: { opacity: 0, rotateY: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BESTSELLERSTABBEDCAROUSELWITHSEAMLESS() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-md"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1"}>
              Peer Endorsements
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
              The Atelier Bestsellers
            </h2>
          </div>
          {/* Filter Tabs */}
          <div className={"flex items-center gap-2 mt-4 md:mt-0"}>
            <button className={"bestseller-filter active px-4 py-2 rounded-full font-label-caps text-label-caps uppercase bg-primary text-on-primary"}>
              All Masterworks
            </button>
            <button className={"bestseller-filter px-4 py-2 rounded-full font-label-caps text-label-caps uppercase bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}>
              Timepieces
            </button>
            <button className={"bestseller-filter px-4 py-2 rounded-full font-label-caps text-label-caps uppercase bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}>
              Leathercraft
            </button>
            <button className={"bestseller-filter px-4 py-2 rounded-full font-label-caps text-label-caps uppercase bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}>
              Ceramics
            </button>
          </div>
        </div>
        {/* Scarcity Ticker Banner */}
        <div className={"bg-error-container/40 rounded-xl p-3 px-4 mb-space-lg flex items-center justify-between font-body-sm text-body-sm text-on-error-container"}>
          <div className={"flex items-center gap-2"}>
            <span className={"w-2.5 h-2.5 rounded-full bg-error animate-ping"}></span>
            <span className={"font-semibold"}>
              Batch Allocation Notice:
            </span>
            <span>
              Each edition is limited to 50 numbered copies per quarter. Current batch is 84% claimed.
            </span>
          </div>
          <span className={"hidden sm:inline-block font-label-caps text-label-caps uppercase text-error font-bold"}>
            Guaranteed Delivery Before Sunday
          </span>
        </div>
        {/* Grid of Bestsellers */}
        <motion.div
          className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"}
          style={{ perspective: 1000 }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Card 1: Watch */}
          <motion.div variants={flipCard} className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Artisan Pick
                </span>
                <span className={"absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10 text-primary font-bold"}>
                  Save 15%
                </span>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Sophisticated automatic pilot watch with black dial, luminous numerals, and tan saddle leather strap photographed on grey slate"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOUPL8smD480lhlUKuLB3z50AWs3ixCuEvV_3n94KEjjySEHpY3bl4OO6qVUNQhzQDXS5GNrY3ZMjFANFopTcrdpkRRA6XEqwGsDW_1z0aNZ9sMpJSf08POV1esHPBPx5wojJtgSR24QNlzi-LrTCT3CzqgXo4QHuYsRgozGoUiw_uyKCO7EhFjgRwsFD10Js4OPNzDGCSPYwR1aWR5SA4tXsT5W9_1R7kUimirhop5ZZVX8FapzYu"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Amihive Horology
              </div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                Vanguard Field Automatic
              </h4>
              <div className={"flex items-center gap-1.5 my-2"}>
                <div className={"flex text-tertiary"}>
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
                <span className={"font-label-caps text-label-caps text-on-surface font-bold"}>
                  4.9
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (64 reviews)
                </span>
              </div>
            </div>
            <div className={"pt-3"}>
              <div className={"flex items-baseline gap-2 mb-3"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹18,700
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹22,000
                </span>
              </div>
              <button className={"w-full bg-secondary-container hover:bg-secondary text-on-secondary py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  shopping_cart
                </span>
                Add To Cart
              </button>
            </div>
          </motion.div>
          {/* Card 2: Leather Tote */}
          <motion.div variants={flipCard} className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-secondary text-on-secondary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Best Seller
                </span>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Rich dark espresso brown full grain leather carryall tote bag resting against an antique wooden studio door"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD7E-3nLsOIaM2a0fOzrC3DARspXB_ZMwJSS1JCoZ2Q3JvA9u53dK15uUjyEKr4MWK0YYsXsIiXhAxLlCN8N_Uvyh9TIb1coFwGHfx-iMMZWD8bKN5TYuEJAovtUb7Iqkxite0XMI4UV-YeZqNA987Fcd9UM5eP4YMubb3tKG5E6ZQRAp8tGCNxo2uceD1Wkkjkq3ghbzHuwm2XrJHGZE-1-62dYZFtkR7-OL-l285k2GJRtnCwItDo"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Kanpur Tannery
              </div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors"}>
                The Craftsman Tote 04
              </h4>
              <div className={"flex items-center gap-1.5 my-2"}>
                <div className={"flex text-tertiary"}>
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
                  <span className={"material-symbols-outlined text-[16px]"}>
                    star
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-surface font-bold"}>
                  4.8
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (88 reviews)
                </span>
              </div>
            </div>
            <div className={"pt-3"}>
              <div className={"flex items-baseline gap-2 mb-3"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹9,400
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  Natural Patina Finish
                </span>
              </div>
              <button className={"w-full bg-secondary-container hover:bg-secondary text-on-secondary py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  shopping_cart
                </span>
                Add To Cart
              </button>
            </div>
          </motion.div>
          {/* Card 3: Wheel-Thrown Mug Set */}
          <motion.div variants={flipCard} className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-tertiary text-on-tertiary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Set of 4
                </span>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Set of four ceramic studio coffee mugs with exposed toasted clay bases and speckled oatmeal reactive glaze, arranged on linen cloth"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD8V1o5_M7pv_EOOmEiEbDeuplsVtVw5SDNhU2kus0GHjQejuHz9xCTio3_6bzhkLpHEOpo4I94yO7oe69PUNoidngwCqboRvxUuSzVB0IRSlhJ8n77GcC6nOiHCv5OLlghWNkQ30tcpscrNecF5fd2UVFAg8aFWFqDxxXjQmua3wPX85mfgNillpZSx1MKFSYLR1EKKoncGNxYCwE-UJv4g9kN8tck-M75zKrbbl8NvOua6pcE4ka8"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Auroville Earthworks
              </div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-tertiary transition-colors"}>
                Speckled Ceramic Mug Set
              </h4>
              <div className={"flex items-center gap-1.5 my-2"}>
                <div className={"flex text-tertiary"}>
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
                <span className={"font-label-caps text-label-caps text-on-surface font-bold"}>
                  5.0
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (112 reviews)
                </span>
              </div>
            </div>
            <div className={"pt-3"}>
              <div className={"flex items-baseline gap-2 mb-3"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹3,200
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹3,800
                </span>
              </div>
              <button className={"w-full bg-secondary-container hover:bg-secondary text-on-secondary py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  shopping_cart
                </span>
                Add To Cart
              </button>
            </div>
          </motion.div>
          {/* Card 4: Dress Watch with Mesh Strap */}
          <motion.div variants={flipCard} className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Ultra-Slim 6.8mm
                </span>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Ultra-thin minimalist dress watch with a silver sunburst dial and steel Milanese mesh bracelet resting on white textured paper"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDF9Hfgkg_abk__-oNSQ1szB7ZRPKIFi2TaDvGJXhOO0V8wySG_qJxz5Gn3KyifqYXyPmMV305IuzTksgGeJ5VeIB8nfa-MRJ1NKq9g8CcmGj8EqYbelFMb-Ce2RtkUoVgEzfQFx0YiktcmzA7vWVJgZbs9Fjb8_ST3N478NIP4twmivffeSXisjvpKnED56XHsHhVd0R9xRLqU1uFZ4TMRs6e5mksaGarAH37R5ivjwRhcT94IGwf6"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Amihive Horology
              </div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                The Pavilion Ultra-Slim
              </h4>
              <div className={"flex items-center gap-1.5 my-2"}>
                <div className={"flex text-tertiary"}>
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
                  <span className={"material-symbols-outlined text-[16px]"}>
                    star_half
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-surface font-bold"}>
                  4.7
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (31 reviews)
                </span>
              </div>
            </div>
            <div className={"pt-3"}>
              <div className={"flex items-baseline gap-2 mb-3"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹14,900
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  ₹16,500
                </span>
              </div>
              <button className={"w-full bg-secondary-container hover:bg-secondary text-on-secondary py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  shopping_cart
                </span>
                Add To Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
</>
  );
}
