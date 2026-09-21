import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant5Skeleton from "./Variant5Skeleton.jsx";
import HEROWITHSWEEPINGSTRAPRIBBON from "./HEROWITHSWEEPINGSTRAPRIBBON.jsx";
import TRENDINGSEARCHINTENTSCROLLERContinuous from "./TRENDINGSEARCHINTENTSCROLLERContinuous.jsx";
import CATEGORYDISCOVERYWITHDYNAMICCROPS from "./CATEGORYDISCOVERYWITHDYNAMICCROPS.jsx";
import CAMPAIGNCAROUSELCompactHighVelocity from "./CAMPAIGNCAROUSELCompactHighVelocity.jsx";
import BESTSELLERSHORIZONTALRAIL from "./BESTSELLERSHORIZONTALRAIL.jsx";
import SHOPBYCOLLECTIONAsymmetricEditorial from "./SHOPBYCOLLECTIONAsymmetricEditorial.jsx";
import VIDEOMOTIONSTORY from "./VIDEOMOTIONSTORY.jsx";
import SHOPTHELOOKPanoramicDesk from "./SHOPTHELOOKPanoramicDesk.jsx";
import VALUEMANIFESTOMARQUEEREPLACEDWITH from "./VALUEMANIFESTOMARQUEEREPLACEDWITH.jsx";
import ValuePropositionMarquee from "../../components/layout/ValuePropositionMarquee.jsx";
import ARTISANJOURNALRECENTLYVIEWED from "./ARTISANJOURNALRECENTLYVIEWED.jsx";

export default function Variant5() {
  return (
    <div className="relative">
      <SkipLink />
      <Header />
      <PageLoader skeleton={<Variant5Skeleton />} duration={1500}>
        <main id="main-content" className="w-full pt-28 bg-surface">
          <HEROWITHSWEEPINGSTRAPRIBBON />
          <TRENDINGSEARCHINTENTSCROLLERContinuous />
          <CATEGORYDISCOVERYWITHDYNAMICCROPS />
          <CAMPAIGNCAROUSELCompactHighVelocity />
          <BESTSELLERSHORIZONTALRAIL />
          <SHOPBYCOLLECTIONAsymmetricEditorial />
          <VIDEOMOTIONSTORY />
          <SHOPTHELOOKPanoramicDesk />
          <ValuePropositionMarquee className="my-6" />
          <VALUEMANIFESTOMARQUEEREPLACEDWITH />
          <ARTISANJOURNALRECENTLYVIEWED />
        </main>
        <Footer />
      </PageLoader>
    </div>
  );
}
