import React, { createContext, useContext, useState } from "react";

const CheckoutFlowContext = createContext(null);

// Steps: address → payment → review → processing → success
export function CheckoutFlowProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("address"); // address | payment | review | processing | success

  const [selectedAddress, setSelectedAddress] = useState({
    id: "addr-1",
    name: "Sudeep Sharma",
    phone: "+91 98765 43210",
    line1: "104, Horizon Villa, Road No. 36",
    line2: "Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500033",
    type: "Home",
    default: true,
  });

  const [savedAddresses] = useState([
    {
      id: "addr-1",
      name: "Sudeep Sharma",
      phone: "+91 98765 43210",
      line1: "104, Horizon Villa, Road No. 36",
      line2: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500033",
      type: "Home",
      default: true,
    },
    {
      id: "addr-2",
      name: "Sudeep Sharma (Office)",
      phone: "+91 98765 43210",
      line1: "Level 7, Skyline Tower, Madhapur",
      line2: "HITEC City",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500081",
      type: "Work",
      default: false,
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [upiApp, setUpiApp] = useState("gpay");
  const [upiId, setUpiId] = useState("");

  const openFlow = () => {
    setStep("address");
    setIsOpen(true);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
  };

  const closeFlow = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    // Reset to address step after delay
    setTimeout(() => setStep("address"), 300);
  };

  const goToPayment = () => setStep("payment");
  const goToReview = () => setStep("review");

  const startPayment = () => {
    setStep("processing");
    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
    }, 2500);
  };

  const resetFlow = () => {
    setStep("address");
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <CheckoutFlowContext.Provider
      value={{
        isOpen,
        step,
        savedAddresses,
        selectedAddress,
        setSelectedAddress,
        selectedPayment,
        setSelectedPayment,
        upiApp,
        setUpiApp,
        upiId,
        setUpiId,
        openFlow,
        closeFlow,
        goToPayment,
        goToReview,
        startPayment,
        resetFlow,
      }}
    >
      {children}
    </CheckoutFlowContext.Provider>
  );
}

export function useCheckoutFlow() {
  const ctx = useContext(CheckoutFlowContext);
  if (!ctx) throw new Error("CheckoutFlowProvider required");
  return ctx;
}
