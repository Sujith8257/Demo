import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { AnimatePresence, motion } from "motion/react";
export default function EmptyCartModal(){
  const {emptyModal}=useCart();
  return (
    <>
      <AnimatePresence>{emptyModal && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] bg-primary-container/60 backdrop-blur-sm flex items-center justify-center p-space-md" id="empty-cart-modal" role="dialog" aria-modal="true" aria-label="Preview empty cart">
        <div className="bg-surface-container-lowest max-w-md w-full rounded-xl p-space-xl shadow-xl flex flex-col items-center text-center relative">
          <button className="absolute top-4 right-4 text-outline hover:text-on-surface" data-cart-action="empty-preview" type="button">
            <span className="material-symbols-outlined">
              {"close"}
            </span>
          </button>
          <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-outline mb-space-md">
            <span className="material-symbols-outlined text-[32px]">
              {"timelapse"}
            </span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-1">
            {"CHRONO QUEUE EMPTY"}
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-bold">
            {"No Instruments Synchronized"}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-lg">
            {"\n        Your active field cart holds no active references. Explore our certified sports horology and smartwatch catalog to calibrate your loadout.\n      "}
          </p>
          <div className="flex flex-col w-full gap-space-xs">
            <a className="w-full bg-primary-container text-on-primary py-space-sm rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider text-center font-bold" data-path="sports" href="#">
              {"\n          Explore Multisport Instruments\n        "}
            </a>
            <a className="w-full bg-surface-container text-on-surface py-space-sm rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider text-center font-bold hover:bg-surface-container-high transition-colors" data-path="luxury" href="#">
              {"\n          Browse Haute Horlogerie\n        "}
            </a>
          </div>
        </div>
      </motion.div>}</AnimatePresence>
    </>
  );
}
