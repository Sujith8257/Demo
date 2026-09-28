import React, { lazy, Suspense, useState } from "react";
import "./styles/orderSuccess.css";

const DESIGNS = {
  1: lazy(() => import("./pages/design1/Design1.jsx")),
};

function readDesign() {
  const url = Number(new URLSearchParams(window.location.search).get("design"));
  if (DESIGNS[url]) return url;
  return 1;
}

export default function OrderSuccessPage() {
  const [active] = useState(readDesign);
  const Page = DESIGNS[active] || DESIGNS[1];

  return (
    <Suspense fallback={
      <div style={{ padding: "200px 24px", textAlign: "center", color: "#123B3A" }}>
        Loading order confirmation…
      </div>
    }>
      <Page />
    </Suspense>
  );
}
