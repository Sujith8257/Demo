import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function RecentlyViewed(){
  return (
    <>
      <section className="mt-space-xl mb-space-lg">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
            {"RECENTLY EXAMINED IN ATELIER VAULT"}
          </span>
          <a className="font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-primary font-bold flex items-center gap-1" href="#">
            {"\n            Browse All Vault Archives\n            "}
            <span className="material-symbols-outlined text-[15px]">
              {"arrow_forward"}
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm hover:shadow-sm transition-shadow">
            <div className="w-14 h-14 bg-surface-container-low rounded-DEFAULT overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" data-alt="Minimalist dress watch with white enamel dial and blue Breguet hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI4CqlZ8jcP4A8kAwDkygpVmsJkUwna2_xuVxw0C1l76tgnq-hicJNSFT_zSLwJlv8lbgxRJ96t8bs5DIErwQOhyJHzPB1ywi0R0ngslhdgIIWmY3KG5jQyqv2yYX4TeCMgkN5T9ZgayCNDq4N30b8zF5jxQ7jDPCCoFQ16QnUEt6mOdreGtUwu42R03CC1BoDT0jDRaCexdaIZaM0--lpeZcTtb9sqT7xzcrugHu5oHoxvmdggU22" />
            </div>
            <div className="truncate">
              <h5 className="font-label-md text-label-md text-primary font-bold truncate">
                {"Meridian Monopusher"}
              </h5>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                {"₹28,500"}
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm hover:shadow-sm transition-shadow">
            <div className="w-14 h-14 bg-surface-container-low rounded-DEFAULT overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" data-alt="Automatic diver watch with ceramic black bezel and orange seconds hand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzxTf1NhDr-BU0_BqxIZFV-mAa1AR-2w6swrleeDawyLsexfqgP60aVq767xrsaz41jP9T6_3l_bbZFbrz508g85PY6ZZw_tk7nsl2UfHQn7dwyS9T7ttYbygdcCTz-LiqJJldPw824NdcBF4lyODh5IBjsdhg--4R30buPY4UYC0wNzl4S9gL8Kbw1tPS_6yBc17xmYX0T6DodbwiiVKwWRA_eoUXB6rTBAdQ8spoxfGwsIaqIj9Z" />
            </div>
            <div className="truncate">
              <h5 className="font-label-md text-label-md text-primary font-bold truncate">
                {"Sub-Mariner 300m"}
              </h5>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                {"₹19,200"}
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm hover:shadow-sm transition-shadow">
            <div className="w-14 h-14 bg-surface-container-low rounded-DEFAULT overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" data-alt="Skeleton tourbillon wristwatch showing exposed gear train in rose gold finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABwp2mz9V3doZ6srKcNisMNyZyV9Rt1NaKbNIMtQRgHEd2n-m_OPY_2_Rhs4xadxbKNFovjoC28rOc0hL_GaUZD0yoQVkJGYNMuKQp7vrB67olxyMCUUDHndiHktJ2GZvy0CE-OFcnZSx4dI99SVY5WeQbR0qvl3P53iItgjQpp57CSVXhRRLb7w92CuGhxjKYy-uYSE2iCsu5iWW2V4ibSPSt6KxDs2v1HzL6_UmTA87bwM1fUcEQ" />
            </div>
            <div className="truncate">
              <h5 className="font-label-md text-label-md text-primary font-bold truncate">
                {"Aero Skeleton T1"}
              </h5>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                {"₹64,000"}
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm hover:shadow-sm transition-shadow">
            <div className="w-14 h-14 bg-surface-container-low rounded-DEFAULT overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" data-alt="Classic square tank style dress watch in stainless steel with roman numerals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMfZocnO9TEAf9ltsq-MFnFGDnxu5u0fKRFXWX5DfPnOqGbvAvhAiwC5lk58nZ5wXsoxWy-oswEL_QjVw6XzQRCM9_kllwkgNXqJEBvRqwV1jpmrCtRGTm1sUdrtxj5D014XCy8JvOe6-X8FPBNAO4nIGXIC9WrHr2y9HDMQFDov0g3_YabdUUNGpqClqkhuElWgwpD7e3WZOfizHwdviN1KFx5TOMfn2uGY2UZrNU8TOmxuDjzXUL" />
            </div>
            <div className="truncate">
              <h5 className="font-label-md text-label-md text-primary font-bold truncate">
                {"Carré Classique Tank"}
              </h5>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                {"₹16,400"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
