export default function BESTSELLERSTABSCuratedFilterableCatalog() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface-container-lowest"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-4"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider"}>
              Permanent Collection
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              Atelier Bestsellers
            </h2>
          </div>
          {/* Filter Tabs */}
          <div className={"flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"}>
            <button className={"bestseller-tab px-4 py-2 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md transition-all shadow-sm"}>
              All
            </button>
            <button className={"bestseller-tab px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all"}>
              Watches
            </button>
            <button className={"bestseller-tab px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all"}>
              Handcrafts
            </button>
            <button className={"bestseller-tab px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all"}>
              Leather
            </button>
            <button className={"bestseller-tab px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all"}>
              Home
            </button>
          </div>
        </div>
        {/* Bestseller Product Grid */}
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"} id={"bestseller-grid"}>
          {/* Card 1 */}
          <div className={"product-item bg-surface rounded-xl p-space-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"} data-cat={"watches"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-primary text-on-primary font-label-caps text-[10px] uppercase font-bold"}>
                  Atelier No. 01
                </span>
                <img className={"w-full h-full object-cover"} data-alt={"Field mechanical watch with matte olive drab dial, cream indices, vintage syringe hands, and brushed case with olive canvas strap."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAznHo7AQFU2VFNxzMCxsemSVrtIjn3rKE75wuMDgzNz8OW8e_jxn05yPnlRb-Je9yy-ZAGMG00HkWvkAeE0Y7FFkHPmADL_XXJ7rEiNOvCeUOvy5-HhM_Bbfnm_n6pl3j0bWTbpQa3k4TRTcqZnA8mmUe-_WIKPtreTesPLbSUzJSa9tE9EioC95Tbd6lkmwif_IDyQcOtQBJwE_tlynLSm3ig-aaQtfkQ1JRSZ9JMcPoVYPIba3xD"} />
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (58)
                </span>
              </div>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface"}>
                Vanguard Field 38mm
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant mb-2"}>
                Mechanical Hand-Wound
              </p>
            </div>
            <div>
              <div className={"flex items-baseline gap-2 mb-2"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹14,500
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase transition-colors"}>
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className={"product-item bg-surface rounded-xl p-space-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"} data-cat={"leather"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-caps text-[10px] uppercase font-bold"}>
                  Hand-Sewn
                </span>
                <img className={"w-full h-full object-cover"} data-alt={"Triple watch travel roll in deep navy harness leather with suede soft interior pillows and brass closure peg."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC9Dann1AKcUGLTXWzRe2IakDe6jzH7zIsck3VN3hBjjJaFYNdcz-mwVl7Hp2R1oqa3bw703A50TlvUa3nxnr_wSfnlzjx6Vq_K1d1IaFHsSsFAqyGwLXw0R5j5_uzgp7KJe8zYjtCQTv0De_uTDvFBQUw38UVqZPIYXtnVfO1etaLCK2oORWT0BJltZC9rkZw586zO84vnID7v9AuABzAsKUYg1JE68wCwpdO8_nRoaGmaI4ZA1wB4"} />
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (27)
                </span>
              </div>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface"}>
                Triple Watch Travel Roll
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant mb-2"}>
                Deep Navy Saddle Leather
              </p>
            </div>
            <div>
              <div className={"flex items-baseline gap-2 mb-2"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹5,200
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase transition-colors"}>
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className={"product-item bg-surface rounded-xl p-space-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"} data-cat={"handcrafts"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-[#388E3C] text-white font-label-caps text-[10px] uppercase font-bold"}>
                  Save 10%
                </span>
                <img className={"w-full h-full object-cover"} data-alt={"Channapatna handcrafted lacquered wooden chess set in natural ivory and burnt mahogany timber with sculptural turned pieces."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBHpA3ZlqkAC-C48uKJRkaRHeTbdJ6pCHR2uOEdKHi-ujcO_Vu19J9bTYLd3SzQ-V6kTShR0gE4sGu1lGerEKUDNTELg1lVRyj6Kufc9pDOlvxS87VFPxfh66XDbSJCPqSVOtosKH_QUKUlVSjnNb15Goua78oBmmrjv5Qps2oSoXFfTBYmgh8nXUI4YKhXUunSqgYa7x5n9omSQdDxNxVq08sTWCtC-_A7TXPWVp7kreJX9sMOqt54"} />
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (14)
                </span>
              </div>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface"}>
                Channapatna Grand Chess
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant mb-2"}>
                Natural Lacquer & Teak
              </p>
            </div>
            <div>
              <div className={"flex items-baseline gap-2 mb-2"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹7,650
                </span>
                <span className={"font-body-sm text-body-sm text-outline line-through"}>
                  ₹8,500
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase transition-colors"}>
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className={"product-item bg-surface rounded-xl p-space-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"} data-cat={"home"}>
            <div>
              <div className={"relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-sm"}>
                <span className={"absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-primary text-on-primary font-label-caps text-[10px] uppercase font-bold"}>
                  Limited Run
                </span>
                <img className={"w-full h-full object-cover"} data-alt={"Hand-forged brass water carafe with matching tumbler sitting beside architectural books on a brutalist concrete console."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAQac4nABhUv8aLXBXz7ZbCcW0_i-onGusAOYd_Ukrs2at6_o2ocjvdjTnrYh5Boxh58DzUkfBxdXLt6VABYBdCf_gFnSatcRDORoXJ0JXqGV603ch8_I5I19vDXdZFK4I0Ngv7lsY0kLSaf62jvG69FKenC5TC2yzRyvQFZF3gUSIWnmci0EdMBkZEXRfUKYyNuKJcK9jTpy9kEzS9Ea0kSz8WiuPhMqzUlTkyU-i0KPUDTCMvhxGR"} />
              </div>
              <div className={"flex items-center gap-1 mb-1"}>
                <div className={"flex text-[#FF9F00]"}>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[14px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star_half
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-outline-variant"}>
                  (22)
                </span>
              </div>
              <h3 className={"font-title-editorial text-title-editorial text-on-surface"}>
                Forged Brass Carafe & Cup
              </h3>
              <p className={"font-body-sm text-body-sm text-on-surface-variant mb-2"}>
                Spun Brass with Food-Safe Tin
              </p>
            </div>
            <div>
              <div className={"flex items-baseline gap-2 mb-2"}>
                <span className={"font-numeric-price text-numeric-price text-on-surface font-bold"}>
                  ₹3,950
                </span>
              </div>
              <button className={"w-full py-2.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase transition-colors"}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
