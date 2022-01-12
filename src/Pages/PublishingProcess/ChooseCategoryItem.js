import React from "react";
import { Link } from "react-router-dom";
import TextLine from "../../Components/TextLine";

function ChooseCategoryItem ({category}) {

    return (
        <Link className="link choose-category-item-test" to={category.url}>
            <div data-testid="category-item" className="p-0 ProductPage-circle-content fd-col">
                <div className="txt-blue bg-white row jc-center HomePage-border-circle ChooseCategoryItem-conteiner-img">
                    <img src={category.icon} alt="productos" width="50"></img>
                </div>
                <TextLine className="txt-white HomePage-fs-14" text={category.name}/>
            </div>
        </Link>
    )
}



export default ChooseCategoryItem