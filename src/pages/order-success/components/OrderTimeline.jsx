import React from "react";
import { FiCheckCircle, FiPackage, FiTruck, FiHome } from "react-icons/fi";

const STEPS = [
  { icon: FiCheckCircle, label: "Order Confirmed",    sub: "Your order has been placed"      },
  { icon: FiPackage,     label: "Atelier Inspection", sub: "Quality check in progress"       },
  { icon: FiTruck,       label: "Out for Delivery",   sub: "Expected 1 Oct 2026"             },
  { icon: FiHome,        label: "Delivered",          sub: "Awaiting delivery"               },
];

export default function OrderTimeline({ activeStep = 1 }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 w-full">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const done    = i < activeStep;
        const current = i === activeStep;
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <div className={`hidden sm:block flex-1 h-0.5 ${done ? "bg-[#34745F]" : "bg-gray-200"}`} />
            )}
            <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-1 sm:min-w-[80px] sm:text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                done    ? "bg-[#34745F] text-white" :
                current ? "bg-[#123B3A] text-white ring-4 ring-[#DDE9E4]" :
                          "bg-gray-100 text-gray-400"
              }`}>
                <Icon className="text-sm" />
              </div>
              <div>
                <p className={`text-xs font-bold ${done || current ? "text-[#171B1B]" : "text-gray-400"}`}>{step.label}</p>
                <p className="text-[10px] text-[#707776]">{step.sub}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
