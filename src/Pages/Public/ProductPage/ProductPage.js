import WebsiteLayout from "../../../Layouts/WebsiteLayout";
import NavbarAdress from "./Component/NavbarAdress";
import product from "./dataProduct";
import store from "./dataStore";
import ProductHeader from "./Block/ProductHeader";
import ProductsVariations from "./Block/ProductVariations";
import ProductPrice from "./Block/ProductPrice";
import ProductBenefit from "./Block/ProductBenefit";
import ProductDescription from "./Block/ProductDescription";
import ProductHighlightedSpecs from "./Block/ProductHighlightedSpecs";
import ProductStock from "./Block/ProductStock";
import ProductShare from "./Block/ProductShare";
import ProductInfoStore from "./Block/ProductInfoStore";
import ProductAction from "./Block/ProductAction";
import ProductCarrousel from "./Block/ProductCarrousel";
import BreadcrumbBlock from "./Block/BreadcrumbBlock"
import FeaturedProductsBlock from "./Block/FeaturedProductsBlock"
import GarantiaBlock from "./Block/GarantiaBlock"
import PaymentBlock from "./Block/PaymentBlock"
import ProductReviewsBlock from "./Block/ProductReviewsBlock"
import QuestionAndAnswerBlock from "./Block/QuestionAndAnswerBlock"
import AProductBanner from "./Component/AProductBanner"
import { MOCK_PRODUCTOS_PROMOCIONADOS, MOCK_PRODUCTOS_QUE_TBM_COMPRARON, MOCK_PROMEDY } from './mockData'

function ProductPage() {

  const publicationText = 'Publicación'
  const publicationNumber = 1109087736
  const reportText = 'Denunciar'

  const promotedProductsTitle = 'Productos promocionados'
  const featuredProductsTitle = 'Quienes compraron este producto también compraron'

  return (
    <WebsiteLayout>
      <div className="container padding-none">
        <NavbarAdress />
        <ProductHeader item={product} store={store} />
        <ProductCarrousel item={product} />

        <ProductsVariations item={product} />

        <ProductPrice item={product} />

        <ProductBenefit item={product} />

        <ProductStock item={product} />
        <ProductAction item={product} />

        <ProductShare />

        <ProductInfoStore store={store} />

        <ProductHighlightedSpecs item={product} />

        <ProductDescription item={product} />

        <div className="row padding-none">
          <div className="ProductPage-w-100 padding-none">
            <GarantiaBlock />
            <PaymentBlock />
            <QuestionAndAnswerBlock />
            <ProductReviewsBlock data={MOCK_PROMEDY} />
            <div className="row padding-none ProductPage-bg-grey">
              <div className="col ProductPage-w-100">
                <p>
                  {publicationText + ' '}
                  <span className="txt-bold">{'#' + publicationNumber}</span>
                  {" | "}
                  <span className="link-color">{reportText}</span>{}
                </p>

                {/* Productos promocionados */}
                <FeaturedProductsBlock
                  title={promotedProductsTitle}
                  products={MOCK_PRODUCTOS_PROMOCIONADOS}
                />
                {/* Quienes compraron este producto también compraron */}
                <FeaturedProductsBlock
                  title={featuredProductsTitle}
                  products={MOCK_PRODUCTOS_QUE_TBM_COMPRARON}
                />
                {/* Banner Publicitario */}
                <AProductBanner />
                {/* End banner publicitario */}
                <BreadcrumbBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default ProductPage;
