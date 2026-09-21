import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant3Skeleton from "./Variant3Skeleton.jsx";
import HEROMIDNIGHTHOROLOGYCORE from "./HEROMIDNIGHTHOROLOGYCORE.jsx";
import FLOATINGCURVEDSEARCHDOCKINTEGRATION from "./FLOATINGCURVEDSEARCHDOCKINTEGRATION.jsx";
import BESTSELLERSBRIGHTCONTRASTDISCOVERY from "./BESTSELLERSBRIGHTCONTRASTDISCOVERY.jsx";
import ValuePropositionMarquee from "../../components/layout/ValuePropositionMarquee.jsx";
import COLLECTIONCAROUSELBENTOCHAPTERS from "./COLLECTIONCAROUSELBENTOCHAPTERS.jsx";
import MIDNIGHTCOLLECTIONDEEPNAVYEDITORIAL from "./MIDNIGHTCOLLECTIONDEEPNAVYEDITORIAL.jsx";
import ARTISANSTORYORGANICLEATHERSADDLERY from "./ARTISANSTORYORGANICLEATHERSADDLERY.jsx";
import LIMITEDRELEASEVAULTSCARCITYTICKER from "./LIMITEDRELEASEVAULTSCARCITYTICKER.jsx";
import FEATUREDMAKERSSTAGGEREDHORIZONTALVISUAL from "./FEATUREDMAKERSSTAGGEREDHORIZONTALVISUAL.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import CUSTOMERREVIEWSJOURNAL from "./CUSTOMERREVIEWSJOURNAL.jsx";

export default function Variant3() {
  return (
    <div className="relative">
      <SkipLink />
      <Header />
      <PageLoader skeleton={<Variant3Skeleton />} duration={1500}>
        <main id="main-content" className="w-full pt-28 bg-surface">
          <HEROMIDNIGHTHOROLOGYCORE />
          <FLOATINGCURVEDSEARCHDOCKINTEGRATION />
          <BESTSELLERSBRIGHTCONTRASTDISCOVERY />
          <ValuePropositionMarquee className="my-6" />
          <COLLECTIONCAROUSELBENTOCHAPTERS />
          <MIDNIGHTCOLLECTIONDEEPNAVYEDITORIAL />
          <ARTISANSTORYORGANICLEATHERSADDLERY />
          <LIMITEDRELEASEVAULTSCARCITYTICKER />
          <FEATUREDMAKERSSTAGGEREDHORIZONTALVISUAL />
          <ProductDiscoveryHub />
          <CUSTOMERREVIEWSJOURNAL />
        </main>
        <Footer />
      </PageLoader>
    </div>
  );
}
