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
            <ul>
                {FavouriteList.map(product => {
                    return (
                        <li className="br-btm"> 
                            <InteractionProductItem
                            key={product.id}
                            item = {product}
                            favButton = {false}
                            />
                        </li>
                    )   
                })}
            </ul>
        </div>
    </WebsiteLayout>
  )
}

export default FavouritesPage;
