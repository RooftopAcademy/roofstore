import TextLine from "../../../../Components/TextLine";
import Spec from "../Component/Spec";
import SeeMore from "../Component/SeeMore";

let title = "Características del producto";
let mensaje = "Ver más características";

const specific = [
    {
        id: 1,
        icon: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/rodado_bicy.svg",
        category: "Rodado: ",
        value: "29",
    },
    {
        id: 2,
        icon: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/tipo_de_bicicleta_bicy.svg",
        category: "Tipo de bicicleta: ",
        value: "Mountain Bike",
    },
    {
        id: 3,
        icon: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/grupo_etario_bicy.svg",
        category: "Grupo etario: ",
        value: "Adultos",
    },
    {
        id: 4,
        icon: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/tipo_de_bicicleta_bicy.svg",
        category: "Cantidad de velocidades: ",
        value: "21",
    },
    {
        id: 5,
        icon: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/tamano_del_cuadro_bicy.svg",
        category: "Tamaño de cuadro: ",
        value: "M",
    },
];

function ProductHighlightedSpecs({product}) {
    return (
        <div className="container br-top">
            <div className="row padding-none">
                <div className="col">
                    <TextLine
                        text={title}
                        className={"txt-black ProductPage-font-size-large"}
                    />
                </div>
            </div>

            {specific.map((spec) => {
                return <Spec item={spec} />;
            })}
            
            <SeeMore message={mensaje} />
        </div>
    );
}

export default ProductHighlightedSpecs;