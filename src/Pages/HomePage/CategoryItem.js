import { Link } from 'react-router-dom'
import Icon from '../../Components/Icon'
import TextLine from '../../Components/TextLine'

function CategoryItem({category}) {
    return (
        <Link className={"link"} to={"/login"}>
            <div className="p-0 bg-white rounded HomePage-category-item">
                <div className="txt-blue row HomePage-jc-center m-top-3 HomePage-fs-48">
                    <Icon icon={category.icon}/>
                </div>
                <TextLine className="txt-grey HomePage-fs-14" text={category.name}/>
            </div>
        </Link>
    )
}

export default CategoryItem