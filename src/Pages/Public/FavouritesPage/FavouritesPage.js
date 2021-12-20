import WebsiteLayout from "../../../Layouts/WebsiteLayout";
import TextLine from "../../../Components/TextLine";
import InteractionProductItem from "../../../Components/InteractionProductItem";
import FavouriteList from "./favouritesData"

function FavouritesPage() {
    let title = "Favoritos"
  return (
    
    <WebsiteLayout>
        <div className="container bg-light-grey padding-none">
            <div className="row">
                <div className="col">
                <TextLine text={title} className={"ProductPage-fs-24"}/>
                </div>
            </div>

            {FavouriteList.map(product => {
                        return (
                            <InteractionProductItem
                                key={product.id}
                                item = {product}
                                favButton = {false}
                            />
                        )
                    })}
        </div>
    </WebsiteLayout>
  )
}

export default FavouritesPage;
