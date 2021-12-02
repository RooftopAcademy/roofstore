import Icon from '../../Components/Icon'
import TextLink from '../../Components/TextLink'

function CategoriesPageItem ({categoryData}) {
  return(
      <TextLink className="d-flex w-100 p-0 br-btm justify-content-sb" url="/">
        {categoryData.category}
        <Icon icon="arrow-right"/>
    </TextLink>
  )
}

export default CategoriesPageItem