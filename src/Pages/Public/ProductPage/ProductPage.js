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
import { MOCK_CATEGORIES, MOCK_PRODUCTOS_PROMOCIONADOS, MOCK_PRODUCTOS_QUE_TBM_COMPRARON } from './mockData'

function ProductPage() {
    
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
            <ProductReviewsBlock />
            <div className="row padding-none ProductPage-bg-grey">
              <div className="col ProductPage-w-100">
                <p>
                  Publicación <span className="txt-bold">#1109087736</span> |{" "}
                  <span className="link-color">Denunciar</span>
                </p>

                {/* Productos promocionados */}
                <FeaturedProductsBlock
                  title="Productos promocionados"
                  products={MOCK_PRODUCTOS_PROMOCIONADOS}
                />
                {/* Quienes compraron este producto también compraron */}
                <FeaturedProductsBlock
                  title="Quienes compraron este producto también compraron"
                  products={MOCK_PRODUCTOS_QUE_TBM_COMPRARON}
                />
                {/* Banner Publicitario */}
                <AProductBanner />
                {/* End banner publicitario */}
                <BreadcrumbBlock categories={MOCK_CATEGORIES}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default ProductPage;
