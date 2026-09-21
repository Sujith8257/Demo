import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant2Skeleton from "./Variant2Skeleton.jsx";
import BRANDLOGOSInfiniteCarousel from "./BRANDLOGOSInfiniteCarousel.jsx";
import HEROSECTIONMonumentalCircularBezel from "./HEROSECTIONMonumentalCircularBezel.jsx";
import CATEGORYDISCOVERYCurvedImageEdge from "./CATEGORYDISCOVERYCurvedImageEdge.jsx";
import TRENDINGNOWHorologicalAndCraft from "./TRENDINGNOWHorologicalAndCraft.jsx";
import EDITORIALCOMPOSITIONAsymmetricBentoGrid from "./EDITORIALCOMPOSITIONAsymmetricBentoGrid.jsx";
import ValuePropositionMarquee from "../../components/layout/ValuePropositionMarquee.jsx";
import BESTSELLERSTABSCuratedFilterableCatalog from "./BESTSELLERSTABSCuratedFilterableCatalog.jsx";
import MADETOBEKEPTSweeping from "./MADETOBEKEPTSweeping.jsx";
import LIMITEDEDITIONSLowStockBadges from "./LIMITEDEDITIONSLowStockBadges.jsx";
import INTERACTIVELOOKBOOKLifestyleCompositionWith from "./INTERACTIVELOOKBOOKLifestyleCompositionWith.jsx";
import VALUEDEALSECTIONDeepBlue from "./VALUEDEALSECTIONDeepBlue.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import AMIHIVEJOURNALAsymmetric3Story from "./AMIHIVEJOURNALAsymmetric3Story.jsx";

export default function Variant2() {
  return (
    <div className="relative">
      <SkipLink />
      <Header />
      <PageLoader skeleton={<Variant2Skeleton />} duration={1500}>
        <main id="main-content" className="w-full pt-28 bg-surface">
          <HEROSECTIONMonumentalCircularBezel />
          <BRANDLOGOSInfiniteCarousel />
          <CATEGORYDISCOVERYCurvedImageEdge />
          <TRENDINGNOWHorologicalAndCraft />
          <EDITORIALCOMPOSITIONAsymmetricBentoGrid />
          <ValuePropositionMarquee className="my-6" />
          <BESTSELLERSTABSCuratedFilterableCatalog />
          <MADETOBEKEPTSweeping />
          <LIMITEDEDITIONSLowStockBadges />
          <INTERACTIVELOOKBOOKLifestyleCompositionWith />
          <VALUEDEALSECTIONDeepBlue />
          <ProductDiscoveryHub />
          <AMIHIVEJOURNALAsymmetric3Story />
        </main>
        <Footer />
      </PageLoader>
    </div>
  );
}
