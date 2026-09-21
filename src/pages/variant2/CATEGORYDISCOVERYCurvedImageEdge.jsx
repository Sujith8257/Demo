export default function CATEGORYDISCOVERYCurvedImageEdge() {
  return (
<>
    <section className={"w-full py-space-lg bg-surface-container-lowest overflow-hidden"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex items-end justify-between mb-space-md"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider block mb-1"}>
              Architectural Departments
            </span>
            <h2 className={"font-headline-md text-headline-md text-on-surface"}>
              Curated Categories
            </h2>
          </div>
          <div className={"flex items-center gap-2"}>
            <span className={"font-body-sm text-body-sm text-outline-variant hidden sm:inline"}>
              Scroll horizontally
            </span>
            <div className={"flex gap-1"}>
              <button className={"w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  west
                </span>
              </button>
              <button className={"w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  east
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={"flex gap-space-sm overflow-x-auto pb-4 scroll-smooth no-scrollbar"} id={"category-row"}>
          {/* Category 1: Watches */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Minimalist automatic mechanical dress watch face with polished steel indices, deep blue lacquered dial, and silver hands on studio lighting."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCQCvRskwqzvOsjQRr246y9NhEwjgrOqN2Nga4_WQwVo4fdn1j4Qyyr-FpVBucPny06cNpshMlIzftCbE2r1smdpAykQ4cvt4BwFD53MQ-9j1FRHoxUQORyCWPRsyM0alG0kybH--4KELosmkZxqu2pt7Ix0rRAEKtNCzQWx4azfQ5LrqBXIohDU_PyyVN6iNWYCQb2-JF2iJm6H4RWhYfvleKrXX2VdHpK-O3WkdY6_taOXLScdP-x"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Watches
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              84 Calibres
            </p>
          </a>
          {/* Category 2: Leather */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Full-grain vegetable-tanned chestnut leather briefcase with solid brass hand-hammered hardware and saddle stitching on workbench."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD5kzag5fD39xz77lggB-_znIXxlWYLsW-l1duUWjcbBlWiNK5JE-Bq8bwg1ekqJJEnnORBCjxXX67p_sIf4U0qoEOsVLvF3KoOPVzNAFJ-Q0U6f-Sei_vsfz5aRFMKyNyvUVvO3V0XvR7dWrvx0C8OFKijJMwPCjpkOPx6LjabcoPrAnftU4mJbX6ER9hSqjq1YmCC1dY9ok-jPK7As0bxKHSohd7b5UQASz4dNas-iRSaqBrEgBpc"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Leather
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              42 Designs
            </p>
          </a>
          {/* Category 3: Handcrafts */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Handcrafted ceramic sculptural vase with raw earthenware texture and speckled glaze on neutral minimalist plinth."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC0LuVGSaaLarksibaQW526Zra_6JejV1a9QCB1AgV9CWyoL40382NndJhcn59QnBlsNjRn7AP5mcum6L3WEcXKRFpw_OyTkekZB9SaNJ5io4uudC66VjSIfDtWJqeoFvhctMKcf1SkjN20dyTazQ0gEhbYUWsLqcTuwQXYmBhq6RfJvJCjg6oBgg2RYWdz9B4SAv3pHWaOfnHNOg-ut7-u1NEiXauHZPz-N35UuPbeBI35_2hnwIiF"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Handcrafts
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              112 Studios
            </p>
          </a>
          {/* Category 4: Home */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Hand-cast sculptural brass incense burner and solid marble decorative bowl on dark teak wood tabletop."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuB7Dxd2-kCuBakL-7bYe7ppo7Z9k-wFU836owoJTH5_0m1yHw1req_9Xz4uWRc8sEU0bdO67PXVM6w23PqU_0n018HcS1Hkgz5fBajOCvxONGKiyplRKUCFRcioYg_JxvUDPElTsTFNV1VY8SLVA90JCM70TsWpKgVFm5I4f34ydloU4k4e3IOzArS4lPcG7CXXpKbWkBxQ47wAWd5OeanfUpV5WyPL1ukZGV6HLZBeloqVf4phB1Qq"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Home
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              68 Objects
            </p>
          </a>
          {/* Category 5: Gifts */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Artisanal gift coffret with wax sealed parchment card, mechanical pocket watch, and small hand-poured botanical wax candle."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBZ_jkxc-4UIksEMXHRB7f-A3cwv_6AX_mDCgUdpJ9K3gsoWBmPLPpifj9evpdHUcZ-Uvij3XooGE7hS2l74FhqAl7z2IO8oZ_XMBosgDAeYH2SU-a72TnteMi8KvHlyFlsfKfLTF2w4VWzPNlri7f8Lon-zgAs-gh1k3uKvHXno2XnWoSAoO7MxCGetnGr4SAPwyr7a2nZkHtcuE8n6LdMa8X4yh2g3wrGnQfx3x9yttmp3VGCoeD4"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Gifts
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              Custom Suites
            </p>
          </a>
          {/* Category 6: Limited Editions */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Limited numbered edition skeleton watch with exposed copper gears, blued screws, and custom engraved rotor."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDu118JqpzG3IMHPafrk9GZzioqIPu06nBsAwWpwX1tkArWRoXp728Qqp6AoTlvcx89rllD6uHw3l2hQ8GTG75q93aFMs35lTJgXFsGHGEvN-SAVaCFx315_WEpXoVUegfa_soyeIaUfVIxa3Xvb45e7vYiBjCMzxeTiL6qAmWjFWLsVBuMlMguWknbBfy8JfNReZwyiek5TrWyHAEzd1ORj7TZleRG1kFdOyE30E5eUPNM4KnKkoj-"} />
            </div>
            <h3 className={"font-label-md text-label-md text-secondary font-bold"}>
              Limited Editions
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              Numbered 1/50
            </p>
          </a>
          {/* Category 7: Under ₹5,000 */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Solid milled brass bookmark, textured leather card wallet, and hand-bound cotton rag notebook flatlay."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDsaEEsJz-e7ZoCR3EWs11np5SnTfPTSWC_wvzAWATGdbdIPlVr3miGdwUhBcPbyzFI_EIbz3q3pvUuwR-eazEFAbVe5s9MAHwD0GQx7Jm7i_pqQBeBll2UCvxeS-OsNSiofb5PQqvkKb0IbsxmrHDibcBNggjOD9rSOCpSlVdPhEex7TLG5Y2XmKvI1k-sR1vKtN5OM748m5BNaQlWtKeFU99Sz5MYQXnjqu4-n_Ax3WMxhuGbJuqX"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              Under ₹5,000
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              Accessible Craft
            </p>
          </a>
          {/* Category 8: New Arrivals */}
          <a className={"group flex-shrink-0 w-44 sm:w-48 bg-surface-container-low rounded-xl p-3 hover:bg-surface-container transition-all text-center"} href={"#"}>
            <div className={"w-full h-36 rounded-t-full rounded-b-lg overflow-hidden bg-surface-container mb-3 shadow-inner"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Unpacking an artisanal shipment showing hand-stamped tags, raw linen packaging, and newly forged titanium watch case."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAh4rNVW1ZxvqlI6u6auzMwZ66VLLVoNmFZLTyZuBhtca6kvU_KmYudcFMvyWY3VlsnLTwH9eJvvkmS_Fm4npTA8oAIoJly_4ml6UER3B_RPxr5gBqnKdLf7c0spghTUffnQRi7a9Pthhi6Ai3JZeH5PVt7MYuoRn34tWilfjOUMRKPf-fTBl8htQ317K3RoLeN3PA5Fe7FdTBn9sjFe-Tc5S8iaFSoS3JOGypX5c-mtNAy-et-xIA4"} />
            </div>
            <h3 className={"font-label-md text-label-md text-on-surface"}>
              New Arrivals
            </h3>
            <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              Weekly Drops
            </p>
          </a>
        </div>
      </div>
    </section>
</>
  );
}
