import WebsiteLayout from "../../../Layouts/WebsiteLayout";
import NavbarAdress from "./Component/NavbarAdress";
import product from "./dataProduct";
import store from "./dataStore";
import ProductHeader from "./Block/ProductHeader";
import CarrouselProduct from "./Block/ProductCarrousel";
import ProductsVariations from "./Block/ProductVariations";
import ProductPrice from "./Block/ProductPrice";
import ProductBenefit from "./Block/ProductBenefit";
import ProductDescription from "./Block/ProductDescription";
import ProductHighlightedSpecs from "./Block/ProductHighlightedSpecs";
import ProductStock from "./Block/ProductStock";
import ProductShare from "./Block/ProductShare";
import ProductInfoStore from "./Block/ProductInfoStore";
import ProductAction from "./Block/ProductAction";

function ProductPage() {
  return (
    <WebsiteLayout>
        <div className="container padding-none">
            <NavbarAdress/>
            <ProductHeader
                item = {product}
                store = {store}
           />
            <CarrouselProduct
                item = {product}
            />

            <ProductsVariations
                item = {product}
            />

            <ProductPrice
                item = {product}
            />
            
            <ProductBenefit
                item = {product}
            />
            
            <ProductStock
                item = {product}
            />
            <ProductAction/>
            
            <ProductShare/>
            
            <ProductInfoStore
                store = {store}
                item = {product}
            />

            <ProductHighlightedSpecs
                item = {product}
            />

            <ProductDescription
                item = {product}
            />

        </div>
   
    </WebsiteLayout>
  );
}

export default ProductPage;
