import TextLine from "../../../../Components/TextLine";
let title = "Descripción"

function ProductDescription({item}) {
    return (
        <div className=" br-top">
            <div className="row padding-none">
                <div className="col">
                    <TextLine text={title} className={"txt-black ProductPage-fs-18"}/>
                </div>
            </div>
            <div className="row padding-none">
                <div className="col padding-None">
                    {item.description}
                </div>
            </div>
        </div>
    );
}

export default ProductDescription