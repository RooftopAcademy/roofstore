import WebsiteLayout from "../../../Layouts/WebsiteLayout";
import TextLine from "../../../Components/TextLine";
import InteractionProductItem from "../../../Components/InteractionProductItem";
import useFetch from "../../../hooks/useFetch";
import { getFavourites } from "../../../requests/products";

function FavouritesPage() {
    const {data: FavouriteList} = useFetch(getFavourites)
    
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
                {FavouriteList?.map(product => {
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
