import Icon from '../../Components/Icon'
import TextLink from '../../Components/TextLink'
import { Category } from '../../types/categories'

function CategoriesPageItem (props : {categoryData : Category}): JSX.Element {
  const {categoryData} = props
  return(
      <TextLink className="txt-black d-flex w-100 p-0 br-btm justify-content-sb ai-center" url="/">
        {categoryData.category}
        <Icon icon="arrow-right"/>
    </TextLink>
  )
}

export default CategoriesPageItem