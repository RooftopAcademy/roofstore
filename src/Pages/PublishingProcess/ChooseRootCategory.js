import React from "react";
import Icon from "../../Components/Icon";
import TextLine from "../../Components/TextLine";
import TextLink from "../../Components/TextLink";
import ChooseCategoryItem from "./ChooseCategoryItem";

const DataCategories = [
    {name: 'Productos', icon: 'http://localhost:3000/productos.svg', url: '/'},
    {name: 'Vehículos', icon: 'http://localhost:3000/vehiculos.svg', url: '/'},
    {name: 'Inmuebles', icon: 'http://localhost:3000/inmuebles.svg', url: '/'},
    {name: 'Servicios', icon: 'http://localhost:3000/servicios.svg', url: '/'},
]

function ChooseRootCategory () {

    const categories = DataCategories
    
    return (
        <div className="container bg-primary vh-100 d-flex fd-col ai-center jc-center">
            <TextLink url="/">
                <Icon icon="arrow-left" className="txt-white ChooseCategoryItem-arrow-left p-0 fz-l"/>
            </TextLink>
            <div className="row jc-center">
                <div className="col">
                    <TextLine text="¿Que queres publicar?" className="txt-white" />
                    <div className="d-flex fw-wrap justify-content-sb m-top-5">
                        {categories.map((category, index) => {
                            return (
                                <div className="OffersPage-6-col">
                                    <ChooseCategoryItem category={category} key={index} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRootCategory