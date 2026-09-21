import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant4Skeleton from "./Variant4Skeleton.jsx";
import HEROASYMMETRICSPLITCURVECOMPOSITION from "./HEROASYMMETRICSPLITCURVECOMPOSITION.jsx";
import CATEGORYMOSAICASYMMETRIC from "./CATEGORYMOSAICASYMMETRIC.jsx";
import NEWARRIVALSMIXEDHORIZONTALRAIL from "./NEWARRIVALSMIXEDHORIZONTALRAIL.jsx";
import ValuePropositionMarquee from "../../components/layout/ValuePropositionMarquee.jsx";
import DUALFEATURESPOTLIGHTSIDEA from "./DUALFEATURESPOTLIGHTSIDEA.jsx";
import SHOPBYOCCASIONINTERACTIVEGALLERY from "./SHOPBYOCCASIONINTERACTIVEGALLERY.jsx";
import BESTSELLERSTABBEDCAROUSELWITHSEAMLESS from "./BESTSELLERSTABBEDCAROUSELWITHSEAMLESS.jsx";
import MAKERSTORIESWORKSHOPSCENESDOCUMENTARY from "./MAKERSTORIESWORKSHOPSCENESDOCUMENTARY.jsx";
import SHOPTHELOOKINTERACTIVESCENOGRAPHY from "./SHOPTHELOOKINTERACTIVESCENOGRAPHY.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import PRODUCTINTEGRITYTRIPTYCH from "./PRODUCTINTEGRITYTRIPTYCH.jsx";

export default function Variant4() {
  return (
    <div className="relative">
      <SkipLink />
      <Header />
      <PageLoader skeleton={<Variant4Skeleton />} duration={1500}>
        <main id="main-content" className="w-full pt-28 bg-surface">
          <HEROASYMMETRICSPLITCURVECOMPOSITION />
          <CATEGORYMOSAICASYMMETRIC />
          <NEWARRIVALSMIXEDHORIZONTALRAIL />
          <ValuePropositionMarquee className="my-6" />
          <DUALFEATURESPOTLIGHTSIDEA />
          <SHOPBYOCCASIONINTERACTIVEGALLERY />
          <BESTSELLERSTABBEDCAROUSELWITHSEAMLESS />
          <MAKERSTORIESWORKSHOPSCENESDOCUMENTARY />
          <SHOPTHELOOKINTERACTIVESCENOGRAPHY />
          <ProductDiscoveryHub />
          <PRODUCTINTEGRITYTRIPTYCH />
        </main>
        <Footer />
      </PageLoader>
    </div>
  );
}
