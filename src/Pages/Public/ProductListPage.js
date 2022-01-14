import WebsiteLayout from '../../Layouts/WebsiteLayout'
import Paginator from './ProductList/Components/Paginator'
import { InfoIcon, ArrowDownAndUpIcon, FilterIcon } from './ProductList/svgIcon'
import RoundedProductItem from './ProductList/Components/RoundedProductItem'
import SwitchSmall from './ProductList/Components/SwitchSmall'
import useFetch from '../../hooks/useFetch'
import { getItems } from '../../requests/products'

function ProductList() {

  const {data: items} = useFetch(getItems)

  const publicationsItems = items?.items.map(
    data => <RoundedProductItem key={data.id} data={data} />
  )

  let publicationsItemsCopy = []
  if (publicationsItems) {
    publicationsItemsCopy = [...publicationsItems]
  }

  const halfLengthPublicationItems = (publicationsItems?.length / 2)
  const leftColumnProduct = publicationsItems?.splice(0, halfLengthPublicationItems)
  const rightColumnProduct = publicationsItemsCopy?.splice(halfLengthPublicationItems, halfLengthPublicationItems)

  const orderText = "Ordenar"
  const arriveTodayText = "Llegan hoy"
  const filterText = "Filtrar"

  const titleSectionText = "Black Friday: Todo para Jardin y Aire Libre"

  const shippingNoticeText = "El envío gratis está sujeto al peso, precio y la distancia del envío."

  return (
    <WebsiteLayout>
      <div className="row padding-none ProductPage-bg-light-grey fd-col">

        <div className="bg-white row jc-space-around OffersPage-m-bottom">

          <div className="col padding-none d-flex jc-center ai-center OffersPage-txt-s grow-1">
            <span className="OffersPage-m-right"><ArrowDownAndUpIcon /></span>
            <p className="txt-blue">{ orderText }</p>
          </div>

          <div className="col padding-none d-flex jc-center ai-center OffersPage-txt-s br-left br-right grow-1">
            <SwitchSmall text={arriveTodayText}/>
          </div>

          <div className="col padding-none d-flex jc-center ai-center OffersPage-txt-s grow-1">
            <span className="OffersPage-m-right"><FilterIcon /></span>
            <p className="txt-blue">{ filterText }</p>
          </div>

        </div>

        <div className="row">
          <div className="col padding-none">
            <p className="txt-bold">{ titleSectionText }</p>
          </div>
        </div>

        <div className="row SearchHelp-ai-start padding-none">
          <div data-testid="product-list-left" className="col padding-none Footer-col-6 OffersPage-p-0-left OffersPage-p-0-right">
            { leftColumnProduct }
          </div>
          <div data-testid="product-list-right" className="col padding-none Footer-col-6 OffersPage-p-0-right">
            { rightColumnProduct }
          </div>
        </div>

        <div className="row ">
          <div className="bg-white rounded row d-flex ai-start">
            <div className="col padding-none OffersPage-m-left ">
              <InfoIcon />
            </div>
            <div className="col padding-none ConfirmClassification-m-3-left">
              <p className="ProductList-txt-light-grey OffersPage-txt-s">{ shippingNoticeText }</p>
            </div>
          </div>
        </div>

        <Paginator
          currentPage={items?.meta.currentPage}
          nextUrl={items?.links.next}
          prevUrl={items?.links.previous}
          lastPage={items?.links.last}
          classNameText={"txt-blue"}
          classNameNumber={"ProductPage-bg-grey ProductList-txt-light-grey"}
        />
      </div>
    </WebsiteLayout>
  )
}

export default ProductList
