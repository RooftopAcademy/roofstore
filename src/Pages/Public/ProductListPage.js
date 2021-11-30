import WebsiteLayout from '../../Layouts/WebsiteLayout'
import Paginator from './ProductList/Components/Paginator'
import { InfoIcon } from './ProductList/svgIcon'
import RoundedProductItem from './ProductList/Components/RoundedProductItem'
import productListData from './ProductList/Mocks/productListData'

function ProductList() {

  // const urlSearchParams = new URLSearchParams(window.location.search)
  // const currentPage = Number(Object.fromEntries(urlSearchParams.entries()).page) || 1

  const publicationsItems = productListData.map(
    data => <RoundedProductItem key={data.id} data={data} />
  )
  const publicationsItemsCopy = [...publicationsItems]

  const halfLengthPublicationItems = (publicationsItems.length / 2)
  const leftColumnProduct = publicationsItems.splice(0, halfLengthPublicationItems)
  const rightColumnProduct = publicationsItemsCopy.splice(halfLengthPublicationItems, halfLengthPublicationItems)

  return (
    <WebsiteLayout>
      <div className="container padding-none ProductPage-bg-light-grey">
        <div className="row">
          <div className="col padding-none">
            <p>Ordenar</p>
          </div>
          <div className="col padding-none">
            <p>Llegan mañana</p>
          </div>
          <div className="col padding-none">
            <p>Filtrar</p>
          </div>
        </div>
        <div className="row">
          <div className="col padding-none">
            <p>Black Friday: Todo para Jardin y Aire Libre</p>
          </div>
        </div>

        <div className="row SearchHelp-ai-start">
          <div className="col padding-none Footer-col-6">
            { leftColumnProduct }
          </div>
          <div className="col padding-none Footer-col-6">
          { rightColumnProduct }
          </div>
          
        </div>

        <div className="row ">
          <div className="row bg-white rounded d-flex ai-start">
            <div className="col padding-none OffersPage-m-left ">
              <InfoIcon />
            </div>
            <div className="col padding-none ConfirmClassification-m-3-left">
              <p className="ProductList-txt-light-grey OffersPage-txt-s">El envío gratis está sujeto al peso, precio y la distancia del envío.</p>
            </div>
          </div>
        </div>

        <Paginator
          currentPage={1}
          nextUrl={'/'}
          prevUrl={'/'}
          lastPage={100}
          classNameText={'txt-blue'}
          classNameNumber={'ProductPage-bg-grey ProductList-txt-light-grey '}
        />
      </div>
    </WebsiteLayout>
  )
}

export default ProductList