import Variant1 from "./pages/variant1/Variant1.jsx";
import Variant2 from "./pages/variant2/Variant2.jsx";
import Variant3 from "./pages/variant3/Variant3.jsx";
import Variant4 from "./pages/variant4/Variant4.jsx";
import Variant5 from "./pages/variant5/Variant5.jsx";
import VariantTaskbar from "./components/layout/VariantTaskbar.jsx";

const variants = {
  "1": Variant1,
  "2": Variant2,
  "3": Variant3,
  "4": Variant4,
  "5": Variant5,
};

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "5";
  const Page = variants[variant] || Variant5;
  return (
    <>
      <Page />
      <VariantTaskbar />
    </>
  );
}
