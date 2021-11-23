import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";
import Icon from "../../../../Components/Icon"
import TextTag from "../../../../Components/TextTag"



function ProductHeader({item, store}) {
    let subtitle = item.condition + " | " + item.quantitySales + " vendidos"
    let reviews = item.reviews + " opiniones"
    let por = "Por "
    let textTag = "MÁS VENDIDO"
    let category = item.ranking + "° en " + item.category
    let urlStore = "/profile/mall-360"
    let urlCategory = "/category/bicicletas"


    return (
        <div>
            <div className="row navbar-p-base">
                <div className="col padding-none m-left-0">
                    <TextLine text={subtitle} className={"ProductPage-txt-light-grey ProductPage-fs-12"}/>
                </div>
            </div>
            <div className="row navbar-p-base ProductPage-p-bottom-0 ProductPage-p-top-0">
                <div className="col padding-none m-left-0">
                        <TextLine text={item.title} className={"txt-black ProductPage-fs-16"}/>
                </div>
            </div>
            <div className="row padding-none">
                <div className="col padding-none m-left-3">
                    {store.oficialStore &&
                        <span className="ProductPage-d-flex ProductPage-fs-12">
                            <span className="">
                                <TextLine text={por} className={"ProductPage-txt-light-grey"}/>
                            </span>
                            <TextLink  url={urlStore} className={"txt-blue"} children={store.nameStore}/>
                        </span>
                    }   
                    
                </div>
            </div>
            <div className="row navbar-p-base">
                <div className="col padding-none m-left-0">
                    <div className="ProductPage-d-flex  ProductPage-fs-14"> 
                        <span className="txt-blue m-right-0 ProductPage-fs-10">
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="half-star"/>
                        </span>
                        <span>
                            <TextLine text={reviews} className={"ProductPage-txt-light-grey"}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row navbar-p-base ProductPage-p-top-0">
                <div className="col padding-none m-left-0">
                    {item.bestSellers &&
                        <span>
                            <span className="m-right-0"> 
                                <TextTag text={textTag} txtColor="txt-white" bgColor="ProductPage-bg-orange"/>
                            </span> 
                            <TextLink  url={urlCategory} className={"txt-blue ProductPage-fs-12"} children={category}/>
                        </span>
                    }
                </div>
            </div>

        </div>
    );
}

export default ProductHeader;