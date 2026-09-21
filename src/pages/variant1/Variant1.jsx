import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant1Skeleton from "./Variant1Skeleton.jsx";
import HEROStrictSplitGridWith from "./HEROStrictSplitGridWith.jsx";
import ARCHITECTURALCATEGORYRAIL from "./ARCHITECTURALCATEGORYRAIL.jsx";
import SHOPTHEEDITDisciplined2 from "./SHOPTHEEDITDisciplined2.jsx";
import MOSTWANTEDPrecisionHorologyCards from "./MOSTWANTEDPrecisionHorologyCards.jsx";
import SUBTLEVALUEMARQUEE from "./SUBTLEVALUEMARQUEE.jsx";
import ASTERCOLLECTIONHorologicalDialArc from "./ASTERCOLLECTIONHorologicalDialArc.jsx";
import BESTSELLERSAsymmetrical4ColumnBento from "./BESTSELLERSAsymmetrical4ColumnBento.jsx";
import WATCHMATERIALSTRIPTYCHConnected3 from "./WATCHMATERIALSTRIPTYCHConnected3.jsx";
import SHOPBYBUDGETHorizontalPill from "./SHOPBYBUDGETHorizontalPill.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import ContinuousReviewsCarousel from "../../components/reviews/ContinuousReviewsCarousel.jsx";

export default function Variant1() {
  return (
    <div className="relative">
      <SkipLink />
      <Header />
      <PageLoader skeleton={<Variant1Skeleton />} duration={1500}>
        <main id="main-content" className="w-full pt-[92px] md:pt-[132px] bg-surface">
          <HEROStrictSplitGridWith />
          <ARCHITECTURALCATEGORYRAIL />
          <SHOPTHEEDITDisciplined2 />
          <MOSTWANTEDPrecisionHorologyCards />
          <SUBTLEVALUEMARQUEE />
          <ASTERCOLLECTIONHorologicalDialArc />
          <BESTSELLERSAsymmetrical4ColumnBento />
          <WATCHMATERIALSTRIPTYCHConnected3 />
          <SHOPBYBUDGETHorizontalPill />
          <ProductDiscoveryHub />
          <ContinuousReviewsCarousel />
        </main>
        <Footer />
      </PageLoader>
    </div>
  );
}
